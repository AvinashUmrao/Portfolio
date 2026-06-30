

export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
  category: "tech" | "other";
}

export const experiences: Experience[] = [];