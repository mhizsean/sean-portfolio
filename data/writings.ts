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
  }
];
