import React from "react";
import PropTypes from "prop-types";
import CareerBg from "../Assets/careerbg.svg";
import CardIcon1 from "../Assets/careercard-icon1.svg";
import CardIcon2 from "../Assets/careercard-icon2.svg";
import CardIcon3 from "../Assets/careercard-icon3.svg";
import CardIcon4 from "../Assets/careercard-icon4.svg";
import CardIcon5 from "../Assets/careercard-icon5.svg";
import CardIcon6 from "../Assets/careercard-icon6.svg";
import { ReactComponent as CareerArrowRight } from "../Assets/careerarrow-right.svg";
import { ReactComponent as CareerArrowDown } from "../Assets/careerarrow-down.svg";

const whyApplyList = [
	{
		icon: CardIcon1,
		title: "Our Diversity",
		overview:
			"With team members spread across Africa, America, and Europe. We are proud of the individuality and strength that each member of our team brings to the table.",
	},

	{
		icon: CardIcon2,
		title: "Paid Leave Benefit",
		overview:
			"All our team members are entitled to leave packages that includes off time payment to enjoy their holiday in any part of the world with two members of their family.",
	},

	{
		icon: CardIcon3,
		title: "Customer Centric",
		overview:
			"Our beautifully designed cover letter templates automatically handle the formatting as you work. Plus, our built-in spell-check feature helps ensure an error-free letter.",
	},

	{
		icon: CardIcon4,
		title: "Where We Need You",
		overview:
			"Irrespective of your current level in your career, we offer opportunities to join our team of creatives to invent timely solutions",
	},

	{
		icon: CardIcon5,
		title: "Career Growth",
		overview:
			"Working in our team allows you to fast-track your career and achieve the growth you desire in your industry. You get to have mentors within the organization would support your dreams.",
	},

	{
		icon: CardIcon6,
		title: "Our Track Record",
		overview:
			"Every employee’s goal is to work in an organization with years of experience and alongside  organizational success in project deliveries, customer service, workplace culture",
	},
];

const recruitProcess = [
	{
		title: "Application Review",
		bgColor: "bg-[#FF0000]",
	},
	{
		title: "Candidate interviewed",
		bgColor: "bg-[#0652DD]",
	},
	{
		title: "Candidate selected",
		bgColor: "bg-[#FFB800]",
	},
	{
		title: "Candidate onboarding",
		bgColor: "bg-[#00FF91]",
	},
];

const CareerBenefitsCard = ({ icon, title, overview }) => {
	return (
		<div className="bg-textWhite py-12 px-12 border border-textWhite rounded-lg">
			<div>
				<img src={icon} alt={title} />
				<h4 className="mt-4 font-semibold text-2xl leading-9">
					{title}
				</h4>
				<p className="mt-4 text-textBody font-normal leading-6">
					{overview}
				</p>
			</div>
		</div>
	);
};
CareerBenefitsCard.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	overview: PropTypes.string.isRequired,
};

const CareerStepsCard = ({ title, bgColor }) => {
	return (
		<div
			className={`relative rounded-lg h-[260px] bg-opacity-20 px-12 py-[46px] z-0 ${bgColor}`}
		>
			<CareerArrowRight />
			<p className="text-2xl text-textHeader leading-9 max-w-[176px]">
				{title}
			</p>
		</div>
	);
};

CareerStepsCard.protoTypes = {
	title: PropTypes.string.isRequired,
	bgColor: PropTypes.string.isRequired,
};

const Career = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
	React.useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
	});

	const [showOpenings, setShowOpenings] = React.useState(false);

	return (
		<div className="bg-background overflow-x-hidden">
			<div
				className="flex flex-col justify-center items-center bg-primaryDeep md:h-[295px] h-[216px] text-center md:py-[72px] py-[52px]"
				style={{
					backgroundImage: width >= 768 ? `url(${CareerBg})` : "none",
				}}
			>
				<h1 className="md:text-[56px] text-2xl font-bold md:leading-[72px] leading-10 text-textWhite">
					Join Our Team
				</h1>
				<p className="mt-[6px] text-textWhite md:text-2xl text-base md:leading-9 leading-6 font-normal sm:w-[617px] sm:px-0 px-5 m-auto">
					Work in a team the allows for inclusiveness, with a mix of
					talents working in a conducive environment.
				</p>
			</div>
			<div className=" bg-primaryLightest md:mx-[98px] mx-5 md:mt-[83px] mt-3 md:pb-[59px] pb-[30px] rounded-lg">
				<h2 className="text-center text-4xl text-textHeader font-bold leading-[48px] md:pt-[61px] pt-[26px] md:pb-[60px] pb-[30px]">
					Why Aplicar?
				</h2>

				<div className="grid lg:grid-cols-2 grid-cols-1 md:gap-[72px] gap-4 md:px-[108px] px-[19px]">
					{whyApplyList
						? whyApplyList.map((item, key) => (
								<CareerBenefitsCard
									key={key}
									icon={item.icon}
									title={item.title}
									overview={item.overview}
								/>
						  ))
						: ""}
				</div>
			</div>
			<div className="md:pt-[143px] pt-[127px] md:pb-[18px] pb-[57px]">
				<h1 className="text-center text-textHeader font-bold md:text-[40px] text-[32px] md:leading-[48px] leading-10 md:px-0 px-[49px] ">
					Our Recruitment Process
				</h1>

				<div className="md:px-[92px] px-[22px]">
					<div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1  md:gap-14 gap-[21px] mt-[18px]">
						{recruitProcess
							? recruitProcess.map((item, key) => (
									<CareerStepsCard
										title={item.title}
										key={key}
										bgColor={item.bgColor}
									/>
							  ))
							: ""}
					</div>
				</div>
			</div>
			<div className="pt-[136px] md:px-[58px] pb-[89px]">
				<div className="bg-primaryLight md:rounded-2xl">
					<div className=" md:py-[30px] py-[15px] px-[21px]">
						<div
							className="flex justify-between border-[1.5px] text-textWhite py-[26px] px-4 rounded-lg cursor-pointer"
							onClick={() => setShowOpenings(!showOpenings)}
						>
							<h3 className=" text-textHeader font-normal text-base">
								Current Openings
							</h3>
							<CareerArrowDown />
						</div>
						{showOpenings ? (
							<div className="bg-[#F0F0F8] px-4 border border-[#CAD0DD] rounded-b-lg rounded-l-lg">
								<p className="text-base leading-6 py-4">
									No Job Openings At This Time
								</p>
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Career;
