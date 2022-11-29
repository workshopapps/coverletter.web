import React from "react";
import { ReactComponent as FooterLogoMobile } from "../Assets/footerlogomobile.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="max-w-screen-2xl m-auto max-md:pt-12">
			<div className="xxs:max-md: mb-[16px] max-md:w-full">
				<Link to="/">
					<FooterLogoMobile className="hidden max-md:block max-md:mx-14 max-[425px]:mx-8" />
				</Link>
				{/* max-[425px]:px-8 max-[320px]:px-6 */}
			</div>
			<div className="xxs:max-md:block pl-[24px]  md:px-24 pt-6 max-[767px]:px-14 max-[425px]:px-8 max-[320px]:px-6">
				<div className="grid grid-cols-2 text-left mb-[59px] gap-10 md:space-x-24 w-full md:grid-cols-3">
					<div className="flex md:flex-row flex-col md:space-x-16 ">
						<div className="xxs:max-md: mb-[16px] max-md:w-full max-md:hidden">
							<Link to="/">
								<FooterLogoMobile className="max-md:hidden" />
							</Link>
						</div>
						<div className="w-full">
							<h2 className="text-textBody font-normal text-base leading-6">
								Product
							</h2>

							<div className="flex flex-col flex-start space-y-6 text-textHeader md:font-bold font-semibold text-base leading-6 mt-6">
								<Link to="/document">Documentation</Link>
								<Link to="/faq">fAQs</Link>
								<Link to="/career">Career</Link>
								<Link to="/pricing">Pricing</Link>
							</div>
						</div>
					</div>
					<div>
						<h4 className="text-textBody font-normal text-base  leading-6">
							Company
						</h4>
						<div className="flex flex-col flex-start space-y-6 text-textHeader md:font-bold font-semibold text-base leading-6 mt-6">
							<Link to="/about">About us</Link>
							<Link to="/blog">Blog</Link>
							<Link to="/forum">Forum</Link>
							<Link to="/contactus">Contact us</Link>
						</div>
					</div>
					<div>
						<h4 className="text-textBody font-normal text-base leading-6">
							Activity
						</h4>
						<div className="flex flex-col flex-start space-y-6 text-textHeader md:font-bold font-semibold text-base leading-6 mt-6">
							<Link to="/">Events</Link>
							<Link to="/customerstories">Customers stories</Link>
							<Link to="/features">Features</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#F2F2F7] px-24 py-[18px] max-[767px]:px-14 max-[425px]:px-8 max-[425px]:wrap max-[366px]:gap-10">
				<div className="flex justify-between text-[12px] text-grey400 flex-wrap max-[366px]:gap-4">
					<p classname="max-[425px]:w-full max-[425px]:flex-1 ">
						© 2022 Cover. All rights reserved.
					</p>
					<Link to="/terms-and-conditions" className="block">
						Terms and Conditions
					</Link>
					<Link to="/privacy-policy" className="">
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
