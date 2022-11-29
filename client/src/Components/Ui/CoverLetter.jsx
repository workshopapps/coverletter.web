import React from "react";
import { useGlobalContext } from "../../context/context";
const CoverLetter = () => {
	const { coverLetter: data, userData } = useGlobalContext();

	return (
		<div className="w-[98%] bg-textWhite border-grey300 target-2 border-2 py-8 px-7 rounded-lg">
			<div id="coverletter-target">
				<div className="flex w-full justify-between items-end">
					<p className="w-[50%] text-sm md:text-base flex text-grey300">
						{userData.address} {userData.email}
					</p>
					<p className="w-[50%] text-right md:text-2xl text-sm font-black ">
						{userData.name}
					</p>
				</div>
				<hr className="w-full outline-none h-2 mt-2 bg-primaryDeep border-none" />
				<div className="mt-10 w-full">
					<p className="w-[40%] text-sm md:text-base flex">
						{/* {data.company_address} */}
						10/11/2022
					</p>
					<p className="w-[40%] text-sm md:text-base flex">
						{data.company_address}
						{/* Famfresh & Co. 321 ilupeju Ave, Lagos, Nigeria */}
					</p>
				</div>
				<div className="mt-5 text-sm md:text-base">
					<p className="">
						{/* Dear Mr. Richard, */}
						Dear {data.recipient_name},
					</p>{" "}
					<br />
					<p
						dangerouslySetInnerHTML={{
							__html: data.cover_letter,
						}}
					></p>
					{/* <br />
				<p>Best regards,</p>
				<br />
				<p>Sam Johnson</p> */}
				</div>
			</div>
		</div>
	);
};

export default CoverLetter;
