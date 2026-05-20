import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "var(--color-ivory)",
        charcoal: "var(--color-charcoal)",
        graphite: "var(--color-graphite)",
        sand: "var(--color-sand)",
        gold: "var(--color-gold)",
        "gold-light": "var(--color-gold-light)",
        "gold-muted": "var(--color-gold-muted)",
        mist: "var(--color-mist)",
        obsidian: "var(--color-obsidian)",
        parchment: "var(--color-parchment)",
        "cream-section": "var(--color-cream-section)",
        "enr-obsidian": "var(--color-obsidian)",
        "enr-charcoal": "var(--color-charcoal)",
        "enr-graphite": "var(--color-graphite)",
        "enr-gold": "var(--color-gold)",
        "enr-gold-light": "var(--color-gold-light)",
        "enr-gold-muted": "var(--color-gold-muted)",
        "enr-ivory": "var(--color-ivory)",
        "enr-parchment": "var(--color-parchment)",
        "enr-mist": "var(--color-mist)",
        "enr-cream": "var(--color-cream-section)",
        "enr-bg-primary": "var(--enr-bg-primary)",
        "enr-bg-secondary": "var(--enr-bg-secondary)",
        "enr-accent-gold": "var(--enr-accent-gold)",
        "enr-accent-glow": "var(--enr-accent-glow)",
        "enr-text-primary": "var(--enr-text-primary)",
        "enr-text-muted": "var(--enr-text-muted)",
        "enr-border": "var(--enr-border)"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"]
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
        38: "9.5rem",
        40: "10rem"
      },
      borderRadius: {
        none: "0",
        sm: "4px"
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(14,14,12,0.16)"
      }
    }
  },
  plugins: []
};

export default config;
