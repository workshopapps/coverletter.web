import React from "react";
import pic from "./assets/pic.svg";

function SectionOne() {
	return (
		<div>
			<main className="flex h-[418px] md:h-[50vh] lg:h-[70vh] lw:h-[75vh] bg-primaryDeep lg:px-3 lg:py-5 relative box-border overflow-hidden ">
				<div className="text bottom-[15%] px-0  w-[83%] m-auto lg:bottom-[20%] flex flex-col px-[2rem] h-[30vh] lg:h-[60vh]  justify-center auto lw:w-[1250px] lw:m-auto lw:px-0">
					<h1 className="font-bold  text-textWhite lg:text-[56px] md:text-[50px] text-4xl  lg:leading-[4rem] leading-[3rem] text-left lg:pr-[200px] lw:w-[700px] lw:px-0">
						Create a Job-Landing Cover Letter in seconds
					</h1>
					<p className="text-grey100 text-left w-[100%] text-[20px] mt-3 lg:text-[40px] ">
						100% Automated and Free
					</p>
				</div>
				<div className="shape hidden md:flex">
					<img
						className=" w-[1440px] h-[440px] left-[300px] lw:bottom-[-50px] lw:left-[600px] lw:w-[1006px] bottom-[-150px] absolute"
						src={pic}
						alt="hero"
					/>
				</div>
			</main>
		</div>
	);
}

export default SectionOne;
