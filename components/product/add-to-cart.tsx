'use client';

import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { useProduct } from './product-context';
import type { Product } from '@/lib/shopify/types';

export function AddToCart({ product }: { product: Product | any }) {
  const { state } = useProduct();
  const [isPending, startTransition] = useTransition();

  // Find the selected variant based on product options
  const selectedVariant = product.variants?.find((variant: any) => {
    return variant.selectedOptions?.every((option: any) => {
      const stateKey = option.name.toLowerCase();
      return state[stateKey] === option.value;
    });
  });

  const isOutOfStock = !selectedVariant?.availableForSale;

  const handleAddToCart = () => {
    startTransition(async () => {
      try {
        // Make API call to add to cart
        await fetch('/api/cart/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            variantId: selectedVariant?.id,
            quantity: 1,
            merchandiseId: selectedVariant?.id,
          }),
        });
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    });
  };

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isPending || isOutOfStock}
      className="w-full"
      size="lg"
    >
      {isOutOfStock ? 'Out of Stock' : isPending ? 'Adding...' : 'Add to Bag'}
    </Button>
  );
}
