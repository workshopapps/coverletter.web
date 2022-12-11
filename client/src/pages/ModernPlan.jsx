import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Ui/Button";
import PricingHeading from "../Layouts/PricingHeading";

const ModernPlan = () => {
	return (
		<main className="bg-background">
			<PricingHeading />
			<div className="max-w-screen-2xl m-auto py-40 text-center relative">
				<Link to="/pricing">
					<Button className="bg-primaryDeep text-[#F1F6FF] px-4 py-2 left-14 md:px-8 md:py-4 rounded-lg absolute top-4 md:left-20">
						Back to Plans
					</Button>
				</Link>
				{/* w-[335px] md:w-[595px] m-auto py-[18px] px-[26px] md:h-[80px] md:py-0 lg:w-[400px] lg:h-[104px]  */}
				<div className="bg-primaryDeep rounded-lg py-4 px-6 w-[174px] h-16 m-auto md:w-[300px] md:h-20 lg:w-[400px] lg:h-[104px]">
					<p className="text-[20px] text-[#F1F6FF] font-semibold md:text-[40px] md:leading-[48px] lg:text-[56px] lg:leading-[76px]">
						Coming soon
					</p>
				</div>
				<p className="w-[235px] m-auto text-grey800 font-semibold text-xs mt-6 md:text-2xl md:w-[459px] md:font-normal lg:w-[474px] lg:mt-8 lg:font-semibold">
					Enjoy endless features with our new paid version coming
					soon!!!
				</p>
			</div>
		</main>
	);
};

export default ModernPlan;
