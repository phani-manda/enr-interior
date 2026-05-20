export type CatalogRoom =
  | "living-room"
  | "kitchen"
  | "bedroom"
  | "kids-room"
  | "home-office"
  | "dining"
  | "bathroom"
  | "balcony";

export type CatalogStyle =
  | "contemporary"
  | "modern-luxe"
  | "classic"
  | "scandinavian"
  | "industrial"
  | "vastu";

export type CatalogBudgetRange = "5-10L" | "10-25L" | "25-50L" | "50L+";
export type CatalogTag = "bestseller" | "new" | "premium";

export interface CatalogItem {
  id: string;
  title: string;
  room: CatalogRoom;
  style: CatalogStyle;
  budgetRange: CatalogBudgetRange;
  sqft: string;
  images: string[];
  description: string;
  materials: string[];
  colorStory: string[];
  highlights: string[];
  estimatedTimeline: string;
  tag?: CatalogTag;
}

const images = {
  kitchenDark: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=85",
  kitchenWhite: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1400&q=85",
  kitchenWood: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1400&q=85",
  kitchenMarble: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1400&q=85",
  livingWarm: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  livingClassic: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
  bedroomCalm: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
  bedroomLuxe: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=85",
  kids: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
  office: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  dining: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
  bath: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85",
  balcony: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
};

export const roomLabels: Record<CatalogRoom, string> = {
  "living-room": "Living Room",
  kitchen: "Modular Kitchen",
  bedroom: "Master Bedroom",
  "kids-room": "Kids Room",
  "home-office": "Home Office",
  dining: "Dining",
  bathroom: "Bathroom",
  balcony: "Balcony"
};

export const styleLabels: Record<CatalogStyle, string> = {
  contemporary: "Contemporary",
  "modern-luxe": "Modern Luxe",
  classic: "Classic",
  scandinavian: "Scandinavian",
  industrial: "Industrial",
  vastu: "Vastu-Aligned"
};

export const budgetLabels: Record<CatalogBudgetRange, string> = {
  "5-10L": "₹5-10L",
  "10-25L": "₹10-25L",
  "25-50L": "₹25-50L",
  "50L+": "₹50L+"
};

