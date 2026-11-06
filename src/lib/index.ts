import { getCollection } from "astro:content";

export function formatDate(date: Date, format: "medium" | "long" = "medium"): string {
	if (format === "medium") {
		return date.toLocaleDateString("en-GB", {
			timeZone: "UTC",
			day: "2-digit",
			month: "long",
			year: "numeric",
		});
	}

	return date.toLocaleDateString("en-GB", {
		timeZone: "UTC",
		weekday: "long",
		day: "2-digit",
		month: "long",
		year: "numeric",
	}).replace(/^(\w+), (\d{2}) (\w+) (\d{4})$/, "$1, $2 $3, $4");
}

export function toCapitalised(i: string) {
	return String(i).charAt(0).toUpperCase() + String(i).slice(1);
}

export const content = {
	getStaticPaths(collection: "blog") {
		return async () => {
			const entries = await getCollection(collection);

			return entries.map((entry) => ({
				params: { slug: entry.id },
				props: entry,
			}));
		};
	},
};
