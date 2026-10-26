import type { L, LList } from "./i18n";

export type StatusKind = "released" | "soon" | "dev";

export type CatalogLink = {
  label: L;
  href: string;
  kind: "steam" | "asset" | "discord" | "web";
};

export type CatalogMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
  title: L;
  description: L;
};

/** Unified model for both games and Asset Store dev tools. */
export type CatalogItem = {
  slug: string;
  kind: "game" | "tool";
  /** Brand name — not translated. */
  name: string;
  tagline: L;
  category: L;
  platform: L;
  cover: string;
  /** Optional looping background video (mp4) for the detail hero. */
  video?: string;
  icon?: string;
  media?: CatalogMedia[];
  /** Brand accent (hex) used for tinted headers and glows. */
  accent: string;
  accentSoft: string;
  status: L;
  statusKind: StatusKind;
  summary: L;
  description: LList;
  /** Short highlighted features (cards of 2). */
  features?: { title: L; text: L }[];
  /** Long grouped feature lists (used by tools). */
  featureGroups?: { title: L; items: string[] }[];
  tech: string[];
  highlights: LList;
  stats?: { value: string; label: L }[];
  links?: CatalogLink[];
  /** Special visual treatment, e.g. Hurda-G retro-red. */
  theme?: "retro-red";
  featured?: boolean;
};
