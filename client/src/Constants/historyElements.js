import { ReactComponent as ProfileIcon } from "../Assets/profile-add.svg";
import { ReactComponent as DocumentIcon } from "../Assets/document-download.svg";
// import { ReactComponent as SecurityIcon } from "../Assets/lock.svg";

const historyElements = [
	{
		name: "Account",
		url: "/profile",
		icon: <ProfileIcon className="w-4 h-4" />,
	},
	{
		name: "Activity",
		url: "/history",
		icon: <DocumentIcon className="w-4 h-4" />,
	},
	// {
	// 	name: "Security",
	// 	url: "/reset",
	// 	icon: <SecurityIcon className="w-4 h-4" />,
	// },
];

export default historyElements;
