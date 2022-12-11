import React from "react";
import { items } from "../Utils/data";
import { Link } from "react-router-dom";

const CustomerStories = () => {
	const handleMouseOver = (e) => {
		e.target.classList.add(
			"border-4",
			"border-[#ACC5F4]",
			"rounded-[24px]",
			"bg-[#ACC5F4]"
		);
	};

	const handleMouseOut = (e) => {
		e.target.classList.remove(
			"border-4",
			"border-[#ACC5F4]",
			"rounded-[24px]",
			"bg-[#ACC5F4]"
		);
	};

	return (
		<main className="bg-background max-w-screen-2xl m-auto">
			<section>
				<div className="text-center pt-10 mx-5 sm:mx-10 mb-8 md:mb-[72px] md:pt-[63px]">
					<h3 className="text-textHeader text-[32px] leading-10  lg:text-[56px] lg:leading-[72px] font-bold">
						Customer{" "}
						<span className="text-primaryMain">Stories</span>
					</h3>
					<p className="text-grey400 font-semibold m-auto mt-[8px] text-[12px] leading-[16px] md:w-full md:text-base md:mt-4">
						More than just a cover letter generator, we are
						applicants best friend
					</p>
				</div>
				<div className=" px-5 sm:px-10 grid md:grid-cols-2 gap-x-8">
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
								<div className="first:mb-[29px]" key={id}>
									<Link to={`/customerstories/${id}`}>
										<img
											onMouseOver={handleMouseOver}
											onMouseOut={handleMouseOut}
											className="mb-[7px] md:mb-4 w-full"
											src={img}
											alt=""
										/>
										<p className="font-semibold text-[20px] leading-8  text-primaryMain md:text-[24px] md:leading-10">
											{story}
										</p>
										<h3 className="font-semibold mt-0 mb-[6px] text-base md:text-2xl leading-1 lg:text-[36px] md:leading-normal md:mb-4">
											{text}
										</h3>

										<p className="font-semibold leading-4 text-primaryMain text-[12px] flex justify-start items-center gap-1 md:gap-2 md:text-base md:leading-6 relative">
											{read}{" "}
											<img
												className="w-[10px] md:w-6 absolute top-0 left-[170px]"
												src={arrow}
												alt=""
											/>
										</p>
									</Link>
								</div>
							);
						})}
				</div>
				<div className="mt-10 pt-10 md:mt-20 px-5 sm:px-10 bg-[#fff]">
					<h3 className="text-grey800 text-xl leading-8 mb-[17px] md:text-[56px] md:mb-[59px] text-left font-bold">
						Latest Customer{" "}
						<span className="text-primaryMain">Stories</span>{" "}
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 pb-[70px] gap-x-3 md:gap-x-8 gap-y-8 lg:grid-cols-3 lg:gap-x-[19px] lg:gap-y-[93px] md:pb-[150px] h-full">
						{items
							.filter(
								(testimonial) =>
									testimonial.id !== 1 && testimonial.id !== 2
							)
							.map((testimonial) => {
								const { id, img, story, text, read, arrow } =
									testimonial;

								return (
									<div className="first:mb-[29px]" key={id}>
										<Link to={`/customerstories/${id}`}>
											<img
												onMouseOver={handleMouseOver}
												onMouseOut={handleMouseOut}
												className="mb-[7px] md:mb-4 w-full"
												src={img}
												alt=""
											/>
											<p className="font-semibold text-[20px] leading-8  text-primaryMain md:text-[24px] md:leading-10">
												{story}
											</p>
											<h3 className="font-semibold mt-0 mb-[6px] text-base md:text-2xl leading-1 lg:text-[36px] md:leading-normal md:mb-4">
												{text}
											</h3>

											<p className="font-semibold leading-4 text-primaryMain text-[12px] flex justify-start items-center gap-1 md:gap-2 md:text-base md:leading-6 relative">
												{read}{" "}
												<img
													className="w-[10px] md:w-6 absolute top-1 left-[170px]"
													src={arrow}
													alt=""
												/>
											</p>
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
