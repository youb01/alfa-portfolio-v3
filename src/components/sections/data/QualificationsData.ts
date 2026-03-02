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
    dateFrom: "Sep 2016",
    dateTo: "Jun 2022",
    title: "Secondary Education",
    subtitle: "Bonaventura College Burggravenlaan",
    location: "Leiden, the Netherlands",
    description:
      "Completed secondary education with a focus on beta relevant subjects like mathematics, physics, science and biology. Developed a strong foundation in problem-solving and analytical thinking, which sparked my interest in software development.",
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
      "Studying computer science with a specialisation in software engineering. Coursework spans algorithms, data structures, software architecture, and cloud development. The program emphasizes practical, project-based learning, allowing me to apply theoretical concepts to real-world software development challenges.",
    type: "education",
  },
  {
    id: "03",
    dateFrom: "Sep 2024",
    dateTo: "Feb 2025",
    title: "Software Developer — Internship",
    subtitle: "GetMore Systems",
    location: "Barendrecht, Netherlands",
    description:
      "Worked as a software developer intern at GetMore Systems, a company specializing in software solutions for the financial industry. Contributed to the development of a client dashboard application using Angular and .NET, improving user experience and functionality. Collaborated with a team of 3 to implement new features, fix bugs, and optimize performance, gaining valuable hands-on experience in a professional software development environment.",
    type: "work",
  },
  {
    id: "04",
    dateFrom: "Feb 2025",
    dateTo: "Present",
    title: "Web Developer — Part-time",
    subtitle: "Oadsy",
    location: "Remote",
    description:
      "Currently working as a part-time web developer for Oadsy, a startup focused on selling car parfums online. Responsible for maintaining and enhancing the company's e-commerce website built on Shopify, including implementing custom features using Liquid and JavaScript. Collaborate with the owner to optimize the user interface and improve conversion rates, while also ensuring the website's performance and security are up to industry standards.",
    type: "work",
  },
];
