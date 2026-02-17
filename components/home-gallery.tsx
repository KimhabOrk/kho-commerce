"use client";

import { FadeImage } from "@/components/fade-image";

export function GallerySection() {
  const features = [
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-1.png",
      title: "crop top with utilitarian wide-legs pants ",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-2.png",
      title: "Asymmetrical halter dress",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-3.png",
      title: "Long sleeves printed t-shirt with side embroidered pencil skirt",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-4.png",
      title: "Crop top with middle high slit skirt",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-5.png",
      title: "One shoulder drap asymmetrical dress",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-6.png",
      title: "Mesh corset with wide-legs trousers",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-7.png",
      title: "Plunging strapless cape sleeves tea-lenght dress",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-8.png",
      title: "Asymmetrical off shoulder dress",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-9.png",
      title: "Asymmetrical side pleated puffy sleeves dress",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-10.png",
      title: "White tailor coat gown",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-11.png",
      title: "Boat neck bottom flare gown",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-12.png",
      title: "Black asymmetrical tailor coat gown",
    },
    {
      image: "https://ik.imagekit.io/kimhabork/assets/gallery/look-13.png",
      title: "Turtle neck feathers embroidered mermaid gown",
    },
  ];

  return (
    <section className="relative max-w-screen bg-background">
      <div className="py-8 md:py-10 md:py-12">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
          Featured Looks
        </h2>
      </div>
      <div className="pb-10 md:pb-12">
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl">
                <FadeImage
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-4 md:py-6">
                <p className="text-xs md:text-sm uppercase tracking-widest text-foreground text-wrap">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
