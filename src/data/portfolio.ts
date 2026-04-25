export interface Project {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Super Sport App',
    description: 'A high-performance sports management platform built for speed and scale. Engineered for extreme efficiency and visual clarity.',
    coverImage: '/images/projects/sport-1.png',
    images: ['/images/projects/sport-1.png', '/images/projects/sport-2.png', '/images/projects/sport-3.png'],
    tags: ['HTML', 'Tailwind CSS'],
    githubUrl: 'https://github.com/fznhakiim/Project-2-Super-Sport-Responsive.git',
    liveUrl: 'https://super-sport-app-badminton.vercel.app/index.html',
  },
  {
    id: 2,
    title: 'SPK Pemilihan Makanan Sehat',
    description: 'Advanced Decision Support System for optimal nutrition tracking. Utilizes complex algorithms to provide personalized health insights.',
    coverImage: '/images/projects/spk-gym-1.jpg',
    images: ['/images/projects/spk-gym-1.jpg', '/images/projects/spk-gym-2.jpg', '/images/projects/spk-gym-3.jpg'],
    tags: ['Python', 'FastAPI', 'Vue.js'],
    githubUrl: 'https://github.com/gojo1180/SPK_Projeck.git',
  },
  {
    id: 3,
    title: 'Tere Liye Bookstore',
    description: 'Sophisticated digital bookstore with a seamless catalog. Focused on an elegant reading-first user interface.',
    coverImage: '/images/projects/tereliye-1.png',
    images: ['/images/projects/tereliye-1.png', '/images/projects/tereliye-2.png', '/images/projects/tereliye-3.png'],
    tags: ['JSP', 'PHP MyAdmin'],
    githubUrl: 'https://github.com/MawanRequiem/DynamicBookstore-JSP.git',
  },
  {
    id: 4,
    title: 'DELISA',
    description: 'Full-stack healthcare monitoring system. A robust solution for real-time medical data tracking and management.',
    coverImage: '/images/projects/delisa-1.png',
    images: ['/images/projects/delisa-1.png', '/images/projects/delisa-2.png', '/images/projects/delisa-3.png'],
    tags: ['Laravel', 'REST API'],
    isPrivate: true,
  },
  {
    id: 5,
    title: 'Super Sport App Mobile',
    description: 'Mobile-first sports interface. Designed with meticulous attention to touch interactions and accessibility. Optimized for portrait viewing.',
    coverImage: '/images/projects/sportmobile-1.jpg',
    images: ['/images/projects/sportmobile-1.jpg', '/images/projects/sportmobile-2.jpg', '/images/projects/sportmobile-3.jpg'],
    tags: ['Figma', 'UI/UX'],
    githubUrl: 'https://www.figma.com/proto/6oXStVYNKvCpTf4K9phnPo/PROJECT-1-HCI?node-id=150-666&p=f&t=hQQS3jNeTnPRHgRA-1&scaling=scale-down&content-scaling=fixed&page-id=150%3A357&starting-point-node-id=302%3A1016',
  },
  {
    id: 6,
    title: 'Sign Buddy',
    description: 'Cutting-edge communication platform. Bridging gaps through innovative web technology and seamless UX.',
    coverImage: '/images/projects/signbuddy-1.jpeg',
    images: ['/images/projects/signbuddy-1.jpeg', '/images/projects/signbuddy-2.jpeg', '/images/projects/signbuddy-3.jpeg'],
    tags: ['Next.js', 'JavaScript'],
    isPrivate: true,
  },
];

export const stats = [
  { label: 'Completed Projects', value: '15' },
  { label: 'Tech Stack', value: '12' },
  { label: 'Years Active', value: '03' },
];

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Vue.js', icon: 'vuejs' },
      { name: 'HTML5', icon: 'html5' },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Postman', icon: 'postman' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
];

export const socials = [
  { name: 'GitHub', url: 'https://github.com/fznhakiim', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fauzan-hakiim-594922365', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:fauzan.ashril.hakiim.tik23@stu.pnj.ac.id', icon: 'mail' },
  { name: 'Instagram', url: 'https://instagram.com/fznhakiim', icon: 'instagram' },
];
