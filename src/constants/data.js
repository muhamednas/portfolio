import {
  Code2, Database, Brain, Terminal, Layers, Zap, Sparkles, Rocket,
  BarChart3, FileSpreadsheet, GitBranch, Users, Target, Lightbulb,
  Compass, TrendingUp, BookOpen
} from "lucide-react";

export const PROFILE = {
  name: "Mohamed",
  fullName: "Mohamed Nasir Mohamed",
  role: "Data Science Student & AI Systems Builder",
  location: "Colombo, Sri Lanka",
  email: "muhammed01n@gmail.com",
  phone: "0774778482",
  linkedin: "https://www.linkedin.com/in/muhamadns44",
  github: "https://github.com/muhamadns44",
  bio: "Currently at KDU, bridging the gap between raw data and agentic automation. Building RAG pipelines, smart retail systems, and AI-driven solutions with a focus on real-world impact.",
  photo: "/portfolio/profile.jpeg"
};

export const PROJECTS = [
  {
    name: "LaborEx",
    description: "Blue-collar labor exchange platform for Sri Lanka. WhatsApp-first onboarding, PostGIS geo-matching, trust scoring, and EPF/ETF compliance for informal daily-wage workers and SMEs.",
    techStack: ["FastAPI", "PostgreSQL", "PostGIS", "WhatsApp API", "Python"],
    githubUrl: "#",
    category: "Full-Stack AI Platform",
    type: "Personal",
    accent: "violet"
  },
  {
    name: "Smart Retail Automation",
    description: "End-to-end grocery automation system. Inventory prediction, sales trend analysis, and automated reorder workflows built from real retail floor experience.",
    techStack: ["Python", "Streamlit", "PostgreSQL", "Pandas", "Scikit-learn"],
    githubUrl: "#",
    category: "Data Science",
    type: "Personal",
    accent: "cyan"
  },
  {
    name: "RAG Knowledge Engine",
    description: "Production-grade Retrieval Augmented Generation pipeline. Hybrid search, semantic chunking, re-ranking, and grounded answer generation with citation tracking.",
    techStack: ["LangChain", "FastAPI", "ChromaDB", "OpenAI", "React"],
    githubUrl: "#",
    category: "Generative AI",
    type: "Personal",
    accent: "pink"
  },
  {
    name: "Early Churn Prediction - Telecom",
    description: "Machine learning model predicting customer churn for a telecom provider. Trained and compared multiple classifiers, handled class imbalance, and identified the top drivers behind cancellations.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    githubUrl: "#",
    category: "Machine Learning",
    type: "Group Project",
    accent: "amber"
  },
  {
    name: "Olympic Games Data Analysis",
    description: "End-to-end analysis of 120+ years of Olympic history. Uncovered trends in country performance, gender participation, and sport evolution through interactive visualizations.",
    techStack: ["Python", "Pandas", "Seaborn", "Plotly"],
    githubUrl: "#",
    category: "Data Analytics",
    type: "Group Project",
    accent: "violet"
  },
  {
    name: "SDG Progress Dashboard",
    description: "Interactive dashboard tracking UN Sustainable Development Goals progress across countries. Cleaned multi-source data, built KPI visualizations, and highlighted gaps in climate and equality metrics.",
    techStack: ["Power BI", "R", "SQL", "Excel"],
    githubUrl: "#",
    category: "Dashboard / BI",
    type: "Group Project",
    accent: "pink"
  },
];

export const EXPERIENCE = [
  {
    role: "Sales Professional",
    company: "ACM Hardware (Pvt) Ltd.",
    period: "Feb 2024 - Present",
    location: "Colombo, Sri Lanka",
    highlights: [
      "Built customer relationship workflows that informed later AI automation projects",
      "Analyzed sales patterns across diverse client segments",
      "Developed skills translating technical products to non-technical buyers"
    ]
  },
  {
    role: "Sales Professional",
    company: "Barakath Stores Pvt Ltd.",
    period: "Mar 2022 - Present",
    location: "Pilimathalawa, Sri Lanka",
    highlights: [
      "Analyzed sales trends to optimize product stocking - seeded the Smart Retail Automation project",
      "Managed inventory and transaction workflows end-to-end",
      "Gained firsthand insight into SME operations that informs current platform work"
    ]
  }
];

export const EDUCATION = [
  {
    degree: "BSc in Applied Data Science Communication",
    institution: "General Sir John Kotelawala Defence University (KDU)",
    period: "Feb 2024 - Feb 2027",
    focus: "Computer Science - Data Science - Machine Learning"
  }
];

export const CERTIFICATIONS = [
  { name: "What is Data Science?", issuer: "IBM / Coursera", category: "Foundations", image: "/portfolio/certs/what-is-data-science.jpg" },
  { name: "Foundations of Data Science", issuer: "Google", category: "Foundations", image: "/portfolio/certs/foundations-of-data-science.jpg" },
  { name: "Foundations: Data, Data, Everywhere", issuer: "Google", category: "Foundations", image: "/portfolio/certs/data-data-everywhere.jpg" },
  { name: "Develop Generative AI Applications: Get Started", issuer: "IBM", category: "Generative AI", image: "/portfolio/certs/genai-get-started.jpg" },
  { name: "Start Writing Prompts like a Pro", issuer: "Udemy", category: "Prompt Engineering", image: "/portfolio/certs/prompts-like-a-pro.jpg" },
  { name: "LangChain for LLM Application Development", issuer: "DeepLearning.AI", category: "AI Engineering", image: "/portfolio/certs/langchain-llm.jpg" },
  { name: "Generative AI for Web Developers", issuer: "LinkedIn Learning", category: "AI Engineering", image: "/portfolio/certs/genai-web-devs.jpg" },
];

export const SKILL_GROUPS = [
  {
    title: "Technical",
    description: "Tools I build with daily.",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "R", icon: Code2 },
      { name: "SQL", icon: Database },
      { name: "FastAPI", icon: Zap },
      { name: "React", icon: Layers },
      { name: "PostgreSQL", icon: Database },
      { name: "LangChain", icon: Brain },
      { name: "Streamlit", icon: Terminal },
      { name: "Machine Learning", icon: Sparkles },
      { name: "RAG Systems", icon: Rocket },
    ]
  },
  {
    title: "Business & Analytics",
    description: "Turning data into decisions.",
    skills: [
      { name: "Power BI", icon: BarChart3 },
      { name: "Dashboard Design", icon: BarChart3 },
      { name: "Business Analysis", icon: TrendingUp },
      { name: "Data Storytelling", icon: FileSpreadsheet },
      { name: "KPI Tracking", icon: Target },
      { name: "Excel (Advanced)", icon: FileSpreadsheet },
    ]
  },
  {
    title: "Professional",
    description: "How I work with people.",
    skills: [
      { name: "Team Leadership", icon: Users },
      { name: "Teamwork", icon: Users },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Organization", icon: Compass },
      { name: "Adaptability", icon: GitBranch },
      { name: "Continuous Learning", icon: BookOpen },
    ]
  },
];
