"use client"

import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"
import { useState } from "react"

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"newest" | "price-low" | "price-high">("")

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

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none" />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
            >
              <option value="">Sort By</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <ProductGrid query={searchQuery} sortBy={sortBy} />
      </div>
    </div>
  )
}
