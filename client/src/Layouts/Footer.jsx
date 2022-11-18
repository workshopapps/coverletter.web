import React from "react";
import { ReactComponent as FooterLogo } from "../Assets/footerlogo.svg";
import { ReactComponent as FooterLogoMobile } from "../Assets/footerlogomobile.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="">
			<div className="xxs:max-md:block pl-[24px]  md:px-24 flex pt-6 gap-x-16">
				<div className="xxs:max-md: mb-[16px]">
					<FooterLogo className="block md:hidden" />
					<FooterLogoMobile className="hidden md:block" />
				</div>
				<div className="grid grid-cols-2 text-left mb-[59px] gap-10 md:grid-cols-3 w-full">
					<div>
						<h4 className="text-textBody font-normal text-base leading-6">
							Product
						</h4>
						<div className="flex flex-col flex-start space-y-6 text-textHeader md:font-bold font-semibold text-base leading-6 mt-6">
							<Link to="/documentation">Documentation</Link>
							<Link to="/help">Help</Link>
							<Link to="/career">Career</Link>
							<Link to="/pricing">Pricing</Link>
						</div>
					</div>
					<div>
						<h4 className="text-textBody font-normal text-base  leading-6">
							Company
						</h4>
						<div className="flex flex-col flex-start space-y-6 text-textHeader md:font-bold font-semibold text-base leading-6 mt-6">
							<Link to="/aboutus">About us</Link>
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
							<Link to="/events">Events</Link>
							<Link to="/customerstories">Customers stories</Link>
							<Link to="/features">Features</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#F2F2F7] px-24 py-[18px]">
				<div className="flex justify-between items-center text-[12px] text-grey400">
					<p>© 2022 Cover. All rights reserved.</p>
					<Link to="/termsandconditions">Terms and Conditions</Link>
					<Link to="/privacypolicy">Privacy Policy</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
