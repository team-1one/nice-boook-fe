import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
} from '@/components/ui/combobox';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

type SearchInputControlProps = {
  className?: string;
};

const SearchInputControl = ({ className }: SearchInputControlProps) => (
  <Combobox>
    <InputGroup className={cn('h-12', className)}>
      <InputGroupAddon align="inline-start">
        <Search />
      </InputGroupAddon>
      <InputGroupInput
        type="search"
        placeholder="Find a book or author"
      />
    </InputGroup>
    <ComboboxContent>
      <ComboboxEmpty>No book found :/</ComboboxEmpty>
      <ComboboxList>{/* todo: add search results here */}</ComboboxList>
    </ComboboxContent>
  </Combobox>
);

export default SearchInputControl;
