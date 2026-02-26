import { Field, FieldLabel } from '../ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { CATALOG_LIMITS } from './constants/catalog';
import { Typography } from '../ui/Typography';
import { useTranslation } from 'react-i18next';

export type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const ItemsOnPage = ({ value, onChange }: Props) => {
  const { t } = useTranslation('catalog');

  return (
    <div className="relative w-33 opacity-100">
      <Field className="flex flex-col gap-0.75">
        <FieldLabel htmlFor="items-on-page">
          <Typography
            variant="small"
            color="secondary"
          >
            {t('itemsOnPage')}
          </Typography>
        </FieldLabel>

        <Select
          value={value}
          onValueChange={onChange}
        >
          <SelectTrigger id="items-on-page">
            <SelectValue placeholder={t('itemsOnPage')} />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {CATALOG_LIMITS.PER_PAGE_OPTIONS.map((item) => (
                <SelectItem
                  key={item}
                  value={item.toString()}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
};
