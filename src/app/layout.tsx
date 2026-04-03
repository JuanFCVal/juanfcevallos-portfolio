import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juan F. Cevallos — Tech Lead & AI Multiplier",
  description:
    "Portfolio of Juan Francisco Cevallos — Tech Lead and AI Multiplier who transforms business goals into architectural reality.",
  keywords: ["Tech Lead", "AI", "Software Engineer", "Portfolio", "Juan Cevallos"],
  authors: [{ name: "Juan Francisco Cevallos" }],
  openGraph: {
    title: "Juan F. Cevallos — Tech Lead & AI Multiplier",
    description: "Transforming business goals into architectural reality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased" style={{ background: "#F8F9FC", color: "#1B2A4A" }}>
        {children}
      </body>
    </html>
  );
}
