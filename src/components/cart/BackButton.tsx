import { Link } from "@tanstack/react-router"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  return (
    <Link
      to=".."
      className="
        inline-flex items-center gap-2
        text-gray-secondary
        hover:text-primary
        transition-colors
        mb-6
      "
    >
      <ArrowLeft size={16} strokeWidth={1.5} />
      <span className="text-sm font-medium">
        Back
      </span>
    </Link>
  )
}