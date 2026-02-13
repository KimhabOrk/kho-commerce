import { Metadata } from 'next'
import { FeatureCard } from '@/components/feature-card'
import { Leaf, Users, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Commitment to Responsibility | Kimhab Ork',
  description: 'Discover Kimhab Ork\'s commitment to sustainable fashion, ethical sourcing, and responsible production practices.',
  openGraph: {
    title: 'Our Commitment to Responsibility | Kimhab Ork',
    description: 'Sustainable and ethical practices in fashion',
  },
}

export default function ResponsibilityPage() {
  return (
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-32 px-6 md:px-8 lg:px-10 bg-background">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Commitment to Responsibility
            </h1>
            <p className="text-lg text-foreground/75 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
              At Kimhab Ork, we believe that sustainable fashion and ethical practices are not optional—they are fundamental to who we are as a brand.
            </p>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-background">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Our Vision
            </h2>
            <div className="bg-card p-8 rounded-lg border border-border/70">
              <p className="text-foreground/75 leading-relaxed text-lg">
                Kimhab Ork is committed to embedding sustainability as a fundamental part of our strategic development for a more responsible, net-positive future across climate, nature, and people. We are accountable as a business, as part of society, and as individuals contributing to the biodiversity that shares our planet.
              </p>
            </div>
          </div>
        </section>

        {/* Three Main Pillars as Cards */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Our Three Pillars of Responsibility
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Leaf className="w-7 h-7 md:w-10 md:h-10" />}
                title="Responsible Sourcing"
                description="We approach sourcing holistically—considering lifecycle impacts, carbon footprints, water usage, waste, and biodiversity protection."
                ctaText="Learn More"
                ctaHref="#sourcing"
              />
              <FeatureCard
                icon={<Users className="w-7 h-7 md:w-10 md:h-10" />}
                title="Ethical Production"
                description="Fair wages, safe conditions, human rights protection, and rigorous monitoring throughout our entire supply chain."
                ctaText="Discover"
                ctaHref="#ethical"
              />
              <FeatureCard
                icon={<Globe className="w-7 h-7 md:w-10 md:h-10" />}
                title="Environmental Impact"
                description="Reducing carbon emissions, conserving water, minimizing waste, and promoting circular design practices."
                ctaText="Explore"
                ctaHref="#environmental"
              />
            </div>
          </div>
        </section>

        {/* Responsible Sourcing Details */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-background" id="sourcing">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Our Material Standards
            </h2>
            <div className="bg-muted p-8 rounded-lg border border-border/70">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Regeneratively-Grown</h4>
                  <ul className="space-y-2 text-foreground/75 text-sm">
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>RegenAgri® certified materials</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>NATIVA™ responsibly sourced fibers</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Organically-Produced</h4>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Global Organic Textile Standard (GOTS)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Organic Content Standard (OCS)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Recycled Materials</h4>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Global Recycled Standard (GRS)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Recycled Claim Standard (RCS)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Other Certifications</h4>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Responsible Wool Standard (RWS)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Leather Working Group (LWG) Silver/Gold</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ethical Production */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10" id="ethical">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ethical Production & Labor Rights
            </h2>
            <div className="space-y-6">
              <p className="text-foreground/70 leading-relaxed">
                We are committed to driving positive impact on people throughout our supply chain. We go beyond minimum compliance to ensure rigorous social, ethical, and environmental standards are maintained.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="font-semibold text-foreground mb-2">Fair Labor Practices</h3>
                  <p className="text-foreground/70">
                    We monitor and enforce fair wages, safe working conditions, and proper treatment of workers throughout our supply chain. We are committed to strengthening the protections of all artisans involved in our production.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6 py-4">
                  <h3 className="font-semibold text-foreground mb-2">Worker Welfare & Safety</h3>
                  <p className="text-foreground/70">
                    Health and safety, welfare standards, fair pay, human rights protection, and prevention of forced labor and discrimination are non-negotiable priorities in our operations.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6 py-4">
                  <h3 className="font-semibold text-foreground mb-2">Supply Chain Accountability</h3>
                  <p className="text-foreground/70">
                    We routinely audit and monitor our suppliers to ensure compliance with our standards. We provide training and support to help partners meet and exceed ethical requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-background" id="environmental">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Reducing Environmental Impact
            </h2>
            <div className="space-y-8">
              <p className="text-foreground/70 leading-relaxed">
                We are designing and implementing creative solutions to facilitate the use of traceable, low-impact, responsibly sourced, and recyclable materials across our products. Our goal is to mainstream these materials within our collections and minimize waste throughout our operations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="font-semibold text-primary mb-4">Restricted Materials</h3>
                  <p className="text-sm text-foreground/70">
                    We have restricted the use of certain high-impact and ethically challenging materials. Animal fur is excluded from our collections, and we continuously evaluate new restrictions to minimize harm.
                  </p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="font-semibold text-primary mb-4">Carbon Footprint Reduction</h3>
                  <p className="text-sm text-foreground/70">
                    We prioritize materials and processes with lower carbon footprints. Our sourcing team evaluates the environmental impact of every material choice in our collections.
                  </p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="font-semibold text-primary mb-4">Water Conservation</h3>
                  <p className="text-sm text-foreground/70">
                    We work with suppliers to minimize water usage in production. Organic and responsibly-sourced materials significantly reduce water consumption compared to conventional methods.
                  </p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="font-semibold text-primary mb-4">Waste Reduction</h3>
                  <p className="text-sm text-foreground/70">
                    Through circular design practices and responsible production methods, we minimize waste. We encourage customers to care for and maintain their pieces for longevity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Policies */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Policies & Practices
            </h2>
            <div className="space-y-4">
              {[
                'We have developed a comprehensive social responsibility program ensuring rigorous standards throughout our supply chain',
                'Responsible Sourcing Internal Guidance supports our sourcing, product development, and design teams in making effective daily choices',
                'Our Sustainability, Communications, and Digital departments work closely to ensure accurate information is presented for each product',
                'We track the percentage of responsibly-sourced styles in each collection containing over 50% responsibly sourced materials by weight',
                'We remain committed to transparency and openly communicate our progress, achievements, and areas for improvement',
              ].map((policy, index) => (
                <div key={index} className="flex gap-4 p-4 bg-muted rounded-lg border border-border/40">
                  <span className="text-primary font-semibold text-xl mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground/80 leading-relaxed">{policy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Looking Forward */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Looking Forward
            </h2>
            <div className="space-y-6 text-foreground/70 bg-muted/60 leading-relaxed p-5 rounded-lg">
              <p>
                At Kimhab Ork, we understand that responsibility is a journey, not a destination. We are on this journey and look forward to sharing our progress with you. Our targets are continually assessed to ensure they remain both ambitious and achievable.
              </p>
              <p>
                We are increasing supplier engagement, training, and upskilling our internal teams on low-impact, responsible sourcing and design. We are laying the foundation for what's to come while remaining open and honest about our progress and challenges.
              </p>
              <p>
                Through increasing the use of responsibly sourced materials, partnering with ethical manufacturers, and maintaining transparency with our customers, we are building a more sustainable future for affordable luxury fashion.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-primary text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-balance">
              Join Us in Building a Better Future
            </h2>
            <p className="text-lg mb-8 opacity-90 text-balance max-w-2xl mx-auto leading-relaxed">
              By choosing Kimhab Ork, you're supporting sustainable fashion and ethical practices. Every purchase matters.
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Our Collections
            </a>
          </div>
        </section>
      </main>
      
    
  )
}
