import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { ReactComponent as ArrowBlue } from "../Assets/arrow-up-blue.svg";

function TermsAndCondition() {
	// add scroll to top feature
	const [displayArrow, setDisplayArrow] = useState(false);

	const scrollUp = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const listenToScroll = () => {
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			setDisplayArrow(true);
		} else {
			setDisplayArrow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);

	return (
		<div className="bg-background">
			<div className="flex flex-col justify-center items-center bg-background">
				<div className="bg-[#03296F] w-full">
					<div className="text-textWhite max-w-screen-2xl m-auto px-8 py-10 flex flex-col justify-center items-center lg:px-60 xl:px-96">
						<h1 className="text-2xl font-medium mb-4 md:text-4xl">
							Terms And Conditions
						</h1>
						<p className="text-center text-[15px] font-extralight text-textWhite">
							Please read the legal information about Coverly to
							ensure you understand the terms of use of our AI
							generated cover letters.
						</p>
					</div>
				</div>
				<div className="max-w-screen-2xl m-auto px-5">
					<div className="max-w-[90vw] flex flex-col py-10 text-left justify-center items-start md:mb-5 lg:max-w-[70vw]">
						<p className="text-grey800 font-extrabold md:text-grey400">
							Last Updated: 15th,November, 2022
						</p>

						<h1 className="my-4 font-extrabold text-xl md:mt-5 md:text-3xl">
							General Terms
						</h1>

						<p className="text-grey400 text-sm mb-2">
							Welcome to Coverly.com ,by using our website and the
							services provided, you acknowledge that you have
							read, understood and agree to comply and be bound by
							our terms and conditions outlined below. These terms
							applies to the entire website and any email or other
							type of communication between you and Coverly.
							<br />
							<br />
							Coverly will not be responsible for any outcome that
							may occur during the course of usage of our
							resources. We reserve the rights to change prices
							and revise the resources usage policy in any moment.
						</p>

						<h2 className="text-grey800 mt-5 mb-3 text-sm  font-bold md:text-xl md:mt-6 lg:text-2xl lg:mt-14">
							1. Website license and Content
						</h2>

						<p className="text-grey400 text-sm mb-1">
							These terms and conditions are a contract between
							you and Coverly. Coverly grants you a revocable.
							Non-transferrable, limited license to download,
							install and use our website strictly in accordance
							with the terms of the agreement.
							<br className="lg:hidden" /> The contents of the
							pages are for your general information and uses
							only. It is subject to change without notice. It is
							your responsibility to enquiry with us directly to
							acertain the accuracy and adequacy of the
							information you seek to rely upon.
						</p>

						<h2 className="text-grey800 mt-5 mb-3 text-sm  font-bold md:text-xl md:mt-6 lg:text-2xl lg:font-bold lg:mt-14">
							2 . Definitions and Key Terms
						</h2>

						<div className="text-grey400 text-sm mb-1">
							The following definitions apply to the terms and
							conditions and other agreements
							<div className="mt-2 md:mt-3 lg:mt-4">
								<span className="font-bold">Website: </span>
								Coverly site, which can be accessible via URL
								www.Coverly.com
							</div>
							<div className="mt-2 md:mt-3 lg:mt-4">
								<span className="font-bold">User: </span>This
								refers to you
							</div>
							<div className="mt-2 md:mt-3 lg:mt-4">
								<span className="font-bold">Country: </span>
								Nigeria
							</div>
							<div className="mt-2 md:mt-3 lg:mt-4">
								<span className="font-bold">Cookie: </span>This
								is a small amount of data generated by a website
								and saved by your web browser.
							</div>
							<div className="mt-2 md:mt-3 lg:mt-4">
								<span className="font-bold">Service: </span>This
								refers to the services being provided.
							</div>
						</div>

						<h2 className="text-grey800 mt-5 mb-3 text-sm  font-bold md:text-xl md:mt-6 lg:text-2xl lg:font-bold lg:mt-14">
							3. Privacy
						</h2>

						<p className="text-grey400 text-sm mb-1">
							We are committed to the user’s privacy, use of the
							website, data and other information or material
							about you, are subjected to our privacy policy,
							which explains how we use the information submitted.
						</p>

						<h2 className="text-grey800 mt-5 mb-3 text-sm  font-bold md:text-xl md:mt-6 lg:text-2xl lg:font-bold lg:mt-14">
							4. Intellectual Property
						</h2>

						<p className="text-grey400 text-sm mb-1">
							The information and materials on this website is
							owned and licensed to us. This material includes,
							but is not limited to the layout, design; look and
							graphics which are protected by Nigeria and
							international copyright, trademark and any other
							intellectual property laws. Reproducing or modifying
							these contents is prohibited and should not be done
							without permission from us which forms parts of
							these terms and conditions.
						</p>

						<h2 className="text-grey800 mt-5 mb-3 text-sm font-bold md:text-xl md:mt-6 lg:text-2xl lg:font-bold lg:mt-14">
							5. Copyright and Infringement Notice
						</h2>

						<p className="text-grey400 text-sm mb-1">
							All materials reproduced in this website, which are
							the property of the owner, are acknowledged on the
							website.
						</p>

						<h2 className="text-grey800 mt-5 mb-3 text-sm  font-bold md:text-xl md:mt-6 lg:text-2xl lg:font-bold lg:mt-14">
							6. Updates to our Terms and Conditions
						</h2>

						<p className="text-grey400 text-sm mb-1 ">
							Services and policies of this website may be
							changed, improvements to the features of the
							services may be done from time to time.
						</p>
						<h1 className="text-grey800 my-4 font-extrabold text-xl md:mt-10 md:text-3xl">
							Contact Us
						</h1>
						<p className="text-grey400 text-sm ">
							Do you feel the need to call? Or if you have any
							questions about our service please endeavour to
							&nbsp;
							<Link to="/contactus" className="text-[#0652DD]">
								Contact Us
							</Link>
						</p>
					</div>
				</div>
			</div>
			{displayArrow && (
				<ArrowBlue
					className="fixed bottom-[40px] right-[5px]"
					onClick={scrollUp}
				/>
			)}
		</div>
	);
}

export default TermsAndCondition;
