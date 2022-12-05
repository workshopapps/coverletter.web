import { useState } from "react";
import { Parallax } from "react-parallax";
import Button from "../Components/Ui/Button";
import backdrop from "../Assets/backdrop.png";
import comingSoon from "../Assets/comingSoon.png";

const Pricing = () => {
	const [shouldShow, setShouldShow] = useState(true);
	const Plate = ({ planName, monthly, yearly, features, className }) => {
		const removeMain = () => {
			setShouldShow(!shouldShow);
		};
		return (
			<div
				className={`bg-textWhite flex flex-col justify-center w-[327px] m-auto xl:w-[403px] md:w-[403px] h-[900px] text-center rounded-md border ${className}`}
				// space-y-16
			>
				<div className="space-y-4 ">
					<p className="text-[24px] text-center font-bold px-8 ">
						{planName}
					</p>

					<div>
						<p className="text-center text-[20px] ">
							${monthly}/{monthly === "0" ? "" : "monthly"}
						</p>

						{yearly && (
							<p className="text-center text-[20px] px-8">
								${yearly}/year
							</p>
						)}
					</div>
				</div>

				<ul className="space-y-10 text-[14px] text-[#6D6D6D] mt-7">
					{features.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<div className="flex justify-center">
					<Button
						className="btn btnPrimary btnShort w-full mt-7 md:mt-20 mx-5"
						onClick={removeMain}
					>
						Get Access
					</Button>
				</div>
			</div>
		);
	};
	const freeFeatures = [
		"-Limited PDF downloads",
		"-Limited cover letter generation",
		"-Limited cover letter edits",
	];

	const professionalFeatures = [
		"-Unlimited PDF Downloads",
		"-Unlimited Cover Letters generation",
		"-Free linkedin profile generator",
		"-7 day money back guarantee",
		"-Free cover letter critique from an HR expert",
		"-Storage space for cover letters generated",
	];

	const modernFeatures = [
		...professionalFeatures,
		"-Free resume generator",
		"-Free relocation cover letter generator",
		"-24/7 standby support from team",
	];
	return (
		<div className="bg-background">
			<Parallax
				bgImage={backdrop}
				blur={0}
				bgImageAlt="blue backdrop"
				strength={600}
			>
				<div className="h-[400px] text-textWhite text-center">
					<p className="text-[30px] sm:text-[32px] md:text-[40px] mt-16 mb-7">
						Pricing
					</p>
					<p className="text-[16px] xl:text-[56px] mb-5">
						Find the right pricing that suits you
					</p>
					<p className="text-[16px] md:text-[24px] ">
						Monthly: Pay for one month and get all benefits needed
						for 30 days
					</p>
					<p className="text-[24px] ">
						Yearly: Get $6 off with yearly plan
					</p>
				</div>
			</Parallax>

			{shouldShow && (
				<div>
					{/* <div className="pb-36 xl:h-[1150px] border absolute flex flex-col items-center xl:justify-between space-y-5 xl:space-y-0 xl:flex-row xl:items-start top-[70%] lg:top-[85%] w-full px-5"> */}
					<div className="mt-10 pb-36 grid grid-cols-1 lw:justify-items-start gap-10 lw:grid-cols-3 lw:gap-3 border border-[red] lw:w-[1250px] lw:ml-auto lw:mr-auto ">
						<Plate
							planName="Free Plan"
							monthly="0"
							features={freeFeatures}
							className="h-[370px]  md:h-[424px] border border-[white] rounded-lg"
						/>
						<Plate
							planName="Professional Plan"
							monthly="3"
							yearly="30"
							features={professionalFeatures}
							className="h-[600px] md:h-[650px] border border-[#0652DD] rounded-lg"
						/>
						<Plate
							planName="Modern Plan"
							monthly="5"
							yearly="54"
							features={modernFeatures}
							className="h-[774px] md:h-[816px] border border-[white] rounded-lg"
						/>
					</div>
					{/* <div className="h-[2700px] lg:h-[2600px] xl:h-[800px]"></div> */}
				</div>
			)}
			{!shouldShow && (
				<div className="py-40 text-center">
					<div className="co w-[335px] md:w-[595px] m-auto">
						<button className="py-[18px] px-[26px] md:w-[320px] md:py-[22px] md:text-[40px] bg-[#03286d] text-[20px] text-[white] rounded-lg">
							Coming Soon
						</button>
						<div className="flex justify-center mt-5">
							<p className="text-primaryDeep font-bold text-center text-base md:text-[24px] w-[481px] md:leading-[40px]">
								{" "}
								Enjoy endless features with our new paid version
								coming soon!!!
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Pricing;
