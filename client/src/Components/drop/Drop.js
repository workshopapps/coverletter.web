import React from "react";
import first from "../sectionTwo/assets/first.svg";
import second from "../sectionTwo/assets/second.svg";
import third from "../sectionTwo/assets/third.svg";
import fourth from "../sectionTwo/assets/fourth.svg";

function Drop() {
	return (
		<div className="mb-[40px] lg:mb-[96px]">
			<h2 className="text-textBody my-[45px] mt-[-2px] lg:my-[96px] m-auto text-center font-bold text-2xl lg:text-4xl w-[80%] lg:w-[50%] ">
				Follow These Steps to Seamlessly Create Your Cover Letters
			</h2>
			<div className="additional_info_container w-[85%] grid grid-cols-1 sm:grid-cols-2 gap-[20px]  md:w-[83%] lg:grid-cols-4 lg:gap-7 text-left xl:w-[1080px] lw:w-[1250px] m-auto lw:gap-[100px]">
				<div className="additional_info bg-[#FF000033]  py-6 flex flex-col items-center lg:items-start px-10 rounded-lg justify-center xl:py-8 xl:px-12 ">
					<img
						className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px]  text-left  mb-5 "
						src={first}
						alt=""
					/>
					<span className="text-sm text-center lg:text-left  lg:text-[20px] xl:text-[24px]  relative left-[-10px] leading-9 text-gray-900">
						Upload Your CV or Resume
					</span>
				</div>
				<div className="additional_info py-6 bg-[#0652DD33] flex flex-col items-center lg:items-start px-10 rounded-lg justify-center xl:py-8 xl:pl-12">
					<img
						className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px]  text-left  mb-5 "
						src={second}
						alt=""
					/>
					<span className="text-sm text-center lg:text-left  lg:text-[20px] xl:text-[24px] leading-9 text-gray-900">
						Input Additional Information
					</span>
				</div>
				<div className="additional_info  py-6 bg-[#FFB80033] flex flex-col items-center lg:items-start px-10 rounded-lg justify-center xl:py-10 xl:px-12">
					<img
						className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px]  text-left  mb-5 "
						src={third}
						alt=""
					/>
					<span className="text-sm text-center lg:text-left   lg:text-[20px] xl:text-[24px] leading-9 text-gray-900">
						Generate Your Cover Letter
					</span>
				</div>
				<div className="additional_info  py-6 bg-[#00FF9133] flex flex-col items-center lg:items-start px-10 gap-6 rounded-lg justify-center xl:py-8 xl:px-12">
					<img
						className="w-[60px] lg:w-[80px] h-[80px] lg:h-[60px]  text-left  top-[2px]  "
						src={fourth}
						alt=""
					/>
					<span className="text-sm text-center lg:text-left  lg:text-[20px] xl:text-[24px] leading-9 text-gray-900">
						Download or Save
					</span>
				</div>
			</div>
		</div>
	);
}

export default Drop;
