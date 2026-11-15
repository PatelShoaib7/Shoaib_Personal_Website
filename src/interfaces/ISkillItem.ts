import { SkillGroupEnum } from '../enums';

export interface ISkillItem {
  id: string;
  label: string;
  group: Exclude<SkillGroupEnum, SkillGroupEnum.ALL>;
}

export interface ISkillGroupTab {
  group: SkillGroupEnum;
  label: string;
}
