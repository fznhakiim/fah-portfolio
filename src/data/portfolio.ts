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
  category: 'frontend' | 'fullstack' | 'backend-systems' | 'uiux-mobile' | 'ai-data';
  projectType: 'Solo Project' | 'Team Project';
  myRole: string;
  problemContext: string;
  techReasoning: string;
  myContributions: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Super Sport App',
    description: 'A high-performance sports management and court booking platform. Engineered for efficiency and component modularity.',
    coverImage: '/images/projects/sport-1.png',
    images: ['/images/projects/sport-1.png', '/images/projects/sport-2.png', '/images/projects/sport-3.png'],
    tags: ['HTML', 'Tailwind CSS', 'Figma', 'UI/UX'],
    githubUrl: 'https://github.com/fznhakiim/Project-2-Super-Sport-Responsive.git',
    liveUrl: 'https://super-sport-app-badminton.vercel.app/index.html',
    category: 'frontend',
    projectType: 'Team Project',
    myRole: 'Project Manager & UI/UX Designer / Frontend Developer',
    problemContext: 'Led a team in developing a badminton court booking web application under a Project-Based Learning (PBL) scheme, applying structured development methodologies.',
    techReasoning: 'Utilized native HTML and Tailwind CSS to guarantee high page speed, minimal client-side load, and clean component-driven CSS modularity. Applied the Model-View-Presenter (MVP) pattern to decouple user interface concerns from business logic.',
    myContributions: [
      'Managed Scrum-based sprint planning, task delegation, backlog refinement, and project delivery milestones.',
      'Designed full UI/UX flows in Figma, including wireframes, interactive high-fidelity prototyping, and design system handoff.',
      'Developed responsive web interfaces using Tailwind CSS, ensuring pixel-perfect translation from design mockups.'
    ]
  },
  {
    id: 2,
    title: 'SPK Pemilihan Makanan Sehat',
    description: 'Advanced Decision Support System for optimal nutrition tracking. Utilizes complex algorithms to provide personalized health insights.',
    coverImage: '/images/projects/spk-gym-1.jpg',
    images: ['/images/projects/spk-gym-1.jpg', '/images/projects/spk-gym-2.jpg', '/images/projects/spk-gym-3.jpg'],
    tags: ['Python', 'FastAPI', 'Vue.js', 'MySQL'],
    githubUrl: 'https://github.com/gojo1180/SPK_Projeck.git',
    category: 'fullstack',
    projectType: 'Team Project',
    myRole: 'Full-stack Developer',
    problemContext: 'Developed an advanced decision support system (SPK) designed to calculate optimal healthy food choices based on multi-criteria analysis.',
    techReasoning: 'FastAPI was selected for the Python backend to handle intensive mathematical computations asynchronously with zero overhead. Vue.js served as the reactive frontend framework for dynamic graph rendering.',
    myContributions: [
      'Designed and engineered the multi-criteria optimization algorithm on the backend using FastAPI.',
      'Built a reactive dashboard interface using Vue.js for rendering user nutrition reports and charts.',
      'Structured relational database schemas in MySQL, writing optimized query procedures for client data extraction.'
    ]
  },
  {
    id: 3,
    title: 'TereLiye Book Store',
    description: 'Sophisticated digital bookstore simulation. Focused on an elegant transaction cycle and MVC database architecture.',
    coverImage: '/images/projects/tereliye-1.png',
    images: ['/images/projects/tereliye-1.png', '/images/projects/tereliye-2.png', '/images/projects/tereliye-3.png'],
    tags: ['Java JSP', 'MVC', 'MySQL'],
    githubUrl: 'https://github.com/MawanRequiem/DynamicBookstore-JSP.git',
    category: 'fullstack',
    projectType: 'Team Project',
    myRole: 'Full-stack Developer',
    problemContext: 'Collaborated in a development team to build a highly reliable, full-stack digital bookstore simulation covering complex customer shopping and transactional flows.',
    techReasoning: 'Java JSP combined with traditional Servlet MVC architecture was chosen to establish enterprise-grade transactional security, reliable thread management, and robust connection pooling.',
    myContributions: [
      'Built the entire transaction cycle, designing the shopping cart backend, checkout pipeline, and payment status updates.',
      'Implemented session-based Java servlet states to simulate secure checkout sequences.',
      'Configured database connectors and optimized SQL relational queries for book inventory management in MySQL.'
    ]
  },
  {
    id: 4,
    title: 'DELISA',
    description: 'Web-based pre-eclampsia early detection system for Dinas Kesehatan Kota Depok. Built with rigorous documentation standards.',
    coverImage: '/images/projects/delisa-1.png',
    images: ['/images/projects/delisa-1.png', '/images/projects/delisa-2.png', '/images/projects/delisa-3.png'],
    tags: ['Laravel', 'REST API', 'Technical Writing'],
    isPrivate: true,
    category: 'backend-systems',
    projectType: 'Team Project',
    myRole: 'Project Manager & Technical Writer',
    problemContext: 'Served as Project Manager and Technical Writer for DELISA, a web-based pre-eclampsia early detection system built in collaboration with Dinas Kesehatan Kota Depok.',
    techReasoning: 'Laravel was selected as the backend framework due to its rich built-in authentication, robust authorization layers for health roles, and clean RESTful routing that integrates easily with municipal systems.',
    myContributions: [
      'Produced a full set of professional technical documentation, including SRS, SDD, SDPLN, Project Charter, User Manual, and Test Plan.',
      'Maintained cross-document consistency across all revision cycles, ensuring visual charts (UCD, Activity Diagrams, ERD) stayed fully aligned.',
      'Coordinated requirement-gathering sessions with the Product Owner and municipal representatives, distributing Minutes of Meeting.',
      'Facilitated User Acceptance Testing (UAT) using structured test case templates, validating data handoff integrity between patient roles.'
    ]
  },
  {
    id: 5,
    title: 'Super Sport App Mobile',
    description: 'Mobile-first sports interface prototype designed in Figma. Focused on interactive gestures, touch targets, and view conversion.',
    coverImage: '/images/projects/sportmobile-1.jpg',
    images: ['/images/projects/sportmobile-1.jpg', '/images/projects/sportmobile-2.jpg', '/images/projects/sportmobile-3.jpg'],
    tags: ['Figma', 'UI/UX', 'Mobile Design'],
    githubUrl: 'https://www.figma.com/proto/6oXStVYNKvCpTf4K9phnPo/PROJECT-1-HCI?node-id=150-666&p=f&t=hQQS3jNeTnPRHgRA-1&scaling=scale-down&content-scaling=fixed&page-id=150%3A357&starting-point-node-id=302%3A1016',
    category: 'uiux-mobile',
    projectType: 'Team Project',
    myRole: 'UI/UX Designer',
    problemContext: 'Designed a high-fidelity mobile prototype in Figma in collaboration with a development team, optimized for portrait view booking layouts and finger reachability.',
    techReasoning: 'Figma was selected to create high-fidelity responsive layouts, reuse interactive components via variants, and design interactive animated flows for device presentation.',
    myContributions: [
      'Collaborated with team members to define user flows and designed complete mobile wireframes and high-fidelity interactive mockups based on mobile ergonomics.',
      'Conducted accessibility testing ensuring touch targets exceeded the 48px minimum guidelines.',
      'Structured responsive layout grids and variants to ensure smooth interface handoff to frontend developers.'
    ]
  },
  {
    id: 6,
    title: 'Sign Buddy',
    description: 'Accessibility platform designed to make learning Indonesian Sign Language easier through real-time AI computer vision.',
    coverImage: '/images/projects/signbuddy-1.jpeg',
    images: ['/images/projects/signbuddy-1.jpeg', '/images/projects/signbuddy-2.jpeg', '/images/projects/signbuddy-3.jpeg'],
    tags: ['Next.js', 'Python', 'AI / CV'],
    isPrivate: true,
    category: 'ai-data',
    projectType: 'Team Project',
    myRole: 'AI Engineer & Developer',
    problemContext: 'Designed to lower barrier entry in learning Indonesian Sign Language (Bisindo) through real-time interactive computer vision helper tools.',
    techReasoning: 'Next.js was selected for the web application interface due to its reactive rendering. Python and OpenCV/MediaPipe were utilized for real-time, low-latency, and high-accuracy skeleton hand detection.',
    myContributions: [
      'Responsible for building, training, and optimizing the core AI hand gesture detection model using MediaPipe and TensorFlow.',
      'Achieved real-time capture integration on the client side with low latency interactive practice feedback.',
      'Engineered API endpoints for high-speed sign language inference data exchange.'
    ]
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
