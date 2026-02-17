import { cn } from "../../lib/utils"

interface PrimaryButtonProps {
  text: string
  onClick?: () => void
  selected?: boolean
  disabled?: boolean
}

export function PrimaryButton({
  text,
  onClick,
  selected,
  disabled,
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide transition-all",
        "bg-[#313237] text-white",
        "hover:shadow-[0px_3px_13px_0px_#17203166]",
        selected &&
          "bg-white border border-[#E2E6E9] text-[#27AE60] shadow-none",

        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      {text}
    </button>
  )
}
