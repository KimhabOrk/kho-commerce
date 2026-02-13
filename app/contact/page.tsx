import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Contact Us - Thudarum",
  description: "Get in touch with Thudarum. We'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our collections? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-2 gap-4 mb-16 sm:mb-20">
          {/* Email */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-secondary rounded-xl">
                <Mail className="h-5 w-5 text-foreground" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">
              <a
                href="mailto:info@khlimhab.com"
                className="hover:text-foreground transition-colors"
              >
                info@kimhab.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-secondary rounded-xl">
                <Phone className="h-5 w-5 text-foreground" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">
              <a
                href="tel:+85512345678"
                className="hover:text-foreground transition-colors"
              >
                +855 12 345-678
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-muted rounded-2xl p-8 sm:p-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-8 text-center">
              Send us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2">
                How long does shipping take?
              </h3>
              <p className="text-muted-foreground">
                We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Shipping times may vary depending on your location.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2">
                What is your return policy?
              </h3>
              <p className="text-muted-foreground">
                We offer a 30-day return policy on all unused items in original condition. Please contact our customer service team for details on how to initiate a return.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2">
                Do you offer custom tailoring?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer custom tailoring services for our premium collections. Please reach out to us to discuss your specific requirements.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2">
                How can I track my order?
              </h3>
              <p className="text-muted-foreground">
                Once your order ships, you'll receive a tracking number via email. You can use this to monitor your package's journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
