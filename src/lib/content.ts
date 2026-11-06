import { getCollection } from "astro:content";

export function getStaticPaths(collection: "blog") {
	return async () => {
		const entries = await getCollection(collection);

		return entries.map((entry) => ({
			params: { slug: entry.id },
			props: entry,
		}));
	};
}
