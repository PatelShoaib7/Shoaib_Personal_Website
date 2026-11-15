import type React from 'react';
import { ProjectCategoryEnum, ThemeEnum } from '../enums';
import { IEducationItem } from './IEducationItem';
import { IExperienceItem, IExperienceLabels } from './IExperienceItem';
import {
  IContactClosingCopy,
  IFooterCopy,
  INavItem,
  IProfile,
  ISocialAction,
} from './IProfile';
import {
  IProjectActionLabels,
  IProjectCategoryTab,
  IProjectItem,
} from './IProjectItem';
import { ISkillItem } from './ISkillItem';

export type BadgeVariant = 'solid' | 'secondary' | 'outline';

export interface IBadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

export interface ISectionTitleProps {
  title: string;
  id?: string;
  className?: string;
}

export interface IRevealSectionProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}

export interface IThemeToggleProps {
  theme: ThemeEnum;
  onToggle: () => void;
  lightModeAriaLabel: string;
  darkModeAriaLabel: string;
}

export interface IExperienceItemProps {
  item: IExperienceItem;
  labels: IExperienceLabels;
}

export interface IProjectCardProps {
  project: IProjectItem;
  actionLabels: IProjectActionLabels;
}

export interface IMinimalNavProps {
  brandTag: string;
  navItems: INavItem[];
  socialActions: ISocialAction[];
  theme: ThemeEnum;
  onToggleTheme: () => void;
  lightModeAriaLabel: string;
  darkModeAriaLabel: string;
}

export interface IFooterProps {
  copy: IFooterCopy;
  socialActions: ISocialAction[];
}

export interface IPageContainerProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export interface IIntroSectionProps {
  profile: IProfile;
  socialActions: ISocialAction[];
}

export interface IExperienceSectionProps {
  title: string;
  items: IExperienceItem[];
  labels: IExperienceLabels;
}

export interface IEducationSectionProps {
  title: string;
  items: IEducationItem[];
}

export interface ISkillsSectionProps {
  title: string;
  skills: ISkillItem[];
}

export interface IProjectsSectionProps {
  title: string;
  categoryTabs: IProjectCategoryTab[];
  selectedCategory: ProjectCategoryEnum;
  onSelectCategory: (category: ProjectCategoryEnum) => void;
  projects: IProjectItem[];
  actionLabels: IProjectActionLabels;
}

export interface IContactSectionProps {
  badgeLabel: string;
  title: string;
  email: string;
  copy: IContactClosingCopy;
  onCopyEmail: () => Promise<boolean>;
  gmailComposeHref: string;
}
