export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { games } from "@/lib/games";
import { tools } from "@/lib/tools";

const base = "https://deepinteractiveentertainment.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/games", "/tools", "/publishing", "/studio", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const gameRoutes = games.map((g) => ({
    url: `${base}/games/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const toolRoutes = tools.map((t) => ({
    url: `${base}/tools/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...gameRoutes, ...toolRoutes];
}
