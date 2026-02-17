import type React from "react"
import type { Viewport, Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"
import { Toaster } from "@/components/ui/toaster"
import { ShippingTicker } from "@/components/shipping-ticker"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
})

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: "%s || Kimhab Ork - Affordable Luxury Womenswear",
      default: "Kimhab Ork - An Affordable Luxury Womenswear Dedicates to Quality and Responsibilities. Offering Bold, Elegant And Fragile To Empower Women Through Fashion.",
    },
    description:
      "Kimhab Ork - An Affordable Luxury Womenswear Dedicates to Quality and Responsibilities. Offering Bold, Elegant And Fragile To Empower Women Through Fashion.",
    authors: [{ name: "Kimhab Ork - Affordable Luxury Womenswear" }],
    referrer: "origin-when-cross-origin",
    applicationName: "Kimhab Ork - Affordable Luxury Womenswear",
    keywords: [
      "fashion",
      "fashion design",
      "fashion brand",
      "womenswear",
      "Cambodia fashion",
      "high fashion",
      "luxury fashion",
      "fashion business",
      "fashion studio",
      "design and art",
    ],
    category: "fashion brand",
    openGraph: {
      title: "Kimhab Ork - Affordable Luxury Womenswear",
      siteName: "Kimhab Ork - Affordable Luxury Womenswear",
      description:
        "Kimhab Ork - An Affordable Luxury Womenswear Dedicates to Quality and Responsibilities. Offering Bold, Elegant And Fragile To Empower Women Through Fashion.",
      images: {
        url: "https://ik.imagekit.io/kimhabork/media/profile/og.png",
        width: 1920,
        height: 1000,
      },
      url: "https://kimhab.com",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: "Kimhab Ork - Affordable Luxury Womenswear",
      card: "summary_large_image",
      creator: "@kimhab_ork",
      description:
        "Kimhab Ork - An Affordable Luxury Womenswear Dedicates to Quality and Responsibilities. Offering Bold, Elegant And Fragile To Empower Women Through Fashion.",
      images: ["https://res.cloudinary.com/dk6p9zvfv/image/upload/v1762549370/assets/img/og.png"],
    },
    alternates: {
      canonical: "https://www.kimhab.com",
    },
    creator: "Kimhab Ork",
    publisher: "Kimhab Ork",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    manifest: "https://kimhab.com/manifest.json",
    icons: {
      shortcut: { url: "/favicon.ico", type: "image/x-icon" },
      icon: [
        { url: "/favicon/favicon.ico", type: "image/x-icon" },
        new URL("/favicon/favicon.ico", "https://kimhab.com/favicon.ico"),
        {
          url: "/favicon.svg",
          type: "image/svg",
          sizes: "1024x1024",
        },
        {
          url: "/favicon/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
        {
          url: "/favicon/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
        {
          url: "/favicon/favicon-96x96.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          url: "/favicon/andriod-icon-36x36.png",
          type: "image/png",
          sizes: "36x36",
        },
        {
          url: "/favicon/andriod-icon-48x48.png",
          type: "image/png",
          sizes: "48x48",
        },
        {
          url: "/favicon/andriod-icon-72x72.png",
          type: "image/png",
          sizes: "72x72",
        },
        {
          url: "/favicon/andriod-icon-96x96.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          url: "/favicon/andriod-icon-144x144.png",
          type: "image/png",
          sizes: "144x144",
        },
        {
          url: "/favicon/andriod-icon-192x192.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          url: "/favicon/andriod-icon-512x512.png",
          type: "image/png",
          sizes: "192x192",
        },
      ],
      apple: [
        {
          url: "/favicon/apple-icon.png",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-57x57.png",
          sizes: "57x57",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-60x60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-76x76.png",
          sizes: "76x76",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-114x114.png",
          sizes: "114x114",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-120x120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-180x180.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: [
        {
          url: "/favicon/ms-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          url: "/favicon/ms-icon-150x150.png",
          sizes: "150x150",
          type: "image/png",
        },
        {
          url: "/favicon/ms-icon-310x310.png",
          sizes: "310x310",
          type: "image/png",
        },
        {
          url: "/favicon/ms-icon-70x70.png",
          sizes: "70x70",
          type: "image/png",
        },
      ],
    },
    robots: {
      index: true,
      nocache: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${playfair.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "OnlineStore",
              name: "Kimhab Ork - Affordable Luxury Womenswear",
              url: "https://www.kimhab.com",
              logo: "https://kimhab.com/logo-dark.png",
              description:
                "An Affordable Luxury Womenswear Dedicates to Quality and Responsibilities. Offering Bold, Elegant And Fragile To Empower Women Through Fashion.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "St 183, Veal Sbov",
                addressLocality: "Phnom Penh",
                addressRegion: "Phnom Penh",
                postalCode: "121205",
                addressCountry: "KH",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+855-70-917-081",
                contactType: "Information Office",
                email: "info@kimhab.com",
              },
              sameAs: [
                "https://www.facebook.com/kimhaborkofficial",
                "https://www.instagram.com/kimhabork_official",
              ],
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CartProvider>
            <ShippingTicker />
            <Header />
            {children}
            <Footer />
            <Toaster />
          </CartProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
