export type ProjectContent = {
  id: 1 | 2 | 3;
  title: string;
  type: string;
  demoUrl?: string;
  githubUrl?: string;
  documents?: { label: string; url: string }[];
  summary: string;
  period: string;
  team: string;
  role: string;
  contribution: string;
  accent: string;
  stacks: string[];
  overview: { label: string; text: string }[];
  featureLayout?: "cards" | "showcase" | "mobile";
  decisions: {
    title: string;
    situation: string;
    choice: string;
    reason: string;
  }[];
  features: {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    images?: { src: string; alt: string }[];
    tags?: string[];
  }[];
  troubles: {
    title: string;
    problem: string;
    analysis: string;
    solution: string;
    result: string;
  }[];
  results: { value: string; label: string }[];
  learned: string;
  next: string;
};
