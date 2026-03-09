import project02Hero from "../../../assets/project-media/project-02/project-02-hero.png";

// Project 04 assets
import project04Hero from "../../../assets/project-media/project-04/project-04-hero.png";
import project04Hero2 from "../../../assets/project-media/project-04/project-04-hero-2.png";
import project04Gallery1 from "../../../assets/project-media/project-04/project-04-case-1.png";
import project04Gallery2 from "../../../assets/project-media/project-04/project-04-case-2.png";
import project04Gallery3 from "../../../assets/project-media/project-04/project-04-case-3.png";
import project04Gallery4 from "../../../assets/project-media/project-04/project-04-case-4.png";
import project04Gallery5 from "../../../assets/project-media/project-04/project-04-case-5.png";

export interface ProjectDetail {
  projectId: string;
  client: string;
  service: string;
  /** Large hero image — ideally 16:9, min 1600 px wide */
  heroImage: string;
  /** Two–three sentence pull-quote shown in the intro block */
  introduction: string;
  /** Full-bleed wide image between intro and case-study */
  wideImage: string;
  caseStudy: {
    title: string;
    /** Each string is one paragraph */
    body: string[];
    /** 3–4 gallery images */
    images: string[];
  };
  /** Key achievements / results */
  outcomes?: string[];
  /** Big-number stats to display in the stats grid */
  stats?: { label: string; value: string }[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "project-01": {
    projectId: "project-01",
    // client: "Personal",
    // service: "Design & Frontend Engineering",
    // heroImage:
    //   "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&auto=format&fit=crop&q=80",
    // introduction:
    //   "Three iterations of the same idea — each built as my understanding of design and engineering deepened. The portfolio became a living document of growth: from static HTML to a fully animated, TypeScript-first system with a custom design language.",
    // wideImage:
    //   "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&auto=format&fit=crop&q=80",
    // caseStudy: {
    //   title: "Designing in public, building in real time",
    //   body: [
    //     "Version one was a lesson in restraint. Built with plain HTML and CSS, it forced me to understand the fundamentals before reaching for a framework. Every layout decision was deliberate — there were no shortcuts.",
    //     "Version two introduced React and a design system I built from scratch. I spent weeks on type scales, spacing rhythms, and interaction patterns before writing a single component. The result felt more intentional, but the codebase was brittle.",
    //     "Version three — this one — is the synthesis. TypeScript throughout, Framer Motion for orchestrated animation, and a component architecture that scales. Every section was designed to feel editorial: generous whitespace, typographic hierarchy, and motion that adds meaning rather than noise.",
    //   ],
    //   images: [
    //     "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&auto=format&fit=crop&q=80",
    //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80",
    //     "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&auto=format&fit=crop&q=80",
    //     "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=80",
    //   ],
    // },
    // outcomes: [
    //   "Three complete redesigns shipped across three years of continuous growth",
    //   "Achieved a Lighthouse performance score of 98 / 100 on desktop",
    //   "Component architecture adopted across subsequent client projects",
    //   "Open-sourced on GitHub as a reference for other developers",
    // ],
    // stats: [
    //   { label: "Versions", value: "03" },
    //   { label: "Years active", value: "03" },
    //   { label: "Components", value: "40+" },
    //   { label: "Perf. score", value: "98" },
    // ],
  },

  "project-02": {
    projectId: "project-02",
    client: "GetMore Systems",
    service: "Fullstack Development",
    heroImage: project02Hero,
    introduction:
      "An internship that helped me bridge the gap between academic projects and real-world software development. It was an opportunity to contribute to a production codebase, collaborate with a team of engineers, and learn the rhythms of a professional development environment.",
    wideImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      title:
        "Upgrading a client dashboard and CRM system for a growing need by financial services company",
      body: [
        "The core challenge was to implement functionalities and UI improvements without disrupting the existing user experience. The dashboard was already in use by clients, so every change had to be carefully planned and tested. I worked closely with the product manager to prioritize features that would deliver the most value and optimize the user flow.",
        "I didn't have any prior experience with Angular, so the first few weeks were a crash course in a new framework. I started by fixing small bugs and gradually took on larger features, which helped me understand the codebase and the architectural patterns used. The team was supportive, providing code reviews and pairing sessions that accelerated my learning.",
        "I also had the chance to contribute to backend development with .NET and Azure SQL Databases. This was a valuable opportunity to see how frontend and backend systems interact in a real application, and to understand the importance of writing clean, maintainable code that other developers can easily work with.",
        "After the internship, I had a much clearer understanding of the software development lifecycle, from planning and development to testing and deployment. I also gained practical experience with version control, code reviews, and agile methodologies — all of which are essential skills for any software engineer.",
        "I was very proud to contribute to a project that was actively used by clients. It was very reawarding to see that the new functionalities I implemented were making a positive impact on the user experience and helping the companies that depend on it.",
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomes: [
      "Implemented new features and UI improvements in an existing Angular application",
      "Gained hands-on experience with .NET backend development and Azure SQL Databases",
      "Collaborated with a team of different professionals using agile methodologies and version control",
      "Contributed to a production codebase that was actively used by clients in the financial industry",
      "Received positive feedback by both the team as my mentor; I finished the internship with a grade of 9.0 / 10",
    ],
    stats: [
      { label: "Team size", value: "06" },
      { label: "Duration", value: "6mo" },
      { label: "Features", value: "8+" },
      { label: "Technologies", value: "09" },
    ],
  },

  "project-03": {
    projectId: "project-03",
    client: "Stichting Accessibility NL",
    service: "Web Design & Fullstack Development",
    heroImage:
      "https://images.unsplash.com/photo-1573164574230-db1d5e960238?w=1600&auto=format&fit=crop&q=80",
    introduction:
      "Accessibility is not a feature — it is a baseline. This project was an opportunity to build something that genuinely works for everyone, applying WCAG  standards from the first wireframe rather than retrofitting them at the end.",
    wideImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      title: "Inclusive by design — not as an afterthought",
      body: [
        "The goal of the project was to create a web platform that connects users with accessibility consultants or companies looking for accessibility services. The platform needed to be fully compliant with WCAG  standards to ensure it was usable by people with a wide range of disabilities, such as visual impairments, hearing impairments, motor disabilities, and cognitive disabilities.",
        "We started by conducting extensive research on the needs of users with disabilities and the existing landscape of accessibility tools. This research informed our design decisions and helped us prioritize features that would have the most impact. We also consulted with accessibility experts to ensure that our implementation met the necessary standards.",
        "The platform was built on React with a semantic HTML-first approach. Colour contrast ratios were validated against WCAG standards. All interactive elements are keyboard-navigable, focus states are visible and styled consistently, and every image has meaningful alt text. The site was tested by a user that relies on a screen reader, and we iterated on the experience based on their feedback to ensure it was genuinely usable.",
        "On the backend, we set up a .NET API with ASP.NET Core to handle user authentication, data management, and real-time communication using SignalR. The application was deployed on Azure, and we used Azure SQL Database for data storage. Before even starting development, we analyzed and brainstormed about the security implications of handling user data and implemented best practices to protect user privacy and ensure data security.",
        "The project was a rewarding challenge that reinforced the importance of accessibility in web development. It was a reminder that building for everyone is not just a moral imperative but also leads to better design and a more inclusive internet.",
      ],
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomes: [
      "Launched an accessible web platform connecting users with accessibility consultants and companies",
      "Ensured WCAG compliance through semantic HTML, keyboard navigation, visible focus states, and meaningful alt text",
      "Implemented real-time communication features using SignalR for instant messaging between users and consultants",
      "Deployed the application on Azure with a secure .NET backend and Azure SQL Database",
    ],
    stats: [
      { label: "Team size", value: "05" },
      { label: "Duration", value: "4mo" },
      { label: "Personal Grade", value: "8.5 / 10" },
      { label: "technologies", value: "07" },
    ],
  },

  "project-04": {
    projectId: "project-05",
    client: "Minor Visual Design and Web Development",
    service: "Creative Coding & 3D Web Development",
    heroImage: project04Hero,
    introduction:
      "A portfolio where browsing becomes gameplay. Built for the Minor in Visual Design and Web Development, this Minecraft-themed portfolio turned a standard project showcase into an interactive 3D experience. It was a chance to experiment with React Three Fiber and push the boundaries of what a portfolio can be.",
    wideImage: project04Hero2,
    caseStudy: {
      title: "Turning a portfolio into an experience",
      body: [
        "During the Minor we individually worked on three different projects. For the final project, we had to create a portfolio to showcase our work. We wanted to do something different - instead of creating a traditional portfolio website, we decided to build an interactive 3D world where users could explore our projects as if they were navigating a Minecraft map.",
        "React Three Fiber gave us a declarative way to write Three.js inside React. Every building, path, and sign was modelled in Blender and exported as GLTF, then loaded and animated at runtime. Optimising draw calls and asset sizes was critical — we needed the world to load fast on a standard laptop.",
        "The interaction design was the hardest part. First-person controls feel natural in a game engine but need careful calibration in a browser. We tuned movement speed, added pointer-lock controls, and built a minimal HUD to guide users — all without making it feel like a tutorial.",
        "A partner and I worked on the implementation of the different screens and UI components, to ensure that the portfolio was not only visually engaging but also intuitive to navigate. We wanted to create an experience that felt cohesive and polished, with attention to detail in every interaction.",
        "This was one of the most fun and rewarding projects I've worked on. It was a chance to experiment with new technologies, push my creative boundaries, and create something that stood out from the crowd. The final result was a portfolio tthat showcased our work, but also our passion for interactive design and web development.",
      ],
      images: [
        project04Gallery1,
        project04Gallery2,
        project04Gallery3,
        project04Gallery4,
        project04Gallery5,
      ],
    },
    outcomes: [
      "Interactive 3D portfolio running at a stable 60 fps in Chrome and Firefox",
      "All 3D assets optimised below 4 MB total for fast initial load",
      "First-person navigation with keyboard movement and pointer-lock controls",
      "Awarded highest grade in the HvA Minor end-of-year presentation",
    ],
    stats: [
      { label: "Team", value: "04" },
      { label: "Load time", value: "<3s" },
      { label: "Personal Grade", value: "8.5 / 10" },
      { label: "Duration", value: "2mo" },
    ],
  },
};
