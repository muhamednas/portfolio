import {
  Code2, Database, Brain, Terminal, Layers, Zap, Sparkles, Rocket,
  BarChart3, FileSpreadsheet, GitBranch, Users, Target, Lightbulb,
  Compass, TrendingUp, BookOpen, FileText
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export const PROFILE = {
  name: "Mohamed",
  fullName: "Mohamed Nasir Mohamed",
  role: "Data Science Student & AI Systems Builder",
  location: "Mount Lavinia, Sri Lanka",
  email: "muhammed01n@gmail.com",
  phone: "+94 77 477 8482",
  linkedin: "https://www.linkedin.com/in/muhamadns44",
  github: "https://github.com/muhamednas",
  bio: "Currently at KDU, bridging the gap between raw data and agentic automation. Building RAG pipelines, smart retail systems, and AI-driven solutions with a focus on real-world impact.",
  photo: `${BASE}profile.jpeg`
};

export const PROJECTS = [
  {
    name: "LaborEx",
    description: "WhatsApp-first labor exchange platform connecting informal daily-wage workers with SMEs across Sri Lanka. Features PostGIS geo-matching, dual trust scoring, EPF/ETF compliance, and a multilingual NLP pipeline handling Sinhala, Tamil, and English.",
    techStack: ["FastAPI", "PostgreSQL", "PostGIS", "WhatsApp API", "Python"],
    githubUrl: "https://github.com/muhamednas/laborex",
    category: "Full-Stack AI Platform",
    type: "Personal",
    accent: "violet"
  },
  {
    name: "USD/LKR Exchange Rate Prediction",
    description: "CRISP-DM pipeline forecasting the USD/LKR exchange rate using 16 years of Central Bank of Sri Lanka data (3,346 daily observations). Engineered 14 features — moving averages, volatility windows, and lag features — then compared Random Forest, XGBoost, Gradient Boosting, and a weighted ensemble. XGBoost achieved MAPE 0.838% and R² 0.904, beating the 2% industry benchmark. Includes a 30-day recursive forecast with 95% confidence intervals. Presented as a poster at ADScAI 2026, University of Moratuwa.",
    techStack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "CRISP-DM"],
    githubUrl: null,
    category: "Machine Learning · Published Research",
    type: "Group Project",
    accent: "cyan",
    githubPlaceholder: true
  },
  {
    name: "Early Churn Prediction - Telecom",
    description: "ML classification model predicting customer churn for a telecom provider. Addressed class imbalance with SMOTE and compared Logistic Regression, Decision Tree, Random Forest, and XGBoost. Identified top churn drivers including contract type, tenure, and monthly charges.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/muhamednas/Early-Churn-Prediction-Telecom",
    category: "Machine Learning",
    type: "Group Project",
    accent: "amber"
  },
  {
    name: "PolicyAdapt AI",
    description: "AI-driven policy summarisation and scenario adaptation platform. Upload a policy document, get a structured TextRank summary, then generate audience-specific adapted drafts using LLaMA 3.1 via GroqCloud with compression metrics and full draft history.",
    techStack: ["Python", "Streamlit", "LangChain", "Groq API", "TextRank"],
    githubUrl: "https://github.com/muhamednas/PolicyAdapt-AI",
    category: "Generative AI",
    type: "Personal",
    accent: "emerald"
  },
  {
    name: "Agentic Research Paper Analyzer",
    description: "4-step agentic RAG pipeline that analyzes academic papers with page-level citations and anti-hallucination design. Supports multi-paper literature review generation with cross-paper comparison.",
    techStack: ["Python", "Streamlit", "FAISS", "LangChain", "Groq API", "Pydantic"],
    githubUrl: "https://github.com/muhamednas/Agentic-Research-Paper-Analyzer",
    category: "AI Agents",
    type: "Personal",
    accent: "cyan"
  },
  {
    name: "CartConnect",
    description: "Smart supermarket cart with autonomous pathfinding to direct users to specific items via a tablet interface. Features an intelligent recommendation system and automated weight-based billing, reducing shopping time and enhancing the customer journey from entry to exit.",
    techStack: ["Arduino", "Python", "Streamlit"],
    githubUrl: null,
    category: "Embedded AI System",
    type: "Group Project",
    accent: "pink"
  },
  {
    name: "Data Mining: Classification and Clustering",
    description: "Applied CRISP-DM methodology on public sector data. Built and evaluated classification models, handled class imbalance, and applied clustering algorithms for pattern discovery across government datasets.",
    techStack: ["Python", "R", "Scikit-learn", "Pandas", "NumPy"],
    githubUrl: "https://github.com/muhamednas/Data-Mining-Classification-and-Clustering",
    category: "Machine Learning",
    type: "Group Project",
    accent: "amber"
  },
  {
    name: "Olympic Games Data Analysis",
    description: "End-to-end analysis of 120+ years of Olympic history. Uncovered trends in country performance, gender participation, and sport evolution through interactive visualizations and statistical analysis.",
    techStack: ["Python", "Pandas", "Seaborn", "Plotly"],
    githubUrl: "https://github.com/muhamednas/Olympic-Games-Data-Analysis",
    category: "Data Analytics",
    type: "Group Project",
    accent: "violet"
  },
  {
    name: "SDG Progress Dashboard",
    description: "Interactive dashboard tracking UN Sustainable Development Goals progress across countries. Cleaned multi-source data, built KPI visualizations, and highlighted gaps in climate and equality metrics.",
    techStack: ["Power BI", "R", "SQL", "Excel"],
    githubUrl: "https://github.com/muhamednas/SDG-Progress-Dashboard",
    category: "Dashboard / BI",
    type: "Group Project",
    accent: "pink"
  },
  {
    name: "SQL & Power BI: Government Analytics",
    description: "Two-part analytics project covering Australian government datasets and Canadian immigration data. Designed relational databases, complex T-SQL queries, and Power BI dashboards identifying key policy trends.",
    techStack: ["SQL Server", "T-SQL", "Power BI", "DAX"],
    githubUrl: null,
    category: "Business Analytics",
    type: "Group Project",
    accent: "cyan"
  },
];

