import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static";

let base_path = ""
if (process.env.BASE_PATH !== "") {
	base_path = process.env.BASE_PATH
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		paths: {
			base: base_path
		},
		appDir: "app",
		vite: {
		    optimizeDeps: {
		      include: ["highlight.js/lib/core"],
		    },
		},
	}
};

export default config;
