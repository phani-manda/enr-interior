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
    description: "A contemporary luxe family home with warm ambient lighting, an L-shaped sofa arrangement, bespoke TV unit with LED backlighting, and a living space designed as the social heart of the residence.",
    tags: ["Contemporary Luxe", "Residential", "Turnkey"],
    images: [
      "/portfolio/living-3.jpg",
      "/portfolio/living-1.jpg"
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
    description: "An L-shaped modular kitchen with warm LED backlighting, black granite countertops, Hettich hardware, and a practical Indian cooking workflow with dedicated wet and dry zones.",
    tags: ["Modular", "L-Shaped", "LED Lighting"],
    images: [
      "/portfolio/kitchen-1.jpg",
      "/portfolio/living-3.jpg"
    ]
  },
  {
    id: "modern-living-partition",
    number: "03",
    name: "Modern Living with Partition",
    location: "Gachibowli, Hyderabad",
    year: "2025",
    type: "residential",
    area: "1,800 sq.ft",
    duration: "58 days",
    description: "A warm contemporary apartment featuring a custom wooden partition with display shelves, false ceiling with ambient lighting, elegant dining zone, and seamless living-dining integration.",
    tags: ["Contemporary", "Partition Design", "False Ceiling"],
    images: [
      "/portfolio/living-1.jpg",
      "/portfolio/living-3.jpg"
    ],
    testimonial: {
      quote: "Professional, punctual, and the 3D designs they shared were exactly what we got in real life. No surprises, no excuses.",
      client: "Arun & Sunita K., Gachibowli"
    }
  },
  {
    id: "kids-dream-room",
    number: "04",
    name: "Kids Dream Room",
    location: "Kondapur, Hyderabad",
    year: "2024",
    type: "residential",
    area: "180 sq.ft",
    duration: "35 days",
    description: "A whimsical kids bedroom with a moon-and-stars LED ceiling art, pink-themed soft furnishing, custom study desk, toy storage with warm LED-lit open shelves, and a cozy reading nook.",
    tags: ["Kids Room", "LED Art", "Custom Storage"],
    images: [
      "/portfolio/kids-room-1.jpg",
      "/portfolio/living-1.jpg"
    ]
  },
  {
    id: "premium-living-suite",
    number: "05",
    name: "Premium Living Suite",
    location: "HITEC City, Hyderabad",
    year: "2024",
    type: "residential",
    area: "2,400 sq.ft",
    duration: "65 days",
    description: "A modern interior starting at ₹4.5 Lakhs featuring an L-shaped TV unit with warm LED strips, custom false ceiling, premium quality materials, and end-to-end design solutions.",
    tags: ["Modern", "TV Unit", "Premium"],
    images: [
      "/portfolio/living-2.jpg",
      "/portfolio/living-3.jpg"
    ],
    testimonial: {
      quote: "Dream it. We design it. ENR made our vision real with premium quality and on-time delivery.",
      client: "Vikram P., HITEC City"
    }
  },
  {
    id: "warm-living-room",
    number: "06",
    name: "Warm Ambient Living",
    location: "Madhapur, Hyderabad",
    year: "2024",
    type: "residential",
    area: "1,600 sq.ft",
    duration: "48 days",
    description: "An inviting living space with a wooden-accent TV unit featuring golden LED strip backlighting, L-shaped sofa arrangement, and a warm material palette of wood, marble, and soft textiles.",
    tags: ["Warm Tones", "LED Lighting", "Living Room"],
    images: [
      "/portfolio/living-3.jpg",
      "/portfolio/kitchen-1.jpg"
    ]
  },
  {
    id: "techpark-office-fitout",
    number: "07",
    name: "TechPark Office Fit-Out",
    location: "HITEC City, Hyderabad",
    year: "2023",
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
      "/portfolio/living-2.jpg",
      "/portfolio/kitchen-1.jpg"
    ]
  }
];
