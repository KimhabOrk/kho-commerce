import { ProductProvider } from "@/components/product/product-context";
import { Gallery } from "@/components/product/gallery";
import { ProductDescription } from "@/components/product/product-description";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProduct, getProducts } from "@/lib/shopify";
import type { Product as ShopifyProduct } from "@/lib/shopify/types";

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.slice(0, 12).map((product) => ({
      handle: product.handle,
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;

  try {
    const product = await getProduct(handle);
    if (product) {
      return {
        title: product.title,
        description: product.seo?.description || "Premium fashion product",
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
  }

  return {
    title: "Product",
    description: "Premium fashion product",
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  let product: ShopifyProduct | null = null;

  try {
    product = await getProduct(handle);
  } catch (error) {
    console.error("Failed to fetch product from Shopify:", error);
  }

  if (!product) {
    notFound();
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <Button variant="ghost" asChild>
            <Link href="/shop">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Link>
          </Button>
        </div>
        <ProductProvider>
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12">
              <Gallery images={product.images} />
              <ProductDescription product={product} />
            </div>
          </div>
        </ProductProvider>
      </div>
    </>
  );
}
