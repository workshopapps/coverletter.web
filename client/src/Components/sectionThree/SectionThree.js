import React from "react";
import circle from "./assets/circle.svg";
import scissor from "./assets/scissor.svg";
import star from "./assets/star.svg";
import pen from "./assets/magicpen.svg";

function SectionThree() {
	return (
		<div className="div  lg:px-[96px]  mt-10 mb-2 lw:w-[1250px] lw:m-auto lw:px-0">
			<main className="  rounded-lg py-7 pb-[96px] relative bg-[#CDDCF8] ">
				<h2 className="text-2xl px-[7%] w-[100%] inline-block lg:w-[100%] lg:text-4xl font-bold text-center my-[50px] mt-[7px] lg:my-[90px] text-textBody">
					Benefits of Using Our Cover Letter Builder
				</h2>
				<div className="top grid lg:px-[6rem] px-[7%]  lg:grid-cols-2 grid-cols-1 gap-[60px] lg:gap-[70px] md:grid-cols-2 ">
					<div className=" w-[327] lg:w-[100%] py-[48px] lg:p-[48px] bg-textWhite text-left pl-[48px] pr-[36px] flex flex-col rounded-[8px]">
						<img
							src={circle}
							className="w-[80px] mb-2 lg:mb-3 h-[80px]"
							alt=""
						/>
						<p className="font-bold  text-left text-[24px] text-textBody ">
							Make Your Job Search Easy
						</p>
						<span className="text-[16px] leading-[27px] mt-2 ">
							Applying for multiple jobs means writing multiple
							cover letters. Our Cover Letter Builder makes it
							quick and easy to customize cover letters,
							regardless of how many you write.
						</span>
					</div>
					<div className=" w-[320]  lg:w-[100%]  py-[48px] lg:p-[40px] bg-textWhite text-left pl-[48px] pr-[36px] flex flex-col rounded-[8px]">
						<img
							src={pen}
							className="w-[80px] mb-2 lg:mb-3 h-[80px]"
							alt=""
						/>
						<p className="font-bold  text-left text-[24px] text-textBody ">
							We do the Writing For You
						</p>
						<span className="text-[16px] leading-[27px] mt-2 ">
							Writer's block, begone! Our Cover Letter Builder
							does the work for you with professionally written
							text and keyword suggestions that get your letter
							written in minutes.
						</span>
					</div>
					<div className=" w-[327]  lg:w-[100%] py-[48px] lg:p-[40px] bg-textWhite text-left pl-[48px] pr-[36px]  flex flex-col rounded-[8px]">
						<img
							src={scissor}
							className="w-[80px] mb-2 lg:mb-3 h-[80px]"
							alt=""
						/>
						<p className="font-bold  text-left text-[24px] text-textBody ">
							Beautiful and Polished results
						</p>
						<span className=" text-[16px] leading-[27px] mt-2 ">
							Our beautiful designed cover letter templates
							automatically handle the formatting as you wor.
							plus, our built-in spell-check feature helps ensure
							an error-free letter
						</span>
					</div>
					<div className=" w-[327] lg:w-[100%] py-[48px] lg:p-[40px] bg-textWhite text-left pl-[48px] pr-[36px]  flex flex-col rounded-[8px]">
						<img
							src={star}
							className="w-[80px] mb-2 lg:mb-3 h-[80px]"
							alt=""
						/>
						<p className="font-bold  text-left text-[24px] text-textBody ">
							Proven Success
						</p>
						<span className=" text-[16px] leading-[27px] mt-2 ">
							Thousands of job seekers have successfully built
							cover letters using Coverly to get the jobs they
							want.
						</span>
					</div>
				</div>
			</main>
		</div>
	);
}

export default SectionThree;
