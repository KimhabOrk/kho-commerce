'use client';

import { Minus, Plus } from 'lucide-react';
import { updateItemQuantity } from '@/components/cart/actions';
import type { CartItem } from '@/lib/shopify/types';
import { useFormState } from 'react-dom';

function SubmitButton({ type }: { type: 'plus' | 'minus' }) {
  return (
    <button
      type="submit"
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      className="px-2 py-1.5 sm:px-3 sm:py-2 hover:bg-secondary transition-colors"
    >
      {type === 'plus' ? (
        <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
      ) : (
        <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
      )}
    </button>
  );
}

export function EditItemQuantityButton({
  item,
  type,
  optimisticUpdate
}: {
  item: CartItem;
  type: 'plus' | 'minus';
  optimisticUpdate: any;
}) {
  const [message, formAction] = useFormState(updateItemQuantity, null);
  const payload = {
    merchandiseId: item.merchandise.id,
    quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1
  };
  const actionWithVariant = formAction.bind(null, payload);

  return (
    <form
      action={async () => {
        optimisticUpdate(payload.merchandiseId, type);
        await actionWithVariant();
      }}
    >
      <SubmitButton type={type} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
