export interface TimelineEvent {
  id: string;
  dateFrom: string;
  dateTo: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  type: "education" | "work";
}

export const timelineEvents: TimelineEvent[] = [
  // ─── Education ────────────────────────────────────────────────────────────
  {
    id: "01",
    dateFrom: "Sep 2016",
    dateTo: "Jun 2022",
    title: "Secondary Education",
    subtitle: "Bonaventura College Burggravenlaan",
    location: "Leiden, Netherlands",
    description:
      "Completed secondary education with a focus on mathematics, physics and sciences. Built a strong analytical foundation that sparked my interest in software development.",
    type: "education",
  },
  {
    id: "02",
    dateFrom: "Sep 2022",
    dateTo: "Present",
    title: "BSc Computer Science",
    subtitle: "The Hague University of Applied Sciences",
    location: "The Hague, Netherlands",
    description:
      "Studying computer science with a specialisation in software engineering. Coursework spans algorithms, data structures, software architecture and cloud development, with an emphasis on practical, project-based learning.",
    type: "education",
  },

  // ─── Work ─────────────────────────────────────────────────────────────────
  {
    id: "03",
    dateFrom: "Sep 2024",
    dateTo: "Feb 2025",
    title: "Software Developer — Internship",
    subtitle: "GetMore Systems",
    location: "Barendrecht, Netherlands",
    description:
      "Contributed to a client dashboard application for a fintech software company, using Angular and .NET. Worked in a team of three — delivering new features, fixing bugs and improving performance.",
    type: "work",
  },
  {
    id: "05",
    dateFrom: "2025",
    dateTo: "2025",
    title: "Shopify Developer — Freelance",
    subtitle: "Noveliya",
    location: "Remote",
    description:
      "Teamed up with a friend to build a custom Shopify webshop for a makeup table startup. Designed and developed a fully custom theme from scratch, tailored to the brand's identity and product experience.",
    type: "work",
  },
  {
    id: "06",
    dateFrom: "May 2026",
    dateTo: "Present",
    title: "Web Developer — Freelance",
    subtitle: "Fysiotherapie Wennekers",
    location: "Netherlands",
    description:
      "Helping a physiotherapy practice modernise its digital presence. Inventorised the client's needs and designed a brand new website to improve the online onboarding of new patients — clearly presenting the practice, practitioners and available treatments.",
    type: "work",
  },
  {
    id: "07",
    dateFrom: "Sep 2026",
    dateTo: "Present",
    title: "Software Engineering Intern — Afstudeerstage",
    subtitle: "Interpulse",
    location: "Leiden, Netherlands",
    description:
      "Graduation internship at a software consultancy. Running two parallel projects: a full research study on the responsible use of AI within the development process — producing guidelines and advisory output for the team — and the design and development of a Microsoft Teams application to solve an existing organisational problem.",
    type: "work",
  },
];
