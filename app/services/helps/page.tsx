import { Metadata } from 'next'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Help & FAQs | Kimhab Ork',
  description: 'Frequently asked questions and helpful information about Kimhab Ork products, sizing, personalization, payments, and more.',
  openGraph: {
    title: 'Help & FAQs | Kimhab Ork',
    description: 'Get answers to common questions about our womenswear collection',
  },
}

const faqCategories = [
  {
    category: 'Size Information',
    faqs: [
      {
        question: 'How do I find my correct size?',
        answer: 'Please consult our detailed size table available on each product page. The size table serves as an indicator for each product and includes measurements in centimeters. If you have selected the wrong size, you have the possibility to return the item. Should you have any doubt regarding the right size, please do not hesitate to reach out to our customer service team.'
      },
      {
        question: 'What if my size is not available?',
        answer: 'If your preferred size is currently out of stock, please reach out to our customer support team. We can help you explore alternatives or notify you when your size becomes available again.'
      },
      {
        question: 'Do you offer exchanges for different sizes?',
        answer: 'Yes, we offer size exchanges. Please contact our customer service team with your order number and preferred size. Exchanges are subject to our return and exchange policy terms.'
      }
    ]
  },
  {
    category: 'Personalization & Customization',
    faqs: [
      {
        question: 'What personalization options are available?',
        answer: 'Kimhab Ork offers personalization services including custom monograms, embroidery, and monogramming on selected items. Personalization adds to the standard price of your chosen item. The personalization cost will be added to the standard price of the item. Please note that personalized orders may take longer to produce.'
      },
      {
        question: 'Can I change my personalized order after purchase?',
        answer: 'Due to their handcrafted nature, personalized orders cannot be changed or returned once production has begun. Please carefully review all personalization details before finalizing your order. Our team strongly recommends confirming all details before completing your purchase.'
      },
      {
        question: 'How long does personalization take?',
        answer: 'Personalized items are handcrafted and typically require additional production time. Standard personalization takes 2-3 weeks from the order date. Please note that rush personalization may be available at an additional charge. Contact us for specific timelines.'
      }
    ]
  },
  {
    category: 'Product Availability',
    faqs: [
      {
        question: 'Are all items available in Kimhab Ork Online Store?',
        answer: 'All items that you can see in the Kimhab Ork Online Store are in stock. However, single sizes and color options may occasionally be limited. We work to keep our online inventory up to date with accurate stock information.'
      },
      {
        question: 'How do I know when out-of-stock items will be available?',
        answer: 'For out-of-stock items, you can request a restock notification. We will alert you via email when the item becomes available. You can also contact our customer service team for specific restock timelines.'
      },
      {
        question: 'Can I pre-order items?',
        answer: 'Pre-orders are available for select seasonal collections. Please check individual product pages for pre-order options. Pre-order items will ship on the date specified, and a separate shipping notification will be sent.'
      }
    ]
  },
  {
    category: 'Payment Information',
    faqs: [
      {
        question: 'What payment methods are accepted?',
        answer: 'We accept all major payment methods including credit cards, debit cards, digital wallets, and bank transfers. The accepted payment options vary depending on your location. Please refer to the checkout page for available methods in your country.'
      },
      {
        question: 'Is my payment information secure?',
        answer: 'Yes, we use industry-standard security measures to protect your payment information. Our website employs SSL encryption, and all transactions are processed through secure payment gateways. Your credit card information is not stored on our servers.'
      },
      {
        question: 'Can I use multiple payment methods for one order?',
        answer: 'Currently, each order must be completed with a single payment method. If you need to split payment, please contact our customer service team to explore available options.'
      }
    ]
  },
  {
    category: 'Shipping & Delivery',
    faqs: [
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping typically takes 5-10 business days from order confirmation. Express shipping options are available and take 2-3 business days. Delivery times may vary based on your location and current logistics conditions.'
      },
      {
        question: 'Can I track my order?',
        answer: 'Yes, you will receive a tracking number via email once your order ships. You can use this number to monitor your package\'s progress. Tracking information is available on our website and the carrier\'s website.'
      },
      {
        question: 'What are the shipping costs?',
        answer: 'Shipping costs are calculated based on your location, order weight, and selected shipping method. You will see the exact shipping cost before finalizing your purchase at checkout. We offer free shipping on orders above a certain amount.'
      }
    ]
  },
  {
    category: 'Returns & Exchanges',
    faqs: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy from the date of purchase. Items must be unworn, unwashed, and in original packaging with all tags attached. Please note that personalized items cannot be returned unless defective. Returns initiated after 30 days may not be eligible for a refund.'
      },
      {
        question: 'How do I return an item?',
        answer: 'To initiate a return, contact our customer service team with your order number. We will provide you with a return shipping label and instructions. Please ship the item back to us in its original condition within 14 days.'
      },
      {
        question: 'When will I receive my refund?',
        answer: 'Once we receive and inspect your returned item, we will process the refund within 7-10 business days. The refund will be credited to your original payment method. Please allow additional time for your bank to process the refund.'
      }
    ]
  },
  {
    category: 'Product Care & Maintenance',
    faqs: [
      {
        question: 'How should I care for my items?',
        answer: 'Each Kimhab Ork piece comes with specific care instructions on the label. For detailed guidance, please visit our comprehensive Care Guides page, which provides fabric-specific care instructions for cotton, silk, cashmere, leather, and more.'
      },
      {
        question: 'Do you offer repair services?',
        answer: 'Yes, we provide repair and alteration services for eligible items. Please contact our customer service team to discuss your specific repair needs. Repair costs will depend on the type and extent of the damage.'
      },
      {
        question: 'What warranty do my items have?',
        answer: 'Kimhab Ork items are crafted from high-quality materials and come with standard craftsmanship guarantees. If you discover a defect, please contact us within 30 days of purchase with photos and a detailed description.'
      }
    ]
  },
  {
    category: 'Account & Login',
    faqs: [
      {
        question: 'How do I create an account?',
        answer: 'You can create an account directly during checkout or by visiting our registration page. Provide a valid email address and create a password. Your account will allow you to track orders and save shipping information.'
      },
      {
        question: 'I forgot my password. What should I do?',
        answer: 'Click the "Forgot Password" link on the login page. Enter your registered email address, and we will send you a password reset link. Follow the instructions in the email to create a new password.'
      },
      {
        question: 'Can I change my account information?',
        answer: 'Yes, you can update your profile information, address, and payment methods from your account dashboard. Log in to your account and navigate to account settings to make changes.'
      }
    ]
  },
  {
    category: 'Promotions & Special Offers',
    faqs: [
      {
        question: 'How do I stay updated on sales and promotions?',
        answer: 'Subscribe to our newsletter to receive notifications about upcoming sales, seasonal collections, and exclusive offers. You can also follow our social media accounts for the latest promotions and updates.'
      },
      {
        question: 'Can I combine multiple promotional codes?',
        answer: 'Generally, only one promotional code can be applied per order. If you have questions about a specific promotion, please contact our customer service team.'
      },
      {
        question: 'Do your promotions apply to sale items?',
        answer: 'Promotional codes may have restrictions and may not apply to already-discounted or sale items. The terms of each promotion will be clearly specified at the time of the offer.'
      }
    ]
  },
  {
    category: 'Contact & Customer Support',
    faqs: [
      {
        question: 'How can I contact customer support?',
        answer: 'You can reach our customer service team via email at support@kimhabork.com. We are available during business hours and typically respond within 24 hours. You can also contact us through our website contact form.'
      },
      {
        question: 'What are your business hours?',
        answer: 'Our customer service team is available Monday through Friday from 9 AM to 6 PM (GMT+7). For urgent inquiries, please use our email contact form and we will prioritize your request.'
      },
      {
        question: 'Do you have a physical store?',
        answer: 'Kimhab Ork operates primarily through our online store. However, we occasionally participate in fashion events and pop-up exhibitions. Follow our social media for announcements about physical locations and events.'
      }
    ]
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border border-border/70 rounded-lg overflow-hidden hover:border-primary/60 transition-colors">
      <summary className="cursor-pointer px-6 py-4 bg-primary/85 hover:bg-primary/95 transition-colors flex items-center justify-between">
        <h3 className="font-semibold text-primary-foreground text-left">{question}</h3>
        <ChevronDown className="w-5 h-5 text-primary-foreground group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
      </summary>
      <div className="px-6 py-4 bg-card border-t border-border/70">
        <p className="text-foreground/75 leading-relaxed">{answer}</p>
      </div>
    </details>
  )
}

function CategorySection({ category, faqs }: { category: string; faqs: Array<{ question: string; answer: string }> }) {
  return (
    <div>
      <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6">
        {category}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

export default function HelpFaqsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Help & FAQs
          </h1>
          <p className="text-xl md:text-2xl text-foreground/75 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Find answers to your questions about Kimhab Ork products, ordering, shipping, returns, and more. Browse our comprehensive FAQ section or contact our customer support team.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((category, index) => (
              <CategorySection key={index} category={category.category} faqs={category.faqs} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-4xl">
          <div className="bg-muted/50 border border-border/40 p-8 rounded-lg text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              We are here to help! If you cannot find the answer to your question in our FAQ section, please do not hesitate to contact our customer service team.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded p-6 inline-block">
              <p className="text-foreground/75 mb-2">
                <span className="font-semibold text-foreground">Email:</span> support@kimhabork.com
              </p>
              <p className="text-foreground/75">
                <span className="font-semibold text-foreground">Hours:</span> Monday - Friday, 9 AM - 6 PM (GMT+7)
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
