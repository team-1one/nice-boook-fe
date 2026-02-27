import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { CatalogSearchSchema } from '@/lib/schemas/route.schema';
import { Link } from '@tanstack/react-router';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const defaultCatalogSearch = Object.freeze(CatalogSearchSchema.parse({}));

interface CategoriesDropdownProps {
  categories: string[];
  onClick?: () => void;
}

const CategoriesDropdown = ({
  categories,
  onClick,
}: CategoriesDropdownProps) => {
  const { t } = useTranslation('nav');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'h-12 w-full cursor-pointer justify-between px-4 text-sm font-semibold',
          )}
        >
          {t('categories')}
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className={cn('max-h-80 cursor-pointer overflow-y-auto')}
      >
        {categories.map((category) => (
          <DropdownMenuItem
            key={category}
            asChild
            className="capitalize"
          >
            <Link
              to="/category/$category"
              params={{ category }}
              search={defaultCatalogSearch}
              onClick={onClick}
            >
              {category}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesDropdown;
