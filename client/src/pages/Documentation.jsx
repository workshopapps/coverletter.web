import React from "react";
import Button from "../Components/Ui/Button";
import landingPage from "../Assets/landingPageLogo.png";
import inputImage from "../Assets/inputImage.png";
import previewImage from "../Assets/previewPage.png";
import downloadImage from "../Assets/downloadImage.png";
import downloadSave from "../Assets/downloadSave.png";
import createAccount from "../Assets/createAccount.png";
import inactive from "../Assets/inactive.png";
import register from "../Assets/register.png";
import loading from "../Assets/loading.png";
import success from "../Assets/success.png";
import login from "../Assets/login.png";
import emailVerification from "../Assets/emailVerification.png";
import verification from "../Assets/verification.png";
import confirm from "../Assets/confirm.png";
import history from "../Assets/history.png";
import pricing from "../Assets/pricing.png";
import arrow from "../Assets/arrow.png";
import line from "../Assets/line.png";
import upload from "../Assets/upload.png";
//new
import doc_banner_md from "../Assets/doc-banner-md.svg"
import docimg1_md from "../Assets/docimg1-md.png"
import docimg2_md from "../Assets/docimg2-md.png"
import docimg3_md from "../Assets/docimg3-md.png"
import docimg4_md from "../Assets/docimg4-md.png"
import docimg5_md from "../Assets/docimg5-md.png"
import docauth1_lg from "../Assets/docauth1-lg.png"
import docauth2_lg from "../Assets/docauth2-lg.png"
import docauth3_lg from "../Assets/docauth3-lg.png"
import docex1_lg from "../Assets/docex1-lg.png"
import docex2_lg from "../Assets/docex2-lg.png"
import doc_banner_sm from "../Assets/doc-banner-sm.svg"
import docimg1_sm from "../Assets/docimg1-sm.png"
import docimg2_sm from "../Assets/docimg2-sm.png"
import docimg3_sm from "../Assets/docimg3-sm.png"
import docimg4_sm from "../Assets/docimg4-sm.png"
import docimg5_sm from "../Assets/docimg5-sm.png"
import docauth1_sm from "../Assets/docauth1-sm.png"
import docauth2_sm from "../Assets/docauth2-sm.png"
import docauth3_sm from "../Assets/docauth3-sm.png"
import docex1_sm from "../Assets/docex1-sm.png"
import docex2_sm from "../Assets/docex2-sm.png"


const docCards = (props) => {
	const { title, body, img, img2, numb } = props;
	return (
		<div className="flex flex-col-reverse gap-4 md:flex-row md:gap-16 items-center w-full max-sm:gap-8 px-6 md:px-16 lg:px-32">
			<div className="flex-none">
				<img
					src={img}
					alt=""
					className="	md:max-w-[380px] lg:max-w-[500px] hidden md:block"
				/>
				<img
					src={img2}
					alt=""
					className="	md:max-w-[380px] lg:max-w-[500px] block md:hidden"
				/>
			</div>
			<div className="flex-auto">
				<h2 className="text-[24px] md:text-[40px] font-semibold">{numb}</h2>
				<h2 className="text-[#0652DD] text-[24px] md:text-[40px] font-semibold">
					{title}
				</h2>
				<p className="">
					{body}
				</p>
			</div>
		</div>
	);
};
// flex flex-col gap-4 md:flex-row md:gap-16 items-center w-full max-sm:gap-8
const docCards2 = (props) => {
	const { title, body, img, img2, numb } = props;

	return (
		<div className="flex flex-col gap-4 md:flex-row md:gap-16 items-center w-full max-sm:gap-8 px-6 md:px-16 lg:px-32">
			<div className="flex-auto">
				<h2 className="text-[24px] md:text-[40px] font-semibold">{numb}</h2>
				<h2 className="text-[#0652DD] text-[24px] md:text-[40px] font-semibold">
					{title}
				</h2>
				<p className="">
					{body}
				</p>
			</div>
			<div className="flex-none">
				<img
					src={img}
					alt=""
					className="md:max-w-[380px] lg:max-w-[500px] hidden md:block"
				/>
				<img
					src={img2}
					alt=""
					className="	md:max-w-[380px] lg:max-w-[500px] block md:hidden"
				/>
			</div>
		</div>
	);
};

const docAuth = (props) => {
	const { title, body, img, img2 } = props;

	return (
		<div className="flex flex-col gap-4 md:flex-row md:gap-16 items-center w-full max-sm:gap-8 px-6 md:px-16 lg:px-32">
			<div className="flex-auto">
				<h2 className="text-[#0652DD] text-[24px] md:text-[40px] font-semibold">
					{title}
				</h2>
				<p className="">
					{body}
				</p>
			</div>
			<div className="flex-none">
				<img
					src={img}
					alt=""
					className="md:max-w-[380px] lg:max-w-[500px] hidden md:block"
				/>
				<img
					src={img2}
					alt=""
					className="md:max-w-[380px] lg:max-w-[500px] block md:hidden"
				/>
			</div>
		</div>
	);
};

