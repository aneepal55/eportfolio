import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aneesh Pallapolu - Software Developer Portfolio",
  description: "Premium portfolio website of Aneesh Pallapolu - Software Developer specializing in Python, JavaScript/TypeScript, React, and full-stack development.",
  keywords: "Aneesh Pallapolu, Software Developer, Portfolio, Python, JavaScript, TypeScript, React, Full-Stack Developer, Web Development",
  authors: [{ name: "Aneesh Pallapolu" }],
  creator: "Aneesh Pallapolu",
  publisher: "Aneesh Pallapolu",
  openGraph: {
    title: "Aneesh Pallapolu - Software Developer Portfolio",
    description: "Premium portfolio website showcasing my skills in modern web development technologies",
    url: "https://aneeshpallapolu.dev",
    siteName: "Aneesh Pallapolu Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aneesh Pallapolu - Software Developer Portfolio",
    description: "Premium portfolio website showcasing my skills in modern web development technologies",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <div className="relative w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
