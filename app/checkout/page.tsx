"use client"

import { CheckoutForm } from "@/components/checkout-form"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function CheckoutPage() {
  const { items, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/shop">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Shop
              </Link>
            </Button>
            <h1 className="font-serif text-3xl md:text-4xl md:text-5xl font-semibold mb-4">Checkout</h1>
            <p className="text-muted-foreground mb-8">Your cart is empty</p>
            <Button asChild size="lg">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const shipping = total >= 200 ? 0 : 15
  const tax = total * 0.08
  const orderTotal = total + shipping + tax

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 md:py-12">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/cart">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>
        </Button>

        <h1 className="font-serif text-3xl md:text-4xl md:text-5xl font-semibold mb-6 md:mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Checkout Form */}
          <div className="order-2 lg:order-1">
            <CheckoutForm total={orderTotal} />
          </div>

          {/* Order Summary */}
          <div className="order-1 lg:order-2">
            <div className="border border-border p-4 md:p-6 lg:sticky lg:top-24 rounded-none">
              <h2 className="font-serif text-xl md:text-2xl font-semibold mb-4 md:mb-6">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 max-h-48 md:max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-14 md:w-16 h-16 md:h-20 bg-secondary flex-shrink-0 overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium mb-1 truncate">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="border-t border-border pt-3 md:pt-4 space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-border pt-3 md:pt-4">
                <div className="flex justify-between font-serif text-lg md:text-xl font-semibold">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
