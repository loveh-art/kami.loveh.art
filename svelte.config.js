import adapter_cloudflare from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Adapter} */
let adapter;
if (typeof Bun === "undefined") adapter = adapter_cloudflare();
else adapter = require("svelte-adapter-bun").default();

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter,
  },
};

export default config;
