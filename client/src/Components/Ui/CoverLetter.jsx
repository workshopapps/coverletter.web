import React from "react";
import { useGlobalContext } from "../../context/context";
const CoverLetter = () => {
	const { coverLetter: data } = useGlobalContext();
	console.log(data);

	return (
		<div className="w-[98%] bg-textWhite border-grey300 border-2 py-8 px-7 rounded-lg">
			<div className="flex w-full justify-between items-end">
				<p className="w-[50%] text-sm md:text-base flex text-grey300">
					1,Lanre Avenue, Lagos 08133334556 / Sam@gmail.com
					www.linkedin.com/in/SamJohnson
				</p>
				<p className="w-[50%] text-right md:text-2xl text-sm font-black ">
					Sam Johnson
				</p>
			</div>
			<hr className="w-full outline-none h-2 mt-2 bg-primaryDeep border-none" />
			<div className="mt-10 w-full">
				<p className="w-[40%] text-sm md:text-base flex">
					{data.company_address}
				</p>
				<p className="w-[40%] text-sm md:text-base flex">
					{data.company_address}
				</p>
			</div>
			<div className="mt-5 text-sm md:text-base">
				<p className="">Dear {data.recipient_name},</p> <br />
				<p>{data.cover_letter}</p>
				<br />
				<p>Best regards,</p>
				<br />
				<p>Sam Johnson</p>
			</div>
		</div>
	);
};

export default CoverLetter;
