import { ProductCard } from "./product-card"
import { getProducts } from "@/lib/shopify"
import { unstable_cache } from "next/cache"

type MappedProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const fallbackProducts: MappedProduct[] = [
  {
    id: "1",
    name: "Classic Double-Breasted Suit",
    price: 1289,
    image: "/thudarum-taupe-suit-hero.jpg",
    category: "Suits",
  },
  {
    id: "2",
    name: "Heritage Green Check Blazer",
    price: 895,
    image: "/thudarum-green-check-blazer.jpg",
    category: "Blazers",
  },
  {
    id: "3",
    name: "Luxe Evening Suit",
    price: 1545,
    image: "/thudarum-burgundy-evening-suit.jpg",
    category: "Suits",
  },
  {
    id: "4",
    name: "Textured Blazer",
    price: 795,
    image: "/thudarum-sky-blue-blazer.jpg",
    category: "Blazers",
  },
  {
    id: "5",
    name: "Blazer with Cream Trousers",
    price: 985,
    image: "/thudarum-burgundy-blazer-combo.jpg",
    category: "Separates",
  },
  {
    id: "6",
    name: "Double-Breasted Jacket",
    price: 1195,
    image: "/thudarum-navy-velvet-blazer.jpg",
    category: "Blazers",
  },
  {
    id: "7",
    name: "Double-Breasted Suit",
    price: 1345,
    image: "/thudarum-gray-suit-refined.jpg",
    category: "Suits",
  },
  {
    id: "8",
    name: "Modern Blazer Set",
    price: 1095,
    image: "/thudarum-slate-blazer-set.jpg",
    category: "Separates",
  },
]

// Cache products for 1 hour with revalidation tag
const getCachedProducts = unstable_cache(
  async () => {
    try {
      return await getProducts()
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      console.error("[v0] Error in getCachedProducts:", errorMessage)
      return null
    }
  },
  ['shopify-products'],
  { tags: ['shopify-products'], revalidate: 3600 }
)

/**
 * Transform Shopify product data into the format used by ProductCard
 */
function transformShopifyProduct(product: any): MappedProduct | null {
  try {
    // Validate required fields
    if (!product?.id || !product?.title) {
      console.warn("[v0] Product missing required fields - id or title:", { id: product?.id, title: product?.title })
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
      id: product.id,
      name: product.title.trim(),
      price,
      image: imageUrl,
      category,
    }
  } catch (error) {
    console.error("[v0] Error transforming product:", { product, error })
    return null
  }
}

interface ProductGridProps {
  query?: string;
  sortBy?: "newest" | "price-low" | "price-high" | "";
}

export async function ProductGrid({ query = "", sortBy = "" }: ProductGridProps = {}) {
  let products: MappedProduct[] = fallbackProducts

  try {
    const shopifyProducts = await getCachedProducts()
    
    if (shopifyProducts && Array.isArray(shopifyProducts) && shopifyProducts.length > 0) {
      const mappedProducts = shopifyProducts
        .map((product) => transformShopifyProduct(product))
        .filter((product): product is MappedProduct => product !== null)

      if (mappedProducts.length > 0) {
        products = mappedProducts
      }
    }
  } catch (error) {
    console.error("[v0] Failed to fetch Shopify products:", error)
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
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full py-12 text-center">
          <p className="text-muted-foreground">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
