import HistoryItem from "./HistoryItem";
import cvHistory from "../Assets/cvHistory.png";
import Button from "../Components/Ui/Button";
import { Link } from "react-router-dom";

const HistoryList = (props) => {
	if (props.Items.length < 1) {
		return (
			<div className="w-full h-full pb-[150px] pt-[50px] flex flex-col justify-center items-center text-center">
				<p className="sm:text-[1.5rem]">You have no cover letter.</p>
				<Link to="/">
					<Button
						className={
							"btn px-4 md:px-7 btnPrimary mt-6 text-sm sm:text-md"
						}
						children={"Create a Cover Letter"}
						disabled={false}
					></Button>
				</Link>
				
			</div>
		)
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
						/>
					);
				})}
			</div>
		</div>
	);
};

export default HistoryList;
