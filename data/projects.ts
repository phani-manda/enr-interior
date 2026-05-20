export interface Project {
  id: string;
  number: string;
  name: string;
  location: string;
  year: string;
  type: "residential" | "commercial" | "kitchen" | "hospitality";
  area: string;
  duration: string;
  description: string;
  tags: string[];
  images: string[];
  testimonial?: {
    quote: string;
    client: string;
  };
}

export const projects: Project[] = [
  {
    id: "reddy-residence",
    number: "01",
    name: "The Reddy Residence",
    location: "Jubilee Hills, Hyderabad",
    year: "2025",
    type: "residential",
    area: "3,200 sq.ft",
    duration: "72 days",
    description: "A contemporary luxe family home with a warm marble palette, bespoke storage, and a kitchen designed as the social heart of the residence.",
    tags: ["Contemporary Luxe", "Residential", "Turnkey"],
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
    ],
    testimonial: {
      quote: "ENR completely transformed our Jubilee Hills home. The kitchen alone gets more compliments than anything else in the house.",
      client: "Priya R., Homeowner, Jubilee Hills"
    }
  },
  {
    id: "sharma-kitchen-makeover",
    number: "02",
    name: "Sharma Kitchen Makeover",
    location: "Banjara Hills, Hyderabad",
    year: "2025",
    type: "kitchen",
    area: "210 sq.ft",
    duration: "42 days",
    description: "An L-shaped modular kitchen with island utility, Hettich hardware, quartz counters, and a practical Indian cooking workflow.",
    tags: ["Modular", "L-Shaped", "Island"],
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  {
    id: "techpark-office-fitout",
    number: "03",
    name: "TechPark Office Fit-Out",
    location: "HITEC City, Hyderabad",
    year: "2024",
    type: "commercial",
    area: "4,500 sq.ft",
    duration: "68 days",
    description: "A fast-track commercial interior with reception branding, glass meeting rooms, collaborative zones, and industrial chic detailing.",
    tags: ["Commercial", "Industrial Chic", "Office"],
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85"
    ],
    testimonial: {
      quote: "We gave ENR full creative freedom for our office. Best decision we made - clients comment on the space before the meeting even starts.",
      client: "Siddharth M., Director, Hyderabad Tech Firm"
    }
  },
  {
    id: "kapoor-villa",
    number: "04",
    name: "The Kapoor Villa",
    location: "Gachibowli, Hyderabad",
    year: "2024",
    type: "residential",
    area: "5,100 sq.ft",
    duration: "95 days",
    description: "A royal classic villa with Italian marble, grand living spaces, ornate ceiling details, and a refined material story throughout.",
    tags: ["Royal Classic", "Residential", "Villa"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1400&q=85"
    ],
    testimonial: {
      quote: "Professional, punctual, and the 3D designs they shared were exactly what we got in real life. No surprises, no excuses.",
      client: "Arun & Sunita K., Gachibowli"
    }
  },
  {
    id: "cloudnine-cafe",
    number: "05",
    name: "Cloudnine Cafe Interiors",
    location: "Madhapur, Hyderabad",
    year: "2024",
    type: "hospitality",
    area: "1,600 sq.ft",
    duration: "52 days",
    description: "A welcoming cafe interior with warm lighting, durable finishes, brand-forward counters, and a layout built for quick service.",
    tags: ["Hospitality", "Cafe", "Lighting"],
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  {
    id: "kondapur-3bhk",
    number: "06",
    name: "3BHK Transformation",
    location: "Kondapur, Hyderabad",
    year: "2023",
    type: "residential",
    area: "1,800 sq.ft",
    duration: "58 days",
    description: "A Scandinavian calm apartment transformation with soft palettes, smart wardrobes, compact storage, and natural light-led planning.",
    tags: ["Scandinavian Calm", "Residential", "3BHK"],
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  {
    id: "mehta-group-hq",
    number: "07",
    name: "Mehta Group HQ",
    location: "Begumpet, Hyderabad",
    year: "2023",
    type: "commercial",
    area: "6,200 sq.ft",
    duration: "82 days",
    description: "A premium headquarters with executive cabins, acoustic meeting rooms, a bold reception, and a refined workspace palette.",
    tags: ["Commercial", "Headquarters", "Executive"],
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  {
    id: "prestige-penthouse",
    number: "08",
    name: "Penthouse at Prestige",
    location: "Kokapet, Hyderabad",
    year: "2023",
    type: "residential",
    area: "4,200 sq.ft",
    duration: "88 days",
    description: "A modern luxe penthouse with panoramic living zones, dark kitchen cabinetry, custom wardrobes, and layered evening lighting.",
    tags: ["Modern Luxe", "Penthouse", "Residential"],
    images: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=85"
    ]
  }
];
