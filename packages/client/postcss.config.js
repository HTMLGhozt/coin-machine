const purgeCSS = require('@fullhuman/postcss-purgecss');

module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		purgeCSS({
			content: ['./src/**/*.tsx'],
			css: ['./src/**/*.css'],
		}),
	],
};
