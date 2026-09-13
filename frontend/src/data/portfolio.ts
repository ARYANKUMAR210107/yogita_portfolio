// Portfolio data — Single source of truth based on Yogita Sharma's CV
// Authentic data without fabricated metrics.

export const personalInfo = {
  name: 'Yogita Sharma',
  title: 'Computer Science & Engineering Student',
  tagline: 'Building robust software systems with strong Data Structures & Algorithms foundations.',
  email: 'yogitasharma3372@gmail.com',
  phone: '+91 9024380168',
  github: 'https://github.com/yogitasharma3372-ui',
  githubUsername: 'yogitasharma3372-ui',
  linkedin: 'https://www.linkedin.com/in/yogita2006/',
  resumeFile: '/Yogita_Sharma_Resume.pdf',
  status: 'Open to Software Engineering Opportunities',
  location: 'Phagwara, Punjab / Rajasthan, India',
  university: 'Lovely Professional University',
  cgpa: '7.38',
  about: `I am a Computer Science & Engineering student at Lovely Professional University passionate about building clean, efficient, and well-architected software. My technical core centers around Data Structures & Algorithms, systems programming, and modern full-stack development.

I treat software engineering as the art of disciplined problem-solving: decomposing complex constraints into clean algorithmic models. With hands-on proficiency across C++, Java, Python, and C, I combine theoretical rigor with practical execution across backend services and systems utilities.`,
};

export const stats = [
  { value: '7.38', label: 'B.Tech CGPA', sublabel: 'Lovely Professional University' },
  { value: '3', label: 'Core Projects', sublabel: 'Systems & Applications' },
  { value: '5+', label: 'Certifications', sublabel: 'Oracle, Infosys, HackerRank' },
  { value: '4', label: 'Languages', sublabel: 'C++, Java, Python, C' },
];

export const education = [
  {
    id: 'lpu',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology – Computer Science and Engineering',
    period: 'Aug 2024 – Present',
    grade: 'CGPA: 7.38',
    current: true,
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java / C++)',
      'Operating Systems & System Calls',
      'Database Management Systems (DBMS)',
      'Computer Networks & Protocols',
      'Mathematics for Machine Learning',
    ],
    highlights: [
      'Maintaining 7.38 CGPA in rigorous engineering curriculum',
      'Core focus on algorithmic analysis and distributed task systems',
      'Active participant in coding assessments and technical seminars',
    ],
  },
  {
    id: 'tagore',
    institution: 'Tagore Group of Education',
    location: 'Surajgarh, Rajasthan',
    degree: 'Intermediate (Senior Secondary) – PCM',
    period: 'Mar 2022 – May 2023',
    grade: 'Percentage: 75%',
    current: false,
    coursework: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Secondary Education (10th) Score: 91.1%',
    ],
    highlights: [
      'Solid analytical grounding in advanced physics and mathematics',
      'Graduated secondary school with 91.1% distinction',
    ],
  },
];

export const skills = {
  programmingLanguages: [
    {
      name: 'C++',
      icon: 'cpp',
      level: 'Advanced',
      description: 'STL containers, algorithms, memory pointers, time-space efficiency',
      tags: ['STL', 'OOP', 'Algorithms', 'Competitive Programming'],
    },
    {
      name: 'Java',
      icon: 'java',
      level: 'Proficient',
      description: 'Spring Boot REST APIs, Collections framework, OOP architecture',
      tags: ['Spring Boot', 'REST APIs', 'Collections', 'Multithreading'],
    },
    {
      name: 'Python',
      icon: 'python',
      level: 'Proficient',
      description: 'Scripting, algorithmic prototyping, data analysis & ML pipelines',
      tags: ['NumPy', 'Pandas', 'Scikit-learn', 'Automation'],
    },
    {
      name: 'C',
      icon: 'c',
      level: 'Intermediate',
      description: 'Low-level systems programming, pointers, system calls, IPC primitives',
      tags: ['Pointers', 'IPC', 'POSIX API', 'Memory Management'],
    },
  ],
  dataMLTools: [
    {
      name: 'NumPy',
      icon: 'numpy',
      description: 'Multidimensional array computing, vectorization, linear algebra',
    },
    {
      name: 'Pandas',
      icon: 'pandas',
      description: 'Data frames, cleaning, filtering, aggregation, statistical summaries',
    },
    {
      name: 'Scikit-learn',
      icon: 'sklearn',
      description: 'Supervised & unsupervised learning models, data preprocessing, metrics',
    },
    {
      name: 'XGBoost',
      icon: 'xgboost',
      description: 'Gradient boosted decision trees and ensemble model tuning',
    },
  ],
  database: [
    {
      name: 'MS SQL Server',
      icon: 'sql',
      description: 'Relational schema design, normalization, complex joins, views, and queries',
    },
    {
      name: 'Relational DBMS',
      icon: 'database',
      description: 'ACID properties, transactions, indexing, query execution planning',
    },
  ],
  platforms: [
    {
      name: 'LeetCode',
      icon: 'leetcode',
      description: 'Daily practice covering dynamic programming, graphs, heaps, and trees',
    },
    {
      name: 'GeeksforGeeks',
      icon: 'gfg',
      description: 'Computer science fundamentals, core concepts, and algorithmic challenges',
    },
    {
      name: 'HackerRank',
      icon: 'hackerrank',
      description: 'Certified in Python and Java Basic assessments',
    },
    {
      name: 'CodeTantra',
      icon: 'terminal',
      description: 'Academic coding assessments, time-bounded problem-solving drills',
    },
  ],
  softSkills: [
    {
      name: 'Problem Solving',
      icon: 'brain',
      description: 'Systematic breakdown of complex engineering requirements into modular algorithmic blocks',
    },
    {
      name: 'Team Player',
      icon: 'users',
      description: 'Collaborative development approach with strong git workflow and constructive feedback',
    },
    {
      name: 'Adaptability',
      icon: 'refresh',
      description: 'Fast comprehension of new tools, frameworks, system architectures, and engineering constraints',
    },
  ],
};

