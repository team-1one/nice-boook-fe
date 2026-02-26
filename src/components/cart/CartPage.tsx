import { Typography } from "@/components/ui/Typography";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { BackButton } from "./BackButton";
import { useTranslation } from 'react-i18next';

const CONTAINER_STYLES = "mx-auto max-w-[1440px] mt-6 sm:mt-16 px-4 sm:px-6 lg:px-8 xl:px-[152px] mb-20";

export function CartPage() {
  const { t } = useTranslation('cart');

  return (
    <main className={CONTAINER_STYLES}>
      <BackButton />      
      <Typography variant="h1" color="primary" className="mb-4">{t('title')}</Typography>      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-4 items-start">        
        <section className="flex flex-col gap-4">
          <CartItem  />
          <CartItem  />
          <CartItem  />
          <CartItem  />
          <CartItem  />
          <CartItem  />
          <CartItem  />
          <CartItem  />
        </section>

        <aside className="mt-8 lg:mt-0 lg:sticky lg:top-24">
          <CartSummary total={1082} count={2} />
        </aside>        
      </div>
    </main>
  );
}