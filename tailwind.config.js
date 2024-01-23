/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "Helvetica"],
		},
		screens: {
			sm: "641px", //640
			// => @media (min-width: 640px) { ... }

			md: "769px", //768
			// => @media (min-width: 768px) { ... }

			lg: "1025px", //1024
			// => @media (min-width: 1024px) { ... }

			xl: "1281px", //1280
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {},
	},
	plugins: [],
};