export interface Project {
  id: string;
  route: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  category: 'featured' | 'systems' | 'frontend';
  problem: string;
  solution: string;
  architecture: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'taskflow',
    route: '/projects/taskflow',
    title: 'TaskFlow',
    subtitle: 'Priority Task Scheduler',
    date: "Jun '26",
    description:
      'A comprehensive task scheduling engine built with Java and Spring Boot, leveraging custom implementations of Min Heap, DAG, and Trie for priority resolution and dependency management.',
    longDescription:
      'TaskFlow is an enterprise-inspired task orchestration system designed to eliminate manual scheduling bottlenecks. By combining custom-built Min Heap priority queues, a Directed Acyclic Graph (DAG) for dependency resolution via Topological Sort, and a Trie-based autocomplete engine, TaskFlow guarantees deterministic execution orders and low-latency task operations.',
    techStack: ['Java', 'Spring Boot', 'REST API', 'DSA', 'Min Heap', 'Topological Sort'],
    category: 'featured',
    githubUrl: 'https://github.com/yogitasharma3372-ui',
    problem:
      'Managing complex task dependencies and priorities manually is error-prone, fragile, and computationally inefficient. Traditional task managers often lack automated topological dependency resolution, leading to circular deadlocks or unscheduled prerequisite failures.',
    solution:
      'TaskFlow models tasks as nodes within a Directed Acyclic Graph (DAG) evaluated by Kahn’s algorithm for topological ordering. Priorities are actively balanced through an internal Min Heap, while a Trie indexes tasks for instantaneous search lookup. Complete CRUD operations and dependency validations are exposed through Spring Boot REST APIs.',
    architecture: [
      'Client Layer – Responsive interactive web dashboard for visualizing task topologies and execution queues',
      'API Controller Layer – Spring Boot REST endpoints for task CRUD, dependency linking, and execution requests',
      'Service Layer – Core business logic, cycle detection, topological sort engine, and heap management',
      'Data Structure Core – In-memory custom Min Heap, Adjacency-List DAG, Prefix Trie, and Undo Stack',
    ],
    features: [
      'Min Heap-based priority queue for O(log n) task retrieval and scheduling',
      'Directed Acyclic Graph (DAG) with Topological Sort for dependency ordering',
      'Cycle detection mechanism to safeguard against recursive circular dependencies',
      'Trie-based prefix search supporting real-time autocomplete across task names',
      'Stack & Queue execution pipelines with complete undo/rollback capabilities',
      'Benchmarked sorting implementations comparing Merge Sort and Quick Sort',
      'RESTful Spring Boot endpoints for task lifecycle management',
      'Visual web dashboard for dependency graph inspection and priority queues',
    ],
    highlights: [
      'Custom Min Heap eliminates external priority queue overhead',
      'Topological Sort ensures prerequisites finish before dependents start',
      'Interactive dashboard visually connects graph nodes in real time',
    ],
  },
  {
    id: 'ipc-debugger',
    route: '/projects/ipc-debugger',
    title: 'IPC Debugger',
    subtitle: 'Inter-Process Communication Monitoring Tool',
    date: "Dec '25",
    description:
      'A systems-level debugging tool built in C/C++ to trace, monitor, and visualize inter-process communication mechanisms with automated deadlock detection via Resource Allocation Graphs.',
    longDescription:
      'IPC Debugger provides deep visibility into multi-process architectures. Operating at the systems level, it intercepts and inspects Pipes, POSIX Message Queues, and Shared Memory segments. It tracks process synchronization states using Mutexes and Semaphores, and dynamically generates Resource Allocation Graphs (RAG) to identify and alert against cycle deadlocks in real time.',
    techStack: ['C', 'C++', 'Operating Systems', 'IPC', 'POSIX', 'GUI'],
    category: 'systems',
    githubUrl: 'https://github.com/yogitasharma3372-ui',
    problem:
      'Debugging inter-process communication and concurrent synchronization is notoriously difficult due to non-deterministic execution, race conditions, silent data corruption in shared memory, and unhandled deadlock situations.',
    solution:
      'IPC Debugger offers an instrumented monitoring pipeline that intercepts IPC system calls, tracks locks and semaphores, constructs dynamic Resource Allocation Graphs, and flags cycle formations before processes become permanently blocked.',
    architecture: [
      'Kernel & System Call Interception – Captures read/write/notify operations across IPC channels',
      'Synchronization Tracker – Monitors mutex locks, unlocks, and semaphore wait/signal states',
      'Graph Analysis Engine – Constructs Resource Allocation Graph (RAG) and runs cycle-finding algorithms',
      'GUI & Logging Dashboard – Real-time graphical visualization of process states and event logs',
    ],
    features: [
      'Real-time monitoring across Pipes, Message Queues, and Shared Memory',
      'Process synchronization tracking with Mutexes and POSIX Semaphores',
      'Dynamic Resource Allocation Graph (RAG) generation',
      'Automated deadlock detection utilizing graph cycle detection algorithms',
      'Process state visualization (Running, Waiting, Blocked, Terminated)',
      'Timeline stream of inter-process message events and synchronization locks',
      'System log aggregation with severity filters for rapid diagnostic triage',
    ],
    highlights: [
      'Real-time visualization of Process A → IPC Channel → Process B flow',
      'Cycle detection in Resource Allocation Graph flags deadlocks immediately',
      'Comprehensive inspection across 3 distinct IPC mechanisms',
    ],
  },
  {
    id: 'starbucks-clone',
    route: '/projects/starbucks-clone',
    title: 'Starbucks Clone Website',
    subtitle: 'Responsive Web Application',
    date: "Sep '24",
    description:
      'A responsive, accessible frontend recreation of the Starbucks web experience featuring modern CSS Grid/Flexbox layouts, fluid navigation, and interactive beverage customization.',
    longDescription:
      'A frontend engineering showcase replicating the responsive Starbucks web interface. Built with semantic HTML5, modern CSS3 (Flexbox & CSS Grid), and vanilla JavaScript, it demonstrates mastery over responsive breakpoint systems, interactive ordering flows, accessible DOM structuring, and smooth UI transitions across mobile, tablet, and desktop viewports.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'UI/UX'],
    category: 'frontend',
    githubUrl: 'https://github.com/yogitasharma3372-ui',
    problem:
      'Modern web apps need to deliver consistent visual hierarchy, high touch-target usability, and buttery performance across radically disparate viewport sizes without relying on heavy frontend framework overhead.',
    solution:
      'Engineered a lightweight, mobile-first responsive architecture utilizing fluid CSS custom properties, responsive grid systems, and clean vanilla JavaScript event delegation for order customization states.',
    architecture: [
      'Presentation Layer – Mobile-first responsive layouts using CSS Grid & Flexbox',
      'Interaction Layer – Vanilla JavaScript DOM manipulation and stateful ordering components',
      'Asset & Style Pipeline – Scalable SVG iconography and tailored CSS design tokens',
    ],
    features: [
      'Fully responsive fluid layout calibrated across 320px to 1920px viewports',
      'Intuitive navigation bar with smooth mobile menu drawer transitions',
      'Interactive coffee ordering workflow with size and milk customization',
      'Semantic HTML5 structure ensuring high accessibility standards',
      'Zero external CSS library dependencies for optimized asset weight',
    ],
    highlights: [
      'Pixel-accurate responsive recreation of complex commercial navigation',
      'Interactive beverage customizer demonstrates stateful JavaScript logic',
      'Smooth CSS-driven micro-interactions without performance compromises',
    ],
  },
];

