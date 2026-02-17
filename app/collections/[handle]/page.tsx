import { ProductCard } from "@/components/product-card"
import { getCollectionProducts, getCollections } from "@/lib/shopify"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  try {
    const collections = await getCollections()
    return collections.map((collection) => ({
      handle: collection.handle,
    }))
  } catch (error) {
    console.error("Failed to generate collection static params:", error)
    return []
  }
}

export const dynamicParams = true

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params

  return {
    title: `${handle.charAt(0).toUpperCase() + handle.slice(1)} Collection`,
    description: `Browse our ${handle} collection of premium fashion items.`,
  }
}

export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params

  try {
    const products = await getCollectionProducts({
      collection: handle,
      sortKey: "BEST_SELLING",
      reverse: false,
    })

    if (!products || products.length === 0) {
      notFound()
    }

    const collectionTitle =
      handle.charAt(0).toUpperCase() + handle.slice(1).replace(/-/g, " ") + " Collection"

    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/collections">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Collections
            </Link>
          </Button>

          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-2">{collectionTitle}</h1>
          <p className="text-muted-foreground mb-8">
            Showing {products.length} {products.length === 1 ? "product" : "products"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  handle: product.handle,
                  name: product.title,
                  price: product.priceRange?.minVariantPrice?.amount
                    ? parseFloat(product.priceRange.minVariantPrice.amount)
                    : 0,
                  image: product.featuredImage?.url || "/placeholder.svg",
                  category: "Products",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Failed to fetch collection:", error)
    notFound()
  }
}
