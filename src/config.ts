export const siteConfig = {
  name: "Helen Do",
  title: "Business Analyst | Data Analyst",
  description: "Portfolio website of Helen Do",
  accentColor: "#1d4ed8",
  social: {
    email: "thudo0311@gmail.com",
    linkedin: "https://www.linkedin.com/in/minh-thu-helen-do-502717232/",
    github: "https://github.com/helen030/DataProject",
  },
  aboutMe:
    "I'm a fresh graduate with a double degree in Commerce and Information Systems from UNSW. During my study, I honed my analytical thinking skills and developed a keen eye for identifying patterns and trends.",
    "I have also completed two internships at Aurecon and TL Consulting, where I gained valuable experience in consulting, asset management, and operational transformation. Through these internships, I have developed a strong foundation in how to solve real-world business problems and draw useful insights that help businesses improve their performance.",
  skills: ["R", "Power BI", "AWS", "SQL", "Python", "Tableau", "Salesforce"],
  projects: [
    {
      name: "Gender-Based Violence Dashboard",
      description:
        "Violence doesn’t strike at random—it follows patterns hidden in data. With Power BI, I visualised Kenya’s GBV data to uncover who’s most at risk, when danger peaks, and how we can use those insights to protect the vulnerable.",
      link: "https://github.com/helen030/DataProject/blob/main/Kenya's%20GBV%20Dashboard.md",
      skills: ["Power BI", "Data cleaning", "Data modelling", "Data visualisation"],
    },
    {
      name: "Analysing Hong Kong Pain Relief Medication Market",
      description:
        "In a crowded pain relief market, strategy is everything. I analysed sales, pricing, and consumer data to uncover what truly drives success, and how pharmaceutical companies can maximise sales performance.",
      link: "https://github.com/helen030/DataProject/blob/769185599365e64574d95867f4ceac8349daf56d/Hong%20Kong%20Drug%20Market%20Analysis.ipynb",
      skills: ["Python", "Web crawling", "Monte Carlo simulation", "Data visualisation"],
    },
    {
      name: "Customer Churn Rate Analysis and Prediction Model",
      description:
        "Why do customers leave, and can businesses see it coming? Using data from 30K+ telecom users, I built predictive models to uncover key churn drivers and help the company retain high-value customers before they walk away.",
      link: "https://github.com/helen030/DataProject/blob/ee32ca0df46d998d451ed2f741592ec145f0dfa0/Churn%20Rate%20Analysis.md",
      skills: ["R", "Data manipulation", "Data prediction", "Statistical modelling"],
    },
    {
      name: "UNSW Going Green Dashboard",
      description:
        "How well does one of Australia's top universities perform in terms of sustainability? Using Power BI and ETL techniques, I transformed UNSW's unstructured energy data into a live dashboard that enables its staff to monitor progress and track UNSW's performance against that of other universities. ",
      link: "https://github.com/helen030/DataProject/blob/main/Going%20Green%20Dashboard.md",
      skills: ["Power BI", "Excel", "Data cleaning", "Data modelling", "Data visualisation"],
    },
  ],
  experience: [
    {
      company: "TL Consulting",
      title: "Operations Transformation Intern",
      dateRange: "Jun 2025 – Present",
      bullets: [
        "Identified operational gaps and developed actionable initiatives for process improvement.",
        "Reduced client’s average food waste by ~17% and food costs by ~5% within 2 months.",
        "Designed RTM and WBS frameworks to enhance project tracking of requirements and deliverables.",
      ],
    },
    {
      company: "Aurecon",
      title: "Asset Management & Performance Consulting Intern",
      dateRange: "Feb 2024 – Jun 2024",
      bullets: [
        "Developed solutions to reduce carbon emissions in the transport sector by 34% in 2030.",
        "Led initiative in building key metrics and target reduction models utilising advanced Excel.",
        "Awarded Most Innovative Solution & proposal selected by Head of Department.",
      ],
    },
  ],
  education: [
    {
      school: "University of New South Wales",
      degree: "Bachelor of Commerce (Business Analytics) & Bachelor of Information Systems ",
      dateRange: "Sep 2021 – May 2025",
      achievements: [
        "Graduated with Distinction in both degrees",
        "Selected as top performers in multiple courses",
      ],
    },
  ],
};
