// Central place for personal / static content shown on the site.
// Update the placeholder URLs (marked below) with your real links.

export const PERSONAL_INFO = {
  name: "Priyadharshini Rajendran",
  role: "Full-Stack Developer | AI Enthusiast",
  tagline: "MCA student passionate about Full-Stack Development and AI-powered applications using React.js, FastAPI, PostgreSQL, and Large Language Models.",
  location: "Trichy, Tamil Nadu, India",
  email: "priyadharshinirajendran1701@gmail.com",
  phone: "+91 9080738403",
  resumeUrl: "/resume.pdf", // place your resume PDF in client/public/resume.pdf
  socials: {
    github: "https://github.com/priyadharshinirajendran-17", // TODO: replace with your GitHub URL
    linkedin: "https://www.linkedin.com/in/priyadharshin-rajendran/", // TODO: replace with your LinkedIn URL
    email: "mailto:priyadharshinirajendran1701@gmail.com",
  },
};

export const ABOUT = {
  paragraphs: [
    "I'm an MCA student with hands-on experience building full-stack web applications using React.js, Node.js, FastAPI, Express.js, MongoDB, and PostgreSQL. I enjoy solving real-world problems through scalable web applications and AI-powered solutions."
  ],
};

export const EXPERIENCE = [
  {
    role: "Web Development Intern",
    company: "Elevate Labs",
    duration: "January 2026 – April 2026",
    points: [
      "Developed modules for a Smart Recruitment & Candidate Tracking System using React.js, JavaScript, HTML, and CSS.",
      "Implemented candidate management features, form validation, and API integration to streamline recruitment workflows.",
      "Integrated backend functionality using Node.js, Express.js, and MongoDB to support CRUD operations and database management.",
      "Used Git for version control and collaborated on deployment workflows, gaining early exposure to CI/CD pipelines.",
    ],
  },
  {
    role: "Data Processing Analyst",
    company: "NielsenIQ",
    duration: "July 2022 – November 2022",
    points: [
      "Analyzed and processed large datasets using OGRDS, Python, and SQL to support business reporting and insights.",
      "Streamlined data cleaning and transformation by building automated workflows, cutting manual effort by about 40%.",
      "Delivered reliable reports with 99% accuracy by applying structured validation checks before final output.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "MCA — Master of Computer Applications",
    institution: "SASTRA Deemed University",
    duration: "Jun 2024 – May 2026",
    detail: "CGPA: 7.3 / 10",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    institution: "Bishop Heber College",
    duration: "Jun 2019 – Jun 2022",
    detail: "CGPA: 8.2 / 10",
  },
];

export const CERTIFICATIONS = [
  { name: "AWS Cloud Practitioner", issuer: "EduBridge", duration: "Jan 2024 – Mar 2024" },
  { name: "Cloud Computing & IoT", issuer: "NPTEL", duration: "Jan 2026 – Apr 2026" },
  { name: "JavaScript & React.js", issuer: "Udemy", duration: "Dec 2023" },
  { name: "IELTS Academic", issuer: "IELTS", duration: "Apr 2023" },
];

// Fallback data used if the API is unreachable, so the site never shows
// an empty section during local development before the DB is seeded.

export const FALLBACK_PROJECTS = [
  {
    _id: "fallback-0",
    title: "AI-First CRM",
    description: [
      "Developed an AI-powered CRM application using React.js and FastAPI to manage customer interactions through intelligent workflows.",
      "Built RESTful APIs with FastAPI, SQLAlchemy, and PostgreSQL for efficient CRUD operations and secure data management.",
      "Integrated a LangGraph-powered AI agent to summarize interactions, search HCP records, edit interactions, and generate intelligent follow-up suggestions.",
      "Implemented Redux Toolkit for state management and created a responsive UI with real-time API communication.",
    ],
    technologies: [
      "React.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "LangGraph",
      "LLM",
      "Redux Toolkit",
      "SQLAlchemy",
    ],
    githubUrl: "https://github.com/priyadharshinirajendran-17/ai-first-crm",
    liveUrl: "https://ai-first-crm-ten.vercel.app",
    featured: true,
  },

  {
    _id: "fallback-1",
    title: "Brain Tumor Detection using Deep Learning",
    description: [
      "MRI-based brain tumor detection system built with multiple CNN architectures.",
      "Compared EfficientNetB0 and MobileNet models to improve prediction accuracy.",
      "Secured patient data using AES encryption and PBKDF2-based authentication.",
      "Developed an image upload workflow with real-time prediction results.",
    ],
    technologies: [
      "Python",
      "Flask",
      "TensorFlow",
      "EfficientNetB0",
      "MobileNet",
      "AES",
      "PBKDF2",
    ],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },

  {
    _id: "fallback-2",
    title: "Smart Recruitment & Candidate Tracking System",
    description: [
      "Developed a full-stack recruitment platform for managing candidates throughout the hiring process.",
      "Implemented candidate search, resume management, recruiter dashboard, and CRUD operations.",
      "Integrated authentication and backend APIs using React, Node.js, Express.js, and MongoDB.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },

  {
    _id: "fallback-3",
    title: "Personal MERN Portfolio",
    description: [
      "Designed and developed a responsive portfolio website using the MERN stack.",
      "Displays projects, skills, education, certifications, and experience dynamically.",
      "Includes a contact form and REST API integration with MongoDB.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/priyadharshinirajendran-17/mern-portfolio",
    liveUrl: "https://mern-portfolio-wheat-omega.vercel.app/",
    featured: false,
  },
];

export const FALLBACK_SKILLS = [
  // Frontend
  { _id: "s1", name: "React.js", category: "Frontend", level: 90 },
  { _id: "s2", name: "JavaScript (ES6+)", category: "Frontend", level: 85 },
  { _id: "s3", name: "HTML5 & CSS3", category: "Frontend", level: 90 },
  { _id: "s4", name: "Tailwind CSS", category: "Frontend", level: 85 },

  // Backend
  { _id: "s5", name: "Node.js", category: "Backend", level: 80 },
  { _id: "s6", name: "Express.js", category: "Backend", level: 80 },
  { _id: "s7", name: "FastAPI", category: "Backend", level: 80 },
  { _id: "s8", name: "REST APIs", category: "Backend", level: 85 },

  // Database
  { _id: "s9", name: "MongoDB", category: "Database", level: 80 },
  { _id: "s10", name: "PostgreSQL", category: "Database", level: 75 },
  { _id: "s11", name: "MySQL", category: "Database", level: 70 },

  // Programming
  { _id: "s12", name: "Python", category: "Programming", level: 85 },
  { _id: "s13", name: "Java", category: "Programming", level: 75 },

  // AI
  { _id: "s14", name: "LangGraph", category: "AI", level: 75 },
  { _id: "s15", name: "LLM Integration", category: "AI", level: 75 },
  { _id: "s16", name: "Prompt Engineering", category: "AI", level: 70 },

  // Tools
  { _id: "s17", name: "Git & GitHub", category: "Tools", level: 85 },
  { _id: "s18", name: "Postman", category: "Tools", level: 85 },
  { _id: "s19", name: "Swagger", category: "Tools", level: 75 },
  { _id: "s20", name: "Docker (Basics)", category: "Tools", level: 60 },

  // Cloud
  { _id: "s21", name: "AWS (Basics)", category: "Cloud", level: 60 },
  { _id: "s22", name: "MongoDB Atlas", category: "Cloud", level: 75 },
  { _id: "s23", name: "Render", category: "Cloud", level: 70 },
  { _id: "s24", name: "Vercel", category: "Cloud", level: 75 },
];

export const SKILL_CATEGORY_ORDER = [
  "Frontend",
  "Backend",
  "Database",
  "Programming",
  "AI",
  "Tools",
  "Cloud",
];
