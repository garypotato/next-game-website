/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,jsx}', // Note the addition of the `app` directory.
		'./components/**/*.{js,jsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				orbitron: ['var(--font-orbitron)', 'sans-serif'],
				sans: ['var(--font-exo2)', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
