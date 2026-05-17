export type CatalogCategory = "Living Room" | "Bedroom" | "Kitchen" | "Bathroom" | "Office" | "Outdoor";
export type CatalogStyle = "Minimal" | "Luxe" | "Japandi" | "Industrial" | "Coastal" | "Rustic";
export type CatalogBudget = "Starter" | "Premium" | "Ultra-Luxury";

export interface CatalogItem {
  id: string;
  title: string;
  category: CatalogCategory;
  style: CatalogStyle;
  budget: CatalogBudget;
  images: string[];
  description: string;
  materials: string[];
  colorStory: string[];
  sqft: string;
}

const imagePool = [
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
];

export const catalogItems: CatalogItem[] = [
  ["gallery-lounge", "Gallery Lounge", "Living Room", "Luxe", "Ultra-Luxury", 0],
  ["oak-silence", "Oak Silence", "Bedroom", "Japandi", "Premium", 1],
  ["monolith-kitchen", "Monolith Kitchen", "Kitchen", "Minimal", "Ultra-Luxury", 4],
  ["stone-bath", "Stone Bath", "Bathroom", "Luxe", "Premium", 5],
  ["atelier-office", "Atelier Office", "Office", "Industrial", "Premium", 2],
  ["terrace-room", "Terrace Room", "Outdoor", "Coastal", "Starter", 7],
  ["linen-suite", "Linen Suite", "Bedroom", "Coastal", "Premium", 6],
  ["raw-study", "Raw Study", "Office", "Industrial", "Starter", 3],
  ["courtyard-living", "Courtyard Living", "Living Room", "Rustic", "Premium", 7],
  ["bronze-kitchen", "Bronze Kitchen", "Kitchen", "Luxe", "Ultra-Luxury", 4],
  ["quiet-washroom", "Quiet Washroom", "Bathroom", "Minimal", "Starter", 5],
  ["cedar-balcony", "Cedar Balcony", "Outdoor", "Japandi", "Premium", 1],
  ["soft-salon", "Soft Salon", "Living Room", "Coastal", "Premium", 6],
  ["charcoal-den", "Charcoal Den", "Office", "Minimal", "Starter", 2],
  ["field-bedroom", "Field Bedroom", "Bedroom", "Rustic", "Starter", 3],
  ["loft-kitchen", "Loft Kitchen", "Kitchen", "Industrial", "Premium", 0]
].map(([id, title, category, style, budget, imageIndex], index) => ({
  id: id as string,
  title: title as string,
  category: category as CatalogCategory,
  style: style as CatalogStyle,
  budget: budget as CatalogBudget,
  images: [
    imagePool[imageIndex as number],
    imagePool[((imageIndex as number) + 2) % imagePool.length],
    imagePool[((imageIndex as number) + 4) % imagePool.length]
  ],
  description:
    "A curated spatial concept balancing architecture, texture, and furniture into a complete room language ready for adaptation.",
  materials: ["Travertine", "Smoked Oak", "Brushed Brass", "Linen"],
  colorStory: ["#F8F5F0", "#E8E0D5", "#B89A6A", "#5F5A52", "#1C1C1A"],
  sqft: `${240 + index * 35}-${360 + index * 45} sq.ft`
}));
