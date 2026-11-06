// @ts-check

import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://www.brickwallzine.com",

	integrations: [
		sitemap()
	],

	fonts: [
		{
			provider: fontProviders.fontsource(), name: "Oi", cssVariable: "--font-oi",
			weights: [400], styles: ["normal"], fallbacks: ["sans-serif"]
		},

		{
			provider: fontProviders.fontsource(), name: "Afacad", cssVariable: "--font-afacad",
			weights: ["400 700"], styles: ["normal", "italic"], fallbacks: ["sans-serif"]
		},
	]
});
