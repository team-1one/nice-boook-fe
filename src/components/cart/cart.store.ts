import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export type CartState = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  increeseItem: (id: string) => void
  decreaseItem: (id: string) => void
  removeItem: (id: string) => void
  totalPrice: () => number
  totalItems: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem(item) {
        const existingItem = get().items.find((i) => i.id === item.id)

        if (existingItem) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          }))
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: 1 }],
          }))
        }
      },
      increeseItem(id) {
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }))
      },
      decreaseItem(id) {
        set((state) => ({
          items: state.items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter((i) => i.quantity > 0),
        }))
      },
      removeItem(id) {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
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