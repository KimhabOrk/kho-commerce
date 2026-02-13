import { Metadata } from 'next'
import { FeatureCard } from '@/components/feature-card'
import Link from 'next/link'
import { Crown, Shield, TreePine, Users } from 'lucide-react'
import { HeroGradient } from '@/components/hero-gradient'

export const metadata: Metadata = {
  title: 'About Us | Kimhab Ork',
  description: 'Discover Kimhab Ork\'s story. An affordable luxury womenswear brand dedicated to quality, sustainability, and empowering women through fashion.',
  openGraph: {
    title: 'About Us | Kimhab Ork',
    description: 'Learn about our commitment to affordable luxury and sustainable fashion',
  },
}

export default function AboutPage() {
  const values = [
    {
      title: 'Quality Over Quantity',
      description: 'We believe in creating pieces that last. Every garment is carefully crafted with premium materials and attention to detail, ensuring you invest in items that remain timeless.',
    },
    {
      title: 'Accessible Luxury',
      description: 'Luxury fashion should not be exclusive. We make premium womenswear affordable without compromising on design, materials, or craftsmanship.',
    },
    {
      title: 'Sustainable Fashion',
      description: 'Our commitment to the environment is reflected in our material choices and production practices. We strive to minimize our ecological footprint while maximizing impact.',
    },
    {
      title: 'Empowered Women',
      description: 'We design for confident, modern women who value both style and substance. Every collection celebrates femininity, strength, and individuality.',
    },
  ]

  return (
      <main className="flex-1">
        <HeroGradient 
          title="Affordable Luxury for Modern Women"
          description="Kimhab Ork reimagines womenswear by combining exquisite design, premium quality materials, and sustainable practices at prices that celebrate accessibility."
        />
        {/* Hero Section
        <section className="relative py-12 md:py-16 lg:py-32 px-6 md:px-8 lg:px-10 bg-gradient-to-b from-background to-muted/10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              Affordable Luxury for Modern Women
            </h1>
            <p className="text-lg text-foreground/75 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
              Kimhab Ork reimagines womenswear by combining exquisite design, premium quality materials, and sustainable practices at prices that celebrate accessibility.
            </p>
          </div>
        </section>
        */}
        
        {/* Our Story Section */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-foreground/75 leading-relaxed">
              <p>
                Kimhab Ork was born from a simple belief: premium fashion should be accessible to everyone. Founded with a vision to bridge the gap between high fashion and everyday elegance, we create womenswear that empowers women to express themselves without compromise.
              </p>
              <p>
                Every piece in our collection is thoughtfully designed with the modern woman in mind. We draw inspiration from contemporary style, timeless elegance, and the diverse needs of women who refuse to choose between quality, design, and affordability.
              </p>
              <p>
                Our name reflects our commitment: Kimhab carries the essence of Khmer culture and heritage, while Ork symbolizes new beginnings and growth. Together, they represent our vision of creating something beautiful that resonates across cultures and generations.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-start">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Crown className="w-full h-full" />}
                title="Quality Over Quantity"
                description="We believe in creating pieces that last. Every garment is carefully crafted with premium materials and attention to detail."
                ctaText="Discover"
                ctaHref="/care-guides"
              />
              <FeatureCard
                icon={<Shield className="w-full h-full" />}
                title="Accessible Luxury"
                description="Luxury fashion should not be exclusive. We make premium womenswear affordable without compromising on design or craftsmanship."
                ctaText="Shop"
                ctaHref="/"
              />
              <FeatureCard
                icon={<TreePine className="w-full h-full" />}
                title="Sustainable Fashion"
                description="Our commitment to the environment is reflected in our material choices and production practices."
                ctaText="Learn"
                ctaHref="/responsibility"
              />
              <FeatureCard
                icon={<Users className="w-full h-full" />}
                title="Empowered Women"
                description="We design for confident, modern women who value both style and substance. Every collection celebrates femininity and strength."
                ctaText="Explore"
                ctaHref="/"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-start">
              Why Choose Kimhab Ork?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                    <span className="text-xl font-semibold">01</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Premium Materials
                  </h3>
                  <p className="text-foreground/75">
                    We source the finest fabrics and materials, including organic cotton, sustainable silk, and responsibly-sourced textiles that feel luxurious and last longer.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/15 text-primary">
                    <span className="text-xl font-semibold">02</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Timeless Design
                  </h3>
                  <p className="text-foreground/75">
                    Our collections focus on versatile, classic silhouettes with modern details. Pieces that work today and remain relevant for years to come.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/15 text-primary">
                    <span className="text-xl font-semibold">03</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Ethical Production
                  </h3>
                  <p className="text-foreground/75">
                    We partner with manufacturers who prioritize fair wages, safe working conditions, and environmental responsibility throughout our supply chain.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/15 text-primary">
                    <span className="text-xl font-semibold">04</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Exceptional Value
                  </h3>
                  <p className="text-foreground/75">
                    Quality womenswear at accessible prices. We believe you shouldn't have to compromise on quality or pay luxury prices for great fashion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-balance">
              Discover Our Collections
            </h2>
            <p className="text-lg mb-8 opacity-95 text-balance max-w-2xl mx-auto leading-relaxed">
              Explore our thoughtfully curated womenswear collections designed for the modern woman who values quality, style, and sustainability.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg hover:opacity-95 transition-all"
            >
              Shop Now
            </Link>
          </div>
        </section>
      </main>
  )
}
