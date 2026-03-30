import ratinamazeImg from '../assets/projects/ratinamaze.webp';
import aidjImg from '../assets/projects/aidj.webp';
import cicdImg from '../assets/projects/cicd.webp';
import lpuLogo from '../assets/schools/lpu.webp';

export const heroData = {
  firstName: 'Soham',
  lastName: 'Biswas',
  role: 'Full-Stack Developer',
  tagline:
    'Building secure full-stack products, enterprise microservices, and research-backed software with Java, Spring Boot, Next.js, and modern cloud tooling.',
  resumeUrl: '/SohamBiswasCV.docx',
  stats: [
    { value: '3', label: 'Featured Projects' },
    { value: '6', label: 'Certifications' },
    { value: '2', label: 'Journal Publications' },
  ],
};

export const aboutText =
  'I am a Computer Science and Engineering student at Lovely Professional University with hands-on experience in full-stack development, microservices, cloud systems, and technical research. My work spans Spring Boot backends, Next.js frontends, Kafka-driven event flows, containerized deployments, and scalable REST APIs. I enjoy building practical software that is secure, performant, and production-minded, whether that means architecting banking platforms, shipping polished commerce experiences, or exploring AI applications in scientific research.';

export const projects = [
  {
    id: 1,
    year: 'Mar 2026',
    category: 'Enterprise Banking Microservices',
    title: 'NexaBank Enterprise Banking Microservices Platform',
    description:
      'Architected 23 Spring Boot microservices for accounts, transactions, loans, and payments, with Apache Kafka event streaming so each service can run independently without taking the rest of the system down. Secured APIs with JWT and OAuth2, added an API Gateway with rate limiting and circuit breakers, and used Docker, Kubernetes, and CI/CD automation to improve resilience and reduce response time.',
    liveUrl: null,
    githubUrl: 'https://github.com/SohamB1810/NexaBank',
    image: cicdImg,
    imageColor: 'bg-blue-900',
    techStack: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'JWT', 'OAuth2', 'Docker', 'Kubernetes'],
  },
  {
    id: 2,
    year: 'Mar 2026',
    category: 'Full Stack Commerce',
    title: 'Voltex E-Commerce Platform',
    description:
      'Designed and built a responsive e-commerce platform using Next.js 14 App Router and Spring Boot REST APIs, with Stripe integration for checkout and order tracking. Added a modular admin dashboard for products, orders, inventory, and users, backed by JWT-based role access and optimized with SSR and a mobile-first Tailwind CSS interface.',
    liveUrl: null,
    githubUrl: 'https://github.com/SohamB1810/voltex',
    image: aidjImg,
    imageColor: 'bg-emerald-900',
    techStack: ['Next.js', 'React', 'Spring Boot', 'MySQL', 'Stripe API', 'Tailwind CSS', 'REST API'],
  },
  {
    id: 3,
    year: '2026',
    category: 'HRMS Platform',
    title: 'NexusHR',
    description:
      'A full-stack Human Resource Management System that streamlines employee records, payroll tracking, and HR operations through a modern dashboard. The project combines a Next.js frontend with a Spring Boot backend and MySQL to demonstrate enterprise-style full-stack architecture.',
    liveUrl: 'https://nexushr-git-main-sohamb1810s-projects.vercel.app',
    githubUrl: 'https://github.com/SohamB1810/nexushr',
    image: ratinamazeImg,
    imageColor: 'bg-orange-900',
    techStack: ['Next.js', 'React', 'Spring Boot', 'MySQL', 'Tailwind CSS', 'Axios', 'REST API'],
  },
];

