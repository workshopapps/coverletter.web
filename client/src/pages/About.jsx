import React from "react";
import { Link } from "react-router-dom";
import WhoWeAre from "../Assets/who-we-are.png";
import Erica from "../Assets/erica.png";
import Ayomide from "../Assets/ayomide.png";
import Rotimi from "../Assets/rotimi.png";
import Harold from "../Assets/harold.png";
import Destiny from "../Assets/destiny.png";
import Jewel from "../Assets/jewel.png";
import Mission from "../Assets/our-mission.png";
import Banner from "../Assets/about-banner.svg";

const About = () => {
	return (
		<>
			<div className="">
				<img
					className="w-full h-40 lg:h-full object-cover"
					src={Banner}
					alt=""
				/>
			</div>

			<main className="bg-[#F2F2F7] py-[26px] sm:py-[22px] lg:py-10">
				<div className="container max-w-6xl px-6 sm:px-[51px] mx-auto">
					<p className="text-md sm:text-lg md:text-xl leading-[22px] sm:leading-6 md:leading-7 text-[#6D6D6D] py-5">
						Aplicar is an outstanding and efficient website that
						helps job seekers to generate cover letters for any
						position. Applying for different jobs with different
						cover letters can be tasking, which is why we are here
						to help job seekers generate outstanding Cover letters
						for any position.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-[32px] sm:mt-[48px] lg:mt-[58px]">
						<div className="flex flex-col justify-center align-center">
							<h2 className="text-xl sm:text-2xl lg:text-[32px] font-semibold">
								Who we are
							</h2>
							<p className="text-md sm:text-lg md:text-xl leading-[22px] sm:leading-6 md:leading-7 text-[#6D6D6D] mt-4">
								At Aplicar, we create unique Cover letters using
								our AI. These Cover letters would be as unique
								as you are. Our AI generates the Cover letter by
								using the information from the CV or Resume
								uploaded with additional information
							</p>
						</div>
						<div>
							<div>
								<img className="w-full" src={WhoWeAre} alt="" />
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-[32px] sm:mt-[48px] lg:mt-[58px]">
						<div className="order-2 md:order-1">
							<div>
								<img className="w-full" src={Mission} alt="" />
							</div>
						</div>
						<div className="flex flex-col order-1 md:order-2 justify-center align-center">
							<h2 className="text-xl sm:text-2xl lg:text-[32px] font-semibold">
								Our mission
							</h2>
							<p className="text-md sm:text-lg md:text-xl leading-[22px] sm:leading-6 md:leading-7 text-[#6D6D6D] mt-4">
								Aplicar helps you ace the job by creating a new
								cover letter every time you apply. Our mission
								is to help you create a strong, personalized,
								and meaningful cover letter that will increase
								your chances of getting a job interview!
							</p>
						</div>
					</div>
					<div className="mt-[32px] sm:mt-[48px] lg:mt-[58px]">
						<h2 className="text-xl sm:text-2xl lg:text-[32px] font-semibold">
							Our History
						</h2>
						<p className="text-md sm:text-lg md:text-xl leading-[22px] sm:leading-6 md:leading-7 text-[#6D6D6D] mt-4">
							At Aplicar, we reckon that creating a cover letter
							ought to be a quick and easy procedure. Aplicar
							began as a solution to the frequent dissatisfaction
							of users of online cover letter generators. It all
							began in 2022 when a group of like-minded
							individuals transformed an initial idea into a
							workable solution.The team came together to create a
							solution that comprises the various problems users
							face when using online cover letter generators.That
							is why we developed a solution that creates Cover
							letters tailored to your specific application.No
							other business was offering what we provided at that
							time.We decided to focus solely on cover letter
							development to provide more value to our users.We
							discovered that a cover letter must follow a
							specific format to be read by hiring managers.Since
							then, we've introduced Aplicar, which builds a cover
							letter for you using the details from your CV that
							will set you apart from the competitors and help you
							land a job faster.
						</p>
					</div>
					<div className="mt-[32px] sm:mt-[48px] lg:mt-[58px]">
						<h2 className="text-xl sm:text-2xl lg:text-[32px] font-semibold">
							Our Teams
						</h2>
						<p className="text-md sm:text-lg md:text-xl leading-[22px] sm:leading-6 md:leading-7 text-[#6D6D6D] mt-4">
							People are the foundation of every successful
							company. We strive to innovate and grow by meeting
							the people who motivate our team and we are proud of
							our team. Our team is a tribe that thrives in
							diversity.
						</p>
						<div className="grid py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
							<div className="">
								<div className="lg:max-h-[344px] lg:max-w-[317px]">
									<img
										className="w-full object-cover"
										src={Erica}
										alt=""
									/>
								</div>

								<div className="">
									<p className=" text-xl sm:text-2xl text-[32px] mt-6 font-semibold">
										Erica Osawaru
									</p>
									<p className="text-[16px] sm:text-xl md:text-2xl leading-[22px] sm:leading-6 lg:leading-8 mt-2">
										TEAM LEAD FOR PRODUCT DESIGN
									</p>
									<p className="text-md sm:text-lg md:text-xl leading-[22px] sm:leading-6 md:leading-7 text-[#6D6D6D] mt-2 sm:mt-4">
										Erica leads the Product design team by
										creating timely solutions for Aplicar.
										Erica stays on top of our solutions and
										creates products that satisfy our users.
									</p>
								</div>
							</div>
							<div className="">
								<div className="lg:max-h-[344px] lg:max-w-[317px]">
									<img
										className="w-full object-cover"
										src={Ayomide}
										alt=""
									/>
								</div>

								<div className="">
									<p className="text-xl sm:text-2xl text-[32px] mt-6 font-semibold">
										Adedokun Ayomide
									</p>
									<p className="text-[16px] sm:text-xl md:text-2xl leading-[22px] sm:leading-6 lg:leading-8 mt-2">
										TEAM LEAD FOR MOBILE DEVELOPMENT
									</p>
									<p className="text-md sm:text-lg md:text-xl leading-[22px] sm:leading-6 md:leading-7 text-[#6D6D6D] mt-2 sm:mt-4">
										Ayomide collaborates with other
										developers on the design and development
										of Aplicar. He evaluates current
										technologies and delivers the latest
										standards.
									</p>
								</div>
							</div>
							<div className="">
								<div className="lg:max-h-[344px] lg:max-w-[317px]">
									<img
										className="w-full object-cover"
										src={Rotimi}
										alt=""
									/>
								</div>

								<div className="">
									<p className="text-xl sm:text-2xl text-[32px] mt-6 font-semibold">
										Adelakun Rotimi
									</p>
									<p className="text-[16px] sm:text-xl md:text-2xl leading-[22px] sm:leading-6 lg:leading-8 mt-2">
										TEAM LEAD FOR SALES AND MARKETING
									</p>
									<p className="text-md sm:text-lg md:text-xl leading-[22px] sm:leading-6 md:leading-7 text-[#6D6D6D] mt-2 sm:mt-4">
										Rotimi leads our sales and marketing
										team. He implements our sales and
										marketing strategies and maintains
										customer relationship.
									</p>
								</div>
							</div>
							<div className="">
								<div className="lg:max-h-[344px] lg:max-w-[317px]">
									<img
										className="w-full object-cover"
										src={Harold}
										alt=""
									/>
								</div>

								<div className="">
									<p className="text-xl sm:text-2xl text-[32px] mt-6 font-semibold">
										Harold Obasi
									</p>
									<p className="text-[16px] sm:text-xl md:text-2xl leading-[22px] sm:leading-6 lg:leading-8 mt-2">
										TEAM LEAD FOR FRONTEND DEVELOPMENT
									</p>
									<p className="text-md sm:text-lg md:text-xl leading-[22px] sm:leading-6 md:leading-7 text-[#6D6D6D] mt-2 sm:mt-4">
										Harold supervises and ensures the
										quality of the features provided to meet
										the standard. He leads the team to
										provide users with exceptional service
										and support.
									</p>
								</div>
							</div>
							<div className="">
								<div className="lg:max-h-[344px] lg:max-w-[317px]">
									<img
										className="w-full object-cover"
										src={Destiny}
										alt=""
									/>
								</div>

								<div className="">
									<p className="text-xl sm:text-2xl text-[32px] mt-6 font-semibold">
										Destiny Aigbe
									</p>
									<p className="text-[16px] sm:text-xl md:text-2xl leading-[22px] sm:leading-6 lg:leading-8 mt-2">
										TEAM LEAD FOR BACKEND DEVELOPMENT
									</p>
									<p className="text-md sm:text-lg md:text-xl leading-[22px] sm:leading-6 md:leading-7 text-[#6D6D6D] mt-2 sm:mt-4">
										Destiny manages the entire software
										development lifecycle, including
										architecture, solution design, quality
										assurance and maintenance
									</p>
								</div>
							</div>
							<div className="">
								<div className="lg:max-h-[344px] lg:max-w-[317px]">
									<img
										className="w-full object-cover"
										src={Jewel}
										alt=""
									/>
								</div>

								<div className="">
									<p className="text-xl sm:text-2xl text-[32px] mt-6 font-semibold">
										Jewel Uguru
									</p>
									<p className="text-[16px] sm:text-xl md:text-2xl leading-[22px] sm:leading-6 lg:leading-8 mt-2">
										TEAM LEAD FOR PROJECT MANAGEMENT
									</p>
									<p className="text-md sm:text-lg md:text-xl leading-[22px] sm:leading-6 md:leading-7 text-[#6D6D6D] mt-2 sm:mt-4">
										Jewel oversees the development process
										of all products of Aplicar. Jewel is
										credible for creating a list of all
										features thet the public demands from
										the product.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-[32px] sm:mt-[48px] lg:mt-[58px] mb-[150px]">
						<h2 className="text-xl sm:text-2xl lg:text-[32px] font-semibold">
							Resources
						</h2>
						<div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-14">
							<div className="bg-white flex flex-col p-10  justify-center align-center h-full">
								<p className="font-semibold text-xl sm:text-2xl">
									Blog
								</p>
								<p className="mt-3 text-base sm:text-lg lg:text-xl text-[#6D6D6D] max-w-[350px]">
									Click on the link below to read more about
									Aplica on our blog
								</p>

								<Link to="/blog">
									<p className="mt-5 text-base sm:text-lg lg:text-xl text-[#03296F] ">
										Click here
									</p>
								</Link>
							</div>

							<div className="bg-white flex flex-col p-10 justify-center align-center  h-full">
								<p className="font-semibold text-xl sm:text-2xl">
									Careers
								</p>
								<p className="mt-3 text-base sm:text-lg lg:text-xl text-[#6D6D6D] max-w-[350px]">
									Looking for career opportunity? Join out
									team to unlock creativity.
								</p>
								<Link to="/career">
									<p className="mt-5 text-base sm:text-lg lg:text-xl text-[#03296F]">
										Click here
									</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default About;
