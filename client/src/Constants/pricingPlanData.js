const pricingPlanData = [
	{
		id: "pd1",
		name: "Free Plan",
		monthly: "0",
		url: "/free-plan",
		features: [
			"-Limited PDF downloads",
			"-Limited cover letter generation",
			"-Limited cover letter edits",
		],
		className: "h-[370px]  md:h-[424px] border border-[white] rounded-lg",
	},
	{
		id: "pd2",
		name: "Professional Plan",
		monthly: "3",
		yearly: "30",
		url: "/professional-plan",
		features: [
			"-Unlimited PDF Downloads",
			"-Unlimited Cover Letters generation",
			"-Free linkedin profile generator",
			"-7 day money back guarantee",
			"-Free cover letter critique from an HR expert",
			"-Storage space for cover letters generated",
		],
		className: "h-[600px] md:h-[650px] border border-[#0652DD] rounded-lg",
	},
	{
		id: "pd3",
		name: "Modern Plan",
		monthly: "5",
		yearly: "54",
		url: "/modern-plan",
		features: [
			"-Unlimited PDF Downloads",
			"-Unlimited Cover Letters generation",
			"-Free linkedin profile generator",
			"-7 day money back guarantee",
			"-Free cover letter critique from an HR expert",
			"-Storage space for cover letters generated",
			"-Free resume generator",
			"-Free relocation cover letter generator",
			"-24/7 standby support from team",
		],
		className: "h-[774px] md:h-[816px] border border-[white] rounded-lg",
	},
];

export default pricingPlanData;