export const training = [
  {
    organization: 'Board Infinity',
    subtitle: 'EdTech Platform',
    title: 'Data Structure and Algorithm – Java',
    period: "Jun '26 – Jul '26",
    credential: 'Certified Completion',
    summary:
      'Comprehensive deep dive into algorithmic problem solving, time-space complexity optimization, and enterprise data structure implementation in Java.',
    topics: [
      {
        category: 'Linear Data Structures',
        items: ['Arrays & Dynamic Sizing', 'Singly & Doubly Linked Lists', 'Stacks & Monotonic Stacks', 'Queues, Deques & Circular Queues'],
      },
      {
        category: 'Hierarchical & Graph Structures',
        items: ['Binary Trees & BSTs', 'Balanced Trees', 'Binary Heaps & Priority Queues', 'Graphs (Adjacency Matrix & List)'],
      },
      {
        category: 'Hashing & Search',
        items: ['Hash Tables & Collision Handling', 'Trie Data Structure', 'Binary Search & Two Pointers', 'Sliding Window Patterns'],
      },
      {
        category: 'Algorithms & Optimization',
        items: ['Merge Sort, Quick Sort, Heap Sort', 'Recursion & Backtracking', 'Topological Sorting & BFS/DFS', 'Greedy & Dynamic Programming Foundations'],
      },
    ],
    takeaways: [
      'Acquired strong foundations in Data Structures and Algorithms covering custom memory-efficient representations',
      'Practiced sorting, searching, recursion, and algorithm design techniques to develop scalable solutions',
      'Enhanced analytical problem-solving abilities by applying DSA concepts to real-world coding problems and interview challenges',
    ],
  },
];

