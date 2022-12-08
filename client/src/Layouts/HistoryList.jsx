import HistoryItem from "./HistoryItem";

const HistoryList = (props) => { 
	return (
		<div>
			<div className="grid grid-cols-grid gap-5 justify-center">
				{props.listItem.map((clList) => (
					<HistoryItem key={clList.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default HistoryList;
