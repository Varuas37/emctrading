const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			white: colors.white,
			red: colors.rose,
			blue: colors.blue,
			black: colors.black,
			gray: colors.trueGray,
      		indigo: colors.indigo,
      		red: colors.rose,
			yellow: colors.amber,
			primarybg: "#041A32",
			secondarybg:"#17366D",
			darkpink:"#F44292",
			darkblue:"#0B1238",
			accent:"#DDB191",
			discord:"#7289DA",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
