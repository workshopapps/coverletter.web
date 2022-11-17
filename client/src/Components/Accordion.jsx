import React, { useState, useRef } from "react";
import ChevronDown from "../Assets/chevron-down.svg";

const Accordion = ({ title, content }) => {
	const [isOpened, setOpened] = useState(false);
	const [height, setHeight] = useState("0px");
	const contentElement = useRef(null);

	const HandleOpening = () => {
		setOpened(!isOpened);
		setHeight(
			!isOpened ? `${contentElement.current.scrollHeight}px` : "0px"
		);
	};
	return (
		<div onClick={HandleOpening} className="mb-[8px]">
			<div
				className={
					"py-[24px] px-[16px] border border-[#cad0dd] rounded-lg mb-2 flex justify-between"
				}
			>
				<h4 className="font-semibold">{title}</h4>
				<img
					src={ChevronDown}
					alt=""
					className={isOpened ? "rotate-180" : "rotate-0"}
				/>
			</div>
			<div
				ref={contentElement}
				style={{ height: height }}
				className="bg-[#f0f0f8] overflow-hidden transition-all duration-200"
			>
				<p className="border border-[#cad0dd] p-4 rounded-r-[8px] rounded-l-[8px]">
					{content}
				</p>
			</div>
		</div>
	);
};

export default Accordion;
