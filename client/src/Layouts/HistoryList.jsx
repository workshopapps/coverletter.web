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
				<p className="sm:text-[1.5rem] text-grey800 text-2xl font-bold">
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
			<div className="grid grid-cols-grid gap-5 justify-center">
				{props.Items.map((clList) => {
					return (
						<HistoryItem
							hid={clList._id}
							item={clList}
							image={cvHistory}
							deleteCoverLetter={props.deleteCoverLetter}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default HistoryList;
