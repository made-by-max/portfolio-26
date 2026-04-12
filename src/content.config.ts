// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/data/writing" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

const design = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/data/design" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      intro: z.string(),
      img: image(),
      bg: z.string().optional(),
    }),
});

const dev = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/data/dev" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

const playground = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/data/playground" }),
  schema: z.object({
    title: z.string(),
    featured: z.boolean().optional(),
    tags: z.array(z.string().optional()),
    image: z.string().optional(),
  }),
});

export const collections = { writing, design, dev, playground };
