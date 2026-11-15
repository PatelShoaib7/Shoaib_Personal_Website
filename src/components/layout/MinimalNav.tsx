import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialPlatformEnum } from '../../enums';
import { IMinimalNavProps, ISocialAction } from '../../interfaces';
import { cn, scrollToSectionSmoothly } from '../../utils';
import { ThemeToggle } from '../common';

export const MinimalNav: React.FC<IMinimalNavProps> = ({
  brandTag,
  navItems,
  socialActions,
  theme,
  onToggleTheme,
  lightModeAriaLabel,
  darkModeAriaLabel,
}) => {
  const [activeHref, setActiveHref] = useState<string>('#top');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const githubAction = socialActions.find(
    (action: ISocialAction) => action.platform === SocialPlatformEnum.GITHUB
  );
  const linkedinAction = socialActions.find(
    (action: ISocialAction) => action.platform === SocialPlatformEnum.LINKEDIN
  );
  const emailAction = socialActions.find(
    (action: ISocialAction) => action.platform === SocialPlatformEnum.EMAIL
  );

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 12);

      if (window.scrollY < 100) {
        setActiveHref('#top');
        return;
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;
      if (nearBottom) {
        const lastItem = navItems[navItems.length - 1];
        if (lastItem) {
          setActiveHref(lastItem.href);
          return;
        }
      }

      for (let i = navItems.length - 1; i >= 0; i -= 1) {
        const href = navItems[i].href;
        if (href !== '#top' && href.startsWith('#')) {
          const el = document.getElementById(href.slice(1));
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140) {
              setActiveHref(href);
              return;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    event.preventDefault();
    setActiveHref(href);
    scrollToSectionSmoothly(href);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-30 border-b bg-white/92 backdrop-blur-md transition-all duration-200 dark:bg-[#09090B]/92',
        isScrolled
          ? 'border-zinc-200 shadow-sm dark:border-zinc-800'
          : 'border-zinc-200/70 dark:border-zinc-800/80'
      )}
    >
      <div className="mx-auto max-w-3xl px-4 py-2.5 sm:px-5">
        <div className="flex items-center justify-between gap-3">
          {/* Left: Visible Brand Button */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="inline-flex h-9 shrink-0 items-center rounded-lg border border-zinc-300 bg-zinc-50 px-3 font-mono text-xs font-bold tracking-tight text-zinc-900 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-white active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
          >
            {brandTag}
          </a>

          {/* Center: Distinct Pill Navigation Buttons (Desktop & Tablet) */}
          <nav
            aria-label={brandTag}
            className="hidden items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-100/90 p-1 dark:border-zinc-800 dark:bg-zinc-900/90 sm:flex"
          >
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'rounded-lg border px-3 py-1 text-xs font-semibold transition-all duration-200 active:scale-95',
                    isActive
                      ? 'border-zinc-900 bg-zinc-900 text-white shadow-sm dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
                      : 'border-zinc-200/90 bg-white text-zinc-700 shadow-[0_1px_1px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white'
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Crisp Bordered Action Buttons + Theme Toggle */}
          <div className="flex items-center gap-1.5">
            {githubAction && (
              <a
                href={githubAction.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={githubAction.label}
                title={githubAction.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300 bg-white text-zinc-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
              >
                <Github className="h-4 w-4" />
              </a>
            )}

            {linkedinAction && (
              <a
                href={linkedinAction.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkedinAction.label}
                title={linkedinAction.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300 bg-white text-[#0A66C2] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A66C2]/50 hover:bg-sky-50/40 hover:shadow active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-sky-400 dark:hover:border-sky-400/50 dark:hover:bg-zinc-800"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}

            {emailAction && (
              <a
                href={emailAction.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={emailAction.label}
                title={emailAction.displayText}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300 bg-white text-zinc-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}

            <ThemeToggle
              theme={theme}
              onToggle={onToggleTheme}
              lightModeAriaLabel={lightModeAriaLabel}
              darkModeAriaLabel={darkModeAriaLabel}
            />
          </div>
        </div>

        {/* Mobile Pill Buttons Row (< 640px) */}
        <nav
          aria-label={`${brandTag} mobile`}
          className="mt-2.5 flex items-center justify-between gap-1.5 rounded-xl border border-zinc-200 bg-zinc-100/90 p-1 dark:border-zinc-800 dark:bg-zinc-900/90 sm:hidden"
        >
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={`mob-${item.id}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  'flex-1 rounded-lg border py-1.5 text-center text-[11px] font-semibold transition-all duration-200 active:scale-95',
                  isActive
                    ? 'border-zinc-900 bg-zinc-900 text-white shadow-sm dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
                    : 'border-zinc-200/90 bg-white text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-300'
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
