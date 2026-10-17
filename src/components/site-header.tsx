"use client";

import { useState } from "react";
import Link from "next/link";

const links = [["Our home", "#about"], ["Stay", "#rooms"], ["The neighbourhood", "#explore"], ["Find us", "#contact"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Kashi Prangan home"><span className="wordmark-mark">क</span><span>Kashi <i>Prangan</i></span></a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
        <span className="sr-only">{open ? "Close" : "Open"} menu</span><span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      <nav id="main-navigation" className={`main-navigation${open ? " is-open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Say hello <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
