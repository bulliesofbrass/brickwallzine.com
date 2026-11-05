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
			provider: fontProviders.fontsource(), name: "Afacad Flux", cssVariable: "--font-afacad-flux",
			weights: [400], styles: ["normal"], fallbacks: ["sans-serif"]
		},

		{
			provider: fontProviders.fontsource(), name: "Babylonica", cssVariable: "--font-babylonica",
			weights: [400], styles: ["normal"], fallbacks: ["cursive"]
		},

		{
			provider: fontProviders.fontsource(), name: "Ballet", cssVariable: "--font-ballet",
			weights: [400], styles: ["normal"], fallbacks: ["cursive"]
		},

		{
			provider: fontProviders.fontsource(), name: "Blackout Two AM", cssVariable: "--font-blackout-two-am",
			weights: [400], styles: ["normal"], fallbacks: ["sans-serif"]
		},

// tilt-warp
	]
});
