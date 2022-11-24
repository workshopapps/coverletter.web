import React from "react";
import { Link, useParams } from "react-router-dom";
import { contents } from "../Utils/data";
import quoteUp from "../Assets/quote-up.png";
import quoteDown from "../Assets/quote-down.png";
import arrowLeft from "../Assets/arrow-left.png";
const SingleProduct = () => {
	const { customerId } = useParams();
	const item = contents.find((item) => {
		return item.id === Number(customerId);
	});
	const { id, title, img, name, occupation, introTalk, textContents } = item;
	return (
		<main className="bg-background">
			<section className="px-6 md:py-17 md:px-24" key={id}>
				<div className="xxs:max-md: block md:grid grid-cols-2 gap-x-[25px] pt-[72px]">
					<div>
						<Link
							className="flex items-center gap-x-3 mb-8"
							to="/customerstories"
						>
							<img src={arrowLeft} alt="" />
							Customer Stories
						</Link>
						<h3 className="text-[32px] xxs:max-md:leading-[40px] md:max-lg:text-4xl md:text-[56px] leading-leading-10">
							{title}
						</h3>
						<p className="text-grey400 mt-8 leading-leading-4 text-base font-normal">
							Talking with{" "}
							<span className="text-[#000]">{name}</span> ,
							{occupation}
						</p>
					</div>
					<img className="xxs:max-md:order-first" src={img} alt="" />
				</div>
				<div className="mt-[65px] mb-[72px]">
					<h3 className="md:text-[40px]">Introduction</h3>
					<p className="text-base leading-6">{introTalk}</p>
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
								className="xxs:max-md:pr-0 md:pb-[72px] lg:pr-[487px]"
								key={id}
							>
								<h3 className="md:text-[40px]">{title}</h3>
								<p className="text-grey400 font-normal lg:w-[857px]">
									{challengeTalk}
								</p>
								<div className="relative pt-[72px] pb-6">
									<img
										className="absolute left-0"
										src={quoteUp}
										alt=""
									/>
									<p className="text-base text-grey400 leading-6 font-semibold">
										{reject}
									</p>
									<img
										className="absolute right-8"
										src={quoteDown}
										alt=""
									/>
								</div>
								<div className="flex">
									<img src={img2} alt="" />
									<div className="ml-[14px]">
										<p>{name}</p>
										<p>{occupation}</p>
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

export default SingleProduct;
