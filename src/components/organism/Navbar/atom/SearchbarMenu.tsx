import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search } from 'lucide-react';
import IconButton from './IconButton';
import SearchInputControl from './SearchInputControl';

type SearchMenuActionProps = {
  className?: string;
};

const SearchbarMenu = ({ className }: SearchMenuActionProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton
          className={className}
          aria-label="Open search"
        >
          <Search className="size-6" />
        </IconButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-80 p-0"
      >
        <SearchInputControl className="h-10" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default SearchbarMenu;
