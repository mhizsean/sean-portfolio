import type { ComponentType } from "react";
import { FileText, Github, Linkedin, type LucideIcon } from "lucide-react";
import { DevToIcon, MediumIcon } from "@/components/SocialBrandIcons";

export type SocialIcon = LucideIcon | ComponentType<{ size?: number; className?: string }>;

export type SocialLink = {
  icon: SocialIcon;
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
  {
    icon: DevToIcon,
    label: "DEV",
    href: "https://dev.to/",
  },
  {
    icon: MediumIcon,
    label: "Medium",
    href: "https://medium.com/@adeyiesther01",
  },
  { icon: FileText, label: "CV", href: "#" },
];
