'use client';

import React from 'react';

interface HeroGradientProps {
  title: string;
  description?: string;
}

export function HeroGradient({
  title,
  description,
}: HeroGradientProps) {
  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Animated background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep black to charcoal gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        {/* Artistic gradient accent - subtle and elegant */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-gray-800/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-gray-700/30 to-transparent rounded-full blur-3xl" />

        {/* Additional depth layer */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Main Title */}
          <h1 className="font-serif text-3xl text-balance md:text-4xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