export const recognitions = [
  {
    id: 1,
    title: 'Peer-Reviewed Publication',
    event: 'IJSRSET, Jan 2026',
    description:
      'Published research on the role of AI in galaxy analysis, with a reported scientific impact score of 9.5 in an international peer-reviewed journal.',
    icon: 'Research',
    gradient: 'from-fuchsia-600/30 to-purple-600/10',
    border: 'border-fuchsia-500/20',
    shadow: 'shadow-fuchsia-500/10',
  },
  {
    id: 2,
    title: 'Full-Stack Training',
    event: 'LPU, May-Jun 2025',
    description:
      'Completed React and Node.js training while building a real-time video calling app using React.js, Node.js, MongoDB, WebRTC, and Socket.io.',
    icon: 'Build',
    gradient: 'from-amber-600/30 to-orange-600/10',
    border: 'border-amber-500/20',
    shadow: 'shadow-amber-500/10',
  },
  {
    id: 3,
    title: 'Oracle-Certified Cloud Track',
    event: 'Database, DevOps, GenAI',
    description:
      'Earned Oracle certifications spanning Database@AWS architecture, OCI DevOps, and OCI Generative AI, reinforcing a strong cloud and platform engineering foundation.',
    icon: 'Scale',
    gradient: 'from-blue-600/30 to-indigo-600/10',
    border: 'border-blue-500/20',
    shadow: 'shadow-blue-500/10',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'AWS Educate Getting Started with Databases',
    issuer: 'Amazon Web Services Training and Certification',
    date: '2025',
    description:
      'Completed AWS Educate training covering relational database setup and SQL-based read/write operations.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    certImage: 'https://images.credly.com/images/a08cf90b-9838-4f6c-82bd-8db85fb89dd5/linkedin_thumb_blob',
    color: 'from-blue-600/20 to-blue-400/10',
    border: 'border-blue-500/20',
    glow: 'rgba(59, 130, 246, 0.3)',
    viewUrl: 'https://www.credly.com/badges/34149d49-bc94-4a80-9513-c307c51f26d1/linked_in_profile',
  },
  {
    id: 2,
    title: 'AWS Educate Introduction to Generative AI',
    issuer: 'Amazon Web Services Training and Certification',
    date: '2025',
    description:
      'Earned AWS Educate training in foundational generative AI concepts, use cases, and core model understanding.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    certImage: 'https://images.credly.com/images/e50c657a-edd9-4c93-b1cf-2b6634b54abf/linkedin_thumb_blob',
    color: 'from-purple-600/20 to-pink-400/10',
    border: 'border-purple-500/20',
    glow: 'rgba(168, 85, 247, 0.3)',
    viewUrl: 'https://www.credly.com/badges/f9af509f-e68e-46ee-b238-784e5d339edb/linked_in_profile',
  },
  {
    id: 3,
    title: 'AWS Academy Graduate - Cloud Architecting',
    issuer: 'Amazon Web Services Training and Certification',
    date: '2025',
    description:
      'Completed AWS Academy Cloud Architecting coursework focused on core cloud architecture concepts and deployment thinking.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    certImage: 'https://images.credly.com/images/fcafd0c9-42da-4703-a191-0c397203dc1b/linkedin_thumb_blob',
    color: 'from-amber-600/20 to-yellow-400/10',
    border: 'border-amber-500/20',
    glow: 'rgba(245, 158, 11, 0.3)',
    viewUrl: 'https://www.credly.com/badges/7ed7efe5-40b7-42a2-9e11-71decfbf9d5f/linked_in_profile',
  },
  {
    id: 4,
    title: 'Oracle Database@AWS Certified Architect Professional',
    issuer: 'Oracle',
    date: 'Sep 2025',
    description:
      'Verifies advanced skills in designing, deploying, securing, migrating, and operating Oracle Database@AWS environments with high availability and disaster recovery planning.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    certImage: 'https://brm-workforce.oracle.com/pdf/certview/images/ODBAWSOCP.png',
    color: 'from-red-600/20 to-orange-400/10',
    border: 'border-red-500/20',
    glow: 'rgba(239, 68, 68, 0.3)',
    viewUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=459144D0828F5390838C455F83667145D0740D74ABD0B44EE567712D9C65E063',
  },
  {
    id: 5,
    title: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
    issuer: 'Oracle',
    date: 'Oct 2025',
    description:
      'Focused on OCI DevOps workflows including infrastructure as code, CI/CD configuration, container orchestration, DevSecOps, and monitoring and observability.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    certImage: 'https://brm-workforce.oracle.com/pdf/certview/images/OCI25DOPOCP.png',
    color: 'from-cyan-600/20 to-sky-400/10',
    border: 'border-cyan-500/20',
    glow: 'rgba(34, 211, 238, 0.3)',
    viewUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=3926A0D9764AC851F7C41A4863CB574B9F3C40133C9FD5C52A7C924BCB682345',
  },
  {
    id: 6,
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    date: 'Oct 2025',
    description:
      'Validates applied knowledge of large language models and OCI Generative AI Service, including RAG workflows, semantic search, vector databases, and LangChain-based LLM applications.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    certImage: 'https://brm-workforce.oracle.com/pdf/certview/images/OCI25GAIOCP.png',
    color: 'from-emerald-600/20 to-green-400/10',
    border: 'border-emerald-500/20',
    glow: 'rgba(16, 185, 129, 0.3)',
    viewUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1262D7B466A9676F72E085D4AD7206F55ACF6DFC305FAD8A0C44DA84908D1E97',
  },
];

