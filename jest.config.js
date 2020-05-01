module.exports = {
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': 'svelte-jester'
	},
  "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"],
	moduleFileExtensions: ['js', 'svelte'],
	coverageReporters: ['html'],
	bail: false,
	verbose: false
};
