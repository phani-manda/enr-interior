export interface Project {
  id: string;
  name: string;
  location: string;
  year: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  secondaryImage: string;
}

export const projects: Project[] = [
  {
    id: "atrium-house",
    name: "Atrium House",
    location: "Hyderabad",
    year: "2025",
    category: "Residential",
    tags: ["Minimal", "Stone", "Courtyard"],
    description: "A restrained family home organized around filtered daylight, hand-cut stone, and quiet rooms that unfold with ceremony.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "palm-residence",
    name: "Palm Residence",
    location: "Dubai",
    year: "2024",
    category: "Residential",
    tags: ["Luxe", "Bronze", "Waterfront"],
    description: "A waterfront apartment layered with bronze, smoked oak, and sculptural furniture for an elevated city retreat.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "monolith-office",
    name: "Monolith Office",
    location: "Bengaluru",
    year: "2024",
    category: "Commercial",
    tags: ["Workplace", "Concrete", "Hospitality"],
    description: "A hospitality-led workspace where boardrooms, lounges, and arrival zones are tuned for presence and focus.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "juno-boutique",
    name: "Juno Boutique",
    location: "Mumbai",
    year: "2023",
    category: "Retail",
    tags: ["Gallery", "Travertine", "Fashion"],
    description: "A boutique interior conceived as a calm gallery, balancing tactile stone with a precise retail journey.",
    image: "https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?auto=format&fit=crop&w=1600&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "quiet-loft",
    name: "Quiet Loft",
    location: "Pune",
    year: "2023",
    category: "Residential",
    tags: ["Japandi", "Oak", "Soft Light"],
    description: "A compact loft transformed through warm timber, linen textures, and low-slung volumes that lengthen the room.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "saffron-hotel",
    name: "Saffron Hotel",
    location: "Goa",
    year: "2022",
    category: "Hospitality",
    tags: ["Coastal", "Craft", "Resort"],
    description: "A boutique hotel with coastal ease, local craft references, and layered public spaces designed for lingering.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "atelier-kitchen",
    name: "Atelier Kitchen",
    location: "Delhi",
    year: "2022",
    category: "Residential",
    tags: ["Kitchen", "Marble", "Bespoke"],
    description: "A culinary room with gallery-grade materiality, invisible storage, and a central stone island for performance.",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1600&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "linea-villa",
    name: "Linea Villa",
    location: "Chennai",
    year: "2021",
    category: "Residential",
    tags: ["Villa", "Garden", "Limestone"],
    description: "A garden villa shaped by linear vistas, limestone floors, and custom millwork that quiets daily rituals.",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1400&q=85"
  }
];
