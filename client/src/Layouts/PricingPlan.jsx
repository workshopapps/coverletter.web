import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Ui/Button";
import pricingPlanData from "../Constants/pricingPlanData";

const PricingPlan = () => {
	const pricingPlan = pricingPlanData.map((plan) => (
		<div
			className={`bg-textWhite flex flex-col justify-center w-[327px] m-auto xl:w-[403px] md:w-[403px] h-[900px] text-center rounded-md border ${plan.className}`}
		>
			<div className="space-y-4 ">
				<p className="text-[24px] text-center font-bold px-8 ">
					{plan.name}
				</p>

				<div>
					<p className="text-center text-[20px] ">
						${plan.monthly}
						{plan.monthly === "0" ? "" : "/monthly"}
					</p>

					{plan.yearly && (
						<p className="text-center text-[20px] px-8">
							${plan.yearly}/year
						</p>
					)}
				</div>
			</div>

			<div className="space-y-10 text-[14px] text-[#6D6D6D] mt-7">
				{plan.features.map((feature) => (
					<div key={feature.indexOf}>{feature}</div>
				))}
			</div>
			<Link to={plan.url} className="flex justify-center">
				<Button className="btn btnPrimary btnShort w-full mt-7 md:mt-20 mx-5">
					{plan.name === "Free Plan" ? "Subscribed" : "Get Access"}
				</Button>
			</Link>
		</div>
	));
	return (
		<div className="mt-10 pb-36 grid grid-cols-1 lw:justify-items-start gap-10 xl:grid-cols-3 xl:mt-12 lw:gap-3 xl:w-[1210px] xl:mx-auto lw:w-[1250px] lw:mx-auto ">
			{pricingPlan}
		</div>
	);
};

export default PricingPlan;
