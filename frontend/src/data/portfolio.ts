// Portfolio data — Single source of truth based on Yogita Sharma's CV
// Do NOT add fabricated information.

export const personalInfo = {
  name: 'Yogita Sharma',
  title: 'Computer Science & Engineering Student',
  tagline: 'Building robust software solutions with strong DSA foundations',
  email: 'yogitasharma3372@gmail.com',
  phone: '+91 9024380168',
  github: 'https://github.com/yogitasharma3372-ui',
  githubUsername: 'yogitasharma3372-ui',
  linkedin: 'https://www.linkedin.com/in/yogita2006/',
  resumeFile: '/Yogita_Sharma_Resume.pdf',
  status: 'Open to Opportunities',
  about: `I'm a Computer Science & Engineering student at Lovely Professional University with a passion for building efficient, well-structured software. My focus areas include Data Structures & Algorithms, systems programming, and full-stack development. I enjoy solving complex problems and turning algorithmic thinking into real-world applications. With hands-on experience across Java, C++, Python, and C, I bring a strong foundation in both theory and practice to every project I work on.`,
};

export const stats = [
  { value: '7.38', label: 'CGPA' },
  { value: '3', label: 'Projects' },
  { value: '5', label: 'Certifications' },
  { value: '4', label: 'Languages' },
];

export const education = [
  {
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'B.Tech – Computer Science and Engineering',
    period: 'Aug 2024 – Present',
    grade: 'CGPA: 7.38',
    current: true,
  },
  {
    institution: 'Tagore Group of Education',
    location: '',
    degree: 'Intermediate – PCM',
    period: '2022 – 2023',
    grade: 'Percentage: 75%',
    current: false,
  },
];

export const skills = {
  programmingLanguages: [
    { name: 'C++', icon: 'cpp' },
    { name: 'Python', icon: 'python' },
    { name: 'C', icon: 'c' },
    { name: 'Java', icon: 'java' },
  ],
  dataMLTools: [
    { name: 'NumPy', icon: 'numpy' },
    { name: 'Pandas', icon: 'pandas' },
    { name: 'Scikit-learn', icon: 'sklearn' },
    { name: 'XGBoost', icon: 'xgboost' },
  ],
  database: [
    { name: 'MS SQL', icon: 'sql' },
  ],
  platforms: [
    { name: 'LeetCode', icon: 'leetcode' },
    { name: 'GeeksforGeeks', icon: 'gfg' },
    { name: 'HackerRank', icon: 'hackerrank' },
  ],
  softSkills: [
    { name: 'Problem Solving', icon: 'brain' },
    { name: 'Team Player', icon: 'users' },
    { name: 'Adaptability', icon: 'refresh' },
  ],
};

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: string[];
  category: 'featured' | 'systems' | 'frontend';
  problem?: string;
  solution?: string;
  architecture?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    subtitle: 'Priority Task Scheduler',
    description:
      'A comprehensive task scheduling system built with Java and Spring Boot, leveraging advanced DSA concepts for intelligent priority management, dependency resolution, and autocomplete functionality.',
    techStack: ['Java', 'Spring Boot', 'REST API', 'DSA'],
    features: [
      'Min Heap-based priority queue for task scheduling',
      'Stack & Queue for task workflow management',
      'Trie-based autocomplete for task search',
      'Graph-based dependency management',
      'Topological Sort for execution order',
      'Merge Sort & Quick Sort for task ordering',
      'REST API endpoints for CRUD operations',
      'Interactive dashboard with priority visualization',
      'Dependency graph visualization',
    ],
    category: 'featured',
    problem:
      'Managing complex task dependencies and priorities manually is error-prone and inefficient, especially when tasks have intricate interdependencies.',
    solution:
      'TaskFlow uses advanced data structures to automate priority scheduling, dependency resolution, and provides an intuitive interface for task management with real-time visualization.',
    architecture: [
      'Client Layer – Interactive Dashboard & API Consumers',
      'API Layer – Spring Boot REST Controllers',
      'Service Layer – Business Logic & DSA Algorithms',
      'Data Layer – In-Memory Data Structures (Heap, Graph, Trie)',
    ],
  },
  {
    id: 'ipc-debugger',
    title: 'IPC Debugger',
    subtitle: 'Inter-Process Communication Monitoring Tool',
    description:
      'A systems-level debugging tool for monitoring and visualizing inter-process communication mechanisms, built with C/C++ to provide real-time insights into process synchronization and resource management.',
    techStack: ['C', 'C++', 'Operating Systems', 'IPC'],
    features: [
      'Pipes & Message Queue monitoring',
      'Shared Memory visualization',
      'Process state monitoring',
      'Mutex & Semaphore tracking',
      'Resource Allocation Graph generation',
      'Deadlock detection algorithm',
      'IPC workflow tracing',
      'Message flow visualization',
      'Synchronization event logging',
      'System log aggregation',
    ],
    category: 'systems',
    problem:
      'Debugging inter-process communication issues is notoriously difficult due to the concurrent and non-deterministic nature of process interactions.',
    solution:
      'IPC Debugger provides a unified monitoring interface that captures, visualizes, and analyzes all IPC mechanisms including pipes, message queues, and shared memory in real-time.',
    architecture: [
      'Monitoring Layer – System Call Interception',
      'Analysis Engine – Deadlock Detection & Resource Tracking',
      'Visualization Layer – Process & IPC Flow Graphs',
      'Logging Layer – Event Capture & System Logs',
    ],
  },
  {
    id: 'starbucks-clone',
    title: 'Starbucks Clone',
    subtitle: 'Responsive Web Application',
    description:
      'A pixel-perfect recreation of the Starbucks website focusing on responsive design, modern CSS techniques, and interactive JavaScript functionality across all device sizes.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    features: [
      'Fully responsive layout (desktop, tablet, mobile)',
      'Modern navigation with smooth transitions',
      'Coffee ordering interface',
      'Product customization UI',
      'Interactive menu components',
      'CSS Grid & Flexbox layouts',
      'Mobile-first design approach',
    ],
    category: 'frontend',
  },
];

export const training = [
  {
    organization: 'Board Infinity',
    title: 'Data Structure and Algorithm – Java',
    topics: [
      'Arrays',
      'Linked Lists',
      'Stacks',
      'Queues',
      'Trees',
      'Graphs',
      'Heaps',
      'Hash Maps',
      'Sorting Algorithms',
      'Searching Algorithms',
      'Recursion',
      'Algorithm Design',
      'Problem Solving',
    ],
  },
];

export interface Certificate {
  id: string;
  name: string;
  organization: string;
  category: 'programming' | 'database' | 'all';
  technology: string;
  url?: string;
}

export const certifications: Certificate[] = [
  {
    id: 'python-hackerrank',
    name: 'Python',
    organization: 'HackerRank',
    category: 'programming',
    technology: 'Python',
  },
  {
    id: 'java-hackerrank',
    name: 'Java (Basic)',
    organization: 'HackerRank',
    category: 'programming',
    technology: 'Java',
  },
  {
    id: 'dms-infosys',
    name: 'Data Management System',
    organization: 'Infosys',
    category: 'database',
    technology: 'Database',
  },
  {
    id: 'dbms-oracle',
    name: 'DBMS',
    organization: 'Oracle',
    category: 'database',
    technology: 'Database',
  },
  {
    id: 'cpp-infosys',
    name: 'Programming in C++',
    organization: 'Infosys',
    category: 'programming',
    technology: 'C++',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Training', href: '#training' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