const docExFeat = (props) => {
	const { body, img, img2 } = props;

	return (
		<div className="flex flex-row gap-4 md:flex-row md:gap-16 w-full max-sm:gap-8 px-6 md:px-16 lg:px-32">
			<div className="flex-auto">
				<p className="text-[16px] md:text-[40px] text-[#6D6D6D]">
					{body}
				</p>
			</div>
			<div className="flex-none">
			<img
					src={img}
					alt=""
					className="md:max-w-[380px] lg:max-w-[500px] hidden md:block"
				/>
				<img
					src={img2}
					alt=""
					className="md:max-w-[380px] lg:max-w-[500px] block md:hidden"
				/>
			</div>
		</div>
	);
};


export default function Documentation() {
	return (
		<div>
			<div className="pt-0 bg-white pb-20">
				<div>
					<img
						className="w-full h-[216px] lg:h-full object-cover hidden md:block"
						src={doc_banner_md}
						alt=""
					/>
					<img
						className="w-full h-[216px] object-cover block md:hidden"
						src={doc_banner_sm}
						alt=""
					/>
				</div>
				<div className="w-full">
					<div className="flex flex-col gap-4 mx-w-8/12 justify-center items-center mt-12 p-4 text-center">
						<h1 className="text-[24px] md:text-[40px] font-semibold">How it works</h1>
						<p>Generating a cover letter with our simple interface following 4 steps</p>
					</div>
				</div>
				
				<div className="mt-20">
					<div className="flex flex-col gap-6 md:flex-row mb-20">
						{docCards2({
							numb: "1.",
							title: "Upload CV/ Resume",
							body: "Individuals who would like to change their resume into cover letter would use the upload page on the landing page",
							img: docimg1_md,
							img2: docimg1_sm
						})}
					</div>
					<div className="flex flex-col gap-6 md:flex-row mb-20">
						{docCards({
							numb: "2.",
							title: "Personalize the cover letter",
							body: "Give us more relevant details by filling  in all questions on this page. It helps us accurately generate a Cover Letter tailored to your job.",
							img: docimg2_md,
							img2: docimg2_sm
						})}
					</div>
					<div className="flex flex-col gap-6 md:flex-row mb-20">
						{docCards2({
							numb: "3.",
							title: "Preview the cover letter",
							body: "Preview the Cover Letter generated before downloading. If you want to make changes to the Cover Letter, hit the back button at the top-left part of the screen and edit. If not, get ready for download , you are almost there!",
							img: docimg3_md,
							img2: docimg3_sm
						})}
					</div>
					<div className="flex flex-col gap-6 md:flex-row mb-20">
						{docCards({
							numb: "4.",
							title: "Download cover letter",
							body: "Click the download button to start downloading directly and save to PDF, DOCX, OR Text format",
							img: docimg4_md,
							img2: docimg4_sm
						})}
					</div>
					<div className="flex flex-col gap-6 md:flex-row mb-20">
						{docCards2({
							numb: "5.",
							title: "Save to Profile",
							body: "You can save the Cover letter to your Dashboard by clicking on the Save to Profile button. For your document to Save, you have to be a registered user.",
							img: docimg5_md,
							img2: docimg5_sm
						})}
					</div>
				</div>

				<div className="bg-[#F2F2F7]">
					<h1 className="text-2xl md:text-4xl pt-12 text-center font-bold mb-4">
						AUTHENTICATION PROCESS
					</h1>
					<div className="py-16">
						<div className="flex flex-col gap-6 md:flex-row mb-20">
							{docAuth({
								title: "Step 1: Create a New Account",
								body: "Click on the Register button to create an account. Fill in your name, and email address and Create a New Password. Create your password with a combination of letters, numbers, and symbols to make a strong password. Click on the Signup button to continue.",
								img: docauth1_lg,
								img2: docauth1_sm
							})}
						</div>
						<div className="flex flex-col gap-6 md:flex-row mb-20">
							{docAuth({
								title: "Step 2: Verification",
								body: "After creating your account, a verification code will be sent to the provided Email address. Input the code and click on the verify button to continue",
								img: docauth2_lg,
								img2: docauth2_sm
							})}
						</div>
						<div className="flex flex-col gap-4 md:flex-row md:gap-16 items-center w-full max-sm:gap-8 px-6 md:px-16 lg:px-32">
							<div className="flex-auto py-16">
								<div className="mb-10">
									<h2 className="text-[#0652DD] text-[24px] md:text-[40px] font-semibold">
										Step 3: Log-in
									</h2>
									<p className="">
										After successful verification, you will be redirected to the login page. Log into your account with your email address and generated password. Click on the log-in button.
									</p>
								</div>
							</div>
							<div className="flex-none">
								<img
									src={docauth3_lg}
									alt=""
									className="md:max-w-[380px] lg:max-w-[500px] hidden md:block"
								/>
								<img
									src={docauth3_sm}
									alt=""
									className="md:max-w-[380px] lg:max-w-[500px] block md:hidden"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-20 bg-[#CDDCF8]">
					<h1 className="text-2xl md:text-4xl text-center font-bold mb-4">
						Extra Features
					</h1>
					<div className="py-16">
						<div className="flex flex-col gap-6 md:flex-row mb-20">
							{docExFeat({
								body: "Get  accessible features when you sign up to our PRICING PACKAGE",
								img: docex1_lg,
								img2: docex1_sm
							})}
						</div>
						<div className="flex flex-col gap-6 md:flex-row mb-20">
							{docExFeat({
								body: "The History Feature is  available for  you so you can have  your  experience  journey documented  and pick up where you stopped.",
								img: docex2_lg,
								img2: docex2_sm
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
