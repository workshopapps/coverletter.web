import React from "react";
import male from "./assets/male.jpg";
import arrow from "./assets/arrow.svg";
import mentor from "./assets/mentor.svg";
import designer from "./assets/designer.svg";

function SectionFour() {
	return (
		<div>
			<main className="lg:px-[96px]  justify-center px[2px] ">
				<h2 className="text-2xl py-8 lg:text-4xl text-center font-bold pb-10 lg:py-[96px] text-[#101010] lw:text-[40px]">
					What Others Are Saying...
				</h2>
				<div className=" w-[85%] m-auto grid grid-cols-1 auto-cols-min items-center justify-center sm:grid-cols-2 gap-4 md:w-[89%] lg:w-full xl:grid-cols-4 xl:w-[1080px] gap-5 lw:w-[1250px] lw:gap-10   ">
					<div className="review hover:scale-[1.02] cursor-pointer w-[100%] text-left bg-textWhite flex flex-col py-[40px] px-[30px] rounded-lg border-[1px] border-[#CAD0DD] h-full ">
						<p className="text-[18px] text-textBody">
							I am impressed by the strength of the AI on this
							page and I think it's the best choice on the market
						</p>
						<img
							className="w-12 my-[20px] rounded-full"
							src={male}
							alt=""
						/>
						<p className="font-bold text-textBody text-[16px]">
							Developer Alamadrid
						</p>
						<span className="text-[14px] text-textBody ">
							CEO, Aloy Tech
						</span>
					</div>
					<div className="review hover:scale-[1.02] cursor-pointer w-[100%]  text-textBody  text-left bg-textWhite flex flex-col py-[40px] px-[30px] rounded-lg border-[1px] border-[#CAD0DD] h-full ">
						<p className="text-[18px]">
							There are so many options and I love the templates
							options. This makes constructing cover letters easy.
						</p>
						<img
							className="w-12 text-textBody my-[20px] rounded-full"
							src={male}
							alt=""
						/>
						<p className="font-bold text-[16px]">Designer Bolu</p>
						<span className="text-[14px] text-textBody ">
							CEO, Bolu Arts
						</span>
					</div>
					<div className="review hover:scale-[1.02] cursor-pointer w-[100%] text-textBody  text-left bg-textWhite flex flex-col py-[40px] px-[30px] rounded-lg border-[1px] border-[#CAD0DD] h-full ">
						<p className="text-[18px] text-textBody">
							Really helpful with the format template that is
							provided and when you pair your resume with it makes
							it easier
						</p>
						<img
							className="w-12 text-textBody my-[20px] rounded-full"
							src={designer}
							alt=""
						/>
						<p className="font-bold text-textBody text-[16px]">
							Designer Bamifemi
						</p>
						<span className="text-[14px] text-textBody ">
							CEO, Bamifemi Arts
						</span>
					</div>
					<div className="review hover:scale-[1.02] cursor-pointer w-[100%] text-textBody text-left bg-textWhite flex flex-col py-[40px] px-[30px] rounded-lg border-[1px] border-[#CAD0DD] h-full ">
						<p className="text-[18px] text-textBody">
							Quick and easy way to create a professional cover
							letter and allows for my own personal touch to the
							cover letter
						</p>
						<img
							className="w-12 my-[20px] rounded-full"
							src={mentor}
							alt=""
						/>
						<p className="font-bold text-[16px]">Mentor Mark</p>
						<span className="text-[14px] ">Demi-god of HNG</span>
					</div>
				</div>
				<div className="a flex justify-center">
					<button className="px-6 py-3 mt-[85px] text-[14px] flex items-center justify-center w-[85%] lg:w-[350px] xl:w-[300px] xl:text-[16px] text-primaryMain border-[1.5px] border-solid border-blue-700 font-semibold rounded-lg">
						<span>Read Full Customer Stories</span>
						<img
							className="h-[16px] w-[16px ml-[8px]"
							src={arrow}
							alt=""
						/>
					</button>
				</div>
			</main>
		</div>
	);
}

export default SectionFour;
