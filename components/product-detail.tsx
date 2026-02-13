"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import { useCart } from "./cart-provider"
import { useToast } from "@/hooks/use-toast"
import { Check, ShoppingBag, AlertCircle } from "lucide-react"
import type { Product as ShopifyProduct, ProductVariant } from "@/lib/shopify/types"

interface ProductDetailProps {
  product: ShopifyProduct | {
    id: string
    title: string
    priceRange?: { minVariantPrice?: { amount: string } }
    images: { url: string; altText?: string }[]
    description?: string
    variants?: ProductVariant[]
  }
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState<string>("")
  const [isAdding, setIsAdding] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  // Extract product data safely
  const title = product.title || "Product"
  const description = product.description || "High-quality product"
  const imagesList = Array.isArray(product.images)
    ? product.images.map(img => (typeof img === 'string' ? img : img.url))
    : []
  const price = product.priceRange?.minVariantPrice?.amount
    ? parseFloat(product.priceRange.minVariantPrice.amount)
    : 0
  
  // Extract available options from variants
  const variants = product.variants || []
  const variantOptions = variants.map(v => ({
    id: v.id,
    title: v.title || `Variant ${v.id}`,
    availableForSale: v.availableForSale,
    selectedOptions: v.selectedOptions || []
  }))

  const handleAddToCart = () => {
    if (!selectedVariant) {
      setShowError(true)
      toast({
        title: "Variant Required",
        description: "Please select a product variant",
        variant: "destructive",
        duration: 3000,
      })
      return
    }

    setIsAdding(true)
    setShowSuccess(true)
    setShowError(false)

    const item = {
      id: selectedVariant,
      name: title,
      price,
      image: imagesList[0] || "/placeholder.svg",
    }

    addItem(item)

    toast({
      title: "Added to cart!",
      description: title,
      duration: 2000,
    })

    setTimeout(() => {
      setIsAdding(false)
      setShowSuccess(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 md:gap-12">
        {/* Product Images */}
        <div className="space-y-3 md:space-y-4">
          <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
            <Image
              src={imagesList[selectedImage] || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            {showSuccess && (
              <div className="absolute inset-0 bg-foreground/90 flex items-center justify-center animate-in fade-in zoom-in-50 duration-300">
                <div className="bg-background text-foreground rounded-full p-4 md:p-6 animate-in zoom-in-50 duration-500 delay-150">
                  <Check className="h-8 w-8 md:h-12 md:w-12" />
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-3 md:gap-4">
            {imagesList.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-[3/4] bg-secondary overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? "border-foreground" : "border-transparent"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-4 md:mb-6">
            <h1 className="font-serif text-3xl md:text-4xl md:text-5xl font-semibold mb-3 md:mb-4 text-balance">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-medium">${price.toFixed(2)}</p>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
            {description}
          </p>

          {/* Variant Selection */}
          <div className={`mb-6 md:mb-8 transition-all duration-300 ${showError ? "animate-shake" : ""}`}>
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <h3 className="font-medium text-sm md:text-base">Select Variant</h3>
              {showError && (
                <div className="flex items-center gap-1 text-destructive text-xs md:text-sm animate-in fade-in">
                  <AlertCircle className="h-4 w-4" />
                  <span>Please select a variant</span>
                </div>
              )}
            </div>
            <div
              className={`flex flex-wrap gap-2 p-3 border-2 rounded transition-colors ${
                showError ? "border-destructive bg-destructive/5" : "border-transparent"
              }`}
            >
              {variantOptions.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => {
                    setSelectedVariant(variant.id)
                    setShowError(false)
                  }}
                  disabled={!variant.availableForSale}
                  className={`px-4 md:px-6 py-2 md:py-3 border transition-all duration-200 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
                    selectedVariant === variant.id
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background text-foreground border-border hover:border-foreground"
                  }`}
                >
                  {variant.title}
                </button>
              ))}
            </div>
          </div>

          <Button
            type="button"
            onClick={handleAddToCart}
            disabled={isAdding || !selectedVariant}
            size="lg"
            className="w-full h-12 md:h-14 text-sm md:text-base mb-6 md:mb-8"
          >
            {isAdding ? (
              <>
                <Check className="h-5 w-5 mr-2" />
                Added to Cart!
              </>
            ) : (
              <>
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </>
            )}
          </Button>

          {/* Shipping & Returns */}
          <div className="border-t border-border pt-6 md:pt-8 space-y-3 md:space-y-4 text-xs md:text-sm">
            <div>
              <h4 className="font-medium mb-2">Free Shipping</h4>
              <p className="text-muted-foreground">Complimentary shipping on all orders over $200</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Returns & Exchanges</h4>
              <p className="text-muted-foreground">30-day return policy for unworn items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
