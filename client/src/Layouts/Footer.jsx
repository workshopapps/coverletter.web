import React from "react";
import { ReactComponent as FooterLogo } from "../Assets/footerlogo.svg";

const Footer = () => {
	return (
		<div>
			<div className="lg:px-24 px-12 mt-6">
				<div className="md:hidden flex mb-6">
					<FooterLogo />
				</div>
				<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-left mb-[59px] gap-6 md:space-x-24 w-full">
					<div className="flex md:flex-row flex-col md:space-x-16 ">
						<div className="md:flex hidden">
							<FooterLogo />
						</div>
						<div className="w-full">
							<h2 className="text-textBody font-normal lg:text-base text-sm leading-6">
								Product
							</h2>

							<div className="flex flex-col flex-start space-y-6 text-textHeader font-bold lg:text-base text-sm leading-6 mt-6">
								<h4 className="cursor-pointer">
									Documentation
								</h4>
								<h4 className="cursor-pointer">Help</h4>
								<h4 className="cursor-pointer">Career</h4>
								<h4 className="cursor-pointer">Pricing</h4>
							</div>
						</div>
					</div>
					<div className="">
						<h4 className="text-textBody font-normal lg:text-base text-sm  leading-6">
							Company
						</h4>
						<div className="flex flex-col flex-start space-y-6 text-textHeader font-bold lg:text-base text-sm leading-6 mt-6">
							<h4 className="cursor-pointer">About Us</h4>
							<h4 className="cursor-pointer">Blog</h4>
							<h4 className="cursor-pointer">Forum</h4>
							<h4 className="cursor-pointer">Contact us</h4>
						</div>
					</div>
					<div className="">
						<h4 className="text-textBody font-normal lg:text-base text-sm  leading-6">
							Activity
						</h4>
						<div className="flex flex-col flex-start space-y-6 text-textHeader font-bold lg:text-base text-sm leading-6 mt-6">
							<h4 className="cursor-pointer">Events</h4>
							<h4 className="cursor-pointer">
								Customers stories
							</h4>
							<h4 className="cursor-pointer">Features</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="flex sm:flex-row flex-col justify-between lg:px-24 px-12 py-[18px] text-left text-xs bg-[#F2F2F7] text-textBody leading-4 sm:space-y-0 space-y-2">
				<p>© 2022 Cover. All rights reserved.</p>
				<p>Terms and Conditions</p>
				<p>Privacy Policy</p>
			</div>
		</div>
	);
};

export default Footer;
