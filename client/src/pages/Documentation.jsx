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

export default function Documentation() {
	return (
		<div>
			<div className="pt-10 bg-background pb-20">
				<Button className="btn btnLong btnPrimary  md:block ml-40 max-[650px]:btnLong max-[650px]:ml-28 max-[550px]:ml-16 max-[480px]:m-auto max-[457px]:btnShort max-[457px]:ml-32">
					<p className="border-b-2">Step by step Guide</p>
				</Button>
				<div>
					<h1 className="text-5xl mt-12 text-center font-bold mb-12 max-[698px]:text-3xl max-[549px]:text-base max-[549px]:m-auto max-[457px]:pt-6">
						Landing Page (Step 1)
					</h1>
					<div className="bg-primaryMain  mx-40 max-[457px]:mx-0">
						<div className="grid grid-cols-2  pt-9 pb-28 px-20 max-[650px]:grid-cols-1  max-[650px]:px-10 max-[650px]:gap-4 max-[510px]-px-2 ">
							<div>
								<img
									src={landingPage}
									alt=""
									className="w-50 max-[510px]-w-full"
								/>
							</div>
							<div className=" m-auto">
								<p className="text-textWhite font-bold leading-loose text-left ml-8 max-[549px]:text-sm max-[549px]:m-auto">
									Welcome! Let's get you acquainted with the
									Aplicar Cover Letter Environment
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h1 className="text-5xl pt-12 text-center font-bold mb-4 max-[698px]:text-3xl max-[549px]:text-base max-[549px]:m-auto">
						Upload CV(Step 2)
					</h1>
					<div>
						<div className="bg-textWhite p-10 mx-40 max-[640px]:mx-10">
							<img src={upload} alt="" className="m-auto " />
						</div>
					</div>
				</div>
				<div>
					<h1 className="text-5xl pt-20 pb-10 text-center font-bold mb-4 max-[698px]:text-3xl max-[549px]:text-base max-[549px]:m-auto ">
						Personalize the Cover Letter(Step 3)
					</h1>
					<div className="grid grid-cols-2 bg-primaryLightest mx-40 max-[457px]:mx-10 mt-5 max-[685px]:grid-cols-1 max-[457px]:pb-10">
						<div className="px-10 py-20 max-[682px]:py-4 max-[685px]:mt-8">
							<img src={inputImage} alt="" className="w-50" />
						</div>
						<div className="m-auto">
							<p className="font-bold leading-loose text-left m-auto max-[685px]:m-4 max-[549px]:text-sm max-[549px]:m-auto p-2">
								Give us more relevant details by filling in all
								questions on this page. it helps us accurately
								generate Cover letter tailored to your job.
							</p>
						</div>
					</div>
				</div>
				<div className="bg-primaryLightest mt-40 mx-40 max-[457px]:mx-0 px-4 pb-4 max-[457px]:pb-10">
					<h1 className="text-5xl pt-12 text-center font-bold mb-4 max-[698px]:text-2xl max-[889px]:text-2xl max-[549px]:text-base max-[549px]:m-auto">
						Preview the Cover Letter(Step 4)
					</h1>
					<div className="grid grid-cols-2 max-[889px]:grid-cols-1 mx-40 mt-5 max-[1068px]:mx-10">
						<div className="px-10 py-20 max-[889px]:py-10">
							<img
								src={previewImage}
								alt=""
								className=" max-[889px]:w-72  max-[910px]:w-full"
							/>
						</div>
						<div className="m-auto">
							<p className="font-bold leading-loose text-left m-auto max-[549px]:text-sm max-[549px]:m-auto">
								Preview the Cover Letter generated before
								downloading. if you want to make changes to the
								cover letter, hit the back button at the
								top-left part of the screen and edit. if not,
								get ready for download, your are almost there!
							</p>
						</div>
					</div>
				</div>
				<div className="pb-40 max-[457px]:pb-4">
					<h1 className="text-5xl pt-20 text-center font-bold max-[889px]:text-2xl max-[549px]:text-base max-[549px]:m-auto ">
						Download the Cover Letter(Step 5)
					</h1>
					<div className="grid grid-cols-2 mt-20 mx-40 max-[889px]:grid-cols-1 max-[889px]:gap-4 max-[457px]:mx-10">
						<div>
							<img src={downloadImage} alt="" className="w-50 " />
						</div>
						<div className="m-auto">
							<p className="font-bold leading-loose text-left ml-10 max-[549px]:text-sm max-[549px]:m-auto max-[870px]:m-auto">
								Click the download button to start downloading
								directly and save to PDF, DOCX OR Text format
							</p>
						</div>
					</div>
				</div>
				<div className="bg-primaryLightest mx-40 max-[457px]:mx-0">
					<h1 className="text-5xl pt-12 text-center font-bold pb-20 max-[698px]:text-2xl max-[889px]:pb-0 max-[889px]:text-2xl max-[549px]:text-base max-[549px]:m-auto max-[549px]:pb-0">
						Save to profile(Step 6)
					</h1>
					<div className="grid grid-cols-2 py-32 max-[889px]:grid-cols-1 max-[549px]:py-8">
						<div className="m-auto">
							<p className="font-bold leading-loose text-left ml-10 max-[549px]:text-sm max-[549px]:m-auto p-2">
								You can save the Cover letter to your Dashboard
								by clicking on the save save button. For your
								document, to save, you have to be a registered
								user.
							</p>
						</div>
						<div className="m-auto top-10">
							<img
								src={downloadSave}
								alt=""
								className="max-[889px]:w-28"
							/>
						</div>
					</div>
				</div>

				<div className="pt-10 ">
					<img src={arrow} alt="" className="w-10  m-auto" />
				</div>

				<div>
					<h1 className="text-4xl pt-12 text-center font-bold mb-4 max-[698px]:text-2xl">
						AUTHENTICATION PROCESS
					</h1>
					<div className="bg-grey200 mx-10 max-[457px]:mx-0 max-[889px]:py-1">
						<div className="grid grid-cols-2 my-20 pb-20  max-[457px]:pb-0 max-[889px]:grid-cols-1">
							<div className="mt-20 max-[889px]:px-4 max-[889px]:mt-0">
								<p className="text-primaryMain text-left mx-10  max-[549px]:text-base max-[549px]:m-auto">
									Step 1: Create a New Account
								</p>
								<p className="font-bold leading-loose text-left ml-10  max-[549px]:text-sm max-[549px]:m-auto">
									Click on the Register button to create an
									account.
								</p>
								<p className="font-bold leading-loose text-left ml-10  max-[549px]:text-sm max-[549px]:m-auto">
									Fill in your name and email address and
									Create a new Password.
								</p>
								<p className="font-bold leading-loose text-left ml-10  max-[549px]:text-sm max-[549px]:m-auto">
									Create your password with a combination of
									letters, numbers, and symbols to make a
									strong password. Click on the Signup button
									to continue.
								</p>
							</div>
							<div>
								<img
									src={createAccount}
									alt=""
									className=" max-[457px]:pt-2 max-[457px]:w-full max-[457px]:mt-4 w-2/4 pt-20 m-auto"
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 max-[889px]:grid-cols-1 max-[889px]:gap-4">
							<div className="m-auto ">
								<p className="text-primaryMain text-left mx-10 max-[549px]:text-base max-[549px]:m-auto p-2">
									Step 2: Verification
								</p>
								<p className="font-bold leading-loose text-left ml-10 max-[549px]:text-sm max-[549px]:m-auto p-2">
									After creating your account, a verification
									code will be sent to the provided Email
									address. inpu the code and click on the
									verify button ti continue.
								</p>
							</div>
							<div className="max-[889px]:text-center">
								<img
									src={emailVerification}
									alt=""
									className="w-2/3 my-4  max-[889px]:w-2/3  max-[889px]:m-auto max-[889px]:pb-2"
								/>

								<img
									src={verification}
									alt=""
									className="w-2/3 my-4 max-[889px]:w-2/3  max-[889px]:m-auto max-[889px]:pb-2"
								/>

								<img
									src={confirm}
									alt=""
									className="w-2/3 my-4 max-[889px]:w-2/3  max-[889px]:m-auto max-[889px]:pb-2"
								/>
							</div>
						</div>
						<div className="m-auto p-20 max-[889px]:p-10">
							<div className="grid grid-cols-2 gap-20 max-[889px]:gap-10 max-[520px]:grid-cols-1">
								<div>
									<img src={inactive} alt="" />
								</div>
								<div>
									<img src={register} alt="" />
								</div>
								<div>
									<img src={loading} alt="" />
								</div>
								<div>
									<img src={success} alt="" />
								</div>
							</div>
						</div>
						<div className="grid grid-cols-2 p-20 max-[910px]:grid-cols-1 max-[457px]:p-4 max-[457px]:pt-10">
							<div className="m-auto">
								<p className="text-primaryMain text-left mx-10  max-[549px]:text-base max-[549px]:m-auto ">
									Step 3: Log-in
								</p>
								<p className="font-bold leading-loose text-left ml-10  max-[549px]:text-sm max-[549px]:m-auto">
									After successful verification, you will be
									redirected to the login page. Log into your
									account with your email address and
									generated password. Click on the log-in
									button
								</p>
								<p className="text-primaryMain text-left mx-10  max-[549px]:text-base max-[549px]:m-auto">
									Step 4: Home page
								</p>
								<p className="font-bold leading-loose text-left ml-10  max-[549px]:text-base max-[549px]:m-auto ">
									After successful Sign-in, your dashboard is
									opened.{" "}
								</p>
							</div>
							<div>
								<img
									src={login}
									alt=""
									className="w-2/3 m-auto pt-20 max-[889px]:w-full max-[457px]:pt-4"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-20">
					<div className="max-[889px]">
						<Button className="btn mb-4 btnLong btnPrimary  md:block ml-10 max-[889px]:my-10 max-[889px]:text-center max-[457px]:btnShort max-[457px]:ml-32">
							<p className="border-b-2 ">Extra Features</p>
						</Button>
					</div>
					<div className="bg-primaryLightest p-10 mx-40 max-[457px]:mx-0">
						<h1 className="text-3xl pt-20 text-lef font-bold max-[698px]:text-2xl max-[680px]:pt-4 max-[549px]:text-base">
							Get accessible features when you sign up to our
						</h1>
						<div className="flex relative">
							<h1 className="text-3xl pt-10  text-left font-bold max-[698px]:text-2xl max-[549px]:text-base">
								PRICING PACKAGE
							</h1>
							<img
								src={line}
								alt=""
								className="absolute left-64 top-16 max-[1300px]:hidden "
							/>
						</div>

						<div className="text-center pt-64 max-[1300px]:pt-10 ">
							<img
								src={pricing}
								alt=""
								className="w-2/4 m-auto  max-[889px]:pb-10 max-[596px]:p-2 max-[596px]:w-full"
							/>
						</div>
					</div>
				</div>
				<div className="bg-primaryLightest pb-10  max-[889px]:px-10 mx-40 max-[889px]:p-0 max-[680px]:mt-4 max-[457px]:mx-0 max-[889px]:py-10">
					<div className="grid grid-cols-2 max-[889px]:grid-cols-1 max-[889px]:gap-4">
						<div className=" pt-4  [889px]:px-10  [889px]:pt-10 max-[596px]:pt-2 max-[680px]:p-2">
							<img
								src={history}
								alt=""
								className=" w-2/3 ml-20 max-[596px]:w-full max-[695px]:m-auto"
							/>
						</div>

						<div className="m-auto text-left leading-loose font-bold max-[549px]:text-sm">
							<p>
								The History Feature is available for you so you
								can have your experience journey documented and
								pick up where you stopped
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
