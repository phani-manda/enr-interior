import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/nav/Navbar";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";

const LenisProvider = dynamic(() => import("@/components/LenisProvider"), { ssr: false, loading: () => null });
const CustomCursor = dynamic(() => import("@/components/cursor/CustomCursor"), { ssr: false, loading: () => null });
const ChatWidget = dynamic(() => import("@/components/chat/ChatWidget"), { ssr: false, loading: () => null });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap", weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://lumine-studio.demo"),
  title: {
    default: "LUMINE Studio | Spaces That Speak",
    template: "%s | LUMINE Studio"
  },
  description: "Premium interior architecture and spatial design studio for residential, commercial, and hospitality spaces.",
  openGraph: {
    title: "LUMINE Studio",
    description: "Spaces That Speak.",
    images: ["/og.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
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
