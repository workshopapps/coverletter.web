import { Link } from "react-router-dom";
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

// Cover Letter Images
import FirstCl from "../Assets/Images/cl1.png";
import SecondCl from "../Assets/Images/cl2.png";
import ThirdCl from "../Assets/Images/cl3.png";
import ForthCl from "../Assets/Images/cl4.png";
import FifthCl from "../Assets/Images/cl5.png";
import SixthCl from "../Assets/Images/cl6.png";
import SeventhCl from "../Assets/Images/cl7.png";
import EighthCl from "../Assets/Images/cl8.png";


const History = () => {
	return (
		<main className="bg-background py-10">
			<div className="max-w-screen-2xl m-auto px-5">
				<div className="mb-16 max-[576px]:mb-8">
					<h1 className="text-grey800 text-[56px] leading-[4.5rem] max-[768px]:text-2xl">
						History
					</h1>
					<p className="text-grey400 text-2xl mt-1 max-[576px]:text-base">
						View previous CVs and cover letters
					</p>
				</div>
				<div className="bg-white px-12 py-9 mb-[100px] max-[567px]:px-0">
					<div className="flex justify-between items-center mb-8 max-[567px]:px-4">
						<p className="text-grey800 font-semibold text-[40px] leading-[3rem] max-[768px]:text-xl max-[567px]:text-sm">
							Recently uploaded CVs
						</p>
						<Link
							to="/see-all-history"
							className="text-primaryMain cursor-pointer font-bold text-2xl underline max-[768px]:text-xl max-[567px]:text-sm"
						>
							See all
						</Link>
					</div>
					<div className="grid grid-cols-grid gap-5">
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
				<div className="bg-white px-12 py-9">
					<p className="text-grey800 font-semibold text-[40px] leading-[3rem] mb-8 max-[768px]:text-xl">
						All Cover Letters
					</p>
					<div className="max-[576px]:flex max-[576px]:justify-center">
						<div className="grid grid-cols-grid gap-5 justify-center">
							<HistoryList
								src={FirstCl}
								title="Chevron Cover Letter"
								dateCreated="Created 1 day ago"
								option={true}
							/>
							<HistoryList
								src={ThirdCl}
								title="Chevron Cover Letter"
								dateCreated="Created 1 day ago"
								option={true}
								// onDisplayModal={openModal}
							/>
							<HistoryList
								src={FifthCl}
								title="Chevron Cover Letter"
								dateCreated="Created 1 day ago"
								option={true}
								// onDisplayModal={openModal}
							/>
							<HistoryList
								src={SeventhCl}
								title="Chevron Cover Letter"
								dateCreated="Created 1 day ago"
								option={true}
								// onDisplayModal={openModal}
							/>
							<HistoryList
								src={SecondCl}
								title="Chevron Cover Letter"
								dateCreated="Created 1 day ago"
								option={true}
							/>
							<HistoryList
								src={ForthCl}
								title="Chevron Cover Letter"
								dateCreated="Created 1 day ago"
								option={true}
								// onDisplayModal={openModal}
							/>
							<HistoryList
								src={SixthCl}
								title="Chevron Cover Letter"
								dateCreated="Created 1 day ago"
								option={true}
								// onDisplayModal={openModal}
							/>
							<HistoryList
								src={EighthCl}
								title="Chevron Cover Letter"
								dateCreated="Created 1 day ago"
								option={true}
								// onDisplayModal={openModal}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default History;
