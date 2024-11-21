export interface Skill {
  title: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skills {
  //   [key: string]: SkillCategory;
  programmingLanguage: SkillCategory;
  tools: SkillCategory;
  Miscellaneous: SkillCategory;
  FrameWorks: SkillCategory;
  operatingSystems: SkillCategory;
}

export interface Project {
  title: string;
  description: string;
  repoLink?: string;
  demoLink?: string;
}

