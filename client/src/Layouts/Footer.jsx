import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/coverly.svg";
import { ReactComponent as FooterLogoMobile } from "../Assets/footerlogomobile.svg";

const Footer = () => {
	return (
		<footer>
			<div className="max-w-screen-2xl m-auto max-md:pt-12">
				<div>
					<Link to="/">
						<FooterLogoMobile className="block md:hidden mx-14 max-[425px]:mx-8" />
					</Link>
				</div>
				<div className="xxs:max-md:block pl-[24px]  md:px-24 pt-6 max-[767px]:px-14 max-[425px]:px-8 max-[320px]:px-6">
					<div className="grid grid-cols-2 text-left mb-[59px] gap-10 md:space-x-24 w-full md:grid-cols-3 max-[823px]:gap-24 max-[767px]:gap-10">
						<div className="flex md:flex-row flex-col md:space-x-16 wrap">
							<div>
								<Link to="/">
									<img
										src={Logo}
										alt="logo"
										className="max-w-[132px] h-[46px] hidden md:block"
									/>
								</Link>
							</div>
							<div className="w-full">
								<h2 className="text-textBody font-normal text-base leading-6">
									Product
								</h2>

								<div className="flex flex-col flex-start space-y-6 text-textHeader md:font-bold font-semibold text-base leading-6 mt-6">
									<Link to="/document">Documentation</Link>
									<Link to="/faq">FAQs</Link>
									<Link to="/career">Career</Link>
									<Link to="/pricing">Pricing</Link>
								</div>
							</div>
						</div>
						<div className="">
							<h4 className="text-textBody font-normal text-base  leading-6">
								Company
							</h4>
							<div className="flex flex-col flex-start space-y-6 text-textHeader md:font-bold font-semibold text-base leading-6 mt-6">
								<Link to="/about">About us</Link>
								<Link to="/blog">Blog</Link>
								{/* <Link to="/forum">Forum</Link> */}
								<Link to="/contactus">Contact us</Link>
							</div>
						</div>
						<div className="max-[823px]:ml-0 max-[425px]:ml-0 max-[425px]:col-span-3">
							<h4 className="text-textBody font-normal text-base leading-6">
								Activity
							</h4>
							<div className="flex flex-col flex-start space-y-6 text-textHeader md:font-bold font-semibold text-base leading-6 mt-6">
								<Link to="/event">Events</Link>
								<Link to="/customerstories">
									Customer Stories
								</Link>
								<Link to="/features">Features</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-background">
				<div className="max-w-screen-2xl m-auto px-24 py-[18px] max-[767px]:px-14 max-[425px]:px-8 max-[425px]:wrap max-[366px]:gap-28">
					<div className="flex justify-between text-[12px] text-grey400 flex-wrap max-[425px]:gap-4">
						<p className="max-[425px]:mr-20 max-[340px]:mr-0">
							© 2022 Coverly. All rights reserved.
						</p>
						<Link to="/terms-and-conditions" className="block  ">
							Terms and Conditions
						</Link>
						<Link to="/privacy-policy" className="">
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
