import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/nav/Navbar";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";

const LenisProvider = dynamic(() => import("@/components/LenisProvider"), { ssr: false, loading: () => null });
const CustomCursor = dynamic(() => import("@/components/cursor/CustomCursor"), { ssr: false, loading: () => null });
const ChatWidget = dynamic(() => import("@/components/chat/ChatWidget"), { ssr: false, loading: () => null });

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", display: "swap", weight: ["300", "400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://enrinteriors.com"),
  title: {
    default: "ENR Interiors | Luxury Interior Design Studio, Hyderabad",
    template: "%s | ENR Interiors"
  },
  description: "ENR Interiors crafts ultra-premium residential and commercial interiors across Hyderabad. Modular kitchens, living rooms, bedrooms, and bespoke design experiences for discerning homeowners.",
  openGraph: {
    title: "ENR Interiors — Luxury Interior Design",
    description: "Interiors That Define You. Premium design for affluent homeowners.",
    images: ["/logo/enr-logo.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${playfair.variable}`}>
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
