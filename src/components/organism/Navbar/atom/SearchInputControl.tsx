import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { debounce } from '@tanstack/react-pacer';
import { useBookSearch } from '@/lib/hooks/useBookSearch';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useNavigate } from '@tanstack/react-router';
import { Typography } from '@/components/ui/Typography';

interface SearchInputControlProps {
  className?: string;
  onNavigate?: () => void;
}

const SearchInputControl = ({
  className,
  onNavigate,
}: SearchInputControlProps) => {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const { data: searchResults, isLoading } = useBookSearch(query);
  const navigate = useNavigate();

  const debouncedQuery = useMemo(
    () =>
      debounce(
        (value: string) => {
          setQuery(value);
        },
        {
          leading: true,
          wait: 500,
        },
      ),
    [],
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInput(value);
    debouncedQuery(value);
  };

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <InputGroup className={cn('h-12', className)}>
          <InputGroupAddon align="inline-start">
            <Search />
          </InputGroupAddon>
          <InputGroupInput
            type="search"
            placeholder="Find a book or author"
            value={input}
            onChange={handleSearchChange}
          />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={() => setOpen(false)}
        className={cn(
          'max-h-[calc(100vh-100px)] w-(--radix-popover-trigger-width) overflow-y-auto p-0',
        )}
      >
        <Command>
          <CommandList className="max-h-72">
            {isLoading && (
              <div className="p-4 text-center text-sm">Searching...</div>
            )}
            {Boolean(query.trim().length) && !isLoading && (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
            {searchResults?.map((result) => (
              <CommandItem
                className="flex items-center gap-3 px-3 py-2"
                key={result.id}
                value={result.slug}
                onSelect={() => {
                  setOpen(false);
                  setInput('');
                  navigate({
                    to: '/$bookSlug',
                    params: { bookSlug: result.slug },
                  });
                  if (onNavigate) onNavigate();
                }}
              >
                <img
                  className="h-14 w-10 rounded-sm object-cover"
                  src={result.images[0]}
                  alt={result.name}
                />
                <div className="flex min-w-0 flex-col">
                  <Typography className="text-gray-primary truncate font-medium">
                    {result.name}
                  </Typography>
                  <Typography
                    className="text-gray-secondary truncate text-sm"
                    variant="small"
                  >
                    {result.author}
                  </Typography>
                </div>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchInputControl;
