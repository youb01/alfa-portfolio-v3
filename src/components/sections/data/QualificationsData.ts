/**
 * Non-translatable timeline event metadata.
 * User-visible strings (title, description) live in
 * src/i18n/locales/{lang}/translation.json under qualifications.events.{id}.
 */

export interface TimelineEvent {
  id: string;
  dateFrom: string;
  dateTo: string;
  /** Institution or company name — not translated */
  subtitle: string;
  location: string;
  type: "education" | "work";
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "01",
    dateFrom: "Sep 2016",
    dateTo: "Jun 2022",
    subtitle: "Bonaventura College Burggravenlaan",
    location: "Leiden, the Netherlands",
    type: "education",
  },
  {
    id: "02",
    dateFrom: "Sep 2022",
    dateTo: "Present",
    subtitle: "The Hague University of Applied Sciences",
    location: "The Hague, Netherlands",
    type: "education",
  },
  {
    id: "03",
    dateFrom: "Sep 2024",
    dateTo: "Feb 2025",
    subtitle: "GetMore Systems",
    location: "Barendrecht, Netherlands",
    type: "work",
  },
  {
    id: "04",
    dateFrom: "Feb 2025",
    dateTo: "Present",
    subtitle: "Oadsy",
    location: "Remote",
    type: "work",
  },
];
