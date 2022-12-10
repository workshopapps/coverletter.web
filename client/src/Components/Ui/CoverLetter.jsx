import React from "react";
import { useGlobalContext } from "../../context/context";
const CoverLetter = () => {
	const { coverLetter: data, userData } = useGlobalContext();
	const formatData = data.cover_letter;

	const dData = formatData.replace(/\n\n/g, " <br/><br/>");
	
	return (
		<div className="w-[300px] h-[426px] sm:w-[480px] coverletter-container sm:h-[690px] bg-textWhite border-grey300 target-2 border-2 pt-7 px-7 pb-7 rounded-lg">
			<div id="coverletter-target" className="h-full overflow-hidden">
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
						{userData.date}
					</p>
					<p className="w-[40%] text-[7px] sm:text-xs flex">
						{data.company_address}
					</p>
				</div>
				<div className="mt-3 sm:mt-5 text-[7px] sm:text-xs h-full overflowY-hidden">
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
