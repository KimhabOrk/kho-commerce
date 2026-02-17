"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProductGrid } from "@/components/product-grid"
import { useRef } from "react"
import { GallerySection } from "@/components/home-gallery"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        {/* YouTube video background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://ik.imagekit.io/kimhabork/assets/main.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="font-serif text-4xl md:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 tracking-tight text-balance drop-shadow-lg">
            Refined Simplicity
          </h1>
          <p className="text-base md:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-balance drop-shadow-md text-white/90">
            Discover timeless pieces crafted for the modern wardrobe
          </p>
          <Button asChild size="lg" className="h-11 md:h-12 px-6 md:px-8 rounded-2xl text-sm md:text-base">
            <Link href="/shop">Explore Collection</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 md:py-24">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="font-serif text-2xl md:text-3xl md:text-4xl font-semibold">New Arrivals</h2>
          <Button variant="ghost" asChild className="text-sm md:text-base">
            <Link href="/shop">View All</Link>
          </Button>
        </div>
        <ProductGrid />
      </section>

      <section className="container mx-auto px-6 md:px-8 lg:px-10 py-10 md:py-14 lg:py-24">
        <GallerySection />
      </section>
    </div>
  )
}
