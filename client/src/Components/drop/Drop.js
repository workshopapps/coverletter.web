import React from "react";
import first from "../sectionTwo/assets/first.svg";
import second from "../sectionTwo/assets/second.svg";
import third from "../sectionTwo/assets/third.svg";
import fourth from "../sectionTwo/assets/fourth.svg";

function Drop() {
	return (
		<div className="mb-[40px] lg:mb-[96px] lw:w-[1250px] lw:ml-auto lw:mr-auto lw:px-0 ">
			<h2 className="text-textBody my-[45px] mt-[-2px]  lg:my-[96px]  relative left-[10%] text-center lg:left-[25%] font-bold text-2xl lg:text-4xl w-[80%] lg:w-[50%] ">
				Follow These Steps to Seamlessly Create Your Cover Letters
			</h2>
			<div className="additional_info_container grid grid-cols-2 gap-[20px] lg:grid-cols-4 lg:gap-[40px] text-left px-[6.8%] lw:px-0  ">
				<div className="additional_info gap-3  box-border bg-[#FF000033]  flex flex-col justify-around md:items-center lg:items-start pl-[1rem] lg:pl-[2rem] py-[1rem] lg:py-[2rem]  lg:h-[260px] rounded-lg ">
					<img
						className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px]  "
						src={first}
						alt=""
					/>
					<span className="text-sm text-left md:text-center lg:text-left  lg:text-[24px] w-[70%] leading-8 md:leading-9 text-gray-900">
						Upload Your CV or Resume
					</span>
				</div>
				<div className="additional_info  gap-3 box-border bg-[#0652DD33]  flex flex-col justify-around md:items-center lg:items-start pl-[1rem] lg:pl-[2rem] py-[1rem] lg:py-[2rem]  lg:h-[260px] rounded-lg ">
					<img
						className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px]  "
						src={second}
						alt=""
					/>
					<span className="text-sm text-left md:text-center lg:text-left  lg:text-[24px] w-[85%]  leading-8 md:leading-9 text-gray-900">
						Input Additional Information
					</span>
				</div>
				<div className="additional_info gap-3  box-border bg-[#FFB80033] flex flex-col justify-around md:items-center lg:items-start pl-[1rem] lg:pl-[2rem] py-[1rem] lg:py-[2rem] lg:h-[260px] rounded-lg ">
					<img
						className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px]  "
						src={third}
						alt=""
					/>
					<span className="text-sm text-left md:text-center lg:text-left  lg:text-[24px] w-[85%]  leading-8 md:leading-9 text-gray-900">
						Generate Your Cover Letter
					</span>
				</div>
				<div className="additional_info gap-3  box-border bg-[#00FF9133]  flex flex-col justify-around md:items-center lg:items-start pl-[1rem] lg:pl-[2rem] py-[1rem] lg:py-[2rem] lg:h-[260px] rounded-lg ">
					<img
						className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px]  "
						src={fourth}
						alt=""
					/>
					<span className="text-sm text-left md:text-center lg:text-left  lg:text-[24px] w-[70%]  leading-8 md:leading-9 text-gray-900">
						Download or Save
					</span>
				</div>
			</div>
		</div>
	);
}

export default Drop;
