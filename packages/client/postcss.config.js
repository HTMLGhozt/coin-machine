const purgeCSS = require('@fullhuman/postcss-purgecss');

module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		purgeCSS({
			content: ['./src/**/*.tsx'],
			css: ['./src/**/*.css'],
			defaultExtractor: content => {
				const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
				const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
		
				return broadMatches.concat(innerMatches)
			}
		}),
	],
};
