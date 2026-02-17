'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GridTileImage } from '@/components/grid/tile';
import { useProduct, useUpdateURL } from '@/components/product/product-context';
import Image from 'next/image';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  
  // Validate images array and filter out empty images
  const validImages = (images || []).filter(img => img?.src && typeof img.src === 'string' && img.src.trim() !== '');
  
  if (validImages.length === 0) {
    return (
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">No product images available</p>
        </div>
      </div>
    );
  }

  const imageIndex = state.image ? parseInt(state.image) : 0;
  const nextImageIndex = imageIndex + 1 < validImages.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? validImages.length - 1 : imageIndex - 1;

  const buttonClassName =
    'h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center';

  return (
    <div>
      <div className="relative aspect-[4/5] h-full max-h-[550px] w-full overflow-hidden rounded-xl bg-muted">
        {validImages[imageIndex]?.src ? (
          <Image
            className="h-full w-full object-cover"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={validImages[imageIndex]?.altText || 'Product image'}
            src={validImages[imageIndex].src}
            priority={true}
          />
        ) : null}

        {validImages.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center pointer-events-none">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80 pointer-events-auto">
              <button
                onClick={() => {
                  const newState = updateImage(previousImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Previous product image"
                type="button"
                className={buttonClassName}
              >
                <ArrowLeftIcon className="h-5" />
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <button
                onClick={() => {
                  const newState = updateImage(nextImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Next product image"
                type="button"
                className={buttonClassName}
              >
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {validImages.length > 1 ? (
        <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {validImages.map((image, index) => {
            const isActive = index === imageIndex;
            if (!image?.src || typeof image.src !== 'string' || image.src.trim() === '') {
              return null;
            }

            return (
              <li key={`${image.src}-${index}`} className="h-20 w-20">
                <button
                  onClick={() => {
                    const newState = updateImage(index.toString());
                    updateURL(newState);
                  }}
                  aria-label={`Select product image ${index + 1}`}
                  type="button"
                  className={`h-full w-full rounded-lg overflow-hidden border-2 transition-all ${
                    isActive ? 'border-foreground' : 'border-border hover:border-foreground/50'
                  }`}
                >
                  <GridTileImage
                    alt={image.altText || 'Product image'}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
