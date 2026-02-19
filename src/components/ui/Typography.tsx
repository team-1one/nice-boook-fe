import * as React from 'react';
import { Slot } from 'radix-ui';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import {typographyVariants} from './typography.variants';

interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, color, asChild = false, ...props }, ref) => {

    const components = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      uppercase: 'span',
      button: 'span',
      body: 'p',
      small: 'small',
    };

    const DefaultTag = (variant ? components[variant] : 'p') as React.ElementType;    
    const Comp = asChild ? Slot.Root : DefaultTag;

    return (
      <Comp
        ref={ref}
        className={cn(typographyVariants({ variant, color, className }))}
        {...props}
      />
    );
  }
);

Typography.displayName = 'Typography';

export { Typography };