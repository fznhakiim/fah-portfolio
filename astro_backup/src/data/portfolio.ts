export interface Project {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  tags: string[];
  caseStudyUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'DELISA — Depok Peduli Pre Eklampsia',
    description:
      'A healthcare information system designed to monitor and manage pre-eclampsia risks for pregnant women in Depok, featuring real-time data tracking and medical alerts.',
    coverImage: '/images/projects/delisa-1.png',
    images: [
      '/images/projects/delisa-1.png',
      '/images/projects/delisa-2.png',
      '/images/projects/delisa-3.png',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Public Health'],
    githubUrl: '#',
    linkLabel: 'Source Code',
  },
  {
    id: 2,
    title: 'Website Super Sport App',
    description:
      'A comprehensive sports management web application with real-time match tracking, team management, and interactive statistics dashboard.',
    coverImage: '/images/projects/sport-1.jpg',
    images: [
      '/images/projects/sport-1.jpg',
      '/images/projects/sport-2.jpg',
      '/images/projects/sport-3.jpg',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Tere Liye Book Store',
    description:
      "An elegant online bookstore dedicated to Tere Liye's literary works, featuring a smooth browsing experience and seamless catalog system.",
    coverImage: '/images/projects/tereliye-1.png',
    images: [
      '/images/projects/tereliye-1.png',
      '/images/projects/tereliye-2.png',
      '/images/projects/tereliye-3.png',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'SPK Pemilihan Makanan Gym',
    description:
      'A decision support system for gym enthusiasts to choose optimal meals based on training phase and meal timing using weighted analysis.',
    coverImage: '/images/projects/spk-gym-1.jpg',
    images: [
      '/images/projects/spk-gym-1.jpg',
      '/images/projects/spk-gym-2.jpg',
      '/images/projects/spk-gym-3.jpg',
    ],
    tags: ['PHP', 'MySQL', 'Bootstrap', 'TOPSIS'],
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Super Sport App — Mobile',
    description:
      'Mobile version of the Super Sport platform, designed as an HCI project with focus on user-centered design and intuitive touch interactions.',
    coverImage: '/images/projects/sportmobile-1.jpg',
    images: [
      '/images/projects/sportmobile-1.jpg',
      '/images/projects/sportmobile-2.jpg',
      '/images/projects/sportmobile-3.jpg',
    ],
    tags: ['Figma', 'HCI', 'UI/UX', 'Prototyping'],
    githubUrl: '#',
    linkLabel: 'Prototype',
  },
];

export interface Stat {
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Happy Clients', value: '05+' },
  { label: 'Years of Craft', value: '02+' },
];

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Astro', icon: 'astro' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'PHP', icon: 'php' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Git', icon: 'git' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
];
