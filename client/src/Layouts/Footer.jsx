import React from "react";
import { ReactComponent as FooterLogo } from "../Assets/footerlogo.svg";
import { ReactComponent as FooterLogoMobile } from "../Assets/footerlogomobile.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="lg:px-24 md:px-12 px-6 mt-6">
				<div className="md:hidden flex mb-6">
					<FooterLogo className="lg:flex hidden" />
					<FooterLogoMobile className="lg:hidden flex " />
				</div>
				<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-left mb-[59px] gap-10 md:space-x-24 w-full">
					<div className="flex md:flex-row flex-col md:space-x-16 ">
						<div className="md:flex hidden">
							<FooterLogo />
						</div>
						<div className="w-full">
							<h2 className="text-textBody font-normal text-base leading-6">
								Product
							</h2>

							<div className="flex flex-col flex-start space-y-6 text-textHeader md:font-bold font-semibold text-base leading-6 mt-6">
								<Link to="/">Documentation</Link>
								<Link to="/faq">fAQs</Link>
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
							<Link to="/forum">Forum</Link>
							<Link to="/contactus">Contact us</Link>
						</div>
					</div>
					<div className="">
						<h4 className="text-textBody font-normal text-base leading-6">
							Activity
						</h4>
						<div className="flex flex-col flex-start space-y-6 text-textHeader md:font-bold font-semibold text-base leading-6 mt-6">
							<Link to="/">Events</Link>
							<Link to="/history">Customers stories</Link>
							<Link to="/">Features</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="md:px-24 px-6 sm:block flex sm:justify-start justify-between items-end md:py-[18px] py-4 text-left text-xs bg-[#F2F2F7] text-textBody leading-4 sm:space-y-0 space-y-2">
				<div className="flex sm:flex-row flex-col justify-between  sm:space-y-0 space-y-4">
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
