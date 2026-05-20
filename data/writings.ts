export type WritingSource = "devto" | "medium" | "other";

export interface Writing {
  id: string;
  title: string;
  href: string;
  publishedAt: string;
  excerpt?: string;
  source: WritingSource;
}

export const writings: Writing[] = [
  {
    id: "1",
    title: "Frontend Engineering Is Not Just UI: What Production Work Taught Me",
    href: "https://medium.com/@mhizsean/frontend-engineering-is-not-just-ui-what-production-work-taught-me-60bed49e65e6",
    publishedAt: "2026-04-20",
    excerpt:
      "Frontend Engineering is not just about UI. This article explores the challenges and lessons I learned from production work, highlighting the importance of system design, performance optimization, and collaboration across disciplines.",
    source: "medium",
  },
  {
    id: "2",
    title: "What Most Frontend Developers Get Wrong About State Management",
    href: "https://medium.com/@mhizsean/what-most-frontend-developers-get-wrong-about-state-management-e73a60715abe",
    publishedAt: "2026-04-29",
    excerpt:
"State management isn&apos;t just about choosing tools like Redux or Context. In this article, I share real-world lessons from working on production React applications, focusing on data flow, simplicity, and building predictable user experiences.",
    source: "medium",
  }, 
  {
    id: "3",
    title: "How I Decide Between Controlled and Uncontrolled Forms in React",
    href: "https://medium.com/@mhizsean/how-i-decide-between-controlled-and-uncontrolled-forms-in-react-e844684d2811",
    publishedAt: "2026-05-15",
    excerpt:
      "When learning React, I thought controlled forms were always the correct approach.",
    source: "medium",
  },
  {
    id: "4",
    title: "Accessibility Mistakes I've Seen (and Fixed) in Frontend Projects",
    href: "https://medium.com/@mhizsean/accessibility-mistakes-ive-seen-and-fixed-in-frontend-projects-152058c8ca77",
    publishedAt: "2026-05-20",
    excerpt:
      "Accessibility is one of those things most frontend engineers agree is important. But in real projects",
    source: "medium",
  }
];
