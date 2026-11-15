import { ThemeEnum } from '../enums';

const THEME_STORAGE_KEY = 'sp_portfolio_theme';

class ThemeService {
  public getInitialTheme(): ThemeEnum {
    if (typeof window === 'undefined') {
      return ThemeEnum.LIGHT;
    }

    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === ThemeEnum.DARK || stored === ThemeEnum.LIGHT) {
        return stored;
      }
    } catch {
      // Ignore storage access errors in restricted browsers
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? ThemeEnum.DARK : ThemeEnum.LIGHT;
  }

  public applyTheme(theme: ThemeEnum): void {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    if (theme === ThemeEnum.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage write errors
    }
  }

  public getNextTheme(current: ThemeEnum): ThemeEnum {
    return current === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
  }
}

export const themeService = new ThemeService();
