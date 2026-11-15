import React from 'react';
import { BadgeVariant, IBadgeProps } from '../../interfaces';
import { cn } from '../../utils';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  solid:
    'bg-zinc-900 text-zinc-50 border border-zinc-900 shadow-xs hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-sm dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 dark:hover:bg-zinc-200',
  secondary:
    'bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-zinc-800/90 dark:text-zinc-300 dark:border-zinc-700/80',
  outline:
    'bg-transparent text-zinc-600 border border-zinc-200 dark:text-zinc-400 dark:border-zinc-800',
};

export const Badge: React.FC<IBadgeProps> = ({
  label,
  variant = 'solid',
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-all duration-200',
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {label}
    </span>
  );
};