export const EXPERIENCE = [
  {
    role: "Sales Inventory Assistant (Part-Time)",
    company: "Barakath Stores (Pvt) Ltd.",
    period: "Mar 2022 – Present",
    location: "Pilimathalawa, Sri Lanka",
    highlights: [
      "Tracked stock levels and analyzed sales trends to optimize product availability",
      "Managed transactions and ensured accurate cash handling across daily operations",
      "Gained firsthand exposure to SME business management, supply chain decisions, and retail analytics"
    ]
  },
  {
    role: "Sales Operations Associate (Part-Time)",
    company: "ACM Hardware (Pvt) Ltd.",
    period: "Jan 2024 – Present",
    location: "Mount Lavinia, Sri Lanka",
    highlights: [
      "Assisted in retail sales and customer engagement for a hardware products business serving diverse client segments",
      "Developed strong technical communication skills explaining hardware products to non-technical buyers",
      "Built customer relationship workflows that later informed AI-driven automation project designs"
    ]
  }
];

export const EDUCATION = [
  {
    degree: "BSc in Applied Data Science Communication",
    institution: "General Sir John Kotelawala Defence University (KDU)",
    period: "Feb 2024 – Feb 2027",
    focus: "Computer Science · Data Science · Machine Learning"
  }
];

export const PUBLICATIONS = [
  {
    title: "Predicting USD/LKR Exchange Rate: A CRISP-DM Machine Learning Approach",
    venue: "ADScAI 2026 — Applied Data Science & AI Conference, University of Moratuwa",
    type: "Poster Presentation",
    year: "2026",
    githubUrl: null
  }
];

export const CERTIFICATIONS = [
  {
    name: "Champions - Data Odyssey Inter Faculty Exhibition Competition 2025",
    issuer: "AI and Data Science Club, KDU",
    category: "Achievement",
    image: `${BASE}certs/data_odyssey_champions.jpeg`
  },
  {
    name: "What is Data Science?",
    issuer: "IBM / Coursera",
    category: "Foundations",
    image: `${BASE}certs/what-is-data-science.jpeg`
  },
  {
    name: "Foundations of Data Science",
    issuer: "Google",
    category: "Foundations",
    image: `${BASE}certs/foundations-of-data-science.jpeg`
  },
  {
    name: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    category: "Foundations",
    image: `${BASE}certs/data-data-everywhere.jpeg`
  },
  {
    name: "Develop Generative AI Applications: Get Started",
    issuer: "IBM",
    category: "Generative AI",
    image: `${BASE}certs/genai-get-started.jpeg`
  },
  {
    name: "Start Writing Prompts like a Pro",
    issuer: "Udemy",
    category: "Prompt Engineering",
    image: `${BASE}certs/prompts-like-a-pro.jpeg`
  },
  {
    name: "Generative AI for Web Developers",
    issuer: "LinkedIn Learning",
    category: "AI Engineering",
    image: `${BASE}certs/genai-web-devs.jpeg`
  },
  {
    name: "LangChain for LLM Application Development",
    issuer: "DeepLearning.AI",
    category: "AI Engineering",
    image: null
  },
];

export const SKILL_GROUPS = [
  {
    title: "Technical",
    description: "Tools I build with daily.",
    skills: [
      { name: "Python",          icon: Code2,    featured: true,  tagline: "Primary language"    },
      { name: "LangChain",       icon: Brain,    featured: true,  tagline: "LLM orchestration"   },
      { name: "RAG Systems",     icon: Rocket,   featured: true,  tagline: "Core expertise"      },
      { name: "R",               icon: Code2    },
      { name: "SQL",             icon: Database },
      { name: "FastAPI",         icon: Zap      },
      { name: "React",           icon: Layers   },
      { name: "PostgreSQL",      icon: Database },
      { name: "Streamlit",       icon: Terminal },
      { name: "Machine Learning",icon: Sparkles },
    ]
  },
  {
    title: "Business & Analytics",
    description: "Turning data into decisions.",
    skills: [
      { name: "Power BI",         icon: BarChart3,     featured: true, tagline: "Interactive dashboards" },
      { name: "Data Storytelling",icon: Sparkles,      featured: true, tagline: "Insight to narrative"   },
      { name: "Business Analysis",icon: TrendingUp  },
      { name: "Dashboard Design", icon: BarChart3   },
      { name: "KPI Tracking",     icon: Target      },
      { name: "Excel (Advanced)", icon: FileSpreadsheet },
    ]
  },
  {
    title: "Professional",
    description: "How I work with people.",
    skills: [
      { name: "Problem Solving",    icon: Lightbulb, featured: true, tagline: "Engineering mindset"  },
      { name: "Research & Writing", icon: FileText,  featured: true, tagline: "Published research"   },
      { name: "Team Leadership",    icon: Users    },
      { name: "Organization",       icon: Compass  },
      { name: "Adaptability",       icon: GitBranch },
      { name: "Continuous Learning",icon: BookOpen  },
    ]
  },
];
