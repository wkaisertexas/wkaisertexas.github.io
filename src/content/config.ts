import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    display: z.boolean().optional(),
    heroImage: z.string().optional(),
    no_hero: z.boolean().optional(),
    kaggle: z.string().optional(),
    unlisted: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    website: z.string().url().optional(),
    repository: z.string().url().optional(),
    heroImage: z.string().optional(),
    builtWith: z.array(z.string()).optional(),
    display: z.boolean().optional(),
  }),
});

export const collections = { blog, project };
