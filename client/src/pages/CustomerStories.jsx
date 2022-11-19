import React from "react";
import { items, testimonials } from "../Utils/data";
import { Link } from "react-router-dom";
const CustomerStories = () => {
	return (
		<main className="bg-background  ">
			<section className="xxs:max-sm:px-0 md:py-17 px-24">
				<div className="text-center">
					<h3 className="text-[32px] lg:text-5xl text-textHeader">
						Customer{" "}
						<span className="text-primaryMain leading-leading-10">
							Stories
						</span>
					</h3>
					<p className="xxs:max-sm:w-[294px] mt-[8px] m-auto text-[12px] text-grey400 leading-[16px] font-semibold md:text-base mt-4 mb-16">
						See how others are generating their cover letter, and
						learn how to follow in their footsteps
					</p>
				</div>
				<div className="block xxs:max-sm:px-[50px] md:grid grid-cols-2 gap-x-[18px]">
					{items.map((item) => {
						const { id, img, story, text, read, arrow } = item;
						return (
							<div className="first:mb-[29.06px]" key={id}>
								<img
									className="xxs:max-sm:mb-[8.12px] md:mb-4"
									src={img}
									alt=""
								/>
								<p className="font-bold text-[10.75px] text-primaryMain md:text-[24px] ">
									{story}
								</p>
								<h3 className="mt-[2.27px] xxs:max-xs:mb-[6.18px] font-semibold xxs:max-xs:w-[240px] xs:text-[18px] leading-[21.51px] md:max-lg:text-2xl md:mt-2 mb-4 md:leading-leading-8 lg:text-4xl">
									{text}
								</h3>

								<Link
									to={`/customerstories/${id}`}
									className="leading-[11px] text-grey800 xxs:max-xs:text-[9.17px] inline-flex justify-center items-center md:text-base leading-leading-4"
								>
									{read}{" "}
									<img
										className="xxs:max-md:h-[12px] ml-[8px] md:w-6 h-6 ml-[14px]"
										src={arrow}
										alt=""
									/>
								</Link>
							</div>
						);
					})}
				</div>
				<div className="mt-[37px] md:mt-28">
					<h3 className="xxs:max-sm:text-[24px] xxs:max-sm:ml-[22px] mb-[17px] sm:max-md:text-3xl md:max-lg:text-4xl lg:text-5xl leading-leading-10 mb-[59px]">
						Latest Customer{" "}
						<span className="text-primaryMain">Stories</span>{" "}
					</h3>

					<div className="grid grid-cols-2 xxs:max-sm:gap-x-[48.12px] xxs:max-sm:mx-[34px] xxs:max-lg:gap-y-[24.11px] pb-[82.11px] lg:grid-cols-3 gap-x-[19px] gap-y-[93px] md:pb-[233px]">
						{testimonials.map((testimonial) => {
							const { id, img, story, text, read, arrow } =
								testimonial;

							return (
								<div key={id}>
									<img
										className="mb-[10.12px] md:mb-4"
										src={img}
										alt=""
									/>
									<p className="text-[10px] text-primaryMain leading-[8px] font-bold md:text-[16px] leading-leading-4">
										{story}
									</p>
									<h3 className="xxs:max-sm:leading-[14.5px] mt-[5px] mb-0 text-[12px] font-bold md:mt-2 mb-4 md:text-[24px] leading-[36px]">
										{text}
									</h3>
									<Link
										to={`/customerstories/${id}`}
										className="text-[12px] leading-[16px] inline-flex justify-center items-center"
									>
										{read}{" "}
										<span className="w-[18px] h-[18px] ml-3">
											<img src={arrow} alt="" />
										</span>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
};

export default CustomerStories;
