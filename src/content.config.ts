import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    published_date: z.coerce.date(),
    updated_date: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const experiences = defineCollection({
  loader: glob({ base: './src/content/experiences', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published_date: z.coerce.date(),
    updated_date: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { posts, experiences };
