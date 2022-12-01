import React, { useState } from "react";
import Accordion from "../Components/Accordion";
import { faqQA } from "../Utils/data";
import { Link } from "react-router-dom";
import DesktopLeft from "../Assets/destop-left.svg";
import DesktopRight from "../Assets/destop-right.svg";
import TabletLeft from "../Assets/tablet-left.svg";
import TabletRight from "../Assets/tablet-right.svg";

const Faq = () => {
	const [selected, setSelected] = useState(null);
	const classes =
		"leading-[36px] sm:leading-[48px] sm:text-[40px] text-[24px]";

	const onClick = (id) => {
		if (selected === id) {
			return setSelected(null);
		}
		setSelected(id);
	};

	return (
		<>
			<div className="bg-primaryDeep h-[192px] md:h-[296px] grid place-items-center relative -z-20">
				<img
					src={DesktopLeft}
					alt=""
					className="absolute left-0 bottom-0 hidden lg:block -z-10"
				/>
				<img
					src={DesktopRight}
					alt=""
					className="absolute right-0 bottom-0 hidden lg:block -z-10"
				/>
				<img
					src={TabletRight}
					alt=""
					className="absolute left-0 hidden sm:block lg:hidden -z-10"
				/>
				<img
					src={TabletLeft}
					alt=""
					className="absolute right-0 hidden sm:block lg:hidden -z-10"
				/>
				<div className="text-center text-textWhite">
					<h1
						className={`font-bold sm:font-semibold md:text-[56px] md:leading-[72px] mb-[8px] ${classes}`}
					>
						FAQs
					</h1>
					<h2
						className={`font-normal mb-[8px] sm:mb-[16px] ${classes}`}
					>
						Frequently Asked Questions
					</h2>
					<p className="text-xs font-semibold w-[252px] mx-auto sm:w-[400px] sm:font-normal sm:text-base md:w-[601px]">
						Find out all you need to know about using Coverly to
						easily generate professional cover letters.
					</p>
				</div>
			</div>
			<main className="md:px-24 px-6 pt-[56px] pb-[199px] bg-[#f0f0f8]">
				<div>
					{faqQA.map((item, index) => {
						return (
							<Accordion
								title={item.question}
								content={item.answer}
								onClick={() => onClick(index)}
								key={item.id}
								index={index}
								isOpen={selected === index}
							/>
						);
					})}
				</div>
				<div className="text-center mt-[32px]">
					<p className="mb-[32px] text-sm sm:text-base text-[#101010]">
						Do you have any other questions, comments, or
						complaints?
						<Link
							to={"/contactus"}
							className="ml-1 text-primaryDark"
						>
							Contact Us
						</Link>
					</p>
					<Link to={"/generate"} className="w-full">
						<button className="bg-primaryMain w-[285px] py-[12px] sm:py-[24px] sm:w-[527px]  text-textWhite text-base md:text-xl font-bold hover:bg-primaryDark active:bg-primaryDeep rounded-lg">
							Generate Cover Letter
						</button>
					</Link>
				</div>
			</main>
		</>
	);
};

export default Faq;
