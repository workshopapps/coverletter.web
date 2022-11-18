import React, { useRef } from "react";
import ChevronDown from "../Assets/chevron-down.svg";
import ChevronUp from "../Assets/chevron-up.svg";

const Accordion = ({ title, content, isOpen, onClick }) => {
	const contentElement = useRef(null);

	return (
		<div onClick={onClick} className="mb-[8px]">
			<div
				className={
					"py-[24px] px-[16px] border border-[#cad0dd] rounded-lg mb-2 flex justify-between"
				}
			>
				<h4 className="font-normal text-sm md:text-2xl">{title}</h4>
				<img
					src={!isOpen ? ChevronDown : ChevronUp}
					alt="chevron"
					className={`w-4`}
				/>
			</div>
			<div
				ref={contentElement}
				style={{ maxHeight: isOpen ? "1000px" : "0px" }}
				className="bg-[#f0f0f8] overflow-hidden transition-all duration-400"
			>
				<p className="border border-[#cad0dd] p-4 rounded-br-lg rounded-bl-lg text-xs md:text-base">
					{content}
				</p>
			</div>
		</div>
	);
};

export default Accordion;
