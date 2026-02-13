'use client';

import { XMarkIcon } from 'lucide-react';
import { removeItem } from '@/components/cart/actions';
import type { CartItem } from '@/lib/shopify/types';
import { useFormState } from 'react-dom';

export function DeleteItemButton({
  item,
  optimisticUpdate
}: {
  item: CartItem;
  optimisticUpdate: any;
}) {
  const [message, formAction] = useFormState(removeItem, null);
  const merchandiseId = item.merchandise.id;
  const actionWithVariant = formAction.bind(null, merchandiseId);

  return (
    <form
      action={async () => {
        optimisticUpdate(merchandiseId, 'delete');
        await actionWithVariant();
      }}
    >
      <button
        type="submit"
        aria-label="Remove cart item"
        className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
      >
        <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
