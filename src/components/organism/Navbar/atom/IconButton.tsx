import { actionCellClasses } from '@/components/organism/Navbar/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

const IconButton = ({
  className,
  children,
  ...props
}: ComponentProps<'button'>) => (
  <Button
    variant="ghost"
    size="icon"
    className={cn(actionCellClasses, 'rounded-none', className)}
    {...props}
  >
    {children}
  </Button>
);

export default IconButton;
