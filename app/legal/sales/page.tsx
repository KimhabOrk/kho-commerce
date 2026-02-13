import { Metadata } from 'next'
import Image from 'next/image'
import { HeroGradient } from '@/components/hero-gradient'

export const metadata: Metadata = {
  title: 'General Sales Conditions | Kimhab Ork',
  description: 'General Sales Conditions for Kimhab Ork - Fashion & Accessories',
  openGraph: {
    title: 'General Sales Conditions | Kimhab Ork',
  },
}

export default function GeneralSalesConditionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <HeroGradient 
        title="General Sales Conditions"
        description="Fashion & Accessories - Terms & Conditions for all purchases"
      />
      
      {/* Sales Conditions Content */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Legal Terms and Conditions */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Legal Terms and Conditions
            </h2>
            <div className="text-foreground/70 space-y-4">
              <p>
                These General Sales Conditions ("Conditions") apply to all purchases made through Kimhab Ork's online store and physical boutiques. By making a purchase, you acknowledge and agree to be bound by these Conditions in their entirety.
              </p>
              <p>
                Kimhab Ork reserves the right to modify these Conditions at any time without prior notice. Modifications become effective upon posting to the website. Your continued use of our services constitutes acceptance of any updated Conditions.
              </p>
              <p>
                If you do not agree with any part of these Conditions, you should not make any purchases from Kimhab Ork. These Conditions represent the entire agreement between you and Kimhab Ork regarding your purchases.
              </p>
            </div>
          </div>

          {/* Company Identification */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Company Identification
            </h2>
            <div className="space-y-4 text-foreground/70">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Business Entity</h3>
                <p>
                  Kimhab Ork Co., Ltd. is a company registered and established under the laws of Cambodia, operating as a fashion and accessories retailer both online and through physical locations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Registration Information</h3>
                <div className="space-y-2">
                  <p><span className="font-semibold text-foreground">Company Registration Number:</span> CAM-2024-001234</p>
                  <p><span className="font-semibold text-foreground">VAT Registration Number:</span> VAT-2024-5678901</p>
                  <p><span className="font-semibold text-foreground">Trade Register Entry:</span> Registered with the Chamber of Commerce and Industry of Cambodia</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Contact Information</h3>
                <div className="space-y-2">
                  <p><span className="font-semibold text-foreground">Address:</span> 123 Fashion Street, Phnom Penh, Cambodia</p>
                  <p><span className="font-semibold text-foreground">Telephone:</span> +855 (23) 123-4567</p>
                  <p><span className="font-semibold text-foreground">Email:</span> customerservice@kimhabork.com</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Board of Directors</h3>
                <p>
                  Kimhab Ork Co., Ltd. is managed by a Board of Directors appointed according to Cambodian corporate law. The Board oversees all strategic decisions and ensures compliance with applicable regulations and these General Sales Conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Intellectual Property Rights
            </h2>
            <div className="space-y-4 text-foreground/70">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Trademarks and Distinguishing Signs</h3>
                <p>
                  All trademarks, logos, brand names, slogans, and distinguishing marks used in connection with Kimhab Ork's products and services are the exclusive property of Kimhab Ork Co., Ltd. These marks are protected by Cambodian and international intellectual property law.
                </p>
                <p className="mt-2">
                  Any reproduction, modification, or unauthorized use of these marks is strictly prohibited without written consent from Kimhab Ork. Unauthorized use may result in civil and criminal penalties.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Copyright and Content</h3>
                <p>
                  All content on our website and marketing materials, including but not limited to text, photographs, graphics, videos, product descriptions, drawings, and design elements, is protected by copyright and international treaties.
                </p>
                <p className="mt-2">
                  This content is the exclusive property of Kimhab Ork Co., Ltd. You may view and print content for personal use only. Any reproduction, distribution, modification, or commercial use is strictly prohibited without express written authorization.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Design Patents</h3>
                <p>
                  The design, layout, and distinctive appearance of our products, website, and marketing materials are protected by design patents and registered designs. These protections prevent unauthorized copying and imitation of our unique designs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Enforcement</h3>
                <p>
                  Kimhab Ork actively protects its intellectual property rights and reserves the right to pursue legal action against any party engaged in unauthorized use, counterfeiting, or infringement. This includes injunctions, damages claims, and criminal prosecution where applicable.
                </p>
              </div>
            </div>
          </div>

          {/* Website Ownership and Use */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Website Ownership and Use
            </h2>
            <div className="space-y-4 text-foreground/70">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Permitted Uses</h3>
                <p>
                  Our website is provided for your personal, non-commercial browsing and shopping use. You may view and download material for personal use only. Any other use is strictly prohibited.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Prohibited Activities</h3>
                <div className="space-y-2">
                  <p>You agree not to:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Reproduce or distribute website content without authorization</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Use website content for commercial purposes</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Attempt to gain unauthorized access to our systems</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Engage in any form of scraping or automated data collection</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Post or transmit harmful, offensive, or illegal content</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Interfere with website functionality or security</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Cookies and Data Privacy</h3>
                <p>
                  Our website uses cookies and similar technologies to enhance your browsing experience and collect analytics data. By using our website, you consent to the use of cookies as described in our Privacy Policy.
                </p>
                <p className="mt-2">
                  We collect personal data including name, email address, shipping address, payment information, and browsing history. This data is used to process orders, improve services, and comply with legal obligations. Your data is protected in accordance with applicable data protection laws.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Limitation of Liability
            </h2>
            <div className="text-foreground/70 space-y-4">
              <p>
                To the fullest extent permitted by applicable law, Kimhab Ork and its directors, employees, and agents shall not be liable for any damages arising from:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Inaccuracies or omissions in website content or product descriptions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Website interruptions, outages, or technical failures</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Unauthorized access to or loss of personal data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Viruses, malware, or malicious code</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Delays in delivery or fulfillment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Quality or condition of products upon receipt</span>
                </li>
              </ul>
              <p className="mt-4">
                In no event shall Kimhab Ork's total liability exceed the amount you paid for the product or service in question. This limitation applies to all claims arising from these Conditions or your use of our website and services.
              </p>
            </div>
          </div>

          {/* Currency and Pricing */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Currency and Pricing
            </h2>
            <div className="text-foreground/70 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Pricing Information</h3>
                <p>
                  All prices are displayed in the specified currency at the time of browsing. Prices include applicable Value Added Tax (VAT) unless otherwise stated. Pricing is subject to change without notice, but price changes will not affect orders already confirmed and paid.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Currency Conversion</h3>
                <p>
                  For international orders, prices may be displayed in multiple currencies. The exchange rate used is provided by our payment processor and may differ from your bank's rate. You are responsible for any currency conversion fees charged by your financial institution.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Taxes and Duties</h3>
                <p>
                  Prices shown are inclusive of VAT where applicable in Cambodia. For international shipments, additional taxes, customs duties, and import fees may apply in your country of residence. These charges are your responsibility and are not included in the displayed price.
                </p>
              </div>
            </div>
          </div>

          {/* Ownership of Website */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ownership of Website and Content
            </h2>
            <div className="text-foreground/70 space-y-4">
              <p>
                The website www.kimhabork.com and all of its content, design, functionality, and services are owned, operated, and controlled by Kimhab Ork Co., Ltd. All intellectual property rights, including copyrights, trademarks, and patents, are the exclusive property of Kimhab Ork or its licensors.
              </p>
              <p>
                No part of the website or its content may be reproduced, transmitted, or distributed without the express written consent of Kimhab Ork. Unauthorized copying, modification, or use of website content may result in civil and criminal penalties.
              </p>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Dispute Resolution and Amendments
            </h2>
            <div className="space-y-4 text-foreground/70">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Dispute Resolution</h3>
                <p>
                  In the event of any dispute arising from these Conditions or your purchase, you agree to first attempt resolution through direct communication with Kimhab Ork's customer service team at customerservice@kimhabork.com.
                </p>
                <p className="mt-2">
                  If disputes cannot be resolved through negotiation, they shall be resolved through binding arbitration in accordance with Cambodian law. Arbitration will take place in Phnom Penh, Cambodia, and the decision of the arbitrator is final and binding.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Amendments to Terms</h3>
                <p>
                  Kimhab Ork reserves the right to amend, modify, or update these General Sales Conditions at any time. Any changes will be effective immediately upon posting to the website. Your continued use of our services following the posting of modified Conditions constitutes your acceptance of the changes.
                </p>
                <p className="mt-2">
                  For significant changes, we will attempt to provide notice through email or prominent website notification. However, it is your responsibility to review these Conditions periodically to stay informed of any updates.
                </p>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Governing Law and Jurisdiction
            </h2>
            <div className="text-foreground/70 space-y-4">
              <p>
                These General Sales Conditions and all matters relating to your purchase are governed by and construed in accordance with the laws of Cambodia, without regard to its conflict of law provisions.
              </p>
              <p>
                You agree to submit to the exclusive jurisdiction of the courts located in Phnom Penh, Cambodia for the resolution of any disputes. Any legal action or proceeding arising from these Conditions must be brought exclusively in these courts.
              </p>
              <p>
                If any portion of these Conditions is found to be unenforceable, the remaining provisions shall continue in full force and effect. This does not affect the validity or enforcement of the other terms.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-muted/80 p-4 rounded-lg border border-border/40">
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Questions About Our Sales Conditions?
            </h2>
            <p className="text-foreground/70 mb-4">
              If you have any questions regarding these General Sales Conditions or need further clarification, please contact us:
            </p>
            <div className="text-foreground font-semibold space-y-2 text-wrap">
              <p>Kimhab Ork</p>
              <p>Email: 
                <a href="mailto:customerservice@kimhabork.com"> customerservice@kimhabork.com</a>
              </p>
              <p>Telephone: 
                <a href="tel:+855 (23) 123-4567"> +855 (23) 123-4567</a>
              </p>
              <p>
                <a href="/contact">Contact Form</a>
              </p>
            </div>
            <p className="text-foreground/70 mt-4 text-sm">
              Last Updated: February 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
