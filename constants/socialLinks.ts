import { FileText, Github, Linkedin, type LucideIcon } from "lucide-react";

export type SocialLink = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { icon: Github, label: "Github", href: "https://github.com/mhizsean" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/esther-o-adeyi/",
  },
  { icon: FileText, label: "CV", href: "#" },
];
