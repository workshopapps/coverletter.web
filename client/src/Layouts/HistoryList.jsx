import HistoryItem from "./HistoryItem";
import cvHistory from "../Assets/cvHistory.png";
import Button from "../Components/Ui/Button";
import { Link } from "react-router-dom";

const HistoryList = (props) => {
	if (props.Items.length < 1) {
		return (
			<div className="w-full h-full pb-[150px] pt-[50px] flex flex-col justify-center items-center text-center">
				<p className="sm:text-[1.5rem]">
					You have no cover letter saved
				</p>

				<Link to="/">
					<Button
						className={
							"btn px-4 md:px-7 btnPrimary mt-6 text-sm sm:text-md"
						}
						children={"Generate a Cover Letter"}
						disabled={false}
					></Button>
				</Link>
			</div>
		);
	}
	return (
		<div>
			<div className="grid gap-3">
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