export const catalogItems: CatalogItem[] = [
  {
    id: "hettich-island-kitchen",
    title: "Hettich Island Kitchen",
    room: "kitchen",
    style: "modern-luxe",
    budgetRange: "25-50L",
    sqft: "180-240 sq.ft",
    images: [images.kitchenDark, images.kitchenMarble, images.kitchenWood],
    description: "A statement island kitchen with premium shutter finishes, quartz counters, and German soft-close hardware.",
    materials: ["Lacquered MDF", "Quartz Stone", "Hettich Hardware", "Brushed Brass"],
    colorStory: ["#1A1A18", "#2E2E2A", "#C9A84C", "#EDE5D4", "#FFFFFF"],
    highlights: ["Island breakfast counter", "Tall pantry storage", "Soft-close German hardware"],
    estimatedTimeline: "40-45 days",
    tag: "bestseller"
  },
  {
    id: "parallel-indian-kitchen",
    title: "Parallel Indian Kitchen",
    room: "kitchen",
    style: "contemporary",
    budgetRange: "10-25L",
    sqft: "120-170 sq.ft",
    images: [images.kitchenWhite, images.kitchenDark, images.kitchenMarble],
    description: "A high-efficiency parallel layout built for Indian cooking, appliance zones, and maximum daily storage.",
    materials: ["Acrylic Shutters", "Granite", "Hafele Hardware", "Back-painted Glass"],
    colorStory: ["#F9F6F0", "#EDE5D4", "#8A6E32", "#6B665F", "#252521"],
    highlights: ["Separate wet and dry zones", "Oil-resistant backsplash", "Deep drawer storage"],
    estimatedTimeline: "35-42 days",
    tag: "bestseller"
  },
  {
    id: "l-shaped-family-kitchen",
    title: "L-Shaped Family Kitchen",
    room: "kitchen",
    style: "vastu",
    budgetRange: "10-25L",
    sqft: "100-150 sq.ft",
    images: [images.kitchenWood, images.kitchenWhite, images.kitchenDark],
    description: "The most requested ENR kitchen format for Hyderabad apartments, optimized for corner storage and vastu-friendly placement.",
    materials: ["Engineered Wood", "Quartz Stone", "PU Paint", "Hettich Hardware"],
    colorStory: ["#F5F0E8", "#B88A4A", "#C9A84C", "#7A7870", "#1A1A18"],
    highlights: ["Corner carousel unit", "Vastu-aligned hob placement", "Compact breakfast ledge"],
    estimatedTimeline: "35-40 days",
    tag: "new"
  },
  {
    id: "royal-marble-kitchen",
    title: "Royal Marble Kitchen",
    room: "kitchen",
    style: "classic",
    budgetRange: "50L+",
    sqft: "220-320 sq.ft",
    images: [images.kitchenMarble, images.kitchenDark, images.kitchenWhite],
    description: "A villa-scale kitchen with marble drama, panelled shutters, integrated appliances, and display-worthy storage.",
    materials: ["Italian Marble", "Veneer Finish", "Brushed Brass", "Bosch Appliances"],
    colorStory: ["#F9F6F0", "#E2C47A", "#8A6E32", "#3B352D", "#1A1A18"],
    highlights: ["Built-in appliance wall", "Premium brass trims", "Show kitchen styling"],
    estimatedTimeline: "45-60 days",
    tag: "premium"
  },
  {
    id: "contemporary-living-suite",
    title: "Contemporary Living Suite",
    room: "living-room",
    style: "contemporary",
    budgetRange: "10-25L",
    sqft: "260-420 sq.ft",
    images: [images.livingWarm, images.dining, images.bedroomCalm],
    description: "Warm, highly usable living room interiors with media wall, concealed storage, and layered lighting.",
    materials: ["Veneer Finish", "PU Paint", "Porcelain Tiles", "Handloom Textiles"],
    colorStory: ["#F9F6F0", "#EDE5D4", "#C9A84C", "#7A7870", "#252521"],
    highlights: ["Media wall with storage", "Mood lighting plan", "Family-friendly finishes"],
    estimatedTimeline: "30-45 days",
    tag: "bestseller"
  },
  {
    id: "royal-classic-living",
    title: "Royal Classic Living",
    room: "living-room",
    style: "classic",
    budgetRange: "25-50L",
    sqft: "340-520 sq.ft",
    images: [images.livingClassic, images.livingWarm, images.dining],
    description: "A formal living room language for villas and larger apartments with marble, velvet, and gold-accented detailing.",
    materials: ["Italian Marble", "Velvet Fabric", "Gold Leaf Accents", "Veneer Finish"],
    colorStory: ["#F5F0E8", "#C9A84C", "#8A6E32", "#4E4338", "#1A1A18"],
    highlights: ["Statement feature wall", "Formal seating layout", "Decorative ceiling"],
    estimatedTimeline: "45-60 days",
    tag: "premium"
  },
  {
    id: "scandinavian-master-bedroom",
    title: "Scandinavian Master Bedroom",
    room: "bedroom",
    style: "scandinavian",
    budgetRange: "10-25L",
    sqft: "180-260 sq.ft",
    images: [images.bedroomCalm, images.bedroomLuxe, images.livingWarm],
    description: "A restful bedroom with soft greys, wood warmth, wardrobe integration, and uncluttered bedside details.",
    materials: ["White Oak", "Linen", "Engineered Wood", "PU Paint"],
    colorStory: ["#F9F6F0", "#D8D3C8", "#AFA79B", "#7A7870", "#252521"],
    highlights: ["Full-height wardrobe", "Soft headboard wall", "Calm lighting scenes"],
    estimatedTimeline: "25-35 days"
  },
  {
    id: "modern-luxe-master-suite",
    title: "Modern Luxe Master Suite",
    room: "bedroom",
    style: "modern-luxe",
    budgetRange: "25-50L",
    sqft: "260-380 sq.ft",
    images: [images.bedroomLuxe, images.livingClassic, images.bath],
    description: "A hotel-inspired master suite with wardrobe bay, vanity, acoustic softness, and premium fabric layering.",
    materials: ["Velvet Fabric", "Back-painted Glass", "Veneer Finish", "Brushed Brass"],
    colorStory: ["#1A1A18", "#2E2E2A", "#8A6E32", "#E2C47A", "#F5F0E8"],
    highlights: ["Walk-in wardrobe feel", "Vanity integration", "Premium soft furnishings"],
    estimatedTimeline: "35-50 days",
    tag: "new"
  },
  {
    id: "playful-kids-room",
    title: "Playful Kids Room",
    room: "kids-room",
    style: "contemporary",
    budgetRange: "5-10L",
    sqft: "120-180 sq.ft",
    images: [images.kids, images.bedroomCalm, images.office],
    description: "A child-friendly room with study desk, storage, safe corners, and adaptable colors that can grow with the child.",
    materials: ["PU Paint", "Engineered Wood", "Laminate", "Soft-close Hardware"],
    colorStory: ["#F9F6F0", "#EDE5D4", "#C9A84C", "#8FA9A2", "#252521"],
    highlights: ["Rounded safety details", "Study and storage wall", "Adaptable color palette"],
    estimatedTimeline: "25-35 days"
  },
  {
    id: "executive-home-office",
    title: "Executive Home Office",
    room: "home-office",
    style: "industrial",
    budgetRange: "10-25L",
    sqft: "110-180 sq.ft",
    images: [images.office, images.livingWarm, images.dining],
    description: "A sharp work-from-home room with acoustic comfort, cable-managed desk, shelving, and video-call ready lighting.",
    materials: ["Blackened Metal", "Veneer Finish", "Concrete Texture", "Leather"],
    colorStory: ["#1A1A18", "#2E2E2A", "#7A7870", "#C9A84C", "#EDE5D4"],
    highlights: ["Concealed wiring", "Display shelving", "Task and ambient lighting"],
    estimatedTimeline: "20-30 days"
  },
  {
    id: "vastu-dining-room",
    title: "Vastu Dining Room",
    room: "dining",
    style: "vastu",
    budgetRange: "10-25L",
    sqft: "160-240 sq.ft",
    images: [images.dining, images.livingClassic, images.livingWarm],
    description: "A warm dining area with crockery storage, auspicious orientation planning, and a family-first hosting mood.",
    materials: ["Teak Wood", "Brushed Brass", "Porcelain Tiles", "Handloom Textiles"],
    colorStory: ["#F5F0E8", "#C9A84C", "#8A6E32", "#6B513B", "#252521"],
    highlights: ["Crockery display wall", "Vastu-led placement", "Statement pendant lighting"],
    estimatedTimeline: "25-35 days"
  },
  {
    id: "marble-bath-suite",
    title: "Marble Bath Suite",
    room: "bathroom",
    style: "modern-luxe",
    budgetRange: "10-25L",
    sqft: "70-120 sq.ft",
    images: [images.bath, images.kitchenMarble, images.bedroomLuxe],
    description: "A premium bathroom concept with stone-look surfaces, concealed storage, and warm hotel-style lighting.",
    materials: ["Porcelain Tiles", "Quartz Stone", "Back-painted Glass", "Brushed Brass"],
    colorStory: ["#F9F6F0", "#DCD2BF", "#C9A84C", "#7A7870", "#252521"],
    highlights: ["Vanity storage", "Anti-skid flooring", "Warm mirror lighting"],
    estimatedTimeline: "25-35 days"
  },
  {
    id: "balcony-lounge",
    title: "Balcony Lounge",
    room: "balcony",
    style: "scandinavian",
    budgetRange: "5-10L",
    sqft: "60-120 sq.ft",
    images: [images.balcony, images.livingWarm, images.dining],
    description: "A compact outdoor lounge for morning coffee, evening conversations, and low-maintenance green styling.",
    materials: ["Outdoor Wood", "Porcelain Tiles", "Weatherproof Fabric", "Planter Systems"],
    colorStory: ["#F9F6F0", "#EDE5D4", "#8FA07A", "#8A6E32", "#252521"],
    highlights: ["Weather-safe finishes", "Planter ledge", "Compact seating"],
    estimatedTimeline: "15-25 days"
  },
  {
    id: "industrial-commercial-office",
    title: "Industrial Commercial Office",
    room: "home-office",
    style: "industrial",
    budgetRange: "50L+",
    sqft: "1200-2500 sq.ft",
    images: [images.office, images.livingWarm, images.kitchenDark],
    description: "A commercial fit-out direction with open work bays, meeting rooms, reception identity, and durable finishes.",
    materials: ["Concrete Texture", "Blackened Metal", "Acoustic Panels", "Engineered Wood"],
    colorStory: ["#1A1A18", "#2E2E2A", "#7A7870", "#C9A84C", "#F5F0E8"],
    highlights: ["Reception feature wall", "Meeting room glass", "High-durability surfaces"],
    estimatedTimeline: "60-90 days",
    tag: "premium"
  },
  {
    id: "classic-dining-gallery",
    title: "Classic Dining Gallery",
    room: "dining",
    style: "classic",
    budgetRange: "25-50L",
    sqft: "240-360 sq.ft",
    images: [images.dining, images.livingClassic, images.bedroomLuxe],
    description: "A formal dining concept with a display wall, rich textures, and lighting that makes hosting feel ceremonial.",
    materials: ["Italian Marble", "Veneer Finish", "Velvet Fabric", "Brushed Brass"],
    colorStory: ["#F5F0E8", "#C9A84C", "#8A6E32", "#3C332C", "#1A1A18"],
    highlights: ["Crockery bar", "Formal 8-seater layout", "Statement chandelier"],
    estimatedTimeline: "35-50 days"
  },
  {
    id: "compact-straight-kitchen",
    title: "Compact Straight Kitchen",
    room: "kitchen",
    style: "scandinavian",
    budgetRange: "5-10L",
    sqft: "70-110 sq.ft",
    images: [images.kitchenWhite, images.kitchenWood, images.kitchenDark],
    description: "A studio and 1BHK-friendly straight kitchen with clean storage, bright finishes, and efficient appliance planning.",
    materials: ["Laminate", "Quartz Stone", "Hettich Hardware", "PU Paint"],
    colorStory: ["#F9F6F0", "#EDE5D4", "#C9A84C", "#9A9185", "#252521"],
    highlights: ["Compact appliance wall", "Bright easy-clean palette", "Budget-smart hardware"],
    estimatedTimeline: "25-35 days"
  },
  {
    id: "u-shaped-chef-kitchen",
    title: "U-Shaped Chef Kitchen",
    room: "kitchen",
    style: "contemporary",
    budgetRange: "25-50L",
    sqft: "180-260 sq.ft",
    images: [images.kitchenMarble, images.kitchenWood, images.kitchenWhite],
    description: "A maximum-storage kitchen for serious cooks, with three work counters and clear prep, cook, and clean zones.",
    materials: ["Acrylic Shutters", "Quartz Stone", "Hafele Hardware", "Back-painted Glass"],
    colorStory: ["#F5F0E8", "#C9A84C", "#8A6E32", "#5F5A52", "#1A1A18"],
    highlights: ["Maximum counter space", "Chef-friendly work triangle", "Tall pantry wall"],
    estimatedTimeline: "40-50 days",
    tag: "bestseller"
  },
  {
    id: "vastu-master-suite",
    title: "Vastu Master Suite",
    room: "bedroom",
    style: "vastu",
    budgetRange: "10-25L",
    sqft: "200-300 sq.ft",
    images: [images.bedroomCalm, images.bedroomLuxe, images.livingWarm],
    description: "A bedroom suite planned around calm orientation, balanced storage, and a material palette that feels grounded.",
    materials: ["Teak Wood", "Linen", "PU Paint", "Engineered Wood"],
    colorStory: ["#F9F6F0", "#EDE5D4", "#B88A4A", "#7A7870", "#252521"],
    highlights: ["Vastu-led bed wall", "Wardrobe and dresser zone", "Warm indirect lighting"],
    estimatedTimeline: "30-45 days"
  }
];
