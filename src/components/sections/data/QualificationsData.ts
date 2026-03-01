export interface TimelineEvent {
  id: string;
  dateFrom: string;
  dateTo: string;
  title: string;
  /** Institution or company name */
  subtitle: string;
  location: string;
  description: string;
  type: "education" | "work";
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "01",
    dateFrom: "Sep 2018",
    dateTo: "Jun 2021",
    title: "Secondary Education",
    subtitle: "Christelijk Gymnasium Sorghvliet",
    location: "The Hague, Netherlands",
    description:
      "Completed secondary education with a focus on science and technology. Developed an early interest in programming and digital design through self-directed projects.",
    type: "education",
  },
  {
    id: "02",
    dateFrom: "Jan 2022",
    dateTo: "Aug 2023",
    title: "Freelance Web Developer",
    subtitle: "Self-Employed",
    location: "Remote",
    description:
      "Designed and built custom websites and web applications for small businesses and individuals. Managed client relationships end-to-end — from discovery and wireframing through to deployment.",
    type: "work",
  },
  {
    id: "03",
    dateFrom: "Sep 2021",
    dateTo: "Present",
    title: "BSc Computer Science",
    subtitle: "The Hague University of Applied Sciences",
    location: "The Hague, Netherlands",
    description:
      "Studying computer science with a specialisation in software engineering. Coursework spans algorithms, data structures, software architecture, and human-computer interaction.",
    type: "education",
  },
  {
    id: "04",
    dateFrom: "Feb 2024",
    dateTo: "Jul 2024",
    title: "Frontend Developer — Internship",
    subtitle: "GetMore Systems",
    location: "Rotterdam, Netherlands",
    description:
      "Built and maintained enterprise-grade frontend features using React, TypeScript and Tailwind CSS. Collaborated within a scrum team, contributed to internal design system work, and shipped production code weekly.",
    type: "work",
  },
];
