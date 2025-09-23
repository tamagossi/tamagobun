import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes with conditional logic
 * Combines clsx for conditional classes and tailwind-merge for proper Tailwind class merging
 *
 * @param inputs - Class values (strings, objects, arrays, etc.)
 * @returns Merged class string
 *
 * @example
 * cn('px-2 py-1', 'bg-blue-500', { 'text-white': true, 'font-bold': false })
 * // Returns: 'px-2 py-1 bg-blue-500 text-white'
 *
 * @example
 * cn('px-2', 'px-4') // tailwind-merge resolves conflicts
 * // Returns: 'px-4'
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
