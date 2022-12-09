import React from "react";

const PricingHeading = () => {
	return (
		<div className="pb-[50px] mt-0 border border-[transparent] text-textWhite text-center bg-[#03296F]">
			<p className="text-[22px] sm:text-[28px] lg:text-[35px] xl	:text-[40px] font-semibold mt-16 mb-7">
				Pricing
			</p>
			<p className="text-[18px] sm:text-[24px] lg:text-[50px] xl:text-[56px] font-semibold mb-5">
				Find the right pricing that suits you
			</p>
			<div className="w-[85%] mx-auto">
				<p className="text-[14px] sm:text-[16px] lg:text-[22px] xl:text-[24px] ">
					Monthly: Pay for one month and get all benefits needed for
					30 days
				</p>
				<p className="text-[14px] sm:text-[16px] lg:text-[22px] xl:text-[24px]">
					Yearly: Get $6 off with yearly plan
				</p>
			</div>
		</div>
	);
};

export default PricingHeading;
