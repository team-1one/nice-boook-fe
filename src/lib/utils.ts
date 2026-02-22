import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const withPreventDefault =
  (fn: () => void) => (e: React.SyntheticEvent) => {
    e.preventDefault();
    fn();
  };
