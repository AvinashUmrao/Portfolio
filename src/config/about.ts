import { LucideIcon } from "lucide-react";
import {
  Brain,
  Laptop,
  Blocks,
  Bot,
  Trophy,
  Film,
  Music,
  Newspaper,
} from "lucide-react";

export interface TechStack {
  name: string;
  color: string;
  icon?: string;
}

export interface Interest {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const introduction = {
  personal: `I'm a B.Tech Computer Science student passionate about software engineering, competitive programming, and building scalable full-stack applications. I enjoy solving algorithmic challenges, developing impactful products, and continuously learning modern technologies. Outside coding, I like watching movies, playing table tennis, listening to music, and spending time with friends and family.`,
};

export const techStack: TechStack[] = [
  {
    name: "C++",
    color: "#00599C",
    icon: "/icons/cplusplus.svg",
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: "/icons/javascript.svg",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: "/icons/typescript.svg",
  },
  {
    name: "React",
    color: "#61DAFB",
    icon: "/icons/react.svg",
  },
  {
    name: "Node.js",
    color: "#339933",
    icon: "/icons/nodejs.svg",
  },
  {
    name: "Express.js",
    color: "#000000",
    icon: "/icons/express.svg",
  },
  {
    name: "MongoDB",
    color: "#47A248",
    icon: "/icons/mongodb.svg",
  },
  {
    name: "MySQL",
    color: "#4479A1",
    icon: "/icons/mysql-logo-svgrepo-com.svg",
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    icon: "/icons/firebase.svg",
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: "/icons/python-svgrepo-com.svg",
  },
  {
    name: "Tailwind CSS",
    color: "#38B2AC",
    icon: "/icons/tailwind.svg",
  },
  {
    name: "Git",
    color: "#F05032",
    icon: "/icons/git.svg",
  },
  {
    name: "GitHub",
    color: "#181717",
    icon: "/icons/github.svg",
  },
  {
    name: "Postman",
    color: "#FF6C37",
    icon: "/icons/postman.svg",
  },
  {
    name: "Gemini API",
    color: "#4285F4",
    icon: "/icons/gemini-color.svg",
  },
];

export const technicalInterests: Interest[] = [
  {
    icon: Laptop,
    title: "Full-Stack Development",
    description:
      "Building scalable MERN applications with clean architecture and responsive user experiences.",
  },
  {
    icon: Blocks,
    title: "Data Structures & Algorithms",
    description:
      "Solving challenging problems and participating in competitive programming contests.",
  },
  {
    icon: Brain,
    title: "System Design",
    description:
      "Learning scalable backend architectures, distributed systems, and software engineering best practices.",
  },
  {
    icon: Bot,
    title: "AI-Powered Applications",
    description:
      "Building intelligent applications using Gemini API, automation, and modern AI tools.",
  },
];

export const nonTechnicalInterests: Interest[] = [
  {
    icon: Trophy,
    title: "Table Tennis",
    description:
      "Enjoy playing table tennis and staying active through sports.",
  },
  {
    icon: Film,
    title: "Movies",
    description:
      "Watching movies across different genres and discovering great stories.",
  },
  {
    icon: Music,
    title: "Music",
    description:
      "Listening to music while relaxing, traveling, or coding.",
  },
  {
    icon: Newspaper,
    title: "Technology",
    description:
      "Keeping up with the latest trends in software engineering and AI.",
  },
];