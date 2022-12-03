import React from "react";
import { Link, useParams } from "react-router-dom";
import { contents } from "../Utils/data";
import arrowLeft from "../Assets/arrow-left.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const SingleProduct = () => {
	const { customerId } = useParams();
	const item = contents.find((item) => {
		return item.id === Number(customerId);
	});
	const { id, title, img, name, occupation, introTalk, textContents } = item;
	return (
		<main className="bg-background">
			<section className="relative px-5 md:py-17 md:px-12 lg:px-16" key={id}>
				<Link
					className="absolute top-3 flex items-center gap-x-3 my-[19px] text-xl leading-8"
					to="/customerstories"
				>
					<img src={arrowLeft} alt="" />
					Customer Stories
				</Link>
				<div className="grid md:grid-cols-2 gap-x-[40px] xl:gap-x-[60px] pt-[100px]">
					<div>
						<h3 className="text-[32px] mb-[22px] leading-[40px] md:text-[44px] md:leading-[48px] lg:text-[56px] lg:leading-[72px] lg:mb-8 text-[#101010]">
							{title}
						</h3>
						<p className="text-[#6d6d6d] text-base font-normal leading-6 lg:text-[30px] xl:text-[40px] lg:leading-[48px]">
							Talking with{" "}
							<span className="text-[#000]">{name}</span>, <br />
							{occupation}
						</p>
					</div>
					<img
						className="-order-1 mb-[19px] md:order-1"
						src={img}
						alt=""
					/>
				</div>
				<div className="mt-[33px] md:mt-[65px] mb-[50px]">
					<h3 className="text-2xl leading-9 md:text-[40px] md:leading-[48px] md:mb-3">
						Introduction
					</h3>
					<p className="text-grey400 pr-0 text-base leading-6 lg:w-[70%] xl:w-[80%]">
						{introTalk}
					</p>
				</div>
				<div>
					{textContents.map((textContent) => {
						const {
							id,
							title,
							challengeTalk,
							reject,
							img2,
							name,
							occupation,
						} = textContent;
						return (
							<div
								className="pr-0 pb-[50px] lg:w-[70%] xl:w-[80%]"
								key={id}
							>
								<h3 className="text-2xl leading-9 md:text-[40px] md:leading-[48px] md:mb-3">
									{title}
								</h3>
								<p className="text-grey400 font-normal">
									{challengeTalk}
								</p>
								<p className=" pt-[28px] pb-6 text-base text-grey400 leading-6 font-semibold md:pt-[40px] md:pb-6 lg:w-2/3 xl:w-1/2 px-10 relative">
									{reject}
									<span className="absolute top-[28px] left-5 text-primaryMain">
										<FontAwesomeIcon icon={faQuoteLeft} />
									</span>
									<span className="absolute bottom-4 pl-2 text-primaryMain">
										<FontAwesomeIcon icon={faQuoteRight} />
									</span>
								</p>

								<div className="flex">
									<img src={img2} alt="" />
									<div className="text-grey400 ml-[12px]">
										<p className="text-base font-bold">
											{name}
										</p>
										<p className="text-base font-normal">
											{occupation}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</main>
	);
};

export default SingleProduct