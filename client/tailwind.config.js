/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		fontSize: {
			sm: "0.8rem",
			base: "1rem",
			xl: "1.25rem",
			"2xl": "1.563rem",
			"3xl": "1.953rem",
			"4xl": "2.5rem",
			"5xl": "3.5rem",
		},
		lineHeight: {
			"leading-4": "1.5rem",
			"leading-8": "3rem",
			"leading-10": "4.5rem",
		},
		colors: {
			background: "#F2F2F7",
			overlay: "rgba(3, 41, 111, 0.48)",
			textHeader: "#1C1C1E",
			textBody: "#48484A",
			textPlacecholder: "#A7A7A7",
			textWhite: "#FCFCFC",
			successLight: "#E5FCF6",
			successMain: "#0FB56D",
			successDark: "#26704C",
			warningLight: "#FFFBA8",
			warningDark: "#B0AB39",
			warningMain: "#E9E132",
			primaryLightest: "#CDDCF8",
			primaryLight: "#ACC5F4",
			primaryMain: "#0652DD",
			primaryDark: "#0544B8",
			primaryDeep: "#03296F",
			disabledDisabled: "#C5C5C5",
			stokeDark: "#434343",
			stokeLight: "#A7A7A7",
			errorLight: "#FFD8D6",
			errorDark: "#A81414",
			errorMain: "#FF2635",
			grey100: "#DCDCDC",
			grey200: "#C5C5C5",
			grey300: "#8A8A8A",
			grey400: "#6D6D6D",
			grey500: "#434343",
			grey600: "#353535",
			grey700: "#282828",
			grey800: "#101010",
		},

		screens: {
			xxs: "320px",
			// => @media (min-width: 320px) { ... }

			xs: "480px",
			// => @media (min-width: 480px) { ... }

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
	},
	plugins: [],
};
