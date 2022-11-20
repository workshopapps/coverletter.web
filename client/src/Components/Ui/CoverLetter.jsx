import React from "react";
import { useGlobalContext } from "../../context/context";
const CoverLetter = () => {
	// const { coverLetter: data } = useGlobalContext();
	// console.log(data);

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
					{/* {data.company_address} */}
					10/11/2022
				</p>
				<p className="w-[40%] text-sm md:text-base flex">
					{/* {data.company_address} */}
					Famfresh & Co. 321 ilupeju Ave, Lagos, Nigeria
				</p>
			</div>
			<div className="mt-5 text-sm md:text-base">
				<p className="">
					Dear Mr. Richard,
					{/* Dear {data.recipient_name}, */}
				</p>{" "}
				<br />
				<p>
					{/* {data.cover_letter} */}I read with great interest your
					ad for a graphic designer for an organic coffee shop in
					Lagos serving vegetarian food and I am submitting my resume
					for your review and consideration. As a graphic designer, I
					understand the importance of logos in branding. Logo is
					considered as the soul of the brand. Therefore, I would like
					to contribute my talents to help you find a logo you desire.
					Besides, I have 4 years experience in designing logos and
					products for many customers in many fields such as food,
					medicine, technology, That makes me realize the importance
					of understanding customers to bring and give them the
					products they are most satisfied with. After all, a fresh
					idea, in line with current trends will be a good solution
					for you, and I will be happy to help you complete it. I look
					forward to your call. Thank you for your time and
					consideration.
				</p>
				<br />
				<p>Best regards,</p>
				<br />
				<p>Sam Johnson</p>
			</div>
		</div>
	);
};

export default CoverLetter;
