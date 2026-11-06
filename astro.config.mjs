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

		{
			provider: fontProviders.fontsource(), name: "Babylonica", cssVariable: "--font-babylonica",
			weights: [400], styles: ["normal"], fallbacks: ["cursive"]
		},


		{
			provider: fontProviders.fontsource(), name: "Blackout Two AM", cssVariable: "--font-blackout-two-am",
			weights: [400], styles: ["normal"], fallbacks: ["sans-serif"]
		},

		{
			provider: fontProviders.fontsource(), name: "Rubik Distressed", cssVariable: "--font-rubik-distressed",
			weights: [400], styles: ["normal"], fallbacks: ["sans-serif"]
		},
	]
});
