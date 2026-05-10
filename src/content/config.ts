import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    readTime: z.number().int().positive(),
    featured: z.boolean().default(false),
    seeAlso: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
