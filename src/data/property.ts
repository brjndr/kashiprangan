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
  heroImage: "/varanasi-ghats-golden-hour.jpg",
  heroAlt: "Varanasi's ghats and boats along the Ganges at golden hour",
  rooms: [
    { name: "The Courtyard Room", detail: "A quiet retreat opening onto the heart of the home.", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85", alt: "Calm, sunlit guest room with warm natural textures" },
    { name: "The Ganga Room", detail: "A restful space made for slow mornings and softer evenings.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85", alt: "Thoughtfully furnished room with soft neutral colours" },
    { name: "The Prangan Suite", detail: "Room to settle in, gather your thoughts and feel at home.", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85", alt: "Inviting suite with handcrafted details and natural light" },
  ] satisfies Room[],
  gallery: [
    { image: "https://pd.w.org/2024/02/30365c0afafa216c6.78758847.jpg", alt: "Sunrise over the Ganges at Dashashwamedh Ghat, Varanasi" },
    { image: "https://images.unsplash.com/photo-1674977100223-677f4a430128?auto=format&fit=crop&w=1200&q=85", alt: "A narrow historic lane in Varanasi with closely set old buildings" },
    { image: "https://images.unsplash.com/photo-1762513208447-94014ca5e8d9?auto=format&fit=crop&w=1200&q=85", alt: "Munshi Ghat's historic facades, steps and boats on the Ganges" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Dhamekh_Stupa%2C_where_the_Buddha_gave_the_first_sermon_on_the_Four_Noble_Truths_and_the_Eightfold_Path_to_his_five_disciples%2C_Sarnath.jpg/1280px-Dhamekh_Stupa%2C_where_the_Buddha_gave_the_first_sermon_on_the_Four_Noble_Truths_and_the_Eightfold_Path_to_his_five_disciples%2C_Sarnath.jpg", alt: "Dhamek Stupa among the gardens and archaeological remains at Sarnath" },
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
