export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    highlight: string;
    tools: string[];
    type: 'Fullstack' | 'Frontend';
    frontendRepo?: string;
    backendRepo?: string;
    fullStackRepo?: string;
    liveUrl?: string;
    images?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "EDINBURGH TOURSIT GUIDE",
    subtitle: "Tourist Guide for Edinburgh",
    description:
      "I developed a tourist guide for Edinburgh, Scotland. The guide is a single page application that allows users to explore the city and its attractions. The guide is built with React and Next.js and is hosted on Vercel.",
    highlight:
      "Project of greater technical complexity with full API REST integration and database",
    tools: [
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "TailwindCSS",
      "React Router",
      "React Query",
      "API",
      "Python (FastAPI)",
      "PostgreSQL",
      "Docker",
      "Vercel",
    ],
    type: "Fullstack",
    fullStackRepo: "https://github.com/mhizsean/viladays",
    liveUrl: "https://github.com/mhizsean/viladays",
  },
  // {
  //     id: 2,
  //     title: 'HOTEL SIX SENSES',
  //     subtitle: 'Web Redesign and Booking Experience',
  //     description: 'Conceptual redesign of a vacation hotel website that simulates a complete booking experience, including exploration of facilities, individual details, date selection, and a dynamic form, prioritizing a minimalist, responsive, and oriented UI.',
  //     highlight: 'Minimalist visual redesign inspired by Maso effect',
  //     tools: ['React (Vite)', 'TypeScript', 'Node.js', 'CSS (SUIT CSS)', 'React Datepicker', 'Vitest', 'Local JSON'],
  //     type: 'Frontend',
  //     frontendRepo: '#',
  //     liveUrl: '#',
  // },
  // {
  //     id: 3,
  //     title: 'BEARS',
  //     subtitle: 'Web Experience About Ethics and Wildlife',
  //     description: 'Conceptual navigation that reflects on ethical limits, inspired by real encounters documented in "Grizzly Man and Bear," presenting a narrative and educational journey divided into two layers: History (structured information about the grizzly bear).',
  //     highlight: 'Conceptual project focused on animation, narrative, image preloading, animated doors, and section navigation',
  //     tools: ['React (Vite)', 'TypeScript', 'TailwindCSS v4', 'React Router', 'API', 'Custom hooks (preload)'],
  //     type: 'Frontend',
  //     frontendRepo: '#',
  //     liveUrl: '#',
  // },
  {
    id: 4,
    title: "FlowPay",
    subtitle: "Virtual Payments Platform",
    description:
      "A full-stack fintech SaaS with virtual wallet management, peer-to-peer payments, and an integrated customer support ticketing system. Features auto-routed tickets for KYC approvals, complaints, and queries — with role-based agent queues and a full audit trail.",
    highlight:
      "Real-time balance updates via Supabase Realtime, role-gated support portal with auto-routing by complaint category, and middleware-protected admin routes.",
    tools: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "React Native",
      "Expo",
      "Python",
      "FastAPI",
      "Supabase Auth",
      "Supabase RLS",
      "Vercel",
    ],
    type: "Fullstack",
    fullStackRepo: "https://github.com/mhizsean/flowpay",
    // liveUrl: "https://flowpay.vercel.app",
  },
];
