import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

export default function ShopLoading() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-8">Shop</h1>

        {/* Search and Filter Skeleton */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input Skeleton */}
            <div className="flex-1">
              <div className="w-full h-10 border border-border rounded bg-muted animate-pulse" />
            </div>

            {/* Sort Dropdown Skeleton */}
            <div className="w-full md:w-40">
              <div className="w-full h-10 border border-border rounded bg-muted animate-pulse" />
            </div>
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-4">
              {/* Product Image Skeleton */}
              <div className="aspect-[3/4] bg-muted rounded-lg animate-pulse" />
              
              {/* Product Info Skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
                <div className="h-6 bg-muted rounded w-1/3 animate-pulse mt-2" />
              </div>
              
              {/* Button Skeleton */}
              <div className="h-10 bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
