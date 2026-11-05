export function formatDate(dateString: string, format: "medium" | "long" = "medium"): string {
	const date = new Date(`${dateString}T00:00:00`);

	if (format === "medium") {
		return date.toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "long",
			year: "numeric",
		});
	}

	return date.toLocaleDateString("en-GB", {
		weekday: "long",
		day: "2-digit",
		month: "long",
		year: "numeric",
	}).replace(/^(\w+), (\d{2}) (\w+) (\d{4})$/, "$1, $2 $3, $4");
}

export function toCapitalised(i: string) {
	return String(i).charAt(0).toUpperCase() + String(i).slice(1);
}
