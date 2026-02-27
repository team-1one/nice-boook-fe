import { Link } from "@tanstack/react-router"
import { ArrowLeft } from "lucide-react"
import { useTranslation } from 'react-i18next';

export function BackButton() {
  const { t } = useTranslation('cart');

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
        {t('back')}
      </span>
    </Link>
  )
}