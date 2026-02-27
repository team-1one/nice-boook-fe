import { useNavigate } from "@tanstack/react-router"
import { Button } from "../ui/button";
import { Typography } from "../ui/Typography";
import { toast } from "sonner"
import { useCartStore } from "@/stores/cart.store"

import { useTranslation } from 'react-i18next';

export function CartSummary() {
  const { t } = useTranslation('cart');

  const total = useCartStore((state) => state.totalPrice());
  const count = useCartStore((state) => state.totalItems());
  const clear = useCartStore((state) => state.clearCart);

  const navigate = useNavigate()


  const handleCheckout = () => {
    clear()
    toast("Order placed successfully", {
    description: "Your cart has been cleared.",
    action: {
      label: "Go to home",
      onClick: () => navigate({ to: "/" }),
    },
  })
  }

  return (
    <div className="border-color-gray-secondary rounded-2xl border bg-white p-8">
      <div className="mb-4 text-center">
        <Typography
          variant="h2"
          className="mb-4"
        >
          ₴{total.toLocaleString('uk-UA')}
        </Typography>
        <Typography
          variant="body"
          color="secondary"
        >
          {t('totalFor', { count })}
        </Typography>
      </div>

      <Button
        className="w-full py-5"
        onClick={handleCheckout}
      >
        {t('checkout')}
      </Button>
    </div>
  );
}
