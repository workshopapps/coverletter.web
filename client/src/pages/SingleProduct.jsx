import React from "react";
import { Link, useParams } from "react-router-dom";
import { contents } from "../Utils/data";
import arrowLeft from "../Assets/arrow-left.png";
const SingleProduct = () => {
	const { customerId } = useParams();
	const item = contents.find((item) => {
		return item.id === Number(customerId);
	});
	const { id, title, img, name, occupation, introTalk, textContents } = item;
	return (
		<main className="bg-background">
			<section className="relative px-6 md:py-17 md:px-24" key={id}>
				<Link
					className="absolute top-3 flex items-center gap-x-3 pt-[19px] pb-12"
					to="/customerstories"
				>
					<img src={arrowLeft} alt="" />
					Customer Stories
				</Link>
				<div className="grid md:grid-cols-2 gap-x-[25px] pt-[72px]">
					<div>
						<h3 className="text-[32px] mb-[22px] leading-10 md:text-[44px] md:leading-[48px] lg:text-[56px] lg:leading-[72px] lg:mb-8">
							{title}
						</h3>
						<p className="text-grey400 text-base font-normal">
							Talking with{" "}
							<span className="text-[#000]">{name}</span> ,
							{occupation}
						</p>
					</div>
					<img
						className="-order-1 mb-[19.21px] md:order-1"
						src={img}
						alt=""
					/>
				</div>
				<div className="mt-[33px] md:mt-[65px] mb-[50px]">
					<h3 className="text-2xl leading-9 md:text-[40px] md:mb-3">
						Introduction
					</h3>
					<p className="text-grey400 pr-0 text-base leading-6 lg:pr-[282px]">
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
								className="pr-0 pb-[50px] lg:pr-[487px]"
								key={id}
							>
								<h3 className="text-2xl leading-9 md:mb-3 md:text-[40px]">
									{title}
								</h3>
								<p className="text-grey400 font-normal lg:w-[857px]">
									{challengeTalk}
								</p>
								<p className=" pt-[28px] pb-6 text-base text-grey400 leading-6 font-semibold md:pt-[40px] md:pb-6">
									{reject}
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