/**
 * Non-translatable per-project data for the detail page.
 * All user-visible strings (client, service, introduction, case study text,
 * outcomes, stat labels) live in src/i18n/locales/{lang}/translation.json
 * under projectDetail.items.{projectId}.
 *
 * Keyed by the same `id` used in ProjectsData.ts.
 */

import project02Hero from "../../../assets/project-media/project-02/project-02-hero.png";

export interface ProjectDetail {
  projectId: string;
  /** Large hero image — ideally 16:9, min 1600 px wide */
  heroImage: string;
  /** Full-bleed wide image between intro and case-study */
  wideImage: string;
  caseStudy: {
    /** 3–4 gallery images */
    images: string[];
  };
  /** How many outcome strings exist in i18n for this project */
  outcomesCount?: number;
  /** Big-number stats — only values are stored here; labels come from i18n */
  stats?: { value: string }[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "project-01": {
    projectId: "project-01",
    heroImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&auto=format&fit=crop&q=80",
    wideImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      images: [
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomesCount: 4,
    stats: [{ value: "03" }, { value: "03" }, { value: "40+" }, { value: "98" }],
  },

  "project-02": {
    projectId: "project-02",
    heroImage: project02Hero,
    wideImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      images: [
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomesCount: 4,
    stats: [{ value: "03" }, { value: "6mo" }, { value: "15+" }, { value: "09" }],
  },

  "project-03": {
    projectId: "project-03",
    heroImage:
      "https://images.unsplash.com/photo-1573164574230-db1d5e960238?w=1600&auto=format&fit=crop&q=80",
    wideImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      images: [
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomesCount: 4,
    stats: [{ value: "AA" }, { value: "04" }, { value: "5mo" }, { value: "07" }],
  },

  "project-04": {
    projectId: "project-04",
    heroImage:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&auto=format&fit=crop&q=80",
    wideImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      images: [
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomesCount: 4,
    stats: [{ value: "6wk" }, { value: "20+" }, { value: "02" }, { value: "Mono" }],
  },

  "project-05": {
    projectId: "project-05",
    heroImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&auto=format&fit=crop&q=80",
    wideImage:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1920&auto=format&fit=crop&q=80",
    caseStudy: {
      images: [
        "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1535223289429-462dc99e1e7a?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1556438064-2d7646166914?w=900&auto=format&fit=crop&q=80",
      ],
    },
    outcomesCount: 4,
    stats: [{ value: "04" }, { value: "12+" }, { value: "60" }, { value: "<3s" }],
  },
};
