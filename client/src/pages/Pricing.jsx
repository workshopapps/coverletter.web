import React from "react";
import { Parallax } from "react-parallax";
import Button from "../Components/Ui/Button";
import backdrop from "../Assets/backdrop.png";

const Pricing = () => {
	const features1 = [
		"-Unlimited PDF Downloads",
		"-Unlimited Cover Letters generation",
		"-Free linkedin profile generator",
		"-7 day money back guarantee",
		"-Free cover letter critique from an HR expert",
		"-Storage space for cover letters generated",
	];

	const Plate = ({ planName, monthly, yearly, features, className }) => {
		return (
			<div
				className={`bg-textWhite w-[624px] rounded-md py-40 border ${className}`}
			>
				<p className="text-[56px] mb-5 text-center font-bold px-8">
					{planName}
				</p>
				<p className="font-bold text-center text-[40px] px-8">
					${monthly}/month
				</p>
				<p className="font-bold text-center text-[40px] mb-20 px-8">
					${yearly}/year
				</p>
				<ul className="px-16 space-y-6 mb-20">
					{features.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<div className="flex justify-center">
					<Button className="btn btnPrimary btnLong">
						Get Access
					</Button>
				</div>
			</div>
		);
	};
	return (
		<div className="bg-background">
			<Parallax
				bgImage={backdrop}
				blur={0}
				bgImageAlt="blue backdrop"
				strength={600}
			>
				<div className="h-screen text-textWhite text-center">
					<p className="text-[40px] mt-16 mb-7">Pricing</p>
					<p className="text-[32px] xl:text-[56px] mb-5">
						The right for you, whoever you are
					</p>
					<p className="text-[24px] ">
						Pay for one month and get all benefits needed for 30
						days
					</p>
					<p className="text-[24px] ">
						Yearly: Get $6 off with yearly plan
					</p>
				</div>
			</Parallax>
			<div className="xl:h-[1200px] absolute flex flex-col items-center space-y-5 xl:space-y-0 xl:flex-row xl:items-start top-[75%] w-full px-5">
				<Plate
					planName="Professional Plan"
					monthly="3"
					yearly="30"
					features={features1}
				/>
				<Plate
					planName="Modern Plan"
					monthly="5"
					yearly="54"
					features={features1}
					className="xl:self-end"
				/>
			</div>
			<div className="h-[1900px] xl:h-[1000px]"></div>
		</div>
	);
};

export default Pricing;
