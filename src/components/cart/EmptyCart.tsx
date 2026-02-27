import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export function EmptyCart() {
  const { t } = useTranslation('cart');

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
      <Typography variant="h2">{t('emptyTitle')}</Typography>

      <Typography
        variant="body"
        color="secondary"
      >
        {t('emptySubtitle')}
      </Typography>

      <Button
        asChild
        size="xl"
      >
        <Link to="/">{t('continueShopping')}</Link>
      </Button>
    </div>
  );
}
