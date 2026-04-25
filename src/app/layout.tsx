import { Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAH. | Creative Developer Portfolio",
  description: "Official portfolio of Fauzan Ashril Hakiim. A premium showcase of digital craftsmanship, cinematic UI/UX, and high-performance engineering.",
};

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans bg-background text-foreground antialiased selection:bg-sky-100`}>
        <LoadingScreen />
        <CustomCursor />
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
