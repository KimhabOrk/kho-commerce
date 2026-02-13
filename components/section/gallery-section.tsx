"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef(0);

  const images = [
    { src: "/images/bottle-bike.png", alt: "Thermal bottle on bike" },
    { src: "/images/bottle-lake.png", alt: "Thermal bottle by lake" },
    { src: "/images/bottle-water.png", alt: "Thermal bottle in water" },
    { src: "/images/bottle-stream.png", alt: "Thermal bottle by stream" },
    { src: "/images/bottle-fire.png", alt: "Thermal bottle by fire" },
    { src: "/images/bottle-snow.png", alt: "Thermal bottle in snow" },
    { src: "/images/bottle-mountain.png", alt: "Thermal bottle on mountain" },
    { src: "/images/bottle-canyon.png", alt: "Thermal bottle at canyon" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate section height based on content width
  useEffect(() => {
    const calculateHeight = () => {
      if (!containerRef.current) return;
      
      if (isMobile) {
        // On mobile, just show grid layout
        setSectionHeight("auto");
        return;
      }
      
      const containerWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      // Height = viewport height + the extra scroll needed to reveal all content
      const totalHeight = viewportHeight + (containerWidth - viewportWidth);
      setSectionHeight(`${totalHeight}px`);
    };

    // Small delay to ensure container is rendered
    const timer = setTimeout(calculateHeight, 100);
    window.addEventListener("resize", calculateHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateHeight);
    };
  }, [isMobile]);

  const updateTransform = useCallback(() => {
    if (!galleryRef.current || !containerRef.current) return;
    
    const rect = galleryRef.current.getBoundingClientRect();
    const containerWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    // Total scroll distance needed to reveal all images
    const totalScrollDistance = containerWidth - viewportWidth;
    
    // Current scroll position within this section
    const scrolled = Math.max(0, -rect.top);
    
    // Progress from 0 to 1
    const progress = Math.min(1, scrolled / totalScrollDistance);
    
    // Calculate new translateX
    const newTranslateX = progress * -totalScrollDistance;
    
    setTranslateX(newTranslateX);
  }, []);

  useEffect(() => {
    // Skip animations on mobile
    if (isMobile) {
      setTranslateX(0);
      return;
    }

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(updateTransform);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransform, isMobile]);

  return (
    <section 
      id="gallery"
      ref={galleryRef}
      className="relative bg-background"
      style={{ height: sectionHeight }}
    >
      {/* Mobile grid layout */}
      {isMobile && (
        <div className="w-full px-4 py-8">
          <div className="grid grid-cols-2 gap-3 auto-rows-max">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg ${index % 2 === 0 ? 'h-56' : 'h-48'}`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop horizontal scroll layout */}
      {!isMobile && (
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="flex h-full items-center">
            {/* Horizontal scrolling container */}
            <div 
              ref={containerRef}
              className="flex gap-6 px-6"
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                WebkitTransform: `translate3d(${translateX}px, 0, 0)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                perspective: 1000,
                WebkitPerspective: 1000,
                touchAction: 'pan-y',
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl md:w-[60vw] lg:w-[45vw]"
                  style={{
                    transform: 'translateZ(0)',
                    WebkitTransform: 'translateZ(0)',
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
