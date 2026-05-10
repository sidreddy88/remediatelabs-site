import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://remediatelabs.io";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const tags = Array.from(new Set(posts.flatMap((p) => p.data.tags)));

  const staticUrls = [
    { loc: `${SITE}/`, changefreq: "weekly", priority: "1.0" },
    { loc: `${SITE}/about`, changefreq: "monthly", priority: "0.7" },
    { loc: `${SITE}/blog`, changefreq: "weekly", priority: "0.9" },
    { loc: `${SITE}/projects/agent-platform`, changefreq: "monthly", priority: "0.9" },
  ];

  const postUrls = posts.map((p) => ({
    loc: `${SITE}/blog/${p.slug}`,
    lastmod: p.data.date.toISOString().split("T")[0],
    changefreq: "monthly",
    priority: p.data.featured ? "0.9" : "0.8",
  }));

  const tagUrls = tags.map((t) => ({
    loc: `${SITE}/blog/tag/${t}`,
    changefreq: "weekly",
    priority: "0.6",
  }));

  const all = [...staticUrls, ...postUrls, ...tagUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${
      "lastmod" in u && u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""
    }
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
