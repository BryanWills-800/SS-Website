import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Silicon Society - BITS Pilani",
  description: "Architects of Digital Age",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} app-html`}>
      <body className="app-body">
        <div className="top-container">
          <Header />
          <Navigation />
        </div>
        <div className="middle-container">
          <main className="app-main">
            {children}
          </main>
        </div>
        <div className="bottom-container">
          <Footer />
        </div>
      </body>
    </html>
  );
}
