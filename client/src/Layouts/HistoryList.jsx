import HistoryItem from "./HistoryItem";
import cvHistory from "../Assets/cvHistory.png";
import Button from "../Components/Ui/Button";
import { Link } from "react-router-dom";
import { ReactComponent as NotFound } from "../Assets/not-found-history.svg";

const HistoryList = (props) => {
	if (props.Items.length < 1) {
		return (
			<div className="flex flex-col justify-center items-center text-center">
				<NotFound />
				<p className="sm:text-[1.5rem] text-grey800 text-2xl font-bold mt-[26px]">
					No Letter History Found
					<br />
					<span className="font-normal text-base text-grey400 w-[256px]">
						You have not generated any
						<br />
						cover letters
					</span>
				</p>
				<Link to="/generate">
					<Button
						className={
							"btn px-4 md:px-7 btnPrimary mt-6 text-sm sm:text-md md:w-[400px] h-12 md:text-base"
						}
						children={"Generate cover letter"}
						disabled={false}
					></Button>
				</Link>
			</div>
		);
	}
	return (
		<div>
			<div className="mb-8 max-[576px]:mb-1">
				<h1 className="text-grey800 text-[56px] leading-[4.5rem] max-[768px]:text-2xl">
					History
				</h1>
				<p className="text-grey400 text-2xl mt-1 max-[576px]:text-base">
					Cover Letters
				</p>
			</div>
			<p className="mt-9 text-grey800 font-semibold text-[24px] leading-[3rem] mb-8 max-[768px]:text-xl capitalize">
				saved cover letters
			</p>
			<div className="grid gap-3">
				{props.Items.map((clList, index) => {
					return (
						<HistoryItem
							hid={clList._id}
							item={clList}
							image={cvHistory}
							deleteCoverLetter={props.deleteCoverLetter}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default HistoryList;
