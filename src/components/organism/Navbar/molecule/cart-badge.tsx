import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Props = {
  count: number
}

export function CartBadge({ count }: Props) {
  if (count <= 0) return null

  return (
    <Badge
      variant="cart"
      className={cn(
        "absolute top-3 right-3",
        "h-4 min-w-4",
        "px-1 py-2",
        "flex items-center justify-center",
        "rounded-full",
        "tabular-nums"
      )}
    >
      {count > 99 ? "99+" : count}
    </Badge>
  )
}

export function BadgeToCard({ count }: Props) {
  if (count <= 0) return null

  return (
    <Badge
      variant="counter"
      className={cn(
        "absolute -top-1 right-0",
        "h-5 min-w-5",
        "px-1 py-2",
        "flex items-center justify-center",
        "rounded-full",
        "tabular-nums"
      )}
    >
      {count > 99 ? "99+" : count}
    </Badge>
  )
}