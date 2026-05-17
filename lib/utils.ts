import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxNiAxMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nMTAnIGZpbGw9JyNFOEUwRDUiLz48cmVjdCB4PScwJyB5PScwJyB3aWR0aD0nMTYnIGhlaWdodD0nMTAnIGZpbGw9JyMxQzFDMUEnIG9wYWNpdHk9Jy4xNicvPjwvc3ZnPg==";

export function formatOrdinal(index: number) {
  return String(index + 1).padStart(2, "0");
}
