import project02Hero from "../assets/project-media/project-02/project-02-hero.png";

import project04Hero from "../assets/project-media/project-04/project-04-hero.png";
import project04Hero2 from "../assets/project-media/project-04/project-04-hero-2.png";
import project04Gallery1 from "../assets/project-media/project-04/project-04-case-1.png";
import project04Gallery2 from "../assets/project-media/project-04/project-04-case-2.png";
import project04Gallery3 from "../assets/project-media/project-04/project-04-case-3.png";
import project04Gallery4 from "../assets/project-media/project-04/project-04-case-4.png";
import project04Gallery5 from "../assets/project-media/project-04/project-04-case-5.png";

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
  // "project-01": { ... },  // uncomment and fill when ready

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
      "Accessibility is not a feature — it is a baseline. This project was an opportunity to build something that genuinely works for everyone, applying WCAG standards from the first wireframe rather than retrofitting them at the end.",
    wideImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      title: "Inclusive by design — not as an afterthought",
      body: [
        "The goal of the project was to create a web platform that connects users with accessibility consultants or companies looking for accessibility services. The platform needed to be fully compliant with WCAG standards to ensure it was usable by people with a wide range of disabilities, such as visual impairments, hearing impairments, motor disabilities, and cognitive disabilities.",
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
      { label: "Technologies", value: "07" },
    ],
  },

  "project-04": {
    projectId: "project-04",
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
        "This was one of the most fun and rewarding projects I've worked on. It was a chance to experiment with new technologies, push my creative boundaries, and create something that stood out from the crowd. The final result was a portfolio that showcased our work, but also our passion for interactive design and web development.",
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

  "project-05": {
    projectId: "project-05",
    client: "School Project — Group B",
    service: "Fullstack · Event-Driven Architecture",
    heroImage:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1600&auto=format&fit=crop&q=80",
    introduction:
      "A social marketplace built the right way — not with a monolithic REST API, but with a fully event-driven backbone using CQRS, Axon Server, and Kafka. Every action in the system is captured as an immutable event, making the platform naturally auditable, scalable, and resilient.",
    wideImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      title: "Building a marketplace on an event-driven foundation",
      body: [
        "The Social Supermarket platform started with an architectural decision: instead of building a conventional CRUD API, the team chose to model the domain using Event Modelling — defining the system as a sequence of events and the commands that cause them. This upfront modelling exercise clarified the boundaries between domain concepts and gave every team member a shared language before writing a single line of code.",
        "On the backend, Spring Boot with Axon Framework handles the CQRS separation cleanly. Commands flow into command handlers that validate and emit domain events; those events are stored in Axon Server and projected into read models consumed by the query side. Kafka acts as the message broker for communication between bounded contexts, ensuring that services remain decoupled and can evolve independently.",
        "The React frontend communicates with the backend via a REST API generated from the query side, while Swagger UI provides live API documentation. A dedicated DevHub screen gives developers an at-a-glance overview of all available endpoints, slices, and UI screens — making it significantly easier to onboard new team members mid-project.",
        "Infrastructure is fully containerised. A single Docker Compose file spins up PostgreSQL, Axon Server, and Kafka UI — giving every developer an identical local environment in under two minutes. This eliminated the classic 'works on my machine' problem and made CI integration straightforward.",
        "The biggest learning was that event-driven architecture forces clarity. When a command is rejected, the reason is explicit. When data needs to travel across contexts, it does so as a well-named event rather than a silent database join. The codebase is more verbose than a simple REST API, but every piece of behaviour is traceable from cause to effect.",
      ],
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomes: [
      "Implemented a fully event-driven marketplace using CQRS, Axon Server, and Kafka",
      "Applied Event Modelling as a design technique to align the team before development",
      "Containerised the full infrastructure stack with Docker Compose for reproducible local environments",
      "Built a React frontend with a DevHub for real-time developer tooling and endpoint overview",
      "Delivered a live deployment accessible at assistant.tabsolutions.nl",
    ],
    stats: [
      { label: "Architecture", value: "CQRS" },
      { label: "Personal Grade", value: "8.5" },
      { label: "Technologies", value: "11" },
      { label: "Year", value: "2026" },
    ],
  },

  "project-06": {
    projectId: "project-06",
    client: "School Project — Team of 3",
    service: "Backend · Security Engineering",
    heroImage:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1600&auto=format&fit=crop&q=80",
    introduction:
      "Gatekeeper is a purpose-built authentication and authorization service — the security backbone for a distributed system. It handles everything from user registration and verification flows to application onboarding, role assignment, and secret key lifecycle management, all built on CQRS and Event Sourcing with Axon Framework.",
    wideImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      title: "Engineering a centralized auth service from first principles",
      body: [
        "Most projects reach for an off-the-shelf auth provider. For Gatekeeper, the requirement was to build it from scratch — giving us full control over the identity model and a deeper understanding of how authentication and authorization actually work under the hood. The result is a Spring Boot service that manages two separate security contexts: a stateless REST API secured with JWT, and a session-based admin portal powered by Thymeleaf and Spring Security.",
        "The architecture follows the CQRS pattern strictly via Axon Framework. Every state-changing operation — registering a user, generating an API key, assigning a role — is expressed as a command that produces a domain event. Those events are persisted in Axon Server's event store, giving the system a complete, immutable audit log of everything that has ever happened. Read models are projected from this event stream and served separately from the write side.",
        "A slice-based package structure keeps the codebase organised as the feature surface grows. Each functional area (accounts, admin portal, application registration) lives in its own slice containing commands, handlers, entities, repositories, and controllers — all package-private except the shared contracts. This enforced encapsulation prevents unintended coupling between slices and makes it safe for multiple developers to work in parallel without conflicts.",
        "Database schema evolution is managed by Flyway migrations, currently at V11. The dual-token JWT system issues short-lived access tokens (15 minutes) and long-lived refresh tokens (7 days), following industry best practices for token security. Integration tests run against real PostgreSQL and Axon Server instances via Testcontainers, ensuring that the full stack is verified on every build rather than relying on mocks for infrastructure behaviour.",
        "Building Gatekeeper deepened my understanding of security architecture considerably. Designing a token lifecycle, thinking through the attack surface of each endpoint, and expressing domain events as the single source of truth — these are patterns I now apply across all backend work.",
      ],
      images: [
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomes: [
      "Built a complete auth service with user registration, email verification, role assignment, and API key management",
      "Applied CQRS + Event Sourcing via Axon Framework — every state change is a persisted, replayable event",
      "Implemented a dual-token JWT system (15min access / 7-day refresh) with Spring Security",
      "Integration tests run against real infrastructure (PostgreSQL + Axon Server) via Testcontainers",
    ],
    stats: [
      { label: "Team size", value: "03" },
      { label: "Personal Grade", value: "8.5" },
      { label: "Auth flows", value: "6+" },
      { label: "Technologies", value: "12" },
    ],
  },

  "project-07": {
    projectId: "project-07",
    client: "Personal Project — Ankerd Group",
    service: "Fullstack · PWA Development",
    heroImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&auto=format&fit=crop&q=80",
    introduction:
      "Ankerd Con started from a real problem: organizing group convention trips through a patchwork of WhatsApp messages, shared spreadsheets, and manual coordination is painful. This invite-only PWA centralizes everything — rides, food, shared costs, hotel rooms, and event schedules — in one place built specifically for the group.",
    wideImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      title:
        "From WhatsApp chaos to a purpose-built group coordination platform",
      body: [
        "The scope of Ankerd Con is deliberately broad because group trip logistics are genuinely complex. A single convention weekend involves coordinating transport (who has seats, who needs a ride, restaurant runs), meal planning with dietary requirements and cost tracking, shared expense splitting with real-time balances, hotel room assignments, and a full event calendar with RSVP and weather data. Each of these modules had to work independently but share a consistent data model and UI language.",
        "The frontend is built with React 18 and TypeScript, using TanStack Query v5 for all server state management. Every data-fetching concern — loading states, cache invalidation, background refetching — is handled declaratively through custom query hooks, one per domain. Zustand manages lightweight client state (auth context, theme preference). The component library is built on Tailwind CSS with Framer Motion for transitions, resulting in a UI that feels native on both mobile and desktop.",
        "The backend is a Python FastAPI service with Uvicorn, structured around focused routers for each domain (rides, meals, payments, events, members). Authentication flows through Supabase's Discord OAuth integration: a user logs in with Discord, Supabase issues a JWT, and the FastAPI backend validates it and checks the whitelist table by Discord ID. Non-whitelisted Discord users receive a 403 — keeping the platform genuinely private without a manual invite system.",
        "Supabase provides the PostgreSQL database and handles real-time subscriptions where needed. The schema has evolved through 15+ incremental migration files, which makes it straightforward to track what changed between versions and roll back if needed. The database is split into domain tables that mirror the application's module structure, keeping queries focused and foreign key relationships explicit.",
        "Building Ankerd Con taught me a lot about designing for real users with real edge cases. Group finance logic — who paid what, who owes whom, settling partial payments — is deceptively tricky to model correctly. The calendar module's weather integration and the transport module's seat coordination both required careful state design. By v1.4.0, the app has been through enough real-world usage to have most of the rough edges smoothed out.",
      ],
      images: [
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomes: [
      "Shipped a full-stack PWA covering 8 functional modules: Hub, Transport, Food, Finance, Calendar, Hotel Rooms, Members, and Admin",
      "Invite-only Discord OAuth authentication with automatic profile creation and whitelist enforcement",
      "TanStack Query v5 with domain-scoped custom hooks — zero prop-drilling, clean data ownership across 20+ pages",
      "15+ incremental Supabase migrations tracking the full schema evolution from v1.0 to v1.4",
      "PWA-ready with safe area support, bottom-sheet modals on mobile, and dark mode — feels native on any device",
    ],
    stats: [
      { label: "Version", value: "1.4.0" },
      { label: "Modules", value: "08" },
      { label: "Technologies", value: "12" },
      { label: "Year", value: "2025" },
    ],
  },
};
