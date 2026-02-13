import { Metadata } from 'next'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Care Guides | Kimhab Ork',
  description: 'Comprehensive care guides for all Kimhab Ork fabrics. Learn how to properly care for cotton, silk, denim, leather, and more to preserve your pieces.',
  openGraph: {
    title: 'Care Guides | Kimhab Ork',
    description: 'Instructions for caring for your womenswear collection',
  },
}

const careGuides = [
{
  title: 'Cotton Garments',
  content: 'Cotton is a natural plant-derived fiber that is lightweight, versatile, and breathable. We recommend gentle hand washing at 30°C or gentle dry cleaning. Preferably, turn the garment inside out and ensure the protection or removal of any accessories. Always check the care label inside your garment for specific instructions.',
  tips: ['Wash at 30°C', 'Hand wash or gentle cycle', 'Turn inside out', 'Remove accessories before washing'],
},
{
  title: 'Silk Garments',
  content: 'Silk is a natural fiber of animal origin, obtained from the filament of the silkworm. It has a smooth, lustrous appearance pleasant to the touch. We recommend gentle dry cleaning and reverse ironing, ensuring the protection and removal of any accessories.',
  tips: ['Dry clean recommended', 'Reverse iron', 'Avoid direct heat', 'Remove accessories'],
},
{
  title: 'Denim Garments',
  content: 'Denim is a durable cotton fiber material. Jacquard denim reproduces distinctive designs with a woven texture. Laminated denim achieves a shiny appearance through specific processing. We recommend gentle washing at 30°C, preferably turning the garment inside out and ensuring the protection or removal of any accessories. Gentle ironing with interposed cloth is suggested.',
  tips: ['Wash at 30°C', 'Turn inside out', 'Gentle ironing with cloth', 'Avoid frequent washing'],
},
{
  title: 'Knitwear & Cashmere',
  content: 'Cashmere is a fine fiber of animal origin with a silky, soft, and woolly hand feel. Wool is valued for its length and fineness. We recommend gentle hand washing or delicate dry cleaning, ensuring the protection and removal of any accessories, and following label instructions. Gentle ironing with interposed cloth is suggested.',
  tips: ['Hand wash or delicate cycle', 'Use cold water', 'Flat dry recommended', 'Store on flat surface'],
},
{
  title: 'Leather Garments',
  content: 'Calfskin is soft yet durable leather of animal origin. Nappa is moldable and supple leather characterized by natural markings that make each piece unique. We advise cleaning leather with a soft, dry cloth and contacting a specialized leather treatment center. It is preferable to store leather pieces in cotton garment bags, avoiding heat and light sources, or direct contact with products on the skin (creams or perfumes).',
  tips: ['Use soft dry cloth', 'Avoid moisture', 'Store in cotton garment bags', 'Avoid direct sunlight'],
},
{
  title: 'Velvet Garments',
  content: 'Velvet is a rich fabric with a soft hand-feel and bright appearance in a smooth or textured finish. We recommend water or gentle dry cleaning following the label instructions. Flat drying is suggested to maintain the garment\'s natural shape.',
  tips: ['Gentle dry cleaning', 'Avoid water when possible', 'Flat dry only', 'Brush gently with soft brush'],
},
{
  title: 'Embellished Garments',
  content: 'Crystal and metal embellishments are applied by hand, adding preciousness and luminous accents to garments. Embroideries showcase couture craftsmanship, applied mostly by hand, making each piece unique. We recommend gentle hand washing or dry cleaning at a specialized center, ensuring the protection or removal of any accessories. Reverse ironing is suggested with an interposed damp cloth, avoiding direct contact with embellishments.',
  tips: ['Hand wash or dry clean', 'Reverse iron', 'Avoid direct contact', 'Protect embellishments'],
},
{
  title: 'Printed Garments',
  content: 'Prints feature distinctive patterns on various fabrics including cotton, viscose, knits, and silks, created by digital printing or transfer techniques. We recommend gentle washing at 30°C or delicate dry cleaning. Reverse ironing is preferred, ensuring the protection and removal of any accessories.',
  tips: ['Wash inside out', 'Reverse iron', 'Avoid bleach', 'Use cold water'],
}, ]

