export interface IExperienceItem {
  id: string;
  company: string;
  employmentType?: string;
  monogram: string;
  logoUrl?: string;
  role: string;
  dateRange: string;
  location: string;
  linkedinUrl: string;
  websiteUrl?: string;
  isCurrent?: boolean;
  defaultExpanded?: boolean;
  highlights: string[];
  techTags?: string[];
}

export interface IExperienceLabels {
  currentLabel: string;
  linkedinLabel: string;
  websiteLabel: string;
}
