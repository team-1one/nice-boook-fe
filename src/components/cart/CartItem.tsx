import { Minus, Plus, X } from "lucide-react";
import { Typography } from "../ui/Typography";

export function CartItem() {
  return (
    <div
      className="
        flex flex-col gap-4 p-4
        sm:flex-row gap-row-4 sm:items-center sm:gap-6
        p-4 sm:p-6
        border border-color-gray-secondary
        rounded-2xl
        bg-white
      "
    >
      <div className="flex items-center gap-4 sm:contents">
        <button
          type="button"
          className="
            p-2
            text-gray-icons
            hover:text-red
            rounded-full
            transition-colors
          "
        >
          <X size={16} strokeWidth={1.5} />
        </button>
        <div className="w-20 h-20 flex items-center justify-center">
          <img 
            src="https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/paperback/1984/en/01.webp" 
            alt="Don't Make Me Think, Revisited" 
            className="w-auto max-h-full object-contain" />
        </div>
        <div className="w-32 sm:w-44 lg:w-84 min-w-0">
          <Typography variant="h5" className="truncate">
            Don&apos;t Make Me Think, Revisited
          </Typography>
          <Typography variant="body" color="secondary">
            Steve Krug
          </Typography>
        </div>
      </div>

      <div className="flex w-full items-center justify-between sm:justify-end sm:gap-6">
        <div className="flex items-center gap-3">
          <button className="text-gray-icons hover:text-gray-primary">
            <Minus size={16} strokeWidth={1.5} />
          </button>
          <Typography variant="body" className="w-6 text-center font-semibold tabular-nums">12</Typography>
          <button className="text-gray-icons hover:text-gray-primary">
            <Plus size={16} strokeWidth={1.5} />
          </button>
        </div>
        <div className="text-right tabular-nums">
          <Typography variant="h3">
            ₴ 28.79
          </Typography>
        </div>
      </div>
    </div>
  );
}