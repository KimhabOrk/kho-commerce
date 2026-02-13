import { Metadata } from "next";
import { FeatureCard } from "@/components/feature-card";
import Link from "next/link";
import {
  Type as Tape,
  Palette,
  Sparkles,
  Clock,
  Users,
  Check,
} from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Custom Made Service | Kimhab Ork",
  description:
    "Experience the ultimate luxury with Kimhab Ork's custom-made service. Create one-of-a-kind garments through private appointments with master tailors.",
  openGraph: {
    title: "Custom Made Service | Kimhab Ork",
    description:
      "Bespoke womenswear crafted to perfection through our exclusive custom-made service",
  },
};

export default function CustomMadePage() {
  const processSteps = [
    {
      title: "Consultation",
      description:
        "Meet with our expert stylists to discuss your vision, preferences, and lifestyle needs.",
      icon: <Users className="w-7 h-7 md:w-10 md:h-10" />,
    },
    {
      title: "Design & Selection",
      description:
        "Choose from our curated collection of premium fabrics and collaborate on the perfect design.",
      icon: <Palette className="w-7 h-7 md:w-10 md:h-10" />,
    },
    {
      title: "Precision Tailoring",
      description:
        "Our master tailors take precise measurements and create multiple fittings to ensure perfect fit.",
      icon: <Tape className="w-7 h-7 md:w-10 md:h-10" />,
    },
    {
      title: "Crafted to Perfection",
      description:
        "Each piece is meticulously handcrafted over weeks, combining cutting-edge techniques with traditional artistry.",
      icon: <Sparkles className="w-7 h-7 md:w-10 md:h-10" />,
    },
  ];

  const features = [
    "Bespoke designs tailored to your unique style and measurements",
    "Access to exclusive luxury fabrics sourced globally",
    "Personalized styling consultation with expert advisors",
    "Multiple fitting sessions for perfect proportions",
    "Weeks of meticulous craftsmanship and attention to detail",
    "One-of-a-kind garments that reflect your individuality",
  ];

  return (
    <main className="relative min-h-screen container bg-background text-foreground">
      {/* Hero Section with Split Design */}
      <section className="relative flex w-full mx-auto justify-center items-center">
        <div className="flex relative w-full h-auto aspect-video mx-auto">
          <Image
            src="https://ik.imagekit.io/kimhabork/assets/custom.png?updatedAt=1770285869097"
            alt="Custom Made Service"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>
      {/* Right Side - Content */}
      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-black">
        <div className="flex flex-col justify-center items-center text-center mx-auto max-w-6xl gap-6 md:gap-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold uppercase">
            Custom Made
          </h1>
          <p className="font-sans text-sm md:text-md lg:text-lg leading-tight text-balance uppercase">
            True luxury is found in clothing that is expertly crafted for the
            woman who wears it.
          </p>
          <p className="font-sans text-sm md:text-md lg:text-lg leading-relaxed text-balance uppercase">
            The Kimhab Ork custom-made garment is the utmost sartorial
            experience. Through the custom-made service, discerning clients can
            create a one of a kind garment through a private appointment. The
            master tailors at the KIMHAB ORK Atelier devote weeks of
            craftsmanship to cutting, constructing and finishing each piece
            using exquisite materials with care.
          </p>
          <Link
            href="#process"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded transition-colors"
          >
            Explore the Process
          </Link>
        </div>
      </section>

      {/* Why Custom Made Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-black">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white text-center mb-4">
            Why Choose Custom Made?
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Our custom-made service elevates womenswear to an art form,
            combining your vision with our master craftsmen's expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-muted/30 rounded-lg border border-border/40"
              >
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-white/70 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-black"
        id="process"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white text-center mb-10">
            The Custom Made Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-muted/30 flex mx-auto justify-center items-center text-center"
              >
                <CardHeader className="flex flex-col mx-auto justify-center items-center text-center">
                  <div className="mb-4 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-primary group-hover:text-primary transition-colors">
                    {step.icon}
                  </div>
                  <CardTitle className="font-serif text-lg md:text-xl font-semibold text-white uppercase tracking-wide text-balance">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed flex-grow text-balance">
                    {step.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="inline-flex items-center text-primary font-semibold text-sm md:text-base group-hover:gap-2 transition-all gap-1">
                    {`Step ${index + 1}`}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-black">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Timeline & Commitment
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center gap-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-1 h-20 bg-white/70"></div>
              </div>
              <div className="pb-8">
                <h3 className="font-semibold text-white text-lg mb-2">
                  Initial Consultation
                </h3>
                <p className="text-white/90">
                  Schedule a private appointment with our styling experts to
                  discuss your vision and preferences. This typically takes 1-2
                  hours.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center gap-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-1 h-20 bg-white/70"></div>
              </div>
              <div className="pb-8">
                <h3 className="font-semibold text-white text-lg mb-2">
                  Design & Measurements
                </h3>
                <p className="text-white/90">
                  Finalize your design and have precise measurements taken. Our
                  tailors use these to create your custom pattern and
                  foundation.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center gap-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-1 h-20 bg-white/70"></div>
              </div>
              <div className="pb-8">
                <h3 className="font-semibold text-white text-lg mb-2">
                  Craftsmanship (4-8 weeks)
                </h3>
                <p className="text-white/90">
                  Our master tailors meticulously craft your garment, with
                  multiple fittings scheduled to ensure absolute perfection and
                  fit.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-1 h-20 bg-white/70"></div>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-2">
                  Final Delivery
                </h3>
                <p className="text-white/90">
                  Receive your one-of-a-kind garment, expertly crafted to
                  perfection. Your custom piece will be a cherished investment
                  in your wardrobe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-muted/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Create Your Bespoke Piece
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Schedule a private consultation with our master tailors and begin
            your custom-made journey today. Experience the ultimate luxury of
            womenswear crafted exclusively for you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded transition-colors">
              Book Appointment
            </button>
            <button className="border-2 border-primary text-white hover:bg-primary/10 font-semibold px-8 py-3 rounded transition-colors">
              <Link href="/contact">Learn More</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10 bg-black">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
              <p className="text-lg text-white/80 italic mb-4 text-balance">
                "My custom-made Kimhab Ork piece is not just clothing—it's a
                masterpiece. Every stitch, every detail, reflects the care and
                expertise of true artisans. I feel like a different woman when I
                wear it."
              </p>
              <p className="font-semibold text-white">Sarah M.</p>
              <p className="text-white/90 text-sm">Custom Made Client</p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
              <p className="text-lg text-white/80 italic mb-4 text-balance">
                "The process was seamless and collaborative. The team truly
                listened to my vision and brought it to life with impeccable
                craftsmanship. This is luxury redefined."
              </p>
              <p className="font-semibold text-white">Emma L.</p>
              <p className="text-white/90 text-sm">Custom Made Client</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
