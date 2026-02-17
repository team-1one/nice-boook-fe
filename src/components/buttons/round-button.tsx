import { cn } from "../../lib/utils"

interface RoundButtonProps {
  selected?: boolean
  onClick?: () => void
  disabled?: boolean
  color?: string
}

export function RoundButton({
  selected,
  onClick,
  disabled,
  color = "#F7E5D1",
}: RoundButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: color }}
      className={cn(
        "w-10 h-10 rounded-full",
        "border transition-colors",
        "shadow-[inset_0_0_0_2px_white]",
        "border-[#E2E6E9]",             
        "hover:border-[#B4BDC3]",        
        selected && "border-[#313237]",  
        disabled && "cursor-not-allowed opacity-50"
      )}
    />
  )
}


