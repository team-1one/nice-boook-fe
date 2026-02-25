import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import type { BannerData } from '@/types/banner';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import React from 'react';

interface BannerSliderProps {
  items: BannerData[];
}

export const BannerSlider = ({ items }: BannerSliderProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <section className="mx-auto w-full max-w-270 px-16">
      <Carousel
        opts={{ align: 'start', loop: true }}
        setApi={setApi}
        className="relative"
      >
        {/* Side arrows — vertically centered on the banner */}
        <CarouselPrevious className="absolute top-1/2 -left-14 z-10 -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 -right-14 z-10 -translate-y-1/2" />

        <div className="overflow-hidden rounded-2xl">
          <CarouselContent className="ml-0">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="relative pl-0"
              >
                <Link to={item.target_url}>
                  <picture>
                    {item.images.mobile && (
                      <source
                        media="(max-width: 639px)"
                        srcSet={item.images.mobile}
                      />
                    )}
                    {item.images.tablet && (
                      <source
                        media="(max-width: 1023px)"
                        srcSet={item.images.tablet}
                      />
                    )}
                    <img
                      src={item.images.desktop}
                      alt={`Banner ${item.id}`}
                      className="block h-auto w-full object-cover"
                    />
                  </picture>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        {/* Dots — inside the banner at the bottom center */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                current === index ? 'bg-white' : (
                  'bg-white/40 hover:bg-white/70'
                ),
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};
