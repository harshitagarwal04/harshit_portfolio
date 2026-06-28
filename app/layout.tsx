import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PixiBackground } from "@/components/pixi/PixiBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Harshit Agarwal | Founding Software Engineer",
  description: "Portfolio of Harshit Agarwal, building AI-powered products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-gray-200 min-h-screen selection:bg-green-500/30 selection:text-green-200`}>
        <PixiBackground />
        <div className="relative z-10 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}