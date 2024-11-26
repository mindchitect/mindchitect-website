/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#051C8D",
			},
			fontFamily: {
				mulish: "var(--font-mulish)",
			},
			backgroundImage: {
				gradientPrimary: "linear-gradient(180deg, #103273 0%, #1D5CD5 100%)",
			},
		},
	},
	plugins: [],
};
