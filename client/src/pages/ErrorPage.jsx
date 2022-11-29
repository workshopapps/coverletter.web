import React from "react";
import img from "../Assets/not-found.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<main>
			<div>
				<img src={img} alt="not found" />
				<h3>Ohh! Page no found</h3>
				<p>We can't seem to find the page you're looking for</p>
				<Link to="/">back home</Link>
			</div>
		</main>
	);
};

export default ErrorPage;
