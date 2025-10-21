export interface Repository {
  name: string;
  language: string;
  description: string;
  url: string;
  highlights: string[];
  stars?: number;
  forks?: number;
}

export interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  name: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
  icon: string;
}
