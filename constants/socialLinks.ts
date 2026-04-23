import type { ComponentType } from "react";
import { FileText, Github, Linkedin, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { DevToIcon, MediumIcon } from "@/components/SocialBrandIcons";

export type SocialIcon = LucideIcon | ComponentType<{ size?: number; className?: string }>;

export type SocialLink = {
  icon: SocialIcon;
  label: string;
  href: string;
  value?: string;
};

export const socialLinks: SocialLink[] = [
  { icon: Github, label: "Github", href: "https://github.com/mhizsean" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/esther-o-adeyi/",
  },
  {
    icon: MediumIcon,
    label: "Medium",
    href: "https://medium.com/@mhizsean",
  },
  { icon: FileText, label: "CV", href: "https://drive.google.com/file/d/1BHYaVqy7k7_RFfk8nW0mA_k9nHK1RO_a/view?usp=sharing" },
];

export const contactSocialLinks: SocialLink[] = [
    { icon: Github, label: "Github", href: "https://github.com/mhizsean" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/esther-o-adeyi/",
    },
    {
      icon: MediumIcon,
      label: "Medium",
      href: "https://medium.com/@mhizsean",
    },
]

  export const contactMethods: SocialLink[] = [
    {
      icon: Mail,
      label: "Email",
      value: "adeyiesther01@gmail.com",
      href: "mailto:adeyiesther01@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 79 0041 8058",
      href: "tel:+44790041805",
    },
    { icon: MapPin, label: "Location", value: "London, UK", href: "#" },
  ];
