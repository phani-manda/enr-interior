import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/nav/Navbar";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";

const LenisProvider = dynamic(() => import("@/components/LenisProvider"), { ssr: false, loading: () => null });
const CustomCursor = dynamic(() => import("@/components/cursor/CustomCursor"), { ssr: false, loading: () => null });
const ChatWidget = dynamic(() => import("@/components/chat/ChatWidget"), { ssr: false, loading: () => null });

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap", weight: ["300", "400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://enrinteriors.com"),
  title: {
    default: "ENR Interiors | Transform Your Space with Premium Interior Designs",
    template: "%s | ENR Interiors"
  },
  description: "Transform Your Space with Premium Interior Designs. ENR Interiors specializes in modular kitchens, living rooms, bedrooms, wardrobes, false ceilings, lighting, and home and office interiors in Hyderabad.",
  openGraph: {
    title: "ENR Interiors",
    description: "Transform Your Space with Premium Interior Designs.",
    images: ["/logo/enr-logo.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <LenisProvider />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <ChatWidget />
        <CustomCursor />
      </body>
    </html>
  );
}
