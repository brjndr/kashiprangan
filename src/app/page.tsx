import Image from "next/image";
import Link from "next/link";
import { property, imageSizes } from "@/data/property";
import { SiteHeader } from "@/components/site-header";

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@type": "LodgingBusiness", name: property.name, description: property.description, url: property.canonicalUrl, image: property.heroImage, telephone: property.phone, email: property.email, address: { "@type": "PostalAddress", streetAddress: property.address, addressLocality: "Varanasi", addressRegion: "Uttar Pradesh", addressCountry: "IN" } };
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <Image className="hero-image" src={property.heroImage} alt={property.heroAlt} fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content"><Eyebrow>A HOME IN THE HEART OF KASHI</Eyebrow><h1 id="hero-title">Come closer<br />to <em>the real Kashi.</em></h1><p>{property.tagline}</p><Link className="button button-light" href="#about">Discover our home <span aria-hidden="true">↓</span></Link></div>
        <div className="hero-caption"><span>VARANASI, INDIA</span><span>25°18′ N &nbsp; 83°00′ E</span></div>
        <div className="hero-stamp" aria-hidden="true"><span>काशी</span><small>THE CITY<br />OF LIGHT</small></div>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="intro-aside"><Eyebrow>A PLACE TO PAUSE</Eyebrow><span className="ornament" aria-hidden="true">✳</span></div>
        <div className="intro-copy"><h2>Some places stay<br />with you <em>forever.</em></h2><p className="intro-lead">Kashi is a feeling. A sunrise over the river. A thousand little lanes. The kindness of a cup of chai.</p><p>{property.name} is a warm, welcoming base from which to take it all in. Thoughtfully made for curious travellers, unhurried days and the feeling of being looked after.</p><Link className="text-link" href="#guest-info">A little more about staying here <span aria-hidden="true">↗</span></Link></div>
        <div className="intro-photo"><Image src="https://pd.w.org/2024/02/30365c0afafa216c6.78758847.jpg" alt="Sunrise over the Ganges at Dashashwamedh Ghat in Varanasi" fill sizes="(max-width: 800px) 100vw, 38vw" /><span>THE RIVER, AT ITS OWN PACE</span></div>
      </section>

      <section className="rooms section-wrap" id="rooms">
        <div className="section-heading"><div><Eyebrow>REST YOUR HEAD</Eyebrow><h2>Rooms with room<br />to <em>be yourself.</em></h2></div><p>Each space is a small invitation to slow down. Find your favourite corner, put your feet up and feel at home.</p></div>
        <div className="room-grid">{property.rooms.map((room, index) => <article className="room-card" key={room.name}><div className="room-image"><Image src={room.image} alt={room.alt} fill sizes={imageSizes} /><span className="room-number">0{index + 1}</span></div><div className="room-meta"><div><h3>{room.name}</h3><p>{room.detail}</p></div><span className="room-arrow" aria-hidden="true">↗</span></div></article>)}</div>
        <p className="small-note">Room names, images and details are placeholders. Add verified room information before publishing.</p>
      </section>

      <section className="quote-band"><div className="quote-inner"><span className="quote-mark" aria-hidden="true">“</span><blockquote>In Kashi, even the quiet moments<br />have a way of <em>speaking to you.</em></blockquote><p>A CITY THAT MEETS YOU WHERE YOU ARE</p></div></section>

      <section className="gallery section-wrap" aria-labelledby="gallery-title"><div className="section-heading"><div><Eyebrow>THE CITY, IN FRAGMENTS</Eyebrow><h2 id="gallery-title">A little glimpse<br />of <em>around here.</em></h2></div><p>There’s no one way to see Varanasi. Leave a little space in the day for the moments you didn’t plan.</p></div><div className="gallery-grid">{property.gallery.map((item, index) => <div className={`gallery-item gallery-item-${index + 1}`} key={item.image}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 720px) 50vw, 30vw" /></div>)}</div><p className="small-note">City images feature Varanasi ghats, its old lanes and the heritage site of Sarnath. Room photos remain illustrative placeholders. Sarnath photo by <a href="https://commons.wikimedia.org/wiki/File:Dhamekh_Stupa,_where_the_Buddha_gave_the_first_sermon_on_the_Four_Noble_Truths_and_the_Eightfold_Path_to_his_five_disciples,_Sarnath.jpg" target="_blank" rel="noreferrer">Ken Wieland</a>, licensed <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noreferrer">CC BY-SA 2.0</a>.</p></section>

      <section className="essentials section-wrap" id="explore"><div className="essentials-title"><Eyebrow>THE GOOD TO KNOW</Eyebrow><h2>Find your<br /><em>own rhythm.</em></h2><p>Stay in, head out, or ask us what’s nearby. Kashi has a way of making every day its own.</p><a className="text-link" href={`https://wa.me/${property.whatsapp}?text=${encodeURIComponent("Hello, I’d love to know more about Kashi Prangan.")}`} target="_blank" rel="noreferrer">Ask your host <span aria-hidden="true">↗</span></a></div><div className="essentials-list"><div className="amenities"><Eyebrow>AT HOME</Eyebrow><ul>{property.amenities.map((item) => <li key={item}><span aria-hidden="true">✳</span>{item}</li>)}</ul><p className="small-note">Please confirm the facilities offered before publishing.</p></div><div className="attractions"><Eyebrow>OUT AND ABOUT</Eyebrow>{property.attractions.map((place, index) => <div className="attraction" key={place.name}><span className="attraction-index">0{index + 1}</span><div><h3>{place.name}</h3><p>{place.note}</p></div><span className="distance">{place.distance}</span></div>)}</div></div></section>

      <section className="guest-info" id="guest-info"><div className="guest-info-inner"><div><Eyebrow>BEFORE YOU ARRIVE</Eyebrow><h2>A few things<br />to make it <em>easy.</em></h2></div><div className="guest-notes">{property.guestNotes.map((note, index) => <article key={note.title}><span className="attraction-index">0{index + 1}</span><div><h3>{note.title}</h3><p>{note.text}</p></div></article>)}</div></div></section>

      <section className="contact section-wrap" id="contact"><div className="contact-copy"><Eyebrow>WE’D LOVE TO HEAR FROM YOU</Eyebrow><h2>Your Kashi story<br />starts <em>with hello.</em></h2><p>Questions about the home or the city? Drop us a note. We’d be happy to help you find your way.</p><a className="button button-dark" href={`https://wa.me/${property.whatsapp}?text=${encodeURIComponent("Hello, I’d love to know more about Kashi Prangan.")}`} target="_blank" rel="noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a></div><div className="contact-details"><div><Eyebrow>CALL US</Eyebrow><a href={`tel:${property.phone.replaceAll(" ", "")}`}>{property.phone}</a></div><div><Eyebrow>WRITE TO US</Eyebrow><a href={`mailto:${property.email}`}>{property.email}</a></div><div><Eyebrow>COME FIND US</Eyebrow><p>{property.address}</p><span className="small-note">Add a verified map link and complete address.</span></div></div></section>
    </main>
    <footer className="site-footer"><div className="footer-top"><a className="wordmark wordmark-footer" href="#top"><span className="wordmark-mark">क</span><span>Kashi <i>Prangan</i></span></a><span>A little closer to the heart of Kashi.</span><a className="back-top" href="#top">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Kashi Prangan</span><span>Made with warmth in Varanasi, India</span><span>Namaste <span aria-hidden="true">✳</span></span></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
  </>;
}
