import React from "react";
import { useGlobalContext } from "../../context/context";
const CoverLetter = () => {
<<<<<<< HEAD
	const { coverLetter: data } = useGlobalContext();

	// const data = {
	// 	cover_letter:
	// 		"\n\nDear Mr. / Ms. (Lastname): (or “Dear Campus Recruitment Representative/Hiring Manager”) \n \nRe:  Backend Developer at Google \n \nFirst paragraph: Briefly sum up your value to the employer by stating your interest in the \nposition and the organization. You should also list your relevant education in the opening. Your \ngoal is to capture the reader's attention and encourage them to read on! This paragraph \nhighlights what you will expand on and demonstrate in your resume. It summarizes your relevant \nand then indicates the top two or three skills that make you a great fit for the position. Also try \ndemonstrating your knowledge/interest in the organization by integrating something specific \nabout what you know about them (i.e., mission/mandate, projects/activities, research interests, \nstrategic goals) in relation to how you can contribute or skills you offer.  \n \nMiddle paragraphs: Further highlight your suitability for the position by expanding on your \nskills through specific examples of your previous accomplishments (i.e., work experience and \nroles, volunteer experience, and/or academic examples). Think from the employer’s point of view \nas you write. In what ways are you a good fit for the organization? Be sure to emphasize \noutcomes and results whenever possible. Try to keep your paragraphs to 3-5 concise, confident \nstatements. Remember that this letter will serve as a writing sample so grammar/spelling is \ncritical.  \n \nUse the closing paragraph to express your appreciation for reviewing your cover letter and \nresume.  This is also a great place to let them know how they can easily contact you. Be sure to \nlist that contacting you through the TRU Co-op program is also an option (email/phone).   \n \nSincerely, \n \nYour Signature (John Henry) \n \nTyped Name",
	// 	company_name: "Google",
	// 	company_address: "USA",
	// 	city: "California",
	// 	country: "USA",
	// 	years_of_exp: "3",
	// 	date: "12-11-2022",
	// 	recipient_name: "Mark",
	// 	recipient_department: "HR",
	// 	recipient_email: "t@email.com",
	// 	recipient_phone_no: "2223334446",
	// 	format: "pdf",
	// };
=======
	const { coverLetter: data, userData } = useGlobalContext();
>>>>>>> 20201fe41b5437a184231ed4f205e0383567be51

	return (
		<div className="w-[98%] bg-textWhite border-grey300 border-2 py-8 px-7 rounded-lg">
			<div className="flex w-full justify-between items-end">
				<p className="w-[50%] text-sm md:text-base flex text-grey300">
					{userData.address} / {userData.email}
				</p>
				<p className="w-[50%] text-right md:text-2xl text-sm font-black ">
					{userData.name}
				</p>
			</div>
			<hr className="w-full outline-none h-2 mt-2 bg-primaryDeep border-none" />
			<div className="mt-10 w-full">
				<p className="w-[40%] text-sm md:text-base flex">
					{data.company_address}
				</p>
				<p className="w-[40%] text-sm md:text-base flex">
					{data.company_address}
<<<<<<< HEAD
				</p>
			</div>
			<div className="mt-5 text-sm md:text-base">
				<p className="">Dear {data.recipient_name},</p> <br />
				<p>{data.cover_letter}</p>
				<br />
=======
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
>>>>>>> 20201fe41b5437a184231ed4f205e0383567be51
				<p>Best regards,</p>
				<br />
				<p>Sam Johnson</p> */}
			</div>
		</div>
	);
};

export default CoverLetter;
