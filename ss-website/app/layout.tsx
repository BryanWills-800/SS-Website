import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Used by the leadership section (names and role labels)
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silicon Society - BITS Pilani",
  description: "Architects of Digital Age",
};

// Lets the browser theme its own UI (address bar, scrollbars, form controls)
// to match. The colours here are the --page token values from styles/base.css.
export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${nunito.variable} app-html`}>
      <body className="app-body">
        <Header />
        <Navigation />
        <main className="app-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
