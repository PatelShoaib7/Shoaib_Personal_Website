import React from 'react';
import { ProjectCard, SectionTitle } from '../../components/common';
import { IProjectsSectionProps } from '../../interfaces';
import { cn } from '../../utils';

export const ProjectsSection: React.FC<IProjectsSectionProps> = ({
  title,
  categoryTabs,
  selectedCategory,
  onSelectCategory,
  projects,
  actionLabels,
}) => {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <SectionTitle id="projects-heading" title={title} />

        <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-100/90 p-1 dark:border-zinc-800 dark:bg-zinc-900/90">
          {categoryTabs.map((tab) => {
            const isSelected = selectedCategory === tab.category;
            return (
              <button
                key={tab.category}
                type="button"
                onClick={() => onSelectCategory(tab.category)}
                aria-pressed={isSelected}
                className={cn(
                  'rounded-lg border px-3 py-1 text-xs font-semibold transition-all duration-200 active:scale-95',
                  isSelected
                    ? 'border-zinc-900 bg-zinc-900 text-zinc-50 shadow-sm dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
                    : 'border-zinc-200/90 bg-white text-zinc-700 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={selectedCategory}
        className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={{ animationDelay: `${index * 60}ms` }}
            className="animate-fade-slide-up"
          >
            <ProjectCard project={project} actionLabels={actionLabels} />
          </div>
        ))}
      </div>
    </section>
  );
};
