import React from 'react';
import { IFooterProps } from '../../interfaces';

export const Footer: React.FC<IFooterProps> = ({ copy, socialActions }) => {
  return (
    <footer className="mt-16 border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80">
      <div className="flex flex-col justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center">
        <p>
          <span>{copy.copyright}</span>{' '}
          <span className="text-zinc-400 dark:text-zinc-500">
            {copy.builtNote}
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {socialActions.map((action) => (
            <a
              key={`footer-${action.id}`}
              href={action.href}
              target={action.isExternal ? '_blank' : undefined}
              rel={action.isExternal ? 'noopener noreferrer' : undefined}
              className="font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
