import { Button } from "../ui/button";
import { Typography } from "../ui/Typography";
import { useTranslation } from 'react-i18next';

type Props = {
  total: number;
  count: number;
};

export function CartSummary({ total, count }: Props) {
  const { t } = useTranslation('cart');

  return (
    <div className="p-8 border border-color-gray-secondary rounded-2xl bg-white">
      <div className="text-center mb-4">
        <Typography variant="h2" className="mb-4">
          ₴{total.toLocaleString('uk-UA')}
        </Typography>
        <Typography variant="body" color="secondary">
          {t('totalFor', { count })}
        </Typography>
      </div>

      <Button className="w-full py-5">
        {t('checkout')}
      </Button>
    </div>
  );
}