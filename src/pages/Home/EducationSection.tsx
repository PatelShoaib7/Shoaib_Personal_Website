import React from 'react';
import { GraduationCap } from 'lucide-react';
import { SectionTitle } from '../../components/common';
import { IEducationSectionProps } from '../../interfaces';

export const EducationSection: React.FC<IEducationSectionProps> = ({
  title,
  items,
}) => {
  return (
    <section id="education" aria-labelledby="education-heading">
      <SectionTitle id="education-heading" title={title} />

      <div className="mt-4 space-y-3.5">
        {items.map((edu) => (
          <div
            key={edu.id}
            className="flex items-start justify-between gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
          >
            <div className="flex min-w-0 items-start gap-3.5">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                <GraduationCap className="h-5 w-5" />
              </div>

              <div className="min-w-0 pt-0.5">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {edu.institution}
                </h3>
                <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">
                  {edu.degree}
                </p>
              </div>
            </div>

            <span className="shrink-0 pt-0.5 text-right text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
              {edu.graduationText}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
