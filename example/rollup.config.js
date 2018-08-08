import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'example/main.js',
	output: {
		// sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'example/dist/bundle.js'
	},
	plugins: [
		svelte({
			// opt in to v3 behaviour today
			skipIntroByDefault: true,
			nestedTransitions: true,

			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('example/dist/bundle.css');
			}
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
		commonjs(),

		// If we're building for production (npm run build
		// instead of npm run dev), transpile and minify
		production && buble({ include: ['example/**', 'node_modules/svelte/shared.js'] }),
		production && uglify({}, minify)
	]
};
