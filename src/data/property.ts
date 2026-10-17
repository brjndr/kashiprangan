export type Room = { name: string; detail: string; image: string; alt: string };
export type Attraction = { name: string; distance: string; note: string };

export const property = {
  name: "Kashi Prangan",
  location: "Varanasi, Uttar Pradesh, India",
  tagline: "A gentler way to discover the eternal city.",
  description:
    "A warm, considered homestay for unhurried mornings, old-city walks and the quiet rituals of Kashi.",
  phone: "+91 00000 00000",
  email: "hello@kashiprangan.com",
  whatsapp: "910000000000",
  address: "Add your complete address, Varanasi, Uttar Pradesh, India",
  heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2200&q=85",
  heroAlt: "The Ganges at Varanasi in the warm light of sunrise",
  rooms: [
    { name: "The Courtyard Room", detail: "A quiet retreat opening onto the heart of the home.", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85", alt: "Calm, sunlit guest room with warm natural textures" },
    { name: "The Ganga Room", detail: "A restful space made for slow mornings and softer evenings.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85", alt: "Thoughtfully furnished room with soft neutral colours" },
    { name: "The Prangan Suite", detail: "Room to settle in, gather your thoughts and feel at home.", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85", alt: "Inviting suite with handcrafted details and natural light" },
  ] satisfies Room[],
  gallery: [
    { image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=85", alt: "Boats on the Ganges at first light" },
    { image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85", alt: "Historic riverside architecture in Varanasi" },
    { image: "https://images.unsplash.com/photo-1606293926075-69a00dbdde81?auto=format&fit=crop&w=1200&q=85", alt: "A peaceful temple courtyard" },
    { image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85", alt: "Colour and craft from the lanes of Kashi" },
  ],
  amenities: ["Thoughtful, personal hosting", "Fresh linens & daily essentials", "Complimentary Wi-Fi", "Air-conditioned rooms", "Local breakfast (details to confirm)", "Travel assistance on request"],
  attractions: [
    { name: "Dashashwamedh Ghat", distance: "Add distance", note: "The energy of the evening Ganga Aarti." },
    { name: "Kashi Vishwanath Temple", distance: "Add distance", note: "One of the city’s most revered shrines." },
    { name: "Assi Ghat", distance: "Add distance", note: "A lovely place to greet the day by the river." },
    { name: "Sarnath", distance: "Add distance", note: "A peaceful journey into Buddhist history." },
  ] satisfies Attraction[],
  guestNotes: [
    { title: "Getting here", text: "We’re in Varanasi. Add verified directions and the nearest airport, railway station and transit details before publishing." },
    { title: "A little local wisdom", text: "The old city is best explored on foot. Comfortable shoes and a little time to wander go a long way." },
    { title: "Your stay", text: "Add confirmed check-in and check-out times, house guidelines and accessibility details here." },
  ],
  canonicalUrl: "https://www.kashiprangan.com",
};

export const imageSizes = "(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw";
