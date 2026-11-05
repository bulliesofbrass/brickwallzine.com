// @ts-check

import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://www.brickwallzine.com",

	fonts: [
		{
			provider: fontProviders.fontsource(), name: "Oi", cssVariable: "--font-io",
			weights: [400], styles: ["normal"], fallbacks: ["sans-serif"]
		},

		{
			provider: fontProviders.fontsource(), name: "Afacad Flux", cssVariable: "--font-afacad-flux",
			weights: [400], styles: ["normal", "italic"], fallbacks: ["sans-serif"]
		}
	]
});
