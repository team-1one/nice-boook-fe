import { Heart } from "lucide-react"
import { cn } from "../../lib/utils"

interface HeartButtonProps {
  selected?: boolean
  onClick?: () => void
  disabled?: boolean
}

export function HeartButton({
  selected,
  onClick,
  disabled,
}: HeartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-10 h-10 flex items-center justify-center rounded-md",
        "bg-white border transition-colors",
        "border-[#E2E6E9]",
        "hover:border-[#313237]",
        selected && "border-[#E2E6E9]",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <Heart
        className={cn(
          "w-5 h-5 transition-colors",
          selected
            ? "fill-[#EB5757] text-[#EB5757]"
            : "fill-none text-black"
        )}
      />
    </button>
  )
}
