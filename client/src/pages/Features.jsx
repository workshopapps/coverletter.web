import React from "react";
import stackLettersImg from "../Assets/stack-letters.svg";
import feature1 from "../Assets/feature1.svg";
import feature2 from "../Assets/feature2.svg";
import feature3 from "../Assets/feature3.svg";
import feature4 from "../Assets/feature4.svg";
import feature5 from "../Assets/feature5.svg";

const BodyText = (props) => {
	const { children, className } = props;
	const defaultClassName = "text-base text-grey400 font-semibold";
	return <p className={`${defaultClassName} ${className}`}>{children}</p>;
};

const H1 = (props) => {
	const { children, className } = props;
	const defaultClassName =
		"text-3xl leading-10 font-bold leading-normal  md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed xl:text-6xl xl:leading-relaxed";
	return <h1 className={`${defaultClassName} ${className}`}>{children}</h1>;
};

const Button = (props) => {
	const { type, text } = props;
	const defaultClassName =
		"btnPrimary py-4 px-8 rounded-md mx-auto font-bold";
	const primaryClassName = "bg-primaryMain";
	const secondaryClassName = "bg-secondaryMain";
	return (
		<button
			className={`${defaultClassName} ${
				type === "primary" ? primaryClassName : secondaryClassName
			}`}
		>
			{text}
		</button>
	);
};

const featureCards = (props) => {
	const { title, body, img, textColor, btn } = props;
	return (
		<div className="flex flex-col gap-4 md:flex-row md:gap-16 items-center w-full">
			<div className="flex-none">
				<img
					src={img}
					alt=""
					className="	md:max-w-[200px] lg:max-w-[500px]"
				/>
			</div>
			<div className="flex-auto">
				{/* add button if it passed as props */}
				{btn && (
					<button
						className="btn 
					bg-primaryMain
					text-textWhite px-4 py-2 rounded-full mb-4"
					>
						{btn}
					</button>
				)}
				<h2
					className={` text-2xl font-bold xl:text-4xl ${
						textColor ? "" : "text-textWhite"
					} `}
					style={{
						color: textColor ? textColor + "!important" : "",
					}}
				>
					{title}
				</h2>
				<p
					className={`text-base ${
						textColor ? "" : "text-textWhite"
					} mt-6 lg:max-w-[60%]`}
					style={{
						color: textColor ? textColor : "",
					}}
				>
					{body}
				</p>
			</div>
		</div>
	);
};

const featureCards2 = (props) => {
	const { title, body, img, textColor, btn } = props;

	return (
		<div className="flex flex-col-reverse gap-4 md:flex-row md:gap-16 items-center w-full">
			<div className="flex-auto ">
				{/* add button if it passed as props */}
				{btn && <Button type="primary" text={btn} />}

				<h2
					className={` text-2xl font-bold xl:text-4xl ${
						textColor ? "" : "text-textWhite"
					} `}
					style={{
						color: textColor ? textColor + "!important" : "",
					}}
				>
					{title}
				</h2>
				<p
					className={`text-base ${
						textColor ? "" : "text-textWhite"
					} mt-6 lg:max-w-[60%]`}
					style={{
						color: textColor ? textColor : "",
					}}
				>
					{body}
				</p>
			</div>
			<div className="flex-none">
				<img
					src={img}
					alt=""
					className="md:max-w-[200px] lg:max-w-[500px]"
				/>
			</div>
		</div>
	);
};

// md:w-56 md:h-56 lg:w-64 xl:w-72

