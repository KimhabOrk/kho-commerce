'use client'

import React from 'react'

interface FeatureCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  ctaText: string
  ctaHref: string
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  ctaText,
  ctaHref,
  className = '',
}: FeatureCardProps) {
  return (
    <a
      href={ctaHref}
      className={`group flex flex-col items-center text-center bg-card rounded-lg border border-border/80 p-8 md:p-10 hover:border-primary/60 hover:shadow-lg hover:bg-card/80 transition-all duration-300 ${className}`}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto text-primary/70 group-hover:text-primary transition-colors">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-3 uppercase tracking-wide text-balance">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-foreground/75 mb-6 leading-relaxed flex-grow text-balance">
        {description}
      </p>

      {/* CTA */}
      <span className="inline-flex items-center text-primary font-semibold text-sm md:text-base group-hover:gap-2 transition-all gap-1">
        {ctaText}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </a>
  )
}
