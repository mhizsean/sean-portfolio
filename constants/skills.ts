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
    ],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Express", "MongoDB", "REST APIs", "PostgreSQL", "Docker", "Vercel"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["TailwindCSS", "chakra-ui", "CSS", "SASS", "Responsive Design", "User Research"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Figma", "Git", "Vite", "Postman", "VS Code", ],
  },
] as const;

