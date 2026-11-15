import React from 'react';
import { ISectionTitleProps } from '../../interfaces';
import { cn } from '../../utils';

export const SectionTitle: React.FC<ISectionTitleProps> = ({
  title,
  id,
  className,
}) => {
  return (
    <h2
      id={id}
      className={cn(
        'text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-xl',
        className
      )}
    >
      {title}
    </h2>
  );
};
