import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: (() => {
			// @ts-ignore
			if (typeof Bun === "undefined") return adapter(); // if no bun then cf pages
			return require("svelte-adapter-bun").default(); // if bun then bun
		})()
	}
};

export default config;
