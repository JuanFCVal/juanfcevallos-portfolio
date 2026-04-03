import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JuanFCVal — Software Engineer",
  description:
    "Portfolio of Juan Francisco Cevallos (JuanFCVal) — Software Engineer and tech lead who loves to build and share knowledge. Explore my journey in tech.",
  keywords: ["Tech Lead", "AI", "Software Engineer", "Portfolio", "Juan Cevallos"],
  authors: [{ name: "Juan Francisco Cevallos / JuanFCVal" }],
  openGraph: {
    title: "Juan F. Cevallos — FULL-STACK SOFTWARE ENGINEER",
    description: "Using technology to boost reality. Explore my projects, insights, and journey in tech.",
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
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
