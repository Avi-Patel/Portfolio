export type Project = { id: string; project: string; description?: string[] };
export type Experience = {
  role: string;
  company: string;
  years: string;
  majorProjects: Project[];
  isCurrent?: boolean;
};
