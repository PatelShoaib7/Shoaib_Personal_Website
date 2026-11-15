import { ProjectCategoryEnum } from '../enums';

export interface IProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  categories: Exclude<ProjectCategoryEnum, ProjectCategoryEnum.ALL>[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface IProjectCategoryTab {
  category: ProjectCategoryEnum;
  label: string;
}

export interface IProjectActionLabels {
  githubLabel: string;
  liveLabel: string;
}
