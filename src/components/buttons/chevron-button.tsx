import { ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"

interface ChevronButtonProps {
  direction?: "left" | "right"
  onClick?: () => void
  disabled?: boolean
}

export function ChevronButton({
  direction = "right",
  onClick,
  disabled,
}: ChevronButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-8 h-8 flex items-center justify-center rounded-md",
        "bg-white text-black transition-colors",
        "disabled:text-[#B4BDC3] disabled:cursor-not-allowed"
      )}
    >
      <ChevronRight
        className={cn(
          "w-4 h-4",
          direction === "left" && "rotate-180"
        )}
      />
    </button>
  )
}
