import type { ImageMetadata } from "astro";

export interface ArticleMetadata {
	author: string;
	category: string;
	date: {
		modified: string;
		published: string;
	},
	description: string;
	image?: ImageMetadata;
	title: string;
}

export interface Article extends ArticleMetadata {
	href: string;
}

export function isArticleCategory(category: string): boolean {
	const categories = new Set<string>(["art", "culture", "fashion", "music", "words"]);
	return categories.has(category);
}

export function getArticles(): Article[] {
	const pages = import.meta.glob<ArticleMetadata>(
		["/src/pages/blog/*.astro", "!/src/pages/blog/index.astro"],
		{ import: "metadata", eager: true }
	);

	return Object.entries(pages).map(([file, metadata]) => ({
		...metadata,
		href: file.replace(/^\/src\/pages/, "").replace(/\.astro$/, "")
	})).sort((a, b) => b.date.published.localeCompare(a.date.published));
}
