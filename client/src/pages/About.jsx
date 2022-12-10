import React from "react";
import WhoWeAre from "../Assets/who-we-are.png";
import Erica from "../Assets/erica.png";
import Ayomide from "../Assets/ayomide.png";
import Rotimi from "../Assets/rotimi.png";
import Harold from "../Assets/harold.png";
import Delight from "../Assets/Delight.png";
import Jewel from "../Assets/jewel.png";
import Mission from "../Assets/our-mission.png";
import History from "../Assets/our-history.png";
import doc_banner_md from "../Assets/doc-banner-md.svg";

import "../Layouts/About/About.css";

const About = () => {
	return (
		<>
			<div className="">
				<div className="about-hero flex  h-[312px] text-center py-10 px-[5%] xl:h-[392px]">
					<div className="m-auto">
						<h1 className="text-[white] text-[32px] mb-3 xl:text-[56px] xl:mb-5">
							About Coverly
						</h1>
						<p className="text-base text-[#CDDCF8] xl:text-[18px] lg:w-[780px] xl:w-[1068px] m-auto">
							Coverly is an outstanding and efficient website that
							helps job seekers to generate cover letters for any
							position. Applying for different jobs with different
							cover letters can be tasking, which is why we are
							here to help job seekers generate outstanding Cover
							letters for any position.
						</p>
					</div>
				</div>
			</div>

			<main className="bg-[#F2F2F7] ">
				<div className="">
					<div className="who-we-are bg-[white] flex lg:py-[40px]">
						<div className="grid grid-cols-1 lg:w-[990px] lw:w-[1350px] xl:w-[1200px] px-7 sm:px-[51px] mx-auto items-center md:grid-cols-2 gap-6 md:gap-16 my-[32px] sm:mt-[48px]">
							<div className="flex flex-col justify-center align-center">
								<h2 className="text-2xl md:text-[24px] sm:text-2xl lg:text-[24px] font-semibold">
									Who we are
								</h2>
								<p className="text-base md:text-[16px] sm:text-lg leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#6D6D6D] mt-4">
									At Coverly, we create unique Cover letters
									using our AI. These Cover letters would be
									as unique as you are. Our AI generates the
									Cover letter by using the information from
									the CV or Resume uploaded with additional
									information
								</p>
							</div>
							<div>
								<div>
									<img
										className="w-full"
										src={WhoWeAre}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="our-mission lg:w-[990px] lw:w-[1350px] xl:w-[1200px] px-6 sm:px-[51px] mx-auto">
						<div className="grid grid-cols-1 items-center md:grid-cols-2 lg:my-[100px] xl:my-[140px] md:gap-16 gap-6 mt-[70px] sm:mt-[48px]">
							<div className="order-2 md:order-1">
								<div>
									<img
										className="w-full"
										src={Mission}
										alt=""
									/>
								</div>
							</div>
							<div className="flex flex-col order-1 md:order-2 justify-center align-center">
								<h2 className="text-2xl md:text-[24px] sm:text-2xl lg:text-[24px] font-semibold">
									Our mission
								</h2>
								<p className="text-base md:text-[16px] sm:text-lg leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#6D6D6D] mt-4">
									Coverly helps you ace the job by creating a
									new cover letter every time you apply. Our
									mission is to help you create a strong,
									personalized, and meaningful cover letter
									that will increase your chances of getting a
									job interview!
								</p>
							</div>
						</div>
					</div>
					<div className="our-history bg-[white] py-[10px] mt-[80px] lg:mt-0 lg:py-[20px]">
						<div className="grid grid-cols-1 lg:w-[990px] lw:w-[1350px] xl:w-[1200px] px-6 sm:px-[51px] mx-auto items-center md:grid-cols-2  md:gap-12 gap-6 my-[70px]">
							<div className="text">
								<h2 className="text-2xl md:text-[24px] sm:text-2xl lg:text-[24px] font-semibold">
									Our History
								</h2>
								<p className="text-base sm:text-lg md:text-[16px] xl:text-[16px]  leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#6D6D6D] mt-4">
									<span className="block mb-4 lg:mb-3">
										At Coverly, we reckon that creating a
										cover letter ought to be a quick and
										easy procedure. Coverly began as a
										solution to the frequent dissatisfaction
										of users of online cover letter
										generators. It all began in 2022 when a
										group of like-minded individuals
										transformed an initial idea into a
										workable solution.
									</span>
									<span className="block lg:mb-3">
										The team came together to create a
										solution that comprises the various
										problems users face when using online
										cover letter generators.That is why we
										developed a solution that creates Cover
										letters tailored to your specific
										application.No other business was
										offering what we provided at that time.
									</span>
									<span className="hidden xl:block lg:text-[16px] ">
										We decided to focus solely on cover
										letter development to provide more value
										to our users.We discovered that a cover
										letter must follow a specific format to
										be read by hiring managers.Since then,
										we've introduced Coverly, which builds a
										cover letter for you using the details
										from your CV that will set you apart
										from the competitors and help you land a
										job faster.
									</span>
								</p>
							</div>
							<div className="our-history-image">
								<img src={History} alt="" className="w-full" />
								<p className="block xl:hidden text-base sm:text-lg md:text-[16px] leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#6D6D6D] mt-4">
									We decided to focus solely on cover letter
									development to provide more value to our
									users.We discovered that a cover letter must
									follow a specific format to be read by
									hiring managers.Since then, we've introduced
									Coverly, which builds a cover letter for you
									using the details from your CV that will set
									you apart from the competitors and help you
									land a job faster.
								</p>
							</div>
						</div>
					</div>
					<div className="mt-[32px] sm:mt-[48px] lg:mt-[58px] lg:w-[990px] lw:w-[1350px] xl:w-[1200px] px-6 sm:px-[51px] mx-auto pb-10 lg:pb-[100px]">
						<h2 className="text-[32px] xl:text-[40px] text-[#101010] text-center sm:text-2xl lg:text-[24px] font-semibold">
							Our Teams
						</h2>
						<p className="text-base text-center md:text-[18px] lg:w-[840px] lg:ml-auto lg:mr-auto xl:w-[1040px] xl:ml-auto xl:mr-auto sm:text-lg  leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#6D6D6D] mt-4">
							People are the foundation of every successful
							company. We strive to innovate and grow by meeting
							the people who motivate our team and we are proud of
							our team. Our team is a tribe that thrives in
							diversity.
						</p>
						<div className="grid py-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-9 lg:gap-7">
							<div className="">
								<div className="">
									<img
										className="w-full  object-cover rounded-lg"
										src={Erica}
										alt=""
									/>
								</div>

								<div className="">
									<p className="lg:text-[24px] text-xl sm:text-2xl mt-6 font-bold">
										Erica Osawaru
									</p>
									<p className="text-xs md:text-[12px] font-semibold text-[#0652DD] sm:text-xl leading-[22px] sm:leading-[27px] lg:leading-[33px]">
										TEAM LEAD FOR PRODUCT DESIGN
									</p>
									<p className="text-base sm:text-lg md:text-[16px] leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#6D6D6D] mt-2 sm:mt-3">
										Erica leads the Product design team by
										creating timely solutions for Coverly.
										She stays on top of our solutions and
										creates products that satisfy our users.
									</p>
								</div>
							</div>
							<div className="">
								<div className="">
									<img
										className="w-full object-cover rounded-lg"
										src={Ayomide}
										alt=""
									/>
								</div>

								<div className="">
									<p className="lg:text-[24px] text-xl sm:text-2xl mt-6 font-semibold">
										Adedokun Ayomide
									</p>
									<p className="text-xs md:text-[12px] text-[#0652DD] font-semibold sm:text-xl leading-[22px] sm:leading-[27px] lg:leading-[33px]">
										TEAM LEAD FOR MOBILE DEVELOPMENT
									</p>
									<p className="text-md sm:text-lg md:text-[16px] leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#6D6D6D] mt-2 sm:mt-3">
										Ayomide collaborates with other
										developers on the design and development
										of Coverly. He evaluates current
										technologies and delivers the latest
										standards.
									</p>
								</div>
							</div>
							<div className="">
								<div className="">
									<img
										className="w-full object-cover rounded-lg"
										src={Rotimi}
										alt=""
									/>
								</div>

								<div className="">
									<p className="lg:text-[24px] text-xl sm:text-2xl mt-6 font-semibold">
										Adelakun Rotimi
									</p>
									<p className="text-xs md:text-[12px] font-semibold text-[#0652DD] sm:text-xl leading-[22px] sm:leading-[27px] lg:leading-[33px]">
										TEAM LEAD FOR SALES AND MARKETING
									</p>
									<p className="text-md sm:text-lg md:text-[16px] leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#6D6D6D] mt-2 sm:mt-3">
										Rotimi leads our sales and marketing
										team. He implements our sales and
										marketing strategies and maintains
										customer relationship.
									</p>
								</div>
							</div>
							<div className="">
								<div className="">
									<img
										className="w-full object-cover rounded-lg"
										src={Harold}
										alt=""
									/>
								</div>

								<div className="">
									<p className="lg:text-[24px] text-xl sm:text-2xl mt-6 font-semibold">
										Harold Obasi
									</p>
									<p className="text-xs md:text-[12px] font-semibold text-[#0652DD] sm:text-xl leading-[22px] sm:leading-[27px] lg:leading-[33px]">
										TEAM LEAD FOR FRONTEND DEVELOPMENT
									</p>
									<p className="text-md sm:text-lg md:text-[16px] leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#6D6D6D] mt-2 sm:mt-3">
										Harold supervises and ensures the
										quality of the features provided to meet
										the standard. He leads the team to
										provide users with exceptional service
										and support.
									</p>
								</div>
							</div>
							<div className="">
								<div className="">
									<img
										className="w-full object-cover rounded-lg"
										src={Delight}
										alt=""
									/>
								</div>

								<div className="">
									<p className="lg:text-[24px] text-xl sm:text-2xl mt-6 font-semibold">
										Delight Fela Steve
									</p>
									<p className="text-xs md:text-[12px] font-semibold text-[#0652DD] sm:text-xl leading-[22px] sm:leading-[27px] lg:leading-[33px]">
										TEAM LEAD FOR BACKEND DEVELOPMENT
									</p>
									<p className="text-md sm:text-lg md:text-[16px] leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#6D6D6D] mt-2 sm:mt-3">
										Delight manages the entire software
										development lifecycle, including
										architecture, solution design, quality
										assurance and maintenance
									</p>
								</div>
							</div>
							<div className="">
								<div className="">
									<img
										className="w-full object-cover rounded-lg"
										src={Jewel}
										alt=""
									/>
								</div>

								<div className="">
									<p className="lg:text-[24px] text-xl sm:text-2xl mt-6 font-semibold">
										Jewel Uguru
									</p>
									<p className="text-xs md:text-[12px] font-semibold text-[#0652DD] sm:text-xl leading-[22px] sm:leading-[27px] lg:leading-[33px]">
										TEAM LEAD FOR PRODUCT MANAGEMENT
									</p>
									<p className="text-md sm:text-lg md:text-[16px] leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#6D6D6D] mt-2 sm:mt-3">
										Jewel oversees the development process
										of all products of Coverly. Jewel is
										credible for creating a list of all
										features thet the public demands from
										the product.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default About;
