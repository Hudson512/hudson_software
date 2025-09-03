import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Hudsons Software - Desenvolvimento de Software em Angola",
    template: "%s | Hudsons Software",
  },
  description:
    "Agência de desenvolvimento de software em Angola. Criamos websites modernos, sistemas sob medida, aplicações móveis e APIs. Transformamos ideias em soluções digitais de ponta.",
  keywords: [
    "desenvolvimento software Angola",
    "agência software Luanda",
    "sistemas sob medida Angola",
    "desenvolvimento web Angola",
    "aplicações móveis Angola",
    "APIs Angola",
    "transformação digital Angola",
    "consultoria técnica Angola",
    "Hudson Mateque",
    "Hudsons Software",
  ],
  authors: [{ name: "Hudson Mateque", url: "https://hudsons.software" }],
  creator: "Hudson Mateque",
  publisher: "Hudsons Software",
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
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: "https://hudsons.software",
    siteName: "Hudsons Software",
    title: "Hudsons Software - Desenvolvimento de Software em Angola",
    description:
      "Agência de desenvolvimento de software em Angola. Transformamos ideias em soluções digitais de ponta com tecnologia moderna e interfaces eficientes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hudsons Software - Desenvolvimento de Software em Angola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hudsons Software - Desenvolvimento de Software em Angola",
    description:
      "Transformamos ideias em soluções digitais de ponta. Desenvolvimento web, sistemas sob medida e aplicações móveis em Angola.",
    images: ["/og-image.jpg"],
    creator: "@hudsonmateque",
  },
  alternates: {
    canonical: "https://hudsons.software",
  },
  category: "technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-AO">
      <head>
        <link rel="canonical" href="https://hudsons.software" />
        <meta name="geo.region" content="AO" />
        <meta name="geo.placename" content="Angola" />
        <meta name="geo.position" content="-8.8390;13.2894" />
        <meta name="ICBM" content="-8.8390, 13.2894" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
