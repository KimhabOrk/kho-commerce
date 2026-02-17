import { ProductCard } from "./product-card"
import { getProducts } from "@/lib/shopify"
import { unstable_cache } from "next/cache"

type MappedProduct = {
  id: string;
  handle: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

// Cache products for 1 hour with revalidation tag
const getCachedProducts = unstable_cache(
  async () => {
    try {
      return await getProducts()
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      console.error("Error in getCachedProducts:", errorMessage)
      return null
    }
  },
  ['shopify-products'],
  { tags: ['shopify-products'], revalidate: 3600 }
)

/**
 * Transform Shopify product data into the format used by ProductCard
 * Uses product handle for routing instead of ID
 */
function transformShopifyProduct(product: any): MappedProduct | null {
  try {
    // Validate required fields - handle is crucial for routing
    if (!product?.handle || !product?.title) {
      console.warn("Product missing required fields - handle or title:", { handle: product?.handle, title: product?.title })
      return null
    }

    // Extract price - handle different price formats
    let price = 0
    if (product.priceRange?.minVariantPrice?.amount) {
      price = parseFloat(product.priceRange.minVariantPrice.amount)
    } else if (product.variants?.[0]?.price?.amount) {
      price = parseFloat(product.variants[0].price.amount)
    }

    // Extract image URL - fallback to placeholder if missing
    const imageUrl = product.featuredImage?.url 
      || product.images?.[0]?.url 
      || "/placeholder.svg"

    // Extract category from tags or SEO
    const category = product.seo?.title 
      || product.tags?.[0] 
      || product.productType 
      || "Products"

    return {
      id: product.handle,
      handle: product.handle,
      name: product.title.trim(),
      price,
      image: imageUrl,
      category,
    }
  } catch (error) {
    console.error("Error transforming product:", { product, error })
    return null
  }
}

interface ProductGridProps {
  query?: string;
  sortBy?: "newest" | "price-low" | "price-high" | "";
}

export async function ProductGrid({ query = "", sortBy = "" }: ProductGridProps = {}) {
  let products: MappedProduct[] = []

  try {
    const shopifyProducts = await getCachedProducts()
    
    if (shopifyProducts && Array.isArray(shopifyProducts) && shopifyProducts.length > 0) {
      const mappedProducts = shopifyProducts
        .map((product) => transformShopifyProduct(product))
        .filter((product): product is MappedProduct => product !== null)

      if (mappedProducts.length > 0) {
        products = mappedProducts
      } else {
        throw new Error("No valid products found after transformation")
      }
    } else {
      throw new Error("No products returned from Shopify API")
    }
  } catch (error) {
    console.error("Failed to fetch Shopify products. Please ensure SHOPIFY_STOREFRONT_ACCESS_TOKEN is set:", error)
  }

  // Filter by search query
  let filteredProducts = products.filter((product) => {
    if (!query) return true
    const searchLower = query.toLowerCase()
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower)
    )
  })

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === "newest") {
    // Keep original order (newest first from Shopify)
    filteredProducts = [...filteredProducts].reverse()
  }

  return (
    <div className="w-full">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="col-span-full py-12 text-center border border-dashed border-muted-foreground/30 rounded-lg">
          <p className="text-muted-foreground mb-4">Unable to load products from Shopify.</p>
          <p className="text-sm text-muted-foreground">
            Please ensure SHOPIFY_STOREFRONT_ACCESS_TOKEN environment variable is set.
          </p>
        </div>
      )}
    </div>
  )
}