export const publications = [
  {
    id: 1,
    title: 'The Role of AI in Galaxy Research',
    journal: 'International Journal of Scientific Research in Science, Engineering and Technology',
    citation: 'Published in January 2026',
    publishedDate: 'January 2026',
    authors: ['Soham Biswas'],
    abstract:
      'Explores AI and deep learning applications in astrophysics and galaxy analysis, focusing on how computational methods can support large-scale astronomical research.',
    highlights: [
      'Published in a peer-reviewed international journal.',
      'Achieved a scientific impact score of 9.5.',
      'Focused on AI and deep learning applications in astrophysics and galaxy analysis.',
    ],
    articleId: null,
    articleUrl: null,
    pdfUrl: null,
  },
  {
    id: 2,
    title:
      'Modern Age Dementia: As A Multidimensional Neurodegenerative Disorder Affecting Cognition, Identity, and the Ageing Population',
    journal: 'International Journal of Scientific Research in Science and Technology',
    citation: 'Vol. 13, No. 2, pp. 43-54',
    publishedDate: 'March 5, 2026',
    authors: ['Adika Srivastava', 'Soham Biswas'],
    abstract:
      'A peer-reviewed paper exploring dementia as a multidimensional biopsychosocial challenge shaped by neurodegeneration, genetics, lifestyle patterns, and social change, with an emphasis on early detection, awareness, and future care.',
    highlights: [
      'Published in a peer-reviewed international journal.',
      'Positioned dementia beyond ageing alone by connecting biology, cognition, lifestyle, and social factors.',
      'Examined neural communication, memory decline, neuroplasticity, amyloid and tau pathology, and modern behavioural indicators.',
    ],
    articleId: 'IJSRST2613177',
    articleUrl: 'https://ijsrst.com/index.php/home/article/view/IJSRST2613177',
    pdfUrl: 'https://ijsrst.com/index.php/home/article/download/IJSRST2613177/IJSRST2613177',
  },
];

export const education = [
  {
    year: '2023 - Present',
    title: 'Lovely Professional University',
    subtitle: 'B.Tech. in Computer Science and Engineering',
    grade: 'TGPA: 7.5',
    logo: lpuLogo,
  },
  {
    year: '2022 - 2023',
    title: 'Swami Vivekanand Public School',
    subtitle: 'Intermediate (PCM)',
    grade: 'Percentage: 75%',
    logo: null,
  },
  {
    year: '2020 - 2021',
    title: 'Swami Vivekanand Public School',
    subtitle: 'Matriculation',
    grade: 'Percentage: 75%',
    logo: null,
  },
];

export const contact = {
  phone: '+91-7082673071',
  email: 'sohambiswas1810@gmail.com',
  linkedinLabel: 'soham1810',
  linkedinUrl: 'https://www.linkedin.com/in/soham1810/',
  githubLabel: 'SohamB1810',
  githubUrl: 'https://github.com/SohamB1810/',
  footerTagline: 'Full-Stack, Cloud, and Research-Oriented Builder',
};
