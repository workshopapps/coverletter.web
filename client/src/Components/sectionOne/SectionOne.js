import React from "react";
import pic from "./assets/pic.svg";

function SectionOne() {
	return (
		<div>
			<main className="flex h-[418px] md:h-[45vh] lg:h-[720px] bg-primaryDeep lg:px-3 lg:py-5 relative box-border overflow-hidden border border-[white]">
				<div className="text relative bottom-[0px] w-[98%] md:w-[94%] lg:pr-[20rem] m-auto lg:bottom-[20%] flex flex-col px-[2rem] h-[30vh] lg:h-[60vh] justify-center auto lw:m-auto lw:px-0 lw:w-[1250px]">
					<h1 className="font-bold  text-textWhite lg:text-[56px] md:text-[50px] text-[32px]  lg:leading-[4rem] leading-[3rem] text-left lg:pr-[200px] lw:w-[700px] lw:px-0">
						Create a <span className="hidden sm:inline">
							Job-Landing Cover Letter in seconds
						</span>
					</h1>
					<h1 className="font-bold sm:hidden text-textWhite lg:text-[56px] md:text-[50px] text-[32px]  lg:leading-[4rem] leading-[3rem] text-left lg:pr-[200px] lw:w-[700px] lw:px-0">
						Job-Landing Cover Letter in seconds
					</h1>
					<p className="text-grey100 text-left w-[100%] text-[20px] mt-3 lg:text-[40px] ">
						100% Automated and Free
					</p>
				</div>
				<div className="shape hidden md:flex">
					<img
						className=" w-[1440px] h-[440px] left-[250px] lg:bottom-[-50px] lw:left-[35%] lw:w-[1006px] bottom-[-200px] absolute"
						src={pic}
						alt="hero"
					/>
				</div>
			</main>
		</div>
	);
}

export default SectionOne;
