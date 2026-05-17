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
        sand: "var(--color-sand)",
        gold: "var(--color-gold)",
        mist: "var(--color-mist)",
        obsidian: "var(--color-obsidian)"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
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
