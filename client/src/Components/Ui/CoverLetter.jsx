import React from "react";
import { useGlobalContext } from "../../context/context";
const CoverLetter = () => {
	const { coverLetter: data, userData } = useGlobalContext();
	const formatData = data.cover_letter;

	const dData = formatData.replace(/\n\n/g, "<br/>");

	return (
		<div className="w-[255px] h-[362px] sm:w-[452px] coverletter-container sm:h-[640px] bg-textWhite border-grey300 target-2 border-2 pt-7 px-7 rounded-lg">
			<div id="coverletter-target">
				<div className="flex w-full justify-between items-end">
					<p className="w-[50%] text-[7px] sm:text-xs flex text-grey300">
						{userData.address} {userData.email}
					</p>
					<p className="w-[50%] text-right text-[14px] sm:text-2xl font-black">
						{userData.name}
					</p>
				</div>
				<hr className="w-full md:h-[12px] outline-none h-2 mt-2 bg-primaryDeep border-none" />
				<div className="mt-5 sm:mt-10 w-full">
					<p className="w-[40%] text-[7px] sm:text-xs flex">
						{/* {data.company_address} */}
						10/11/2022
					</p>
					<p className="w-[40%] text-[7px] sm:text-xs flex">
						{data.company_address}
						{/* Famfresh & Co. 321 ilupeju Ave, Lagos, Nigeria */}
					</p>
				</div>
				<div className="mt-3 sm:mt-5 text-[7px] sm:text-xs">
					<p
						dangerouslySetInnerHTML={{
							__html: dData,
						}}
					></p>
				</div>
			</div>
		</div>
	);
};

export default CoverLetter;
