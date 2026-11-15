import React, { useEffect, useMemo, useState } from 'react';
import { RevealSection } from '../../components/common';
import { Footer, MinimalNav, PageContainer } from '../../components/layout';
import { ProjectCategoryEnum, ThemeEnum } from '../../enums';
import {
  contactService,
  portfolioService,
  themeService,
} from '../../services';
import { ContactSection } from './ContactSection';
import { EducationSection } from './EducationSection';
import { ExperienceSection } from './ExperienceSection';
import { IntroSection } from './IntroSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';

export const HomePage: React.FC = () => {
  const [theme, setTheme] = useState<ThemeEnum>(() =>
    themeService.getInitialTheme()
  );
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategoryEnum>(ProjectCategoryEnum.ALL);

  useEffect(() => {
    themeService.applyTheme(theme);
  }, [theme]);

  const handleToggleTheme = (): void => {
    setTheme((prev) => themeService.getNextTheme(prev));
  };

  const profile = portfolioService.getProfile();
  const navItems = portfolioService.getNavItems();
  const socialActions = portfolioService.getSocialActions();
  const sectionLabels = portfolioService.getSectionLabels();
  const themeAriaLabels = portfolioService.getThemeAriaLabels();
  const footerCopy = portfolioService.getFooterCopy();
  const experienceItems = portfolioService.getExperienceItems();
  const experienceLabels = portfolioService.getExperienceLabels();
  const educationItems = portfolioService.getEducationItems();
  const skills = portfolioService.getSkills();
  const projectTabs = portfolioService.getProjectCategoryTabs();
  const projectActionLabels = portfolioService.getProjectActionLabels();
  const filteredProjects = useMemo(
    () => portfolioService.getProjectsByCategory(selectedCategory),
    [selectedCategory]
  );
  const contactCopy = contactService.getClosingCopy();
  const gmailComposeHref = contactService.getGmailComposeHref();

  return (
    <PageContainer
      header={
        <MinimalNav
          brandTag={profile.brandTag}
          navItems={navItems}
          socialActions={socialActions}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          lightModeAriaLabel={themeAriaLabels.switchToLight}
          darkModeAriaLabel={themeAriaLabels.switchToDark}
        />
      }
      footer={<Footer copy={footerCopy} socialActions={socialActions} />}
    >
      <RevealSection delayMs={0}>
        <IntroSection profile={profile} socialActions={socialActions} />
      </RevealSection>

      <RevealSection delayMs={50}>
        <ExperienceSection
          title={sectionLabels.experienceTitle}
          items={experienceItems}
          labels={experienceLabels}
        />
      </RevealSection>

      <RevealSection delayMs={70}>
        <EducationSection
          title={sectionLabels.educationTitle}
          items={educationItems}
        />
      </RevealSection>

      <RevealSection delayMs={90}>
        <SkillsSection title={sectionLabels.skillsTitle} skills={skills} />
      </RevealSection>

      <RevealSection delayMs={110}>
        <ProjectsSection
          title={sectionLabels.projectsTitle}
          categoryTabs={projectTabs}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          projects={filteredProjects}
          actionLabels={projectActionLabels}
        />
      </RevealSection>

      <RevealSection delayMs={120}>
        <ContactSection
          badgeLabel={sectionLabels.contactBadge}
          title={sectionLabels.contactTitle}
          email={profile.email}
          copy={contactCopy}
          onCopyEmail={() => contactService.copyEmailToClipboard()}
          gmailComposeHref={gmailComposeHref}
        />
      </RevealSection>
    </PageContainer>
  );
};
