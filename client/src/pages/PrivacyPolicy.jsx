import React from "react";
import Button from "../Components/Ui/Button";
import BannerLogo from "../Assets/bannerLogo.png";
import privacyBannerElements from "../Constants/privacyBannerElements";

const PrivacyPolicy = () => {
	return (
		<div className="bg-background">
			<div
				id="top"
				className="h-full relative scroll-smooth pb-[80px] bg-background"
			>
				<div
					id="banner"
					className="w-full flex flex-col justify-center items-center gap-[8px] "
				>
					<div id="banner_bg" className="w-full bg-primaryDeep">
						<div className="max-w-screen-2xl m-auto uppercase text-textWhite h-[216px] font-bold flex flex-col gap-[8px] justify-center items-center relative overflow-hidden">
							<p className="text-base z-20">Understanding our</p>
							<h1 className="text-[32px] sm:text-[56px] z-20">
								{" "}
								Privacy Policy
							</h1>
							{privacyBannerElements.map((banner) => (
								<img
									key={banner.id}
									src={BannerLogo}
									className={banner.class}
									alt="banner_logo"
								/>
							))}
						</div>
					</div>
					<h2 className="text-base text-textBody font-normal">
						Last Updated November 15th, 2022.
					</h2>
				</div>
				<main className="max-w-screen-2xl m-auto px-[25px] sm:px-[47px] xl:px-[96px] mt-[68px] flex flex-col-reverse gap-[50px] md:flex-row justify-between relative">
					<section
						id="privacy_policy"
						className="md:max-w-[460px] lg:max-w-[822px] flex flex-col gap-[56px]"
					>
						<h1 className="text-[16px] sm:text-[20px] lg:text-2xl font-semibold text-textBody">
							This Privacy Policy will help you better understand
							how we collect, use , and share your personal
							information
						</h1>
						<div className="flex flex-col gap-[60px]">
							<div className="flex flex-col gap-[20px]">
								<p
									id="personal_information"
									className="flex gap-2 items-center font-bold text-textHeader"
								>
									<span className="text-[20px]">1.</span>
									<span className="text-base">
										Personal information we collect
									</span>
								</p>
								<div className="text-base text-textBody font-normal">
									<p className="text-justify">
										Whenever you register, use our services,
										download or use our mobile apps,
										participate in our forum, or make a
										purchase, you voluntarily provide us
										with certain information we collect,
										including, but not limited to, your
										name, email address, address, mobile
										number, and other details. The personal
										data we collect may include the
										following;
									</p>
									<p className="text-justify">
										Name and Contact Data- We collect your
										first and last name, email address,
										mailing address, phone number, and other
										similar contact data.
									</p>
									<p className="text-justify">
										Credentials- We collect usernames,
										passwords, password hints, and similar
										security information used for
										authentication and account access.
									</p>
									<p className="text-justify">
										Employment, Resume, CV, and other
										additional information you added during
										the process of generating your cover
										letter. We collect the data that you
										submit to us or provide us access to in
										connection with the Platform.
									</p>
									<p className="text-justify">
										Payment Data- We collect data necessary
										to process your payment if you make
										purchases, such as your payment
										instrument number (such as a credit card
										number), and the security code
										associated with your payment instrument.
										All payment data is stored by our
										third-party payment processor and you
										should review its privacy policies and
										contact the payment processor directly
										to respond to your questions.
									</p>
									<p className="text-justify">
										Information from Other Sources- To the
										extent permissible by the law of the
										country of your residence, the
										information we collect can be combined
										with publicly available information.
									</p>
									<p className="text-justify">
										Mobile Information- By agreeing to this
										Policy you consent that we may collect
										additional information from you if you
										access our Site through a mobile device
										(e.g. your unique device identifier,
										device’s operating system, mobile
										carrier, location, or GPS/geo-location,
										mobile number, your text messages,
										emails or email address, and user name).
									</p>
									<p className="text-justify">
										Browser Extensions Privacy Notice and
										Information We Collect- Provider offers
										certain browser extensions, including
										but not limited to the “Apply Tool”,
										that are all available in certain web
										browsers such as Google Chrome. When you
										download a browser extension, we
										automatically collect certain
										information from your device or web
										browser. We automatically collect
										information from location storage
										associated with your web browser,
										including your browsing behavior for
										career searching activity. We can also
										automatically record your interactions
										with certain web pages by accessing
										local storage associated with your web
										browser. Each browser extension was made
										to automatically interact with
										third-party websites, so we can also
										collect some information about you when
										you visit those websites including,
										clickstream data, the operating system
										being used, the URL of the site you have
										come from and move to after your visit,
										data relating to your activities on
										third party websites (including IP
										addresses and URLs) via tracking
										technologies (such as cookies and
										measurement software), the date and time
										of your visit and your server's IP
										address, the geo-location of your
										device, and the type of payment you use.
										We collect this information for
										statistical purposes to find out how our
										website and each browser extension are
										being used. We use this information to
										evaluate and, hopefully, improve your
										experience. As an example, when you
										visit a webpage that supports the
										autofill function, we can record
										metadata generated by your web browser
										that identifies one or more autofill
										fields that you interact with. In this
										example, we can also access local
										storage associated with your web browser
										to determine the information that can be
										or has been entered into an autofill
										field. We use your information to
										facilitate your completion of job
										applications across the internet, on our
										websites, and third-party websites and
										to provide advertising and/or other
										content that we believe can be of
										interest to you based upon your browsing
										behavior on the internet. All personal
										data that you provide to us must be
										true, complete, and accurate, and you
										must notify us of any changes to such
										personal data.
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-[20px]">
								<p
									id="usage_of_information"
									className="flex gap-2 items-center font-bold text-textHeader"
								>
									<span className="text-[20px]">2.</span>
									<span className="text-base">
										Usage of information
									</span>
								</p>
								<div className="text-base text-textBody font-normal">
									<p className="text-justify">
										Data collected through our Platform is
										used for a variety of business purposes
										as described below. In order to enter
										into or perform a contract with you,
										with your consent, and/or to comply with
										our legal obligations, we process your
										personal information for these purposes
										based on our legitimate business
										interests. We use the information we
										collect or receive:
									</p>
									<p className="text-justify">
										To send administrative information to
										you- We may use your personal data to
										send you information about products or
										services you have purchased and/or
										information about changes to our terms,
										conditions, and policies.
									</p>
									<p className="text-justify">
										To fulfill and manage your orders for
										services- We may use your information to
										fulfill and manage your orders for
										services, subscriptions, and payments,
										and to address any issues with services
										provided through the Platform.
									</p>
									<p className="text-justify">
										To send you marketing and promotional
										communications- We and/or our
										third-party marketing partners may use
										your personal data for our marketing
										purposes, depending on your marketing
										preferences. These communications may
										include information about new products,
										services, or features. You can opt out
										of our marketing emails at any time.
									</p>
									<p className="text-justify">
										To deliver targeted advertising to you-
										We may use your information to develop
										and display content and advertising (and
										work with third parties who do so)
										tailored to your interests and/or
										location and to measure its
										effectiveness.
									</p>
									<p className="text-justify">
										To request feedback- We may use your
										information to request feedback and to
										contact you about your use of our
										Platform so that we can improve our
										products and services and develop
										additional products and services to
										better serve our users.
									</p>
									<p className="text-justify">
										To develop our products and services- We
										may use your information to further
										develop our existing products and
										services or to develop new products and
										services.
									</p>
									<p className="text-justify">
										To protect the Platform- We may use your
										information as part of our efforts to
										keep the Platform safe and secure (for
										example, for fraud monitoring and
										prevention) and protect others from harm
										or abuse.
									</p>
									<p className="text-justify">
										To enforce our terms, conditions, and
										policies- We may use your information to
										ensure you and others are complying with
										our terms, conditions, and policies,
										including providing your information to
										law enforcement if we believe it is
										appropriate to do so and using your
										information in connection with legal
										proceedings brought by us or against us.
									</p>
									<p className="text-justify">
										Respond to legal requests and comply
										with applicable law- If we receive a
										subpoena, discovery request, or other
										legal requests, we may need to review
										and evaluate your information and
										potentially provide your information in
										response to the request. We may also
										need to use your information as needed
										to comply with applicable laws and
										regulations.
									</p>
									<p className="text-justify">
										For other business purposes. We may use
										your information for other business
										purposes, such as data analysis,
										identifying usage trends, determining
										the effectiveness of our promotional
										campaigns, and evaluating and improving
										the Platform, products, services, and
										your experience.
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-[20px]">
								<p
									id="tracking_technologies"
									className="flex gap-2 items-center font-bold text-textHeader"
								>
									<span className="text-[20px]">3.</span>
									<span className="text-base">
										Tracking technologies
									</span>
								</p>
								<div className="text-justify text-base text-textBody font-normal">
									In order to measure usage and provide you
									with information we believe will be of most
									interest to you, we may use tracking
									technologies such as cookies. When you
									access our Site through a mobile device
									(e.g., unique device identifier, device's
									operating system, mobile carrier), we may
									collect additional information about you.
								</div>
							</div>
							<div className="flex flex-col gap-[20px]">
								<p
									id="your_choices"
									className="flex gap-2 items-center font-bold text-textHeader"
								>
									<span className="text-[20px]">4.</span>
									<span className="text-base">
										Personal information we collect
									</span>
								</p>
								<div className="text-justify text-base text-textBody font-normal">
									You may decide to accept or reject the
									cookies described under our tracking
									technologies disclosure You can also control
									how and when you want to receive information
									from us, or the categories of data we can
									share, you may object to the processing of
									your information, request erasure of the
									information we have gathered from you and a
									copy of the said information.
								</div>
							</div>
						</div>
					</section>

					{/* table of contents */}
					<section
						id="table_of_contents"
						className="md:max-w-[297px] h-[297px] flex flex-col gap-[24px] md:sticky top-0"
					>
						<div className="h-[224px] mt-2 pb-[14px] pr-[16px] flex flex-col gap-4 overflow-y-auto contents__holder border-b border-[#CAD0DD] md:border-0">
							<h1 className="text-[20px] text-textHeader font-semibold text-center md:text-left">
								Table of contents
							</h1>
							<ol className="flex flex-col gap-[26px]">
								<a
									href="#personal_information"
									className="text-base font-normal text-textBody focus:text-primaryMain hover:text-primaryMain transition ease-linear flex justify-start items-start gap-2"
								>
									<span className="text-[20px]">1.</span>
									<span>
										Personal information we collect{" "}
									</span>
								</a>
								<a
									href="#usage_of_information"
									className="text-base font-normal text-textBody focus:text-primaryMain hover:text-primaryMain transition ease-linear flex justify-start items-start gap-2"
								>
									<span className="text-[20px]">2.</span>
									<span>Usage of information</span>
								</a>
								<a
									href="#tracking_technologies"
									className="text-base font-normal text-textBody focus:text-primaryMain hover:text-primaryMain transition ease-linear flex justify-start items-start gap-2"
								>
									<span className="text-[20px]">3.</span>
									<span>Tracking technologies</span>
								</a>
								<a
									href="#your_choices"
									className="text-base font-normal text-textBody focus:text-primaryMain hover:text-primaryMain transition ease-linear flex justify-start items-start gap-2"
								>
									<span className="text-[20px]">4.</span>
									<span>Your choices</span>
								</a>
							</ol>
						</div>
					</section>
				</main>
				<div className="flex flex-col justify-center items-center gap-4 mt-[80px]">
					<p className="text-textBody font-semibold text-base">
						Looking for something else?{" "}
					</p>
					<Button className="bg-primaryMain text-base font-semibold text-textWhite w-full max-w-[400px] max-[400px]:max-w-[270px] h-[48px] rounded-lg flex justify-center items-center">
						Contact Us
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
