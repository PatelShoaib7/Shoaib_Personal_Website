import { ProjectCategoryEnum } from '../enums';
import {
  IProjectActionLabels,
  IProjectCategoryTab,
  IProjectItem,
} from '../interfaces';
import { PROFILE_CONSTANTS } from './profile.constants';

export const PROJECT_CATEGORY_TABS: IProjectCategoryTab[] = [
  { category: ProjectCategoryEnum.ALL, label: 'All' },
  { category: ProjectCategoryEnum.FULL_STACK, label: 'Full Stack' },
  { category: ProjectCategoryEnum.BACKEND, label: 'Backend' },
  { category: ProjectCategoryEnum.AI, label: 'AI' },
];

export const PROJECT_ACTION_LABELS: IProjectActionLabels = {
  githubLabel: 'GitHub',
  liveLabel: 'Live',
};

export const PROJECTS_CONSTANTS: IProjectItem[] = [
  {
    id: 'proj-fintech-dashboard',
    title: 'Fintech Financial Data & Analytics Dashboard',
    period: 'Full Stack',
    description:
      'Comprehensive financial data management dashboard streamlining transaction tracking, multi-tenant reporting, and role-based analytics.',
    categories: [ProjectCategoryEnum.FULL_STACK, ProjectCategoryEnum.BACKEND],
    techStack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'AWS'],
    githubUrl: PROFILE_CONSTANTS.githubUrl,
  },
  {
    id: 'proj-insurance-onboarding',
    title: 'Insurance Agent Digital Onboarding Platform',
    period: 'Backend & Scale',
    description:
      'High-reliability onboarding workflow engine for insurance agents in a social enterprise marketplace with KYC validation and REST APIs.',
    categories: [ProjectCategoryEnum.BACKEND, ProjectCategoryEnum.FULL_STACK],
    techStack: ['Node.js', 'NestJS', 'Express.js', 'MongoDB', 'Redis', 'Joi', 'AWS'],
    githubUrl: PROFILE_CONSTANTS.githubUrl,
  },
  {
    id: 'proj-multilang-enterprise',
    title: 'Multi-Language Enterprise Workflow Suite',
    period: 'Full Stack',
    description:
      'Localized enterprise web platform built with reusable React + Zustand components, NestJS REST APIs, and Redis-cached state.',
    categories: [ProjectCategoryEnum.FULL_STACK],
    techStack: ['React.js', 'TypeScript', 'Zustand', 'NestJS', 'Redis', 'Docker'],
    githubUrl: PROFILE_CONSTANTS.githubUrl,
  },
  {
    id: 'proj-rag-triage',
    title: 'Agentic AI & RAG Knowledge Triage Assistant',
    period: 'Applied AI',
    description:
      'Context-aware engineering assistant combining hybrid RAG retrieval, MCP diagnostic tools, and streaming LLM responses.',
    categories: [ProjectCategoryEnum.AI, ProjectCategoryEnum.BACKEND],
    techStack: ['TypeScript', 'Node.js', 'RAG', 'MCP', 'LLM APIs', 'Redis'],
    githubUrl: PROFILE_CONSTANTS.githubUrl,
  },
];
