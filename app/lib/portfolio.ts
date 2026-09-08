export const profile = {
  name: "K. Shiva Saket",
  shortName: "Saket",
  role: "IT Student · AI/ML · Cybersecurity · Software Development",
  college: "Vasavi College of Engineering, Hyderabad",
  github: "https://github.com/Saket2911",
  linkedin: "https://www.linkedin.com/in/k-shiva-saket-738aa034a/",
  email: "saketkolla28@gmail.com",
  resume: "/resume.pdf",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["C", "Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    items: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    label: "Data",
    items: ["MongoDB", "SQL", "Data Analysis"],
  },
  {
    label: "AI / ML",
    items: ["Python", "Machine Learning", "NLP"],
  },
  {
    label: "Security",
    items: ["Network Security", "Network Traffic Analysis", "Threat Detection", "MITRE ATT&CK"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab"],
  },
] as const;

export const projects = [
  {
    index: "01",
    name: "AidConnect-InnovateX-",
    category: "Full-stack / hackathon project",
    description: "A MERN Stack organ donation platform documented as a hackathon project on the public repository.",
    problem: "Makes it easier to connect people around a time-sensitive organ donation workflow.",
    tags: ["JavaScript", "MERN", "Web development"],
    github: "https://github.com/Saket2911/AidConnect-InnovateX-",
    demo: null,
    accent: "violet",
  },
  {
    index: "02",
    name: "Dsac-Website",
    category: "Web development",
    description: "A JavaScript website for the Data Structures and Algorithms Club, with a live homepage linked from GitHub.",
    problem: "Creates a clear digital home for a technical student community and its activities.",
    tags: ["JavaScript", "Responsive UI", "Web development"],
    github: "https://github.com/Saket2911/Dsac-Website",
    demo: "https://dsacwebsite.vercel.app",
    accent: "cyan",
  },
  {
    index: "03",
    name: "Auction-System-Using-Java",
    category: "Software engineering",
    description: "A Java auction system repository with a Swing application documented on its public README.",
    problem: "Models the core flow of a digital auction in a desktop software experience.",
    tags: ["Java", "Swing", "OOP"],
    github: "https://github.com/Saket2911/Auction-System-Using-Java",
    demo: null,
    accent: "amber",
  },
  {
    index: "04",
    name: "DS_CourseProjectCUI",
    category: "Data structures",
    description: "A C course project repository with a visible project source file; deeper implementation details are intentionally left open.",
    problem: "A focused space to practice algorithmic thinking and data structure implementation in C.",
    tags: ["C", "Data structures", "Algorithms"],
    github: "https://github.com/Saket2911/DS_CourseProjectCUI",
    demo: null,
    accent: "green",
  },
  {
    index: "05",
    name: "GenAI_Mobilitics",
    category: "Mobile / TypeScript",
    description: "A TypeScript Expo application repository. The public README does not provide enough detail to claim specific AI or mobility features.",
    problem: "A practical mobile project space exploring an application idea while keeping implementation claims grounded in the public repo.",
    tags: ["TypeScript", "Expo", "React Native"],
    github: "https://github.com/Saket2911/GenAI_Mobilitics",
    demo: null,
    accent: "rose",
  },
] as const;

export const focusAreas = [
  {
    title: "Intelligent systems",
    description: "Exploring machine learning, NLP, and data-driven approaches to practical problems.",
    icon: "brain",
  },
  {
    title: "Defensive security",
    description: "Interested in threat detection, network analysis, and explainable security workflows.",
    icon: "shield",
  },
  {
    title: "Practical software",
    description: "Building useful products that make complex workflows clearer, faster, and more accessible.",
    icon: "code",
  },
] as const;
