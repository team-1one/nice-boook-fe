import type { SortSearchKey } from '@/types/search';
import { Field, FieldLabel } from '../ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Typography } from '../ui/Typography';
import { SORT_OPTIONS } from './constants/catalog';
import { useTranslation } from 'react-i18next';

export type Props = {
  value?: SortSearchKey;
  onChange: (value: SortSearchKey) => void;
};

export const SortBySelect = ({ value, onChange }: Props) => {
  const { t } = useTranslation('catalog');

  return (
    <div className="relative w-44 opacity-100">
      <Field className="flex flex-col gap-0.75">
        <FieldLabel htmlFor="sort-by">
          <Typography
            variant="small"
            color="secondary"
          >
            {t('sortBy')}
          </Typography>
        </FieldLabel>

        <Select
          value={value}
          onValueChange={(nextValue) => onChange(nextValue as SortSearchKey)}
        >
          <SelectTrigger id="sort-by">
            <SelectValue placeholder={t('sortBy')} />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {SORT_OPTIONS.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                >
                  {t(`sortOptions.${option.key}`)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
};