const Features = () => {
	return (
		<>
			<section className="bg-background">
				<div className="section-content px-8 mt-6 flex flex-col gap-7  py-12 justify-center md:py-16 md:px-36 lg:py-24 lg:px-48 xl:px-104 bg-no-repeat bg-none">
					<H1 className="text-center">
						Providing{" "}
						<span className="text-primaryMain">AI-powered</span>{" "}
						tools to <br className="hidden xl:block" />
						get you that job!
					</H1>
					<BodyText className="text-center font-semibold">
						Discover why our beta users reported a 45% increase in
						response rate from employers after using our product.
					</BodyText>

					<Button type="primary" text="Start for free" />
				</div>
			</section>

			<section className="bg-primaryMain p-12">
				<div className="featureOne-content  relative container mx-auto max-w-[1400px] ">
					{/* import feature cards */}
					<div className="featureOne-cards flex flex-col gap-6 md:flex-row mb-20">
						{featureCards({
							title: "Customization",
							body: "The most powerful cover letter generator – Aplicar helps you write the perfect cover letter for your job applications. You can create your befitting Cover Letter in minutes. Aplicar AI uses excellent suggestions that match your personality and style. Aplicar will generate a job application/cover letter to fit all jobs, with 100% accuracy guaranteed.",

							img: feature1,
						})}
					</div>
					<div className="featureOne-cards flex flex-col gap-6 md:flex-row ">
						{featureCards2({
							title: "Personalization",
							body: "The most powerful cover letter generator – Aplicar helps you write the perfect cover letter for your job applications. You can create your befitting Cover Letter in minutes. Aplicar AI uses excellent suggestions that match your personality and style. Aplicar will generate a job application/cover letter to fit all jobs, with 100% accuracy guaranteed.",

							img: feature2,
						})}
					</div>
				</div>
			</section>

			<section className="bg-white p-12">
				<div className="featureOne-content  relative container mx-auto max-w-[1400px] ">
					{/* import feature cards */}
					<div className="featureOne-cards flex flex-col gap-6 md:flex-row mb-20">
						{featureCards({
							title: "LinkedIn Profiles",
							body: "Aplicar creates not just cover letters but letters you can even use on your LinkedIn profiles. Attract recruiters with your motivating talents and traits Aplicar creates for you. Generates professional-looking, personalized profile introductions for top employers in your industry.",

							img: feature3,
							textColor: "grey800",
						})}
					</div>
					<div className="featureOne-cards flex flex-col gap-6 md:flex-row ">
						{featureCards2({
							title: "Eye Catching To Recruiters",
							body: 'Aplicar generates cover letters that speaks directly to recruiters. The job you are applying for becomes a litter easier to get when recruiters admire your cover letter. Cover letters are important, so Aplicar has gone the extra mile to make them perfect and tailored to your personality. You may be asking yourself "How can I make my cover letter perfect, without wasting my time or someone else"s?" – The answer is Aplicar.',

							img: feature4,
							textColor: "grey800",
						})}
					</div>
				</div>
			</section>

			<section className="bg-background p-12">
				<div className="featureOne-content  relative container mx-auto max-w-[1400px] ">
					{/* import feature cards */}
					<div className="featureOne-cards flex flex-col gap-6 md:flex-row mb-20">
						{featureCards({
							title: "Create multiple templates at a go",
							body: "Aplicar creates not just cover letters but letters you can even use on your LinkedIn profiles. Attract recruiters with your motivating talents and traits Aplicar creates for you. Generates professional-looking, personalized profile introductions for top employers in your industry.",

							img: feature5,
							textColor: "grey800",
							btn: "Start for free",
						})}
					</div>
					<div className="featureOne-cards flex flex-col gap-6 md:flex-row "></div>
				</div>

				<div className="featureOne-content  relative container mx-auto max-w-[1400px] bg-primaryDeep p-10 rounded-lg flex flex-col items-center justify-center gap-4">
					<div className="lg:max-w-[1000px]">
						<H1 className=" text-textWhite text-center leading-normal lg:max-w[text-left]">
							{" "}
							Increase your chances of getting employed
						</H1>
						<BodyText className="text-center text-textWhite">
							Start for free with no credit card required.
						</BodyText>
					</div>
					<Button type="secondary" text="Start for free" />
				</div>
			</section>
		</>
	);
};

export default Features;
