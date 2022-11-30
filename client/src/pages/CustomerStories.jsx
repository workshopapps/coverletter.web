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
				<div className="px-[50px] grid md:grid-cols-2 gap-x-8">
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
									<p className="font-bold text-[12px] leading-8  text-primaryMain md:text-[24px] md:leading-10">
										{story}
									</p>
									<h3 className="font-semibold mt-[2.27px] mb-[6.18px] text-[17.92px] left-[21.51px] md:text-2xl leading-1 lg:text-[36px] md:leading-normal md:mb-4">
										{text}
									</h3>

									<Link
										to={`/customerstories/${id}`}
										className="font-semibold leading-tight text-grey800 text-[12px] flex justify-start items-center gap-1 md:gap-2 md:text-base md:leading-6"
									>
										{read}{" "}
										<img
											className="w-[10px] h-[10px] md:w-6 md:h-6"
											src={arrow}
											alt=""
										/>
									</Link>
								</div>
							);
						})}
				</div>
				<div className="mt-[37px] md:mt-20 px-[35px]">
					<h3 className="text-grey800 text-2xl leading-9 mb-[17px] md:text-[56px] md:mb-[59px] text-center">
						Latest Customer{" "}
						<span className="text-primaryMain">Stories</span>{" "}
					</h3>

					<div className="grid grid-cols-2 pb-[70px] gap-x-3 md:gap-x-8 gap-y-8 lg:grid-cols-3 lg:gap-x-[19px] lg:gap-y-[93px] md:pb-[150px] h-full">
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
										<p className="font-bold text-[10px] text-primaryMain md:text-base mb-2">
											{story}
										</p>
										<h3 className="text-[8px] leading-[11.5px] w-[100%] h-[35px] sm:text-2xl md:w-[297px] lg:w-full md:h-[108px] mb-2 lg:mb-10 md:leading-9">
											{text}
										</h3>
										<Link
											to={`/customerstories/${id}`}
											className="font-semibold leading-tight text-grey800 text-[10px] flex justify-start items-center gap-1 md:gap-2 md:text-base md:leading-6"
										>
											{read}{" "}
											<span className="w-[10px] h-[10px] md:w-6 md:h-6">
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
