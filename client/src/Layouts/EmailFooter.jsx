import { Link } from "react-router-dom";

const EmailFooter = () => {
	return (
		<footer>
			<ul className="block text-center mt-[100px] text-xs text-gray-400">
				<li className="inline-block mr-4">
					<Link to="/">©Coverly</Link>
				</li>
				<li className="inline-block mr-4 ">
					<Link to="/contactus">contact</Link>
				</li>
				<li className="inline-block mr-4 ">
					<Link to="/privacy-policy">Privacy & Terms</Link>
				</li>
			</ul>
		</footer>
	);
};

export default EmailFooter;
