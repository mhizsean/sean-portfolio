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
    id: "dummy-1",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    href: "#",
    publishedAt: "2026-04-10",
    excerpt:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    source: "devto",
  },
  {
    id: "dummy-2",
    title: "Ut enim ad minim veniam quis nostrud exercitation ullamco",
    href: "#",
    publishedAt: "2026-04-05",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    source: "medium",
  },
  {
    id: "dummy-3",
    title: "Excepteur sint occaecat cupidatat non proident sunt in culpa",
    href: "#",
    publishedAt: "2026-03-28",
    excerpt:
      "Mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    source: "devto",
  },
  {
    id: "dummy-4",
    title: "Curabitur pretium tincidunt lacus cras placerat vestibulum",
    href: "#",
    publishedAt: "2026-03-15",
    excerpt:
      "Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor.",
    source: "other",
  },
  {
    id: "dummy-5",
    title: "Integer tincidunt aliquam odio vitae tristique magna sit amet",
    href: "#",
    publishedAt: "2026-03-01",
    excerpt:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; donec velit neque.",
    source: "medium",
  },
  {
    id: "dummy-5",
    title: "Integer tincidunt aliquam odio vitae tristique magna sit amet",
    href: "#",
    publishedAt: "2026-03-01",
    excerpt:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; donec velit neque.",
    source: "medium",
  },
];