export interface Certificate {
  id: string;
  name: string;
  organization: string;
  date: string;
  category: 'programming' | 'database' | 'systems';
  technology: string;
  credentialUrl?: string;
  localPdf?: string;
  verificationId?: string;
  description: string;
}

export const certifications: Certificate[] = [
  {
    id: 'oracle-dbms',
    name: 'DBMS',
    organization: 'Oracle',
    date: "Apr '26",
    category: 'database',
    technology: 'Database',
    localPdf: '/certificates/eCertificate_oracle_dbms.pdf',
    description: 'Comprehensive certification in database management systems, relational modeling, and SQL architecture from Oracle.',
  },
  {
    id: 'infosys-dms',
    name: 'Data Management System',
    organization: 'Infosys',
    date: "Jul '26",
    category: 'database',
    technology: 'Database',
    localPdf: '/certificates/infosys dbms part_1certificate.pdf',
    description: 'Specialized enterprise certification covering data organization, indexing mechanisms, and database management principles.',
  },
  {
    id: 'python-hackerrank',
    name: 'Python',
    organization: 'HackerRank',
    date: "Sep '26",
    category: 'programming',
    technology: 'Python',
    description: 'Verified assessment in Python core language fundamentals, data manipulation, OOP concepts, and algorithmic challenges.',
  },
  {
    id: 'java-hackerrank',
    name: 'Java (Basic)',
    organization: 'HackerRank',
    date: "Sep '26",
    category: 'programming',
    technology: 'Java',
    description: 'Verified assessment validating core Java competencies including object-oriented programming, exception handling, and collections.',
  },
  {
    id: 'cpp-infosys',
    name: 'Programming in C++',
    organization: 'Infosys',
    date: "Aug '25",
    category: 'programming',
    technology: 'C++',
    description: 'Official Infosys certification covering modern C++ syntax, object-oriented concepts, memory allocation, and STL libraries.',
  },
  {
    id: 'java-neocolab',
    name: 'Programming in Java',
    organization: 'NeoColab / Academic Examination',
    date: "2024",
    category: 'programming',
    technology: 'Java',
    localPdf: '/certificates/https___s3.amazonaws.com_exams-media_CSE310_2028_E Certificate_12417726@neocolab.ai.pdf',
    description: 'Validated course certification in Java programming (CSE310) verifying hands-on coding assessments and algorithmic competencies.',
  },
];

export const timeline = [
  {
    year: '2024',
    title: 'B.Tech CSE Commenced & Web Systems',
    description:
      'Started Bachelor of Technology in Computer Science & Engineering at Lovely Professional University. Implemented responsive web design systems including the Starbucks Clone website, establishing strong frontend fundamentals and software principles.',
    tags: ['LPU', 'B.Tech CSE', 'HTML/CSS/JS', 'Responsive Web'],
  },
  {
    year: '2025',
    title: 'Systems Programming & Operating Systems Focus',
    description:
      'Transitioned into low-level systems programming in C/C++. Built the IPC Debugger tool, mastering process synchronization, Mutexes, POSIX Semaphores, Shared Memory, and automated Deadlock Detection via Resource Allocation Graphs.',
    tags: ['C/C++', 'Operating Systems', 'IPC', 'Deadlock Detection', 'RAG'],
  },
  {
    year: '2026',
    title: 'Advanced DSA in Java & TaskFlow Scheduler',
    description:
      'Completed intensive Data Structures & Algorithms training in Java with Board Infinity. Engineered TaskFlow, a priority task scheduling engine using Min Heap, DAG Topological Sort, and Spring Boot REST APIs. Earned certifications from Oracle, Infosys, and HackerRank.',
    tags: ['Board Infinity', 'Java DSA', 'TaskFlow', 'Spring Boot', 'Certifications'],
  },
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certifications' },
  { label: 'Training', path: '/training' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];
