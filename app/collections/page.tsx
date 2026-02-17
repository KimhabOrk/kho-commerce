import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getCollections } from "@/lib/shopify"

export default async function CollectionsPage() {
  let collections = []

  try {
    const shopifyCollections = await getCollections()
    if (shopifyCollections && shopifyCollections.length > 0) {
      collections = shopifyCollections
        .filter(col => col.handle !== '') // Filter out the "All" collection
        .map((col) => ({
          handle: col.handle,
          title: col.title,
          description: col.description || "Curated collection",
          image: col.image?.url || "/placeholder.svg",
        }))
    } else {
      throw new Error("No collections found from Shopify")
    }
  } catch (error) {
    console.error('Error fetching collections from Shopify API:', error)
    console.error('Please ensure SHOPIFY_STOREFRONT_ACCESS_TOKEN is properly configured')
  }

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 md:py-24">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 md:mb-24">
          <h1 className="font-serif text-4xl md:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
            Collections
          </h1>
          <p className="text-base md:text-lg md:text-xl text-muted-foreground text-balance">
            Explore our curated collections, each telling a unique story of style, craftsmanship, and modern elegance.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-10">
          {collections.map((collection) => (
            <Link key={collection.handle} href={`/collections/${collection.handle}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
                    {collection.title}
                  </h2>
                </div>
              </div>
              <Button variant="ghost" className="w-full justify-between text-sm md:text-base group-hover:bg-secondary">
                View Collection
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Button>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-secondary py-12 md:py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl md:text-5xl font-semibold mb-6">Crafted for Excellence</h2>
            <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
              Each collection is carefully curated to offer a distinct aesthetic while maintaining the exceptional
              quality and attention to detail that defines Thudarum. From boardroom to ballroom, we have the perfect
              piece for every occasion.
            </p>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 bg-transparent">
              <Link href="/shop">Browse All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
