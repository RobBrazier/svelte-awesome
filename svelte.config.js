import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter(),
    appDir: 'app',
    alias: {
      '$css/*': 'src/css/*'
    }
  }
};

export default config;
