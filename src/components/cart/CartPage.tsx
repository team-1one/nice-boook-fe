import { Typography } from "@/components/ui/Typography";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { BackButton } from "./BackButton";
import { useCartStore } from "../../stores/cart.store";
import { EmptyCart } from "./EmptyCart";

const CONTAINER_STYLES = "mx-auto max-w-[1440px] mt-6 sm:mt-16 px-4 sm:px-6 lg:px-8 xl:px-[152px] mb-20";

export function CartPage() {
  const items = useCartStore((state) => state.items)

  if (items.length === 0) {
    return <EmptyCart />
  }

  return (
    <main className={CONTAINER_STYLES}>
      <BackButton />      
      <Typography variant="h1" color="primary" className="mb-4">Cart</Typography>      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-4 items-start">        
        <section className="flex flex-col gap-4">
          {items.map((item) => (
            <CartItem key={item.slug} item={item} />
          ))}
        </section>

        <aside className="mt-8 lg:mt-0 lg:sticky lg:top-24">
          <CartSummary />
        </aside>        
      </div>
    </main>
  );
}