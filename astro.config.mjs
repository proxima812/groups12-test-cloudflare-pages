import mdx from "@astrojs/mdx"
import { defineConfig } from "astro/config"

import sitemap from "@astrojs/sitemap"

import cloudflare from "@astrojs/cloudflare"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	site: "https://groups12.ru",
	integrations: [mdx(), sitemap(), tailwind(), react()],

	vite: {
		build: {
			minify: true,
		},
	},

	output: "hybrid",
	adapter: cloudflare(),
})
