import { Experience, Project, Education, SkillCategory, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Kiran Patil",
  title: "Web Developer",
  email: "kiranpatil452004@gmail.com",
  phone: "+91 7020318685",
  location: "Shirpur, Maharashtra",
  linkedin: "https://linkedin.com/in/patil-kiran-120952256/",
  github: "https://github.com/kiran02052004", 
  githubHandle: "@kiran02052004",
  profileImage: "images/profile.jpg", // Replace this with your actual profile image URL
  aboutShort: "I'm a Computer Engineering student with a strong passion for web development and software engineering. I have hands-on experience in HTML, CSS, JavaScript, React, Node.js, and databases like MySQL and MongoDB. I have worked on several projects, including e-commerce platforms, portfolio websites, and full-stack applications.",
  aboutClosing: "I'm excited to collaborate with you and bring your ideas to life!"
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "C", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Web Development",
    skills: ["ReactJS", "NodeJS", "Express", "HTML/CSS", "Tailwind", "Bootstrap"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "JDBC"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Eclipse", "Linux", "Postman"]
  },
  {
    category: "Core Concepts",
    skills: ["DSA", "DBMS", "REST APIs", "OOP"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "R3Sys",
    role: "Backend Development Intern",
    period: "Aug 2024 - Sept 2024",
    type: "Remote",
    description: [
      "Built backend REST APIs for user module, reducing average response time from 1.2s to 600ms.",
      "Optimized database queries, improving data retrieval speed by 40%.",
      "Collaborated in an Agile team of 4, contributing to 2 major sprints and resolving 10+ backend issues."
    ]
  },
  {
    company: "Edunet Foundation (IBM Skills Build)",
    role: "AI & ML Intern",
    period: "Jun 2025 - Jul 2025",
    type: "Remote",
    description: [
      "Implemented AI models for image classification and fraud detection, achieving 85%+ accuracy.",
      "Earned certification in model training and data analytics fundamentals."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Code Collab",
    category: "Web",
    technologies: ["MERN Stack", "Socket.IO", "OpenAI"],
    description: "An AI-powered real-time collaborative code editor enabling multiple users to code together. Features syntax highlighting and AI assistant.",
    link: "#",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Fuel Indeed System",
    category: "Java",
    technologies: ["Java Servlet", "JSP", "JDBC", "MySQL"],
    description: "Online fuel booking platform enabling scheduling and live order tracking. Digitized the booking process, reducing manual effort.",
    link: "#",
    image: "images/fuel.jpg"
  },
  {
    title: "Weather App",
    category: "Web",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    description: "Responsive weather application fetching real-time data. Built with a RESTful backend and an intuitive frontend using React and Axios.",
    link: "#",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Pharmacy Mgmt System",
    category: "Java",
    technologies: ["Java Servlet", "JSP", "MySQL", "JDBC"],
    description: "Comprehensive system for managing medicine inventory, supplier records, and billing. Streamlined pharmacy operations.",
    link: "#",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Budget Buddy",
    category: "Web",
    technologies: ["MERN Stack", "ChartJS"],
    description: "Personal expense management application to track daily and monthly expenses. Features interactive visualizations.",
    link: "#",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "R C Patel Institute of Technology",
    degree: "B.Tech in Computer Engineering",
    period: "2022 - Present",
    score: "CGPA: 7.5 / 10",
    location: "Shirpur, Maharashtra",
    image: "images/rcpit-logo.jpeg"
  },
  {
    institution: "H. R. Patel Jr. College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2021 - 2022",
    score: "92.00%",
    location: "Shirpur, Maharashtra",
    image: "images/rcpit-logo.jpeg"
  },
  {
    institution: "H. R. Patel Secondary school, Shirpur",
    degree: "10th Grade (SSC)",
    period: "2015 - 2020",
    score: "94.40%", 
    location: "Maharashtra, India",
    image: "images/rcpit-logo.jpeg"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Pragati: Path to Future - Cohort 4 | Infosys Springboard",
    link: "https://drive.google.com/file/d/1kVh9YiYvSaTlCOrBRuMGRVht3dpDk_Xz/view"
  },
  {
    title: "Skill Development By RPG Foundation | Zensar",
    link: "https://drive.google.com/file/d/1BwBGWXPnQMc_EpwtlMIvbj14Hv2RTyrE/view?usp=sharing"
  },
  {
    title: "Database Management System | Codechef",
    link: "https://www.codechef.com/certificates/public/75b3362"
  }
];