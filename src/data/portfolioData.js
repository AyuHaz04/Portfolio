const portfolioData = {
  name: "Ayush Hazra",
  email: "ayushh20004@gmail.com",
  phone: "+91-9831292291",
  linkedin: "https://www.linkedin.com/in/ayush-hazra/",
  github: "https://github.com/AyuHaz04",
  title: "Full Stack Developer",
  tagline: "Building scalable web apps with React, Node.js, MongoDB & AWS",

  stats: [
    { value: "8000+", label: "Event Participants Managed" },
    { value: "40%", label: "Faster Page Load Time" },
    { value: "99%", label: "Application Uptime" },
  ],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Unified Mentors",
      duration: "May 2025 – Aug 2025",
      points: [
        "Built scalable full-stack apps with React, Node.js, Express & MongoDB — improved page load by ~40%",
        "Implemented secure auth flows — reduced unauthorized access by ~95%",
        "Designed RESTful APIs — improved backend efficiency by ~30%",
        "Enhanced UI with Bootstrap — improved user satisfaction by ~25%",
      ],
    },
  ],

  projects: [
    {
      name: "SafeShare",
      tech: ["ReactJS", "Node.js", "MongoDB"],
      points: [
        "Secure document-sharing platform with OTP-based auth and role-based access control",
        "File upload, access permissions and dashboards for 100+ users",
        "Deployed on cloud infrastructure with ~99% uptime",
      ],
      live: "https://safe-search-frontend.vercel.app/",
      github: "https://github.com/AyuHaz04/SafeSearch-Frontend",
    },
    {
      name: "VelvetBug",
      tech: ["ReactJS", "Node.js", "MongoDB"],
      points: [
        "E-commerce platform for customizable greeting cards with interactive UI",
        "REST APIs for product customization, user actions and admin operations",
        "Admin panel for inventory and content management",
      ],
      live: null,
      github: "https://github.com/AyuHaz04/Velvelt-Bug-Frontend",
    },
  ],

  skills: [
    { category: "Languages", items: ["Java", "JavaScript", "C++", "Python"] },
    { category: "Frontend", items: ["HTML", "CSS", "ReactJS", "Bootstrap", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "ExpressJS"] },
    { category: "Databases", items: ["MongoDB", "SQL"] },
    { category: "Tools & Cloud", items: ["Git", "VS Code", "AWS Cloud"] },
  ],

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      date: "Jun 2024",
      highlight: true,
    },
    {
      name: "Full Stack Web Development",
      issuer: "Apna College",
      date: "May 2024",
      highlight: false,
    },
    {
      name: "Embedded System Design",
      issuer: "Maven Silicon",
      date: "Jul 2025",
      highlight: false,
    },
  ],

  leadership: [
    {
      role: "Manager, Events Team",
      event: "Gravitas 2025 (Tech Fest), VIT",
      date: "Oct 2025",
      description: "Managed registrations for 8000+ participants across 3 event zones",
    },
    {
      role: "Coordinator, Event Team",
      event: "Riviera 2025 (Cultural Fest), VIT",
      date: "Feb 2025",
      description: "Coordinated 20+ large-scale events with 70 members, 2000+ attendees",
    },
  ],

  education: [
    {
      degree: "B.Tech — Electronics & Communication Engineering",
      institution: "Vellore Institute of Technology, Vellore",
      duration: "2022 – 2025",
      grade: "CGPA: 8.67",
    },
    {
      degree: "Class XII (ISC)",
      institution: "St. Stephens School, Kolkata",
      duration: "2022",
      grade: "89.1%",
    },
    {
      degree: "Class X (ICSE)",
      institution: "St. Joans School, Kolkata",
      duration: "2020",
      grade: "96%",
    },
  ],
};

export default portfolioData;