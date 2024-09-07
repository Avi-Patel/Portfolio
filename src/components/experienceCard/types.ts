export type Project = { id: string; project: string; description?: string[] };
export type Experience = {
  role: string;
  company: string;
  from: string;
  to: string;
  duration: string;
  majorProjects: Project[];
  skills?: string[];
  others?: string[];
  isCurrent?: boolean;
};
