import { SocialPlatformEnum } from '../enums';
import {
  IContactClosingCopy,
  IFooterCopy,
  INavItem,
  IProfile,
  ISectionLabels,
  ISocialAction,
} from '../interfaces';
import { buildGmailComposeLink, getCurrentYear } from '../utils';

export const PROFILE_CONSTANTS: IProfile = {
  name: 'Shoaib Patel',
  brandTag: '</shoaib>',
  initials: 'SP',
  avatarUrl: '/shoaib-patel.jpg',
  title: 'Senior Software Engineer — Full-Stack MERN, Cloud & Applied AI',
  location: 'Hyderabad, Telangana, India',
  summary:
    'Full-stack engineer with 5+ years of experience building scalable React, TypeScript, and Node.js/NestJS systems. Focused on high-throughput backend microservices, MongoDB & Redis optimization, containerized AWS/Kubernetes deployments, and practical LLM/RAG integrations.',
  email: 'Patelshoaib125@gmail.com',
  githubUrl: 'https://github.com/PatelShoaib7',
  githubHandle: 'github.com/PatelShoaib7',
  linkedinUrl: 'https://www.linkedin.com/in/shoaib-patel-230449203/',
};

export const NAV_ITEMS_CONSTANTS: INavItem[] = [
  { id: 'nav-home', label: 'Home', href: '#top' },
  { id: 'nav-experience', label: 'Experience', href: '#experience' },
  { id: 'nav-projects', label: 'Projects', href: '#projects' },
  { id: 'nav-contact', label: 'Contact', href: '#contact' },
];

export const SOCIAL_ACTIONS_CONSTANTS: ISocialAction[] = [
  {
    id: 'action-github',
    platform: SocialPlatformEnum.GITHUB,
    label: 'GitHub',
    displayText: 'GitHub',
    href: PROFILE_CONSTANTS.githubUrl,
    isExternal: true,
  },
  {
    id: 'action-linkedin',
    platform: SocialPlatformEnum.LINKEDIN,
    label: 'LinkedIn',
    displayText: 'LinkedIn',
    href: PROFILE_CONSTANTS.linkedinUrl,
    isExternal: true,
  },
  {
    id: 'action-email',
    platform: SocialPlatformEnum.EMAIL,
    label: 'Email',
    displayText: PROFILE_CONSTANTS.email,
    href: buildGmailComposeLink(
      PROFILE_CONSTANTS.email,
      'Engineering Opportunity / Quick Chat'
    ),
    isExternal: true,
  },
];

export const SECTION_LABELS_CONSTANTS: ISectionLabels = {
  experienceTitle: 'Work Experience',
  educationTitle: 'Education',
  skillsTitle: 'Skills',
  projectsTitle: 'Projects',
  contactBadge: 'Contact',
  contactTitle: 'Get in Touch',
};

export const THEME_ARIA_LABELS = {
  switchToLight: 'Switch to light theme',
  switchToDark: 'Switch to dark theme',
} as const;

export const CONTACT_CLOSING_CONSTANTS: IContactClosingCopy = {
  promptText:
    'Want to chat about a Senior/Lead role, backend architecture, or full-stack collaboration? Click my email below to open Gmail directly or copy my address.',
  emailActionLabel: 'Open in Gmail',
  copyEmailLabel: 'Copy Email',
  copiedEmailLabel: 'Copied!',
  defaultMailSubject: 'Hello Shoaib — Engineering Discussion',
};

export const FOOTER_COPY_CONSTANTS: IFooterCopy = {
  copyright: `© ${getCurrentYear()} Shoaib Patel.`,
  builtNote: 'Built with React, TypeScript & Tailwind CSS.',
};
