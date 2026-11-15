import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight, Globe, Linkedin } from 'lucide-react';
import { IExperienceItemProps } from '../../interfaces';
import { cn } from '../../utils';
import { Badge } from './Badge';

export const ExperienceItem: React.FC<IExperienceItemProps> = ({
  item,
  labels,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    Boolean(item.defaultExpanded)
  );
  const [logoError, setLogoError] = useState<boolean>(false);

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
      <div className="flex items-start justify-between gap-3">
        {/* Left: Company Logo + Middle: Role, Company & Links */}
        <div className="flex min-w-0 items-start gap-3.5">
          {/* Company Logo Tile */}
          <a
            href={item.websiteUrl || item.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.company}
            className="flex h-11 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 shadow-xs transition-transform duration-200 hover:scale-105 dark:border-zinc-700"
          >
            {item.logoUrl && !logoError ? (
              <img
                src={item.logoUrl}
                alt={item.company}
                onError={() => setLogoError(true)}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="font-mono text-[11px] font-semibold text-zinc-700">
                {item.monogram}
              </span>
            )}
          </a>

          <div className="min-w-0">
            {/* Clickable Expand/Collapse Header */}
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className="group flex flex-wrap items-center gap-1.5 text-left"
            >
              <h3 className="text-sm font-semibold text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-white">
                {item.role}
              </h3>
              {item.isCurrent && (
                <Badge
                  label={labels.currentLabel}
                  variant="secondary"
                  className="px-1.5 py-0 text-[10px]"
                />
              )}
              <ChevronRight
                className={cn(
                  'h-3.5 w-3.5 text-zinc-400 transition-transform duration-300 ease-out group-hover:text-zinc-700 dark:group-hover:text-zinc-200',
                  isExpanded && 'rotate-90'
                )}
              />
            </button>

            <p className="mt-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-300">
              <span>{item.company}</span>
              {item.employmentType && (
                <span className="text-zinc-500 dark:text-zinc-400">
                  {' '}
                  · {item.employmentType}
                </span>
              )}
            </p>

            <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
              {item.location}
            </p>

            {/* Company LinkedIn & Official Website Action Buttons */}
            <div className="mt-2.5 flex flex-wrap items-center gap-2">
              <a
                href={item.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-zinc-300 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A66C2]/50 hover:bg-sky-50/50 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-sky-400/50 dark:hover:bg-zinc-700/80"
              >
                <Linkedin className="h-3 w-3 text-[#0A66C2] dark:text-sky-400" />
                <span>{labels.linkedinLabel}</span>
                <ArrowUpRight className="h-3 w-3 opacity-75" />
              </a>

              {item.websiteUrl && (
                <a
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-zinc-300 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-700/80"
                >
                  <Globe className="h-3 w-3 text-zinc-600 dark:text-zinc-300" />
                  <span>{labels.websiteLabel}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-75" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: Date Range */}
        <span className="shrink-0 pt-0.5 text-right text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
          {item.dateRange}
        </span>
      </div>

      {/* Smooth Animated Accordion Body */}
      <div
        className={cn(
          'grid transition-[grid-template-rows,opacity,margin] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isExpanded
            ? 'mt-3.5 grid-rows-[1fr] opacity-100'
            : 'mt-0 grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-zinc-100 pt-3 dark:border-zinc-800/80">
            <ul className="space-y-1.5">
              {item.highlights.map((bullet, idx) => (
                <li
                  key={`${item.id}-hl-${idx}`}
                  className="flex items-start gap-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {item.techTags && item.techTags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.techTags.map((tag) => (
                  <Badge
                    key={tag}
                    label={tag}
                    variant="secondary"
                    className="px-2 py-0.5 text-[10px]"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
