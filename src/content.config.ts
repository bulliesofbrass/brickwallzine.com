import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({
		base: './src/content/blog',
		pattern: '**/index.{md,mdx}',
		generateId: ({ entry }) => entry.replace(/\/index\.(md|mdx)$/, ''),
	}),

	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			datePublished: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image(),
			category: z.enum(['art', 'culture', 'fashion']),
			authors: z.array(z.string()),
		}),
});

export const collections = { blog };
