import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/**
 * Picks a random element from an array
 * @param array The array to pick a random element from
 */
export const pickRandom = <T>(array: readonly T[]): T =>
  array[Math.floor(Math.random() * array.length)];

export const withPreventDefault =
  (fn: () => void) => (e: React.SyntheticEvent) => {
    e.preventDefault();
    fn();
  };
