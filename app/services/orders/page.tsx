import React from "react"
import { Metadata } from 'next'
import { ChevronDown, Package, Truck, RotateCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Orders, Shipping & Returns | Kimhab Ork',
  description: 'Learn about our order process, shipping options, delivery times, return policy, and exchange procedures at Kimhab Ork.',
  openGraph: {
    title: 'Orders, Shipping & Returns | Kimhab Ork',
    description: 'Complete information about ordering, shipping, and returns',
  },
}

function DetailCard({ icon: Icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="border border-border/40 rounded-lg p-6 bg-muted/30 hover:bg-muted/50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="text-primary mt-1">
          {Icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
          <div className="text-foreground/70 space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group border border-border/70 rounded-lg overflow-hidden hover:border-primary/60 transition-colors">
      <summary className="cursor-pointer px-6 py-4 bg-primary/85 hover:bg-primary/95 transition-colors flex items-center justify-between">
        <h3 className="font-semibold text-primary-foreground">{title}</h3>
        <ChevronDown className="w-5 h-5 text-primary-foreground group-open:rotate-180 transition-transform" />
      </summary>
      <div className="px-6 py-4 bg-card border-t border-border/70 space-y-4">
        {children}
      </div>
    </details>
  )
}

export default function OrdersShippingReturnsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Orders, Shipping & Returns
          </h1>
          <p className="text-lg text-foreground/75 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Complete information about placing orders, shipping options, delivery times, and our hassle-free return and exchange policies.
          </p>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DetailCard icon={<Package className="w-6 h-6" />} title="Order Processing">
              <p>Orders are processed within 24 hours. You will receive a confirmation email with order details and tracking information once your item ships.</p>
            </DetailCard>
            <DetailCard icon={<Truck className="w-6 h-6" />} title="Fast Shipping">
              <p>Standard shipping: 5-10 business days. Express shipping: 2-3 business days. Free shipping on orders above €100 to selected countries.</p>
            </DetailCard>
            <DetailCard icon={<RotateCw className="w-6 h-6" />} title="Easy Returns">
              <p>30-day return policy. Free returns on most orders. Exchange items for different sizes or colors. Refunds processed within 7-10 business days.</p>
            </DetailCard>
          </div>
        </div>
      </section>

      {/* Placing Your Order */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
            Placing Your Order
          </h2>
          <div className="space-y-4">
            <AccordionItem title="How do I place an order?">
              <p className="text-foreground/75">
                Browse our collection on our website, select your preferred items and sizes, and add them to your shopping cart. Review your items, proceed to checkout, and follow the payment process. Once your order is confirmed, you will receive an order confirmation email with all details.
              </p>
            </AccordionItem>
            <AccordionItem title="Can I save items in my cart for later?">
              <p className="text-foreground/75">
                Yes, you can add items to your cart and save them for later. However, items are only reserved while in your cart. We recommend completing your purchase within a reasonable timeframe as popular sizes may sell out.
              </p>
            </AccordionItem>
            <AccordionItem title="Can I modify my order after placing it?">
              <p className="text-foreground/75">
                Orders can be modified within one hour of placement if they have not yet been processed. If your order has already been confirmed and sent to our warehouse, you will need to place a new order instead. Contact our customer service team immediately if you need to make changes.
              </p>
            </AccordionItem>
            <AccordionItem title="What payment methods do you accept?">
              <p className="text-foreground/75">
                We accept all major credit and debit cards (Visa, Mastercard, American Express), digital wallets, and bank transfers. Payment security is guaranteed through industry-standard SSL encryption. Your payment information is secure and encrypted during transmission.
              </p>
            </AccordionItem>
            <AccordionItem title="Is my personal information secure?">
              <p className="text-foreground/75">
                Yes, we employ advanced security measures to protect your personal and payment information. Our website uses SSL technology and complies with international data protection regulations. We never share your information with third parties without consent.
              </p>
            </AccordionItem>
            <AccordionItem title="Do you charge taxes and duties?">
              <p className="text-foreground/75">
                The price displayed on our website is the final price for orders within the EU. For international orders, local taxes and import duties may apply. These additional charges will be calculated at checkout based on your destination country.
              </p>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
            Shipping Information
          </h2>
          <div className="space-y-4">
            <AccordionItem title="What are your shipping options?">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Standard Shipping</h4>
                  <p className="text-foreground/75">5-10 business days. Available to all countries. Tracking provided.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Express Shipping</h4>
                  <p className="text-foreground/75">2-3 business days. Premium shipping option for faster delivery. Available to selected countries.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Free Shipping</h4>
                  <p className="text-foreground/75">Orders over €100 to EU countries. Calculated at checkout. Conditions apply.</p>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem title="What are your shipping rates?">
              <p className="text-foreground/75 mb-4">
                Shipping costs depend on your destination country and the weight of your order. Costs are calculated and displayed at checkout before you confirm your order. We offer competitive rates and regularly negotiate to provide the best prices.
              </p>
              <div className="bg-muted p-4 rounded border border-border/40">
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold">Example rates:</span> EU €5-15, UK €8-20, USA €12-30. Actual rates depend on your specific location and order weight.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="How do I track my shipment?">
              <p className="text-foreground/75 mb-4">
                Once your order ships, you will receive an email with a tracking number and a link to track your package. You can also log into your account on our website and view the shipping status of your orders at any time.
              </p>
              <p className="text-foreground/75">
                Tracking information is updated regularly as your package moves through our distribution network and that of our shipping partners.
              </p>
            </AccordionItem>
            <AccordionItem title="Can I change my delivery address after ordering?">
              <p className="text-foreground/75">
                If your order has not yet shipped, we may be able to change your delivery address. Contact our customer service team immediately with your request. Once an order has been dispatched, the address cannot be changed.
              </p>
            </AccordionItem>
            <AccordionItem title="What happens if my package is lost or damaged?">
              <p className="text-foreground/75 mb-4">
                We are responsible for packages until they are delivered and signed for. If your package arrives damaged, please contact our customer service team within 48 hours with photos of the damage.
              </p>
              <p className="text-foreground/75">
                If your package is lost in transit, we will work with the shipping carrier to locate it. If the package cannot be recovered, we will arrange a replacement or refund.
              </p>
            </AccordionItem>
            <AccordionItem title="Do you ship internationally?">
              <p className="text-foreground/75">
                Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination. During checkout, select your country to see available shipping options and associated costs for your location.
              </p>
            </AccordionItem>
            <AccordionItem title="Are there any countries you don't ship to?">
              <p className="text-foreground/75">
                We currently ship to most countries. However, we have restrictions on a few locations due to customs regulations and shipping limitations. A complete list of restricted countries is available at checkout.
              </p>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* Returns & Exchanges */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
            Returns & Exchanges
          </h2>
          <div className="space-y-4 mb-8">
            <AccordionItem title="What is your return policy?">
              <div className="space-y-4">
                <p className="text-foreground/75">
                  Kimhab Ork offers a 30-day return policy from the date of purchase. Items must meet the following conditions:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3 text-foreground/75">
                    <span className="text-primary font-semibold">•</span>
                    <span>Unworn and unwashed</span>
                  </li>
                  <li className="flex gap-3 text-foreground/75">
                    <span className="text-primary font-semibold">•</span>
                    <span>In original condition and packaging</span>
                  </li>
                  <li className="flex gap-3 text-foreground/75">
                    <span className="text-primary font-semibold">•</span>
                    <span>All original tags and labels attached</span>
                  </li>
                  <li className="flex gap-3 text-foreground/75">
                    <span className="text-primary font-semibold">•</span>
                    <span>Not personalized (unless defective)</span>
                  </li>
                </ul>
              </div>
            </AccordionItem>
            <AccordionItem title="How do I initiate a return?">
              <p className="text-foreground/75 mb-4">
                To start the return process, contact our customer service team at support@kimhabork.com with your order number. Provide details about which items you wish to return and the reason for the return.
              </p>
              <p className="text-foreground/75 mb-4">
                We will provide you with a return shipping label and detailed return instructions. Pack your items securely and ship them back to us within 14 days of receiving the return label.
              </p>
              <div className="bg-muted p-4 rounded border border-border/40">
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold">Note:</span> Please keep your shipping receipt and tracking information for your records.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="How much does return shipping cost?">
              <p className="text-foreground/75">
                Return shipping is free for most orders within the EU. For international returns, shipping costs may apply depending on your location. The cost, if any, will be clearly communicated when you initiate the return.
              </p>
            </AccordionItem>
            <AccordionItem title="When will I receive my refund?">
              <div className="space-y-4">
                <p className="text-foreground/75">
                  Once we receive your return, we will inspect the items to ensure they meet our return conditions. This process typically takes 5-7 business days. After inspection, we will process your refund.
                </p>
                <div className="bg-muted p-4 rounded border border-border/40">
                  <p className="text-sm text-foreground/70">
                    <span className="font-semibold">Timeline:</span> Items receive → Inspection (5-7 days) → Refund processed (1-2 days) → Funds appear in your account (5-10 business days)
                  </p>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem title="What items are not returnable?">
              <p className="text-foreground/75 mb-4">
                The following items may not be returned:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-semibold">•</span>
                  <span>Personalized or customized items (unless defective)</span>
                </li>
                <li className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-semibold">•</span>
                  <span>Items returned after 30 days from purchase</span>
                </li>
                <li className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-semibold">•</span>
                  <span>Worn, washed, or damaged items</span>
                </li>
                <li className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-semibold">•</span>
                  <span>Items without original tags or packaging</span>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem title="Do you offer exchanges?">
              <p className="text-foreground/75 mb-4">
                Yes, we offer free exchanges within 30 days of purchase for different sizes or colors of the same item. To request an exchange:
              </p>
              <ol className="space-y-2 ml-4">
                <li className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-semibold">1.</span>
                  <span>Contact our customer service team with your order number</span>
                </li>
                <li className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-semibold">2.</span>
                  <span>Specify the size/color you would like instead</span>
                </li>
                <li className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-semibold">3.</span>
                  <span>Return the original item to us</span>
                </li>
                <li className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-semibold">4.</span>
                  <span>We will ship the new item to you</span>
                </li>
              </ol>
            </AccordionItem>
            <AccordionItem title="What if I received a defective item?">
              <p className="text-foreground/75 mb-4">
                If you receive a defective item due to manufacturing fault, we will replace it or issue a full refund. Please contact us within 30 days of purchase with:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-semibold">•</span>
                  <span>Your order number</span>
                </li>
                <li className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-semibold">•</span>
                  <span>Detailed description of the defect</span>
                </li>
                <li className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-semibold">•</span>
                  <span>Clear photos showing the defect</span>
                </li>
              </ul>
              <p className="text-foreground/75 mt-4">
                We will work with you to resolve the issue promptly, including arranging replacements or refunds at no cost to you.
              </p>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* Return Address */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
            Return Address
          </h2>
          <div className="bg-background border border-border/40 p-8 rounded-lg">
            <p className="text-foreground/75 mb-6">
              When you initiate a return, we will provide you with the appropriate return address for your location. Return addresses may vary based on your shipping region. Please do not ship items to us without receiving explicit return instructions first.
            </p>
            <div className="bg-primary/10 border border-primary/20 p-6 rounded">
              <p className="text-foreground font-semibold mb-2">General Return Contact:</p>
              <p className="text-foreground/75 mb-4">
                For return inquiries: support@kimhabork.com
              </p>
              <p className="text-foreground font-semibold mb-2">Important:</p>
              <p className="text-foreground/75 text-sm">
                Always contact customer service before shipping items back. This ensures your return is properly tracked and processed efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Summary */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-4xl">
          <div className="bg-muted/50 border border-border/40 p-8 rounded-lg text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              More Questions?
            </h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              We have compiled answers to the most common questions about our products, sizes, and services. Visit our comprehensive Help & FAQs page for additional information.
            </p>
            <div className="inline-block bg-primary/10 border border-primary/20 p-6 rounded">
              <p className="text-foreground/75">
                <span className="font-semibold text-foreground">Hours:</span> Monday - Friday, 9 AM - 6 PM (GMT+7)
              </p>
              <p className="text-foreground/75 mt-2">
                <span className="font-semibold text-foreground">Email:</span> support@kimhabork.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
