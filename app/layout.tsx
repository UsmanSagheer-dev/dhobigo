import React from 'react'
import { ThemeProvider } from "next-themes";
import "./globals.css";
import type { Metadata } from "next";
import GlobalReduxProvider from './providers/GlobalReduxProvider';
export const metadata: Metadata = {
  title: {
    default: "DhobiGo - Daam Aapka, Dhobi Humara",  // Default title
    template: "%s | DhobiGo" // title for other pages
  },
  description: "DhobiGo is Pakistan's first InDrive-style laundry marketplace, integrating real-time bidding, chat, and Hybrid Pickup and Delivery Services. It allows customers to post laundry requests, Dhobis to bid competitively, and verified riders to handle pickup/delivery.",
  // keywords for SEO
  keywords: ["DhobiGo", "Laundry Marketplace", "Laundry Service", "Laundry Pickup and Delivery", "Dhobi", "laundry near me", "dry cleaning", "Laundry Services Pakistan", "ironing service", "online dhobi", "wash and fold", "laundry app", "laundry delivery", "affordable laundry", "eco-friendly laundry", "same-day laundry service", "laundry offers", "laundry discounts"],
  // open graph for social media sharing
  openGraph: {
    title: "DhobiGo - Daam Aapka, Dhobi Humara",
    description: "DhobiGo is Pakistan's first InDrive-style laundry marketplace, integrating real-time bidding, chat, and Hybrid Pickup and Delivery Services. It allows customers to post laundry requests, Dhobis to bid competitively, and verified riders to handle pickup/delivery.",
    url: "https://dhobigo.com",
    siteName: "DhobiGo",
    images: [
      {
        url: "https://dhobigo.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DhobiGo – Laundry Made Easy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // robots for search engine indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // google console Verification 
  verification: {
    google: "your-google-site-verification-code",
  },
};
export default function layout
  ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body className='antialiased'>
        <GlobalReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </GlobalReduxProvider>
      </body>
    </html>
  )
}
