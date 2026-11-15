# Shoaib Patel — Developer Portfolio

Minimal, single-column developer portfolio for **Shoaib Patel** (*Senior Software Engineer — Full-Stack MERN, Cloud & Applied AI*), organized with a strict enterprise React + TypeScript folder architecture.

## Enterprise Folder Structure (`src/`)

```text
src/
├── components/
│   ├── common/          # Badge, ProjectCard, ExperienceItem, SectionTitle, ThemeToggle
│   └── layout/          # MinimalNav, Footer, PageContainer
├── pages/
│   └── Home/            # HomePage and sub-sections (Intro, Experience, Education, Skills, Projects, Contact)
├── constants/           # Static data (profile, experience, education, skills, projects)
├── enums/               # ThemeEnum, ProjectCategoryEnum, SkillGroupEnum, SocialPlatformEnum
├── interfaces/          # Strict domain models and component prop contracts
├── services/            # portfolio.service.ts, theme.service.ts, contact.service.ts
├── utils/               # Helper utilities (classNames, formatters)
├── App.tsx
└── main.tsx
```

## Commands

```bash
npm install
npm run dev      # Local development server
npm run lint     # Strict TypeScript check
npm run build    # Production build
```
