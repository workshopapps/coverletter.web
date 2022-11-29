import React from "react";
import { items } from "../Utils/data";
import { Link } from "react-router-dom";
const CustomerStories = () => {
	return (
		<main className="bg-background max-w-screen-2xl m-auto">
			<section className="lg:px-24">
				<div className="text-center pt-10 mx-10 mb-10 md:mb-[72px] md:pt-[63px]">
					<h3 className="text-textHeader text-[32px] leading-10  lg:text-[56px] lg:leading-[72px]">
						Customer{" "}
						<span className="text-primaryMain">Stories</span>
					</h3>
					<p className="text-grey400 font-semibold m-auto mt-[8px] text-[12px]  leading-[16px]  md:w-full md:text-base md:mt-4">
						More than just a cover letter generator, we are
						applicants best friend
					</p>
				</div>
				<div className="block px-[50px] md:grid grid-cols-2 gap-x-[18px]">
					{items
						.filter(
							(item) =>
								item.id !== 3 &&
								item.id !== 4 &&
								item.id !== 5 &&
								item.id !== 6 &&
								item.id !== 7 &&
								item.id !== 8
						)
						.map((item) => {
							const { id, img, story, text, read, arrow } = item;
							return (
								<div className="first:mb-[29.06px]" key={id}>
									<img
										className="mb-[7.17px] md:mb-4"
										src={img}
										alt=""
									/>
									<p className="font-bold text-[10.75px] leading-[16.13px]  text-primaryMain md:text-[24px] lg:leading-9">
										{story}
									</p>
									<h3 className="font-semibold mt-[2.27px] mb-[6.18px] text-[17.92px] left-[21.51px] md:text-2xl leading-6 lg:text-[40px] md:leading-[48px] md:mb-4">
										{text}
									</h3>

									<Link
										to={`/customerstories/${id}`}
										className="font-semibold leading-[10.75px] text-grey800 text-[7.17px] inline-flex justify-center items-center md:text-base md:leading-6"
									>
										{read}{" "}
										<img
											className="w-[10.75px] h-[10.75px] ml-[7.63px] md:w-6 md:h-6 md:ml-[14px]"
											src={arrow}
											alt=""
										/>
									</Link>
								</div>
							);
						})}
				</div>
				<div className="mt-[37px] md:mt-28">
					<h3 className="text-grey800 text-2xl leading-9 mb-[17px] ml-[22px] md:text-[56px] md:mb-[59px]">
						Latest Customer{" "}
						<span className="text-primaryMain">Stories</span>{" "}
					</h3>

					<div className="px-[35px] grid grid-cols-2 gap-y-[24.11px] pb-[82.11px] gap-x-[48.12px] lg:grid-cols-3 lg:gap-x-[19px] lg:gap-y-[93px] lg:pb-[233px]">
						{items
							.filter(
								(testimonial) =>
									testimonial.id !== 1 && testimonial.id !== 2
							)
							.map((testimonial) => {
								const { id, img, story, text, read, arrow } =
									testimonial;

								return (
									<div key={id}>
										<img
											className="mb-[10.12px] md:mb-4"
											src={img}
											alt=""
										/>
										<p className="font-bold text-[10px] text-primaryMain md:text-base">
											{story}
										</p>
										<h3 className="text-[7.68px] leading-[11.5px] w-[95px] h-[35px] sm:text-2xl md:w-[297px] md:h-[108px] md:leading-9">
											{text}
										</h3>
										<Link
											to={`/customerstories/${id}`}
											className="text-[6px] inline-flex justify-center items-center md:text-[12px] leading-[16px] "
										>
											{read}{" "}
											<span className="w-[10.75px] h-[10.75px]md:w-[18px] md:h-[18px] ml-3">
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
