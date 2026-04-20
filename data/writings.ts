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
  }
];
