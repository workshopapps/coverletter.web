import HistoryItem from "./HistoryItem";
import cvHistory from "../Assets/cvHistory.png";

const HistoryList = (props) => {
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