function CareGuideCard({ title, content, tips }: { title: string;content: string;tips: string[] }) {
  return (
    <details className="group border border-border/70 rounded-lg overflow-hidden hover:border-primary/60 transition-colors">
      <summary className="cursor-pointer px-6 py-4 bg-primary/85 hover:bg-primary/95 transition-colors flex items-center justify-between">
        <h3 className="font-semibold text-primary-foreground">{title}</h3>
        <ChevronDown className="w-5 h-5 text-primary-foreground group-open:rotate-180 transition-transform" />
      </summary>
      <div className="px-6 py-4 bg-card border-t border-border/70 space-y-4">
        <p className="text-foreground/75 leading-relaxed">{content}</p>
        <div className="bg-muted p-4 rounded">
          <h4 className="font-semibold text-sm text-foreground mb-3">Care Tips:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground/75">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  )
}

export default function CareGuidesPage() {
  return (
    
    
    <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-32 px-6 md:px-8 lg:px-10 bg-gradient-to-b from-background to-muted/10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Care Guides
            </h1>
            <p className="text-lg text-foreground/75 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
              Preserve the beauty and longevity of your Kimhab Ork pieces with our comprehensive care instructions. High-quality materials deserve proper care.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-background">
          <div className="mx-auto max-w-4xl">
            <div className="bg-muted p-8 rounded-lg border border-border/40">
              <h2 className="font-serif text-xl font-semibold text-primary mb-4">
                Why Proper Care Matters?
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                High-quality materials require specific care to preserve their integrity over time. Specific cleaning and care instructions are present on the product label inside each garment. For general advice, follow our dedicated guides for each fabric type.
              </p>
            </div>
          </div>
        </section>

        {/* Care Guides */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-xl md:text-3xl font-bold text-foreground mb-12">
              Fabric Care Instructions
            </h2>
            <div className="space-y-3">
              {careGuides.map((guide, index) => (
                <CareGuideCard key={index} title={guide.title} content={guide.content} tips={guide.tips} />
              ))}
            </div>
          </div>
        </section>

        {/* General Tips Section */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-background">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-xl md:text-3xl font-bold text-foreground mb-8">
              General Care Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">Storage</h3>
                <ul className="space-y-2 text-foreground/70 text-sm list-disc list-inside list-primary px-2 md:px-4">
                  <li>
                    <span>Store garments in a cool, dry place away from direct sunlight</span>
                  </li>
                  <li>
                    <span>Use breathable garment bags or cotton storage</span>
                  </li>
                  <li>
                    <span>Ensure proper ventilation to prevent moisture accumulation</span>
                  </li>
                  <li>
                    <span>Keep away from perfumes and creams that may stain</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">Washing</h3>
                <ul className="space-y-2 text-foreground/70 text-sm list-disc list-inside px-2 md:px-4">
                  <li>
                    <span>Always check the care label first for specific instructions</span>
                  </li>
                  <li>
                    <span>Turn garments inside out before washing</span>
                  </li>
                  <li>
                    <span>Use cold water when possible to preserve color</span>
                  </li>
                  <li>
                    <span>Avoid over-washing to extend garment lifespan</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">Drying</h3>
                <ul className="space-y-2 text-foreground/70 text-sm list-disc list-inside px-2 md:px-4">
                  <li>
                    <span>Air dry whenever possible instead of machine drying</span>
                  </li>
                  <li>
                    <span>Lay flat or hang in a well-ventilated area</span>
                  </li>
                  <li>
                    <span>Avoid direct heat sources and intense sunlight</span>
                  </li>
                  <li>
                    <span>Remove from drying immediately to prevent wrinkles</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">Ironing</h3>
                <ul className="space-y-2 text-foreground/70 text-sm px-2 md:px-4">
                  <li>
                    <span>Use low to medium heat depending on fabric type</span>
                  </li>
                  <li>
                    <span>Always use a pressing cloth between iron and delicate fabrics</span>
                  </li>
                  <li>
                    <span>Iron reverse side of printed or embellished garments</span>
                  </li>
                  <li>
                    <span>Iron while garment is slightly damp for best results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stain Removal Section */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-xl md:text-3xl font-bold text-foreground mb-8">
              Handling Stains
            </h2>
            <div className="bg-muted p-6 rounded-lg border border-border/40 jutify-center items-center">
              <ul className="space-y-4 text-foreground/70 list-inside px-2 md:px-4">
                <li>
                  <span className="font-semibold text-primary">Act Quickly:</span>
                  <span>Address stains as soon as possible for better results. Blot the stain rather than rubbing to avoid spreading it further.</span>
                </li>
                <li>
                  <span className="font-semibold text-primary">Test First:</span>
                  <span>Always test any cleaning solution on a hidden area of the garment before applying it to the visible stain.</span>
                </li>
                <li>
                  <span className="font-semibold text-primary">Be Gentle:</span>
                  <span>Use gentle, circular motions when treating stains. Avoid harsh scrubbing that can damage the fabric fibers.</span>
                </li>
                <li>
                  <span className="font-semibold text-primary">Professional Help:</span>
                  <span>For stubborn or valuable pieces, consider professional dry cleaning services to ensure proper stain removal.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
  )
}
