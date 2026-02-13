"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProductGrid } from "@/components/product-grid"
import { useRef } from "react"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="min-h-screen">

      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        {/* YouTube video background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/u9FEg5qur14?autoplay=1&mute=1&loop=1&playlist=u9FEg5qur14&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Background video"
            allow="autoplay; encrypted-media"
            style={{ pointerEvents: "none" }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 tracking-tight text-balance drop-shadow-lg">
            Refined Simplicity
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-balance drop-shadow-md text-white/90">
            Discover timeless pieces crafted for the modern wardrobe
          </p>
          <Button asChild size="lg" className="h-11 sm:h-12 px-6 sm:px-8 rounded-2xl text-sm sm:text-base">
            <Link href="/shop">Explore Collection</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold">New Arrivals</h2>
          <Button variant="ghost" asChild className="text-sm sm:text-base">
            <Link href="/shop">View All</Link>
          </Button>
        </div>
        <ProductGrid />
      </section>

      <section className="container mx-auto px-2 md:px-4 lg:px-6 py-10 md:py-14 lg:py-24">
        <div className="flex items-center justify-between mx-auto w-full h-auto">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://ik.imagekit.io/kimhabork/assets/runway-campaign.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  )
}
