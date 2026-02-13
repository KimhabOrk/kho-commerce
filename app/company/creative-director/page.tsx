import { Metadata } from 'next'
import { FeatureCard } from '@/components/feature-card'
import { Award, Sparkles, Heart, Globe } from 'lucide-react'
import Image from 'next/image'
import { HeroGradient } from '@/components/hero-gradient'

export const metadata: Metadata = {
  title: 'Creative Director | Kimhab ORK',
  description: 'Meet the visionary behind Kimhab ORK - our Creative Director who leads the brand with passion for affordable luxury and sustainable fashion.',
  openGraph: {
    title: 'Creative Director | Kimhab ORK',
    description: 'Meet the visionary behind Kimhab ORK',
    type: 'website',
  },
}

export default function CreativeDirector() {
  return (
      <main>
        <HeroGradient
          title="Meet Our Creative Director"
          description="The visionary leading Kimhab ORK's journey to redefine affordable luxury fashion"
        />
        {/* Hero Section
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-background">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Meet Our Creative Director
              </h1>
              <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed">
                The visionary leading Kimhab ORK's journey to redefine affordable luxury fashion
              </p>
            </div>
          </div>
        </section>
        */}
        
        {/* Profile Section */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-background">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg shadow-gray-600/30 border border-border">
                  <Image
                    src="https://ik.imagekit.io/kimhabork/media/profile/director.jpg?updatedAt=1770273580618"
                    alt="Creative Director"
                    width={1200}
                    height={1200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    KIMHAB ORK
                  </h2>
                  <p className="text-xl font-semibold text-foreground mb-4">Creative Director & Founder</p>
                  <p className="text-foreground/75 leading-relaxed">
                    With over 15 years of experience in luxury fashion design, KIMHAB founded Kimhab ORK with a singular vision: to make high-quality, sustainably-produced womenswear accessible to everyone without compromising on elegance or ethics.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Design Philosophy</h3>
                    <p className="text-foreground/75 leading-relaxed">
                      KIMHAB believes that beautiful design transcends price points. Every piece in our collection reflects a commitment to timeless silhouettes, premium materials, and meticulous craftsmanship—all at prices that celebrate affordability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Sustnability Mission</h3>
                    <p className="text-foreground/75 leading-relaxed">
                      Driven by environmental consciousness, KIMHAB leads our responsibility initiatives, ensuring every garment is produced ethically and sustainably. The vision extends beyond fashion to create positive impact on communities and our planet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-background">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              The Creative Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">Early Inspiration</h3>
                <p className="text-foreground/75 leading-relaxed">
                  Growing up in Cambodia, KIMHAB was captivated by the rich textile traditions and artisan craftsmanship that defines the region. This early exposure sparked a passion for creating fashion that honors heritage while embracing modern aesthetics.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">Global Experience</h3>
                <p className="text-foreground/75 leading-relaxed">
                  After studying fashion design in Paris and working with renowned luxury houses across Europe and Asia, KIMHAB gained invaluable insights into craftsmanship, sustainability, and the disconnect between luxury and accessibility.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">Founding Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
                  In 2018, KIMHAB founded Kimhab ORK to challenge the luxury fashion industry. The brand was born from a question: why should quality, sustainability, and beautiful design be exclusive to the wealthy?
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground/70">Present Impact</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Today, Kimhab ORK has grown into a global community of conscious consumers and creative collaborators, proving that affordable luxury and ethical fashion aren't just ideals—they're achievable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-background">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Core Values & Guiding Principles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Sparkles className="w-7 h-7 md:w-10 md:h-10" />}
                title="Creativity"
                description="Innovation and artistic expression at the heart of every design decision and collection release."
                ctaText="View Collection"
                ctaHref="/"
              />

              <FeatureCard
                icon={<Heart className="w-7 h-7 md:w-10 md:h-10" />}
                title="Integrity"
                description="Honesty in practices, transparency in supply chain, and genuine commitment to our values."
                ctaText="Our Ethics"
                ctaHref="/responsibility"
              />

              <FeatureCard
                icon={<Globe className="w-7 h-7 md:w-10 md:h-10" />}
                title="Sustainability"
                description="Environmental responsibility woven into every aspect of design, production, and packaging."
                ctaText="Learn More"
                ctaHref="/responsibility"
              />

              <FeatureCard
                icon={<Award className="w-7 h-7 md:w-10 md:h-10" />}
                title="Excellence"
                description="Uncompromising quality standards and continuous pursuit of perfection in every piece."
                ctaText="Care Tips"
                ctaHref="/care-guides"
              />
            </div>
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-background">
          <div className="mx-auto max-w-4xl">
            <div className="bg-card/60 border border-border p-8 md:p-12 rounded-lg">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                A Word from KIMHAB
              </h2>

              <blockquote className="space-y-6">
                <p className="text-lg text-foreground/70 leading-relaxed italic">
                  "Fashion has the power to transform how people feel about themselves. But too often, that transformation comes at a price—not just in dollars, but in ethics and the environment. When I founded Kimhab ORK, I wanted to prove a different way was possible."
                </p>

                <p className="text-lg text-foreground/70 leading-relaxed italic">
                  "Every woman deserves to feel confident, beautiful, and proud of what she's wearing. We create pieces that don't require compromise—beautiful design, premium quality, ethical production, and prices that make luxury accessible. This is our promise, and it's why I wake up excited every morning."
                </p>

                <p className="text-lg text-foreground/70 leading-relaxed italic">
                  "Join us in redefining what luxury means. Together, we're building a fashion community that celebrates individuality, respects our planet, and proves that affordability and excellence can coexist."
                </p>
              </blockquote>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-semibold text-foreground">KIMHAB ORK</p>
                <p className="text-foreground/60">Creative Director & Founder, Kimhab ORK</p>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-10 bg-muted/70">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Connect with Our Vision
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Follow KIMHAB ORK on social media to stay updated on new collections, behind-the-scenes stories, and our journey toward redefining luxury fashion.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Shop Latest Collection
              </a>
              <a
                href="/company/about"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Our Story
              </a>
            </div>
          </div>
        </section>
      </main>
  )
}
