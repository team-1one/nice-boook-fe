import { Button } from '../ui/button';
import { Typography } from '../ui/Typography';
import { useTranslation } from 'react-i18next';
import { useCartStore } from '@/stores/cart.store';

export function CartSummary() {
  const { t } = useTranslation('cart');

  const total = useCartStore((state) => state.totalPrice());
  const count = useCartStore((state) => state.totalItems());
  const clear = useCartStore((state) => state.clearCart);

  const handleCheckout = () => {
    clear();
    alert(t('orderSuccessTitle'));
  };

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
