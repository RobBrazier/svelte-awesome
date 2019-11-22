const sveltePreprocess = require('svelte-preprocess');

module.exports = {
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': [
			'jest-transform-svelte',
			{
				preprocess: sveltePreprocess(),
				debug: false,
				noStyles: true,
				compilerOptions: {}
			}
		]
	},
	setupFilesAfterEnv: [
		'@testing-library/svelte/cleanup-after-each'
	],	
	moduleFileExtensions: ['js', 'svelte'],
	coverageReporters: ['html'],
	bail: false,
	verbose: false
};
