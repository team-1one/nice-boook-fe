import { ChevronUp } from "lucide-react"
import { cn } from "../../lib/utils"

interface ArrowButtonProps {
  text?: string
  onClick?: () => void
  disabled?: boolean
}

export function ArrowButton({
  text = "Back",
  onClick,
  disabled,
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center gap-4 text-sm font-medium transition-colors",
        "bg-transparent border-none",
        "text-[#89939A]",
        "hover:text-[#313237]",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      {text}

      <ChevronUp
        className="w-4 h-4 shrink-0 text-[#313237]"
      />
    </button>
  )
}
