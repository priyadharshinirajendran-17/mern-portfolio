// Central place for personal / static content shown on the site.
// Update the placeholder URLs (marked below) with your real links.

export const PERSONAL_INFO = {
  name: "Priyadharshini Rajendran",
  role: "MERN Stack Developer",
  tagline: "MCA student passionate about the MERN stack, eager to learn, build, and grow as a full-stack developer.",
  location: "Trichy, Tamil Nadu, India",
  email: "priyadharshinirajendran1701@gmail.com",
  phone: "+91 9080738403",
  resumeUrl: "/resume.pdf", // place your resume PDF in client/public/resume.pdf
  socials: {
    github: "https://github.com/your-username", // TODO: replace with your GitHub URL
    linkedin: "https://linkedin.com/in/your-profile", // TODO: replace with your LinkedIn URL
    email: "mailto:priyadharshinirajendran1701@gmail.com",
  },
};

export const ABOUT = {
  paragraphs: [
    "I'm an MCA student and full-stack developer who enjoys turning ideas into working products. My core stack is React.js, Node.js, Express, and MongoDB, and I care about writing clean, readable code over clever code.",
    "Alongside web development, I've worked on an AI/ML project — a CNN-based medical imaging system — which taught me how to think about accuracy, data security, and real-world constraints, not just model performance.",
    "I'm currently building hands-on experience with DevOps fundamentals — Linux, Docker, CI/CD concepts, and AWS basics — because I want to understand not just how an app is built, but how it's shipped and kept running.",
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
    _id: "fallback-1",
    title: "Brain Tumor Detection using Deep Learning",
    description: [
      "MRI-based brain tumor detection system built with multiple CNN architectures.",
      "Compared several models including EfficientNetB0 and MobileNet for accuracy.",
      "Secured patient data using AES encryption and PBKDF2-based authentication.",
      "Built an image upload flow with a real-time prediction dashboard.",
    ],
    technologies: ["Python", "Flask", "TensorFlow", "EfficientNetB0", "MobileNet", "AES", "PBKDF2"],
    githubUrl: "https://github.com/your-username/brain-tumor-detection",
    liveUrl: "",
    featured: true,
  },
  {
    _id: "fallback-2",
    title: "Smart Recruitment and Candidate Tracking System",
    description: [
      "Full-stack recruitment platform for managing candidates through the hiring pipeline.",
      "Implemented resume upload, candidate search, and a recruiter dashboard.",
      "Added JWT-based authentication to protect recruiter-only actions.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/your-username/smart-recruitment-system",
    liveUrl: "",
    featured: true,
  },
  {
    _id: "fallback-3",
    title: "Personal MERN Portfolio",
    description: [
      "This portfolio website itself — a full MERN stack application.",
      "Dynamic project and skill data served from a MongoDB-backed REST API.",
      "Includes a working contact form that stores messages in the database.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/mern-portfolio",
    liveUrl: "",
    featured: false,
  },
];

export const FALLBACK_SKILLS = [
  { _id: "s1", name: "React.js", category: "Frontend", level: 85 },
  { _id: "s2", name: "JavaScript (ES6+)", category: "Frontend", level: 85 },
  { _id: "s3", name: "HTML5 & CSS3", category: "Frontend", level: 90 },
  { _id: "s4", name: "Tailwind CSS", category: "Frontend", level: 80 },
  { _id: "s5", name: "Node.js", category: "Backend", level: 75 },
  { _id: "s6", name: "Express.js", category: "Backend", level: 75 },
  { _id: "s7", name: "REST APIs", category: "Backend", level: 80 },
  { _id: "s8", name: "MongoDB", category: "Database", level: 75 },
  { _id: "s9", name: "MySQL", category: "Database", level: 65 },
  { _id: "s10", name: "Java", category: "Programming", level: 70 },
  { _id: "s11", name: "Python", category: "Programming", level: 80 },
  { _id: "s12", name: "Git & GitHub", category: "Tools", level: 80 },
  { _id: "s13", name: "Postman", category: "Tools", level: 75 },
  { _id: "s14", name: "Docker (Basics)", category: "Tools", level: 40 },
  { _id: "s15", name: "AWS (basics)", category: "Cloud", level: 45 },
  { _id: "s16", name: "MongoDB Atlas", category: "Cloud", level: 70 },
  { _id: "s17", name: "Render", category: "Cloud", level: 65 },
];

export const SKILL_CATEGORY_ORDER = ["Frontend", "Backend", "Database", "Programming", "Tools", "Cloud"];
