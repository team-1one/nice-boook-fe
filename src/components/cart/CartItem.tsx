import { useCartStore } from "@/stores/cart.store"
import type { CartItem as CartItemType } from "@/stores/cart.store"
import { Link } from "@tanstack/react-router"

import { Minus, Plus, X } from "lucide-react";
import { Typography } from "../ui/Typography";

type Props = {
  item: CartItemType
}

export function CartItem({ item }: Props) {
  const increase = useCartStore((s) => s.increaseItem)
  const decrease = useCartStore((s) => s.decreaseItem)
  const removeItem = useCartStore((s) => s.removeItem)

  return (
    <div
      className="
        flex flex-col gap-4 p-4
        sm:flex-row gap-row-4 sm:items-center sm:gap-6
        p-4 sm:p-6
        border border-color-gray-secondary
        rounded-2xl
        bg-white
      "
    >
      <div className="flex items-center gap-4 sm:contents">
        <button
          type="button"
          onClick={() => removeItem(item.slug)}
          className="
            p-2
            text-gray-icons
            hover:text-red
            rounded-full
            transition-colors
          "
        >
          <X size={16} strokeWidth={1.5} />
        </button>

          <Link
            to="/$bookSlug"
            params={{ bookSlug: item.slug }}
            className="flex items-center gap-6 min-w-0"
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-auto max-h-full object-contain" />
            </div>
            <div className="w-32 sm:w-44 lg:w-84 min-w-0">
              <Typography variant="h5" className="truncate">
                {item.name}
              </Typography>
              <Typography variant="body" color="secondary">
                {item.author}
              </Typography>
            </div>
          </Link>
        </div>

      <div className="flex w-full items-center justify-between sm:justify-end sm:gap-6">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => decrease(item.slug)}
            className="text-gray-icons hover:text-gray-primary"
          >
            <Minus size={16} strokeWidth={1.5} />
          </button>
          <Typography variant="body" className="w-6 text-center font-semibold tabular-nums">
            {item.quantity}
          </Typography>
          <button 
            onClick={() => increase(item.slug)} 
            className="text-gray-icons hover:text-gray-primary"
            >
            <Plus size={16} strokeWidth={1.5} />
          </button>
        </div>
        <div className="text-right tabular-nums min-w-[110px]">
          <Typography variant="h3">
            ₴ {(item.price * item.quantity).toFixed(2)}
          </Typography>
        </div>
      </div>
    </div>
  );
}