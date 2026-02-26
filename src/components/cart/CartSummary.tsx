import { Button } from "../ui/button";
import { Typography } from "../ui/Typography";
import { useCartStore } from "@/components/cart/cart.store"


export function CartSummary() {
  const total = useCartStore((state) => state.totalPrice());
  const count = useCartStore((state) => state.totalItems());
  const clear = useCartStore((state) => state.clearCart);

  const handleCheckout = () => {
    clear()
    alert("Order placed successfully!")
  }

  return (
    <div className="p-8 border border-color-gray-secondary rounded-2xl bg-white">
      <div className="text-center mb-4">
        <Typography variant="h2" className="mb-4">
          ₴{total.toLocaleString('uk-UA')}
        </Typography>
        <Typography variant="body" color="secondary">
          Total for {count} items
        </Typography>
      </div>

      <Button className="w-full py-5" onClick={handleCheckout}>
        Checkout
      </Button>
    </div>
  );
}