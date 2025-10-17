export interface Repository {
  name: string;
  language: string;
  description: string;
  url: string;
  highlights: string[];
  stars?: number;  // Fetch Number of stars on the repo
  forks?: number;  // Fetch Number of forks on the repo
}

export interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export interface WorkflowStep {
  title: string;
  description: string;
  icon: string;
}
