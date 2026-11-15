import React from 'react';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { IProjectCardProps } from '../../interfaces';
import { Badge } from './Badge';

export const ProjectCard: React.FC<IProjectCardProps> = ({
  project,
  actionLabels,
}) => {
  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-zinc-200 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>
          <span className="shrink-0 rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-[10px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-400">
            {project.period}
          </span>
        </div>

        <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </div>

      <div className="mt-4 pt-2">
        <div className="flex flex-wrap gap-1">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              label={tech}
              variant="secondary"
              className="px-1.5 py-0.5 text-[10px]"
            />
          ))}
        </div>

        <div className="mt-3.5 flex flex-wrap items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-zinc-900 bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-50 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 active:scale-95 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <Globe className="h-3 w-3" />
              <span>{actionLabels.liveLabel}</span>
              <ArrowUpRight className="h-2.5 w-2.5 opacity-80" />
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-zinc-900 bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-50 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 active:scale-95 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <Github className="h-3 w-3" />
            <span>{actionLabels.githubLabel}</span>
            <ArrowUpRight className="h-2.5 w-2.5 opacity-80" />
          </a>
        </div>
      </div>
    </article>
  );
};
