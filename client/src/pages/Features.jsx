import React from "react";

const BodyText = (props) => {
	const { children, className } = props;
	const defaultClassName = "text-base text-grey400 font-semibold mb-2";
	return <p className={`${defaultClassName} ${className}`}>{children}</p>;
};

const H1 = (props) => {
	const { children, className } = props;
	const defaultClassName =
		"text-5xl font-bold text-center leading-normal md:text-4xl";
	return <h1 className={`${defaultClassName} ${className}`}>{children}</h1>;
};

const Button = (props) => {
	const { type, label, text, href } = props;

	return (
		<button
			className={`${
				type === "secondary" ? "btnSecondary" : "btnPrimary"
			} p-3 rounded-md`}
		>
			<div>
				<p className="text-xs">{label}</p>
				<p className="font-bold">{text}</p>
			</div>
		</button>
	);
};

const Features = () => {
	return (
		<section className="md:px-24 px-8 mt-6 flex space-x-20 bg-background py-24 justify-center">
			<H1>
				Providing <span className="text-primaryMain">AI-powered</span>{" "}
				tools to <br />
				get you that job!
			</H1>
		</section>
	);
};

export default Features;
