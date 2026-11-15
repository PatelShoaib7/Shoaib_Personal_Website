import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeEnum } from '../../enums';
import { IThemeToggleProps } from '../../interfaces';

export const ThemeToggle: React.FC<IThemeToggleProps> = ({
  theme,
  onToggle,
  lightModeAriaLabel,
  darkModeAriaLabel,
}) => {
  const isDark = theme === ThemeEnum.DARK;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? lightModeAriaLabel : darkModeAriaLabel}
      title={isDark ? lightModeAriaLabel : darkModeAriaLabel}
      className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300 bg-white text-zinc-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-zinc-700 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
};
