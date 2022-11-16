/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		colors: {
			"textHeader": "#1C1C1E",
			"textBody": "#48484A", 
			"textPlacecholder": "#A7A7A7",
			"textWhite": "#FCFCFC",
			"successLight": "#E5FCF6",
			"successMain": "#0FB56D",
			"successDark": "#26704C", 
			"warningLight": "#FFFBA8", 
			"warningDark": "#B0AB39", 
			"warningMain": "#E9E132",
			"primaryLightest": "#CDDCF8",
			"primaryLight": "#ACC5F4",
			"primaryMain": "#0652DD",
			"primaryDark": "#0544B8",	
			"primaryDeep": "#03296F",
			"disabledDisabled" : "#C5C5C5",
			"stokeDark": "#434343",
			"stokeLight":"#A7A7A7",
			"errorLight": "#FFD8D6",
			"errorDark" :"#A81414",
			"errorMain" : "#FF2635",
		},
	},
	plugins: [],
};
