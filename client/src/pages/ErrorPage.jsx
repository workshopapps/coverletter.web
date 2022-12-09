import React from "react";
import img from "../Assets/not-found.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<main className="max-w-screen-2xl m-auto pb-20">
			<div className="flex flex-col items-center">
				<img
					src={img}
					alt="not found"
					className="w-[500px] h-[500px]"
				/>
				<h3 className="text-3xl mb-4">Ohh! Page no found</h3>
				<p>We can't seem to find the page you're looking for</p>
				<Link to="/">back home</Link>
			</div>
		</main>
	);
};

export default ErrorPage;
