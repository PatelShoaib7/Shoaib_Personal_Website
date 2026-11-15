import { SkillGroupEnum } from '../enums';
import { ISkillItem } from '../interfaces';

export const SKILLS_CONSTANTS: ISkillItem[] = [
  { id: 'skill-react', label: 'React', group: SkillGroupEnum.FRONTEND },
  { id: 'skill-ts', label: 'TypeScript', group: SkillGroupEnum.FRONTEND },
  { id: 'skill-nextjs', label: 'Next.js', group: SkillGroupEnum.FRONTEND },
  { id: 'skill-node', label: 'Node.js', group: SkillGroupEnum.BACKEND },
  { id: 'skill-nestjs', label: 'NestJS', group: SkillGroupEnum.BACKEND },
  { id: 'skill-express', label: 'Express.js', group: SkillGroupEnum.BACKEND },
  { id: 'skill-mongodb', label: 'MongoDB', group: SkillGroupEnum.BACKEND },
  { id: 'skill-redis', label: 'Redis', group: SkillGroupEnum.BACKEND },
  { id: 'skill-redux', label: 'Redux Toolkit', group: SkillGroupEnum.FRONTEND },
  { id: 'skill-zustand', label: 'Zustand', group: SkillGroupEnum.FRONTEND },
  { id: 'skill-docker', label: 'Docker', group: SkillGroupEnum.INFRASTRUCTURE },
  { id: 'skill-k8s', label: 'Kubernetes', group: SkillGroupEnum.INFRASTRUCTURE },
  { id: 'skill-aws', label: 'AWS', group: SkillGroupEnum.INFRASTRUCTURE },
  { id: 'skill-rag', label: 'RAG & LLM APIs', group: SkillGroupEnum.AI_TOOLS },
  { id: 'skill-mcp', label: 'MCP Servers', group: SkillGroupEnum.AI_TOOLS },
  { id: 'skill-gitlab', label: 'GitLab CI/CD', group: SkillGroupEnum.INFRASTRUCTURE },
];
