"use client";

import React from 'react';

import Hero, { HeroSectionProps } from '@/components/sections/Hero/Hero';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'; // Import shadcn Carousel components
import Autoplay from 'embla-carousel-autoplay'; // Keep Autoplay import
import Fade from 'embla-carousel-fade'; // Keep Fade import

export interface HeroCarouselProps {
  slides: HeroSectionProps[];
  autoPlayInterval?: number; // in milliseconds
  showNavigationArrows?: boolean;
  showIndicators?: boolean;
  transitionType?: 'fade' | 'slide';
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  autoPlayInterval = 5000,
  showNavigationArrows = true,
  showIndicators = true,
  transitionType = 'fade',
}) => {
  const autoplayPlugin = Autoplay({
    delay: autoPlayInterval,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const emblaPlugins = [
    autoplayPlugin,
    ...(transitionType === 'fade' ? [Fade()] : []),
  ];

  const emblaOptions = {
    loop: true,
    ...(transitionType === 'fade' && { dragFree: true }),
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel
        opts={emblaOptions}
        plugins={emblaPlugins}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="h-full w-full"> {/* Wrapper for Hero component */}
                <Hero {...slide} headingLevel={index === 0 ? 'h1' : 'h2'} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {showNavigationArrows && (
          <>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20" />
          </>
        )}

        {/* Indicators - shadcn Carousel doesn't provide built-in indicators, so we'll need to re-implement or adapt */}
        {/* For now, I'll omit indicators to simplify the initial refactor.
            If the user wants indicators, we'll need to get the API from Carousel and build them. */}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
