import React from "react";
import { ReactComponent as FooterLogo } from "../Assets/footerlogo.svg";
import { ReactComponent as FooterLogoMobile } from "../Assets/footerlogomobile.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="max-w-screen-2xl m-auto">
			<div className="xxs:max-md:block pl-[24px]  md:px-24 pt-6">
				<div className="grid grid-cols-2 text-left mb-[59px] gap-10 md:space-x-24 w-full md:grid-cols-3">
					<div className="flex md:flex-row flex-col md:space-x-16 ">
						<div className="xxs:max-md: mb-[16px]">
							<Link to="/">
								<FooterLogo className="block md:hidden" />
								<FooterLogoMobile className="hidden md:block" />
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
			<div className="bg-[#F2F2F7] md:px-24 px-6 sm:block flex sm:justify-start justify-between items-end md:py-[18px] py-4 text-left text-xs text-textBody leading-4 sm:space-y-0 space-y-2 ">
				<div className="flex sm:flex-row flex-col justify-between  sm:space-y-0 space-y-4 text-[12px] text-grey400">
					<p>© 2022 Cover. All rights reserved.</p>
					<Link to="/terms-and-conditions">Terms and Conditions</Link>
					<Link to="/privacy-policy" className="sm:flex hidden">
						Privacy Policy
					</Link>
				</div>
				<Link to="/privacy-policy" className="sm:hidden flex">
					Privacy Policy
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
