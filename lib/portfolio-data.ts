// Portfolio data structure - easily update or integrate with Notion
export const portfolioData = {
  profile: {
    name: "Marvin Jay Nilayan",
    title: "CS Student & Full-Stack Developer",
    bio: "4th Year Computer Science student at Holy Angel University with passion for creating innovative solutions through code and design.",
    email: "mjcn1130@gmail.com",
    phone: "+63 (952) 567-5234",
    location: "Pampanga, Philippines",
    photo: "/profile.png",
    resume: "/resume.pdf",
  },
  about: {
    summary: "Passionate Computer Science student at Holy Angel University with hands-on experience in full-stack development, mobile applications, and AI integration. Focused on building scalable solutions and staying ahead of technology trends.",
    stats: [
      { label: "Projects", value: "5+" },
      { label: "Years in CS", value: "4" },
    ],
  },
  skills: [
    {
      category: "Frontend",
      items: [
        "React.js",
        "HTML",
        "TypeScript",
        "Tailwind CSS",
        "Dart",
      ],
    },
    {
      category: "Backend & Database",
      items: [
        "Node.js",
        "Express.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
      ],
    },
    {
      category: "AI & Data",
      items: [
        "Machine Learning",
        "TensorFlow",
        "Data Analysis",
        "OpenAI API",
        "Python Libraries",
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        "Git & GitHub",
        "Docker",
        "AWS",
        "Agile/Scrum",
        "REST APIs",
      ],
    },
  ],
  experience: [
    {
      title: "Senior Year - Research & Development",
      company: "Holy Angel University",
      period: "2024 - Present",
      description: "Leading capstone project and exploring advanced topics in AI, cloud architecture, and system design.",
      achievements: [
        "Developing advanced features for HAU MAP project",
        "Developed the 4U: A Companion Web based Application for Mental Health Awareness",
        "Researching AI applications in education",
        "Mentoring junior CS students",
      ],
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      period: "2025 - Present",
      description: "Building web and mobile applications for various clients with focus on performance and user experience.",
      achievements: [
        "Completed 2 client projects",
        "Full-stack development with modern tech stack",
        "AI integration and optimization",
      ],
    },
    {
      title: "Junior Developer Intern",
      company: "Bb88 Advertising & Digital Solution Inc. (Pampanga)",
      period: "July 2026 - October 2026",
      description: "Contributed to production applications and learned industry best practices in full-stack development.",
      achievements: [
        "Internship still going..."
      ],
    },
  ],
  projects: [
    {
      title: "HAU MAP",
      category: "Mobile App",
      description: "A smart campus navigation app that helps users easily find any building or location within Holy Angel University",
      image: "/projects/project-1.png",
      tags: ["Next.js", "React", "Node.js", "AI", "API"],
      link: "https://github.com/KCT1234/Finals_ADET.git",
      codeLink: "https://github.com/KCT1234/Finals_ADET.git",
      featured: true,
    },
    {
      title: "4U: A Companion Web based Application for Mental Health Awareness",
      category: "Web App",
      description: "A website that can help other people for their mental health awareness and can help them to be aware of their mental health condition.",
      image: "/projects/project-2.png",
      tags: ["React", "Firebase", "Node.js"],
      link: "https://github.com/Sawieeee/mental-health-website.git",
      codeLink: "https://github.com/Sawieeee/mental-health-website.git",
      featured: true,
    },
    {
      title: "Online Assessment Monitoring with Behavioral Analysis and Object Detection using Computer Vision Enabled Cameras",
      category: "Hybrid",
      description: "A dual-modal computer vision system that combines smartphone object detection and head pose tracking to provide automated, risk-based decision support for online exam proctoring",
      image: "/projects/project-3.png",
      tags: ["Python", "Computer Vision", "MediaPipe Face Mesh", "Faster R-CNN", "Firebase"],
      link: "Not yet available in public",
      featured: true,
    },
  ],
  badges: [
    {
      title: "CCNA Intrduction to Networks",
      issuer: "Cisco",
      date: "May 2024",
      image: "/badges/itn.png",
    },
    {
      title: "Cyber Threat Management (School)",
      issuer: "Cisco",
      date: "Oct 2024",
      image: "/badges/ctm1.png",
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco",
      date: "Oct 2024",
      image: "/badges/ctm.png",
    },
    {
      title: "Incident Response",
      issuer: "Cisco",
      date: "May 2024",
      image: "/badges/1.png",
    },
    {
      title: "Vulnerability Assessment and Risk Management",
      issuer: "Cisco",
      date: "May 2026",
      image: "/badges/2.png",
    },
  ],
  social: [
    { platform: "GitHub", url: "https://github.com/Sawieee", icon: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/marvin-jay-nilayan-817275397", icon: "Linkedin" },
    { platform: "Facebook", url: "https://www.facebook.com/sawieqt", icon: "Facebook" },
    { platform: "Email", url: "mjcn1130@gmail.com", icon: "Mail" },
  ],
};
