import { SocialPlatformEnum } from '../enums';

export interface ISocialAction {
  id: string;
  platform: SocialPlatformEnum;
  label: string;
  displayText: string;
  href: string;
  isExternal: boolean;
}

export interface INavItem {
  id: string;
  label: string;
  href: string;
}

export interface IProfile {
  name: string;
  brandTag: string;
  initials: string;
  avatarUrl?: string;
  title: string;
  location: string;
  summary: string;
  email: string;
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
}

export interface ISectionLabels {
  experienceTitle: string;
  educationTitle: string;
  skillsTitle: string;
  projectsTitle: string;
  contactBadge: string;
  contactTitle: string;
}

export interface IContactClosingCopy {
  promptText: string;
  emailActionLabel: string;
  copyEmailLabel: string;
  copiedEmailLabel: string;
  defaultMailSubject: string;
}

export interface IFooterCopy {
  copyright: string;
  builtNote: string;
}
