import type React from "react"
import { CartProvider as ShopifyCartProvider, useCart } from "./cart/cart-context"
import type { Cart } from "@/lib/shopify/types"

// Re-export useCart for backward compatibility
export { useCart }

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export function CartProvider({
  children,
  cart
}: {
  children: React.ReactNode
  cart: Cart | undefined
}) {
  const cartPromise = Promise.resolve(cart)

  return (
    <ShopifyCartProvider cartPromise={cartPromise}>
      {children}
    </ShopifyCartProvider>
  )
}
