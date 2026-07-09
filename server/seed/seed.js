// Populates the database with the projects and skills shown on the
// portfolio so the API has real data to serve on first run.
// Usage: npm run seed   (run from the /server folder, after setting MONGO_URI)

import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";

dotenv.config();

const projects = [
  {
    title: "Brain Tumor Detection using Deep Learning",
    description: [
      "MRI-based brain tumor detection system built with multiple CNN architectures.",
      "Compared several deep learning models, including EfficientNetB0 and MobileNet, for classification accuracy.",
      "Secured patient data using AES encryption and PBKDF2-based authentication.",
      "Built an image upload flow with a real-time prediction dashboard and confidence scoring.",
    ],
    technologies: ["Python", "Flask", "TensorFlow", "EfficientNetB0", "MobileNet", "AES Encryption", "PBKDF2"],
    githubUrl: "https://github.com/your-username/brain-tumor-detection",
    liveUrl: "",
    image: "",
    featured: true,
    order: 1,
  },
  {
    title: "Smart Recruitment and Candidate Tracking System",
    description: [
      "Full-stack recruitment platform for managing candidates through the hiring pipeline.",
      "Implemented resume upload, candidate search, and a recruiter dashboard.",
      "Added JWT-based authentication to protect recruiter-only actions.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/your-username/smart-recruitment-system",
    liveUrl: "",
    image: "",
    featured: true,
    order: 2,
  },
  {
    title: "Personal MERN Portfolio",
    description: [
      "This portfolio website itself — a full MERN stack application.",
      "Dynamic project and skill data served from a MongoDB-backed REST API.",
      "Includes a working contact form that stores messages in the database.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/mern-portfolio",
    liveUrl: "",
    image: "",
    featured: false,
    order: 3,
  },
];

const skills = [
  // Frontend
  { name: "React.js", category: "Frontend", level: 85, order: 1 },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 85, order: 2 },
  { name: "HTML5 & CSS3", category: "Frontend", level: 90, order: 3 },
  { name: "Tailwind CSS", category: "Frontend", level: 80, order: 4 },

  // Backend
  { name: "Node.js", category: "Backend", level: 75, order: 1 },
  { name: "Express.js", category: "Backend", level: 75, order: 2 },
  { name: "REST APIs", category: "Backend", level: 80, order: 3 },

  // Database
  { name: "MongoDB", category: "Database", level: 75, order: 1 },
  { name: "MySQL", category: "Database", level: 65, order: 2 },

  // Programming
  { name: "Java", category: "Programming", level: 70, order: 1 },
  { name: "Python", category: "Programming", level: 80, order: 2 },

  // Tools
  { name: "Git & GitHub", category: "Tools", level: 80, order: 1 },
  { name: "Postman", category: "Tools", level: 75, order: 2 },
  { name: "Docker (Basics)", category: "Tools", level: 40, order: 3 },

  // Cloud
  { name: "AWS (basics)", category: "Cloud", level: 45, order: 1 },
  { name: "MongoDB Atlas", category: "Cloud", level: 70, order: 2 },
  { name: "Render", category: "Cloud", level: 65, order: 3 },
];

const importData = async () => {
  try {
    await connectDB();
    await Project.deleteMany();
    await Skill.deleteMany();

    await Project.insertMany(projects);
    await Skill.insertMany(skills);

    console.log("Seed data imported successfully!");
    process.exit();
  } catch (error) {
    console.error(`Error importing seed data: ${error.message}`);
    process.exit(1);
  }
};

importData();
