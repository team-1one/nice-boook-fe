import { cn } from "../../lib/utils"

interface NumberButtonProps {
  number: number
  selected?: boolean
  onClick?: () => void
  disabled?: boolean
}

export function NumberButton({
  number,
  selected,
  onClick,
  disabled,
}: NumberButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors",
        "bg-white border",
        "border-[#E2E6E9] text-black",
        "hover:border-[#313237]",
        selected && "bg-[#313237] border-[#313237] text-white"
      )}
    >
      {number}
    </button>
  )
}
