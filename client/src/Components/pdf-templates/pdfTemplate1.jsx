import React from "react";
import { useGlobalContext } from "../../context/context";

const PDFtemplate1 = () => {
	const { coverLetter: data, userData } = useGlobalContext();
	const formatData = data.cover_letter;

	const dData = formatData.replace(/\n\n/g, "<br/><br/>");

	return (
		<div className="w-[452px] fixed top-0 left-0 -z-30 invisible pdf-coverletter-container h-[640px] bg-textWhite border-grey300 target-2 border-2 pt-7 px-7 rounded-lg">
			<div id="pdf-coverletter-target">
				<div className="flex w-full justify-between items-end">
					<p className="w-[50%] text-xs flex text-grey300 shouldBeXs">
						{userData.address} {userData.email}
					</p>
					<p className="w-[50%] text-right text-2xl font-black shouldBe2xl">
						{userData.name}
					</p>
				</div>
				<hr className="w-full h-[12px] outline-none mt-2 bg-primaryDeep border-none" />
				<div className="mt-5 sm:mt-10 w-full">
					<p className="w-[40%] text-xs flex shouldBeXs">
						{/* {data.company_address} */}
						{userData.date}
					</p>
					<p className="w-[40%] text-xs flex shouldBeXs">
						{data.company_address}
						{/* Famfresh & Co. 321 ilupeju Ave, Lagos, Nigeria */}
					</p>
				</div>
				<div className="mt-5 text-xs shouldBeXs">
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

export default PDFtemplate1;
