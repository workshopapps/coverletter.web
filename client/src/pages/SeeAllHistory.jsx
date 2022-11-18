import React from "react";
import HistoryList from "../Layouts/HistoryList";

// CVImages
import FirstCV from "../Assets/Images/cv1.png";
import SecondCV from "../Assets/Images/cv2.png";
import ThirdCV from "../Assets/Images/cv3.png";
import ForthCV from "../Assets/Images/cv4.png";
import FifthCV from "../Assets/Images/cv5.png";
import SixthCV from "../Assets/Images/cv6.png";
import SeventhCV from "../Assets/Images/cv7.png";
import EighthCV from "../Assets/Images/cv8.png";

const SeeAllHistory = () => {
	return (
		<main className="bg-background py-10">
			<div className="max-w-screen-2xl m-auto px-5">
				<div className="mb-16 max-[576px]:mb-8">
					<h1 className="text-grey800 text-[56px] leading-[4.5rem] max-[576px]:text-2xl">
						Recently uploaded CVs
					</h1>
					<p className="text-grey400 text-2xl mt-1 max-[576px]:text-base">
						See all your CVs use d to generate cover letters
					</p>
				</div>
				<div className="bg-white px-12 py-9 max-[576px]:flex max-[576px]:justify-center">
					<div className="grid grid-cols-grid gap-5 justify-center">
						<HistoryList
							src={FirstCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={ThirdCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={FifthCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={SeventhCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={SecondCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={ForthCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={SixthCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={EighthCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={FirstCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={ThirdCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={FifthCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={SeventhCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={SecondCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={ForthCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={SixthCV}
							message="Generate new  Cover Letter"
						/>
						<HistoryList
							src={EighthCV}
							message="Generate new  Cover Letter"
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default SeeAllHistory;
