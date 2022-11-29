import HistoryItem from "./HistoryItem";

const HistoryList = (props) => {
	return (
		<div>
			<div className="grid grid-cols-grid gap-5 justify-center">
				{props.listItem.map((item) => (
					<HistoryItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default HistoryList;
