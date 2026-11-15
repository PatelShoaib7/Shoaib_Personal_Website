import {
  EDUCATION_CONSTANTS,
  EXPERIENCE_CONSTANTS,
  EXPERIENCE_LABELS_CONSTANTS,
  FOOTER_COPY_CONSTANTS,
  NAV_ITEMS_CONSTANTS,
  PROFILE_CONSTANTS,
  PROJECT_ACTION_LABELS,
  PROJECT_CATEGORY_TABS,
  PROJECTS_CONSTANTS,
  SECTION_LABELS_CONSTANTS,
  SKILLS_CONSTANTS,
  SOCIAL_ACTIONS_CONSTANTS,
  THEME_ARIA_LABELS,
} from '../constants';
import { ProjectCategoryEnum, SkillGroupEnum } from '../enums';
import {
  IEducationItem,
  IExperienceItem,
  IExperienceLabels,
  IFooterCopy,
  INavItem,
  IProfile,
  IProjectActionLabels,
  IProjectCategoryTab,
  IProjectItem,
  ISectionLabels,
  ISkillItem,
  ISocialAction,
} from '../interfaces';

class PortfolioService {
  public getProfile(): IProfile {
    return PROFILE_CONSTANTS;
  }

  public getNavItems(): INavItem[] {
    return NAV_ITEMS_CONSTANTS;
  }

  public getSocialActions(): ISocialAction[] {
    return SOCIAL_ACTIONS_CONSTANTS;
  }

  public getSectionLabels(): ISectionLabels {
    return SECTION_LABELS_CONSTANTS;
  }

  public getThemeAriaLabels(): typeof THEME_ARIA_LABELS {
    return THEME_ARIA_LABELS;
  }

  public getFooterCopy(): IFooterCopy {
    return FOOTER_COPY_CONSTANTS;
  }

  public getExperienceItems(): IExperienceItem[] {
    return EXPERIENCE_CONSTANTS;
  }

  public getExperienceLabels(): IExperienceLabels {
    return EXPERIENCE_LABELS_CONSTANTS;
  }

  public getEducationItems(): IEducationItem[] {
    return EDUCATION_CONSTANTS;
  }

  public getSkills(group: SkillGroupEnum = SkillGroupEnum.ALL): ISkillItem[] {
    if (group === SkillGroupEnum.ALL) {
      return SKILLS_CONSTANTS;
    }
    return SKILLS_CONSTANTS.filter((skill) => skill.group === group);
  }

  public getProjectCategoryTabs(): IProjectCategoryTab[] {
    return PROJECT_CATEGORY_TABS;
  }

  public getProjectActionLabels(): IProjectActionLabels {
    return PROJECT_ACTION_LABELS;
  }

  public getProjectsByCategory(
    category: ProjectCategoryEnum = ProjectCategoryEnum.ALL
  ): IProjectItem[] {
    if (category === ProjectCategoryEnum.ALL) {
      return PROJECTS_CONSTANTS;
    }
    return PROJECTS_CONSTANTS.filter((project) =>
      project.categories.includes(category)
    );
  }
}

export const portfolioService = new PortfolioService();
