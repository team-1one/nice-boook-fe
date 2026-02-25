import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CartItem = {
  slug: string
  name: string
  author: string 
  price: number
  image: string
  quantity: number
}

export type CartState = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  increaseItem: (slug: string) => void
  decreaseItem: (slug: string) => void
  removeItem: (slug: string) => void
  totalPrice: () => number
  totalItems: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem(item) {
        const existingItem = get().items.find((i) => i.slug === item.slug)

        if (existingItem) {
          set((state) => ({
            items: state.items.map((i) =>
              i.slug === item.slug ? { ...i, quantity: i.quantity + 1 } : i
            ),
          }))
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: 1 }],
          }))
        }
      },
      increaseItem(slug) {
        set((state) => ({
          items: state.items.map((i) =>
            i.slug === slug ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }))
      },
      decreaseItem(slug) {
        set((state) => ({
          items: state.items.map((i) =>
              i.slug === slug ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter((i) => i.quantity > 0),
        }))
      },
      removeItem(slug) {
        set((state) => ({
          items: state.items.filter((i) => i.slug !== slug),
        }))
      },
      totalPrice() {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      },
      totalItems() {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },
    }),
    {
      name: "cart-storage",
    }
  )
)