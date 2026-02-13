import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Kimhab Ork',
  description: 'Terms and conditions for using Kimhab Ork website and services',
  openGraph: {
    title: 'Terms & Conditions | Kimhab Ork',
  },
}

export default function TermsPage() {
  return (
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-32 px-6 md:px-8 lg:px-10 bg-background">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Terms & Conditions
            </h1>
            <p className="text-lg text-foreground/70 text-balance max-w-2xl mx-auto">
              Please read these terms carefully before using Kimhab Ork services
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Agreement */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Agreement to Terms
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                By accessing and using this website and purchasing products from Kimhab Ork Co., Ltd., you agree to be bound by these Terms & Conditions. If you do not agree to these terms, you must discontinue use of our website and services immediately.
              </p>
            </div>

            {/* Use License */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Use License
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Permission is granted to temporarily download one copy of materials (information or software) from Kimhab Ork's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Modify or copy the materials</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Use the materials for any commercial purpose or for any public display</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Attempt to reverse engineer any software contained on the website</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Remove any copyright or other proprietary notations from the materials</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Transfer the materials to another person or "mirror" the materials on any other server</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Information */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Product Information & Pricing
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Kimhab Ork strives to provide accurate descriptions and pricing for all products on our website. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, or error-free.
                </p>
                <p>
                  We reserve the right to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Limit quantities or discontinue any product</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Correct pricing errors</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Refuse or cancel any order</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Orders & Payment */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Orders & Payment
              </h2>
              <div className="space-y-4 text-foreground/70">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Order Acceptance</h3>
                  <p>
                    Placing an order on our website constitutes an offer to purchase. All orders are subject to acceptance by Kimhab Ork. We reserve the right to refuse or cancel any order at our sole discretion.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 mt-4">Payment Terms</h3>
                  <p>
                    By providing payment information, you represent that you are authorized to use the payment method. You agree to pay all charges incurred in connection with your purchase, including applicable taxes and shipping fees.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 mt-4">Price Changes</h3>
                  <p>
                    Kimhab Ork reserves the right to change prices at any time. Price changes apply to orders placed after the change takes effect. We will notify you of price changes before processing your order.
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping & Delivery */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Shipping & Delivery
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Kimhab Ork ships to addresses specified at checkout. Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or customs authorities.
                </p>
                <p>
                  Risk of loss or damage to products passes to you upon delivery to the shipping carrier. For international orders, you are responsible for customs duties, taxes, and any import/export compliance.
                </p>
                <p>
                  We recommend purchasing shipping insurance for high-value items. Packages should be inspected upon receipt for damage.
                </p>
              </div>
            </div>

            {/* Returns & Refunds */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Returns & Refunds
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Our return policy is as follows:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Products must be returned within 30 days of purchase</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Items must be unworn, unwashed, and in original condition with tags attached</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Include original receipt or order confirmation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Customer is responsible for return shipping costs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Refunds are processed within 7-10 business days after receipt</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Final sale items, undergarments, and swimwear cannot be returned unless defective.
                </p>
              </div>
            </div>

            {/* Warranties */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Product Warranties
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Kimhab Ork warrants that products are free from defects in materials and workmanship for 90 days from purchase. This warranty does not cover:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Normal wear and tear</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Damage from improper care or storage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Color fading or shrinkage from washing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Damage from accidents or misuse</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  In no event shall Kimhab Ork, its owners, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our website or products, even if we have been advised of the possibility of such damages.
                </p>
                <p>
                  Our total liability to you for any claim shall not exceed the amount paid for the product that is the subject of the claim.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                User Responsibilities
              </h2>
              <p className="text-foreground/70 mb-4">You agree to:</p>
              <ul className="space-y-2 text-foreground/70 ml-4">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Provide accurate and complete information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Not use our website for illegal or harmful purposes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Respect intellectual property rights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Not attempt to gain unauthorized access to our systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Comply with all applicable laws and regulations</span>
                </li>
              </ul>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Governing Law
              </h2>
              <p className="text-foreground/70">
                These Terms & Conditions shall be governed by and construed in accordance with the laws of Cambodia. Any legal action shall be subject to the exclusive jurisdiction of the courts of Cambodia.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Changes to Terms
              </h2>
              <p className="text-foreground/70">
                Kimhab Ork reserves the right to modify these Terms & Conditions at any time. Changes are effective upon posting to our website. Continued use of the website constitutes acceptance of modified terms.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-card p-8 rounded-lg border border-border/40">
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                Questions?
              </h2>
              <p className="text-foreground/70 mb-4">
                For questions about these Terms & Conditions, please contact us:
              </p>
              <div className="text-foreground font-semibold">
                <p>Kimhab Ork Co., Ltd.</p>
                <p>Email: support@kimhabork.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}
