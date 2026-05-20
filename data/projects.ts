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
      "/portfolio/living-room.jpeg",
      "/portfolio/partition-living.jpeg"
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
      "/portfolio/kitchen.jpeg",
      "/portfolio/living-room.jpeg"
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
      "/portfolio/partition-living.jpeg",
      "/portfolio/bedroom.jpeg"
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
      "/portfolio/kids-room.jpeg",
      "/portfolio/bedroom.jpeg"
    ]
  },
  {
    id: "master-bedroom-suite",
    number: "05",
    name: "Master Bedroom Suite",
    location: "HITEC City, Hyderabad",
    year: "2024",
    type: "residential",
    area: "320 sq.ft",
    duration: "45 days",
    description: "A luxurious master bedroom with custom wardrobes, vanity station with LED-lit mirror, warm false ceiling with ambient cove lighting, and elegant drapery framing city views.",
    tags: ["Bedroom", "Wardrobe", "Vanity"],
    images: [
      "/portfolio/bedroom.jpeg",
      "/portfolio/living-room.jpeg"
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
      "/portfolio/living-room.jpeg",
      "/portfolio/kitchen.jpeg"
    ]
  },
  {
    id: "premium-interiors",
    number: "07",
    name: "Premium Modern Interiors",
    location: "Kukatpally, Hyderabad",
    year: "2024",
    type: "residential",
    area: "2,400 sq.ft",
    duration: "65 days",
    description: "A premium full-home interior featuring custom TV unit, warm false ceiling with cove lighting, elegant balcony seating, and end-to-end design solutions starting at ₹4.5 Lakhs.",
    tags: ["Premium", "Full Home", "End-to-End"],
    images: [
      "/portfolio/living-promo.jpeg",
      "/portfolio/partition-living.jpeg"
    ],
    testimonial: {
      quote: "We gave ENR full creative freedom. Best decision we made - guests comment on the interiors before the meeting even starts.",
      client: "Siddharth M., Kukatpally"
    }
  },
  {
    id: "complete-home-transformation",
    number: "08",
    name: "Complete Home Transformation",
    location: "Kokapet, Hyderabad",
    year: "2023",
    type: "residential",
    area: "4,200 sq.ft",
    duration: "88 days",
    description: "A full-home transformation featuring a modular L-shaped kitchen, partition living-dining with display shelves, kids room with LED art ceiling, and a luxe master bedroom.",
    tags: ["Full Home", "Turnkey", "Residential"],
    images: [
      "/portfolio/partition-living.jpeg",
      "/portfolio/kitchen.jpeg"
    ]
  }
];
