import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/PricingSection";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Chainlake | Blockchain Data Lakehouse",
    template: "%s | Chainlake",
  },

  description:
    "Real-time blockchain data pipelines, analytics APIs, and query infrastructure for modern onchain applications.",
  // other metadata
  keywords: [
    "blockchain analytics",
    "onchain data",
    "blockchain API",
    "real-time blockchain data",
    "crypto analytics",
    "multi-chain analytics",
    "blockchain infrastructure",
    "web3 data platform",
    "Chainlake",
  ],

  authors: [{ name: "Chainlake" }],
  creator: "Chainlake",
  publisher: "Chainlake",

  metadataBase: new URL("https://Chainlake.io"),

  alternates: {
    canonical: "https://Chainlake.io",
  },

  openGraph: {
    title: "Chainlake | Blockchain Data Lakehouse",
    description:
      "Real-time blockchain data pipelines, analytics APIs, and query infrastructure for modern onchain applications.",
    url: "https://Chainlake.io",
    siteName: "Chainlake",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chainlake | Real-time Blockchain Analytics Infrastructure",
    description:
      "Real-time blockchain data pipelines, analytics APIs, and query infrastructure for modern onchain applications.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
