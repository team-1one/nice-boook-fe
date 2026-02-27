import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type SearchInputControlProps = {
  className?: string;
};

const SearchInputControl = ({ className }: SearchInputControlProps) => {
  const { t } = useTranslation('nav');

  return (
    <InputGroup className={cn('h-12', className)}>
      <InputGroupAddon align="inline-start">
        <Search />
      </InputGroupAddon>
      <InputGroupInput
        type="search"
        placeholder={t('searchPlaceholder')}
      />
    </InputGroup>
  );
};

export default SearchInputControl;
