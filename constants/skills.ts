import { Code, Palette, Database, Wrench } from "lucide-react";

export const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Router",
      "React Query",
      "Jest",
      "GraphQL",
      "Redux Toolkit",
      "React Native",
      "Expo",
    ],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Express", "MongoDB", "REST APIs", "PostgreSQL", "Docker"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["TailwindCSS", "chakra-ui", "CSS", "SASS", "Responsive Design", "User Research"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Figma", "Git", "Vite", "Postman", "VS Code", "TDD", "AWS", "Vercel" ],
  },
] as const;

export const studies = [
  {
    title: "Master in Project Management",
    institution: "De Montfort University",
    period: "2023 - 2024",
    description:
      "Master in Project Management from De Montfort University, UK. ",
  },
] as const;

