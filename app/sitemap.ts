import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/o-vilekule",
    "/jak-se-u-nas-uci",
    "/nas-tym",
    "/zapis",
    "/prakticke-informace",
    "/uredni-deska",
    "/kontakt",
    "/gdpr",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
