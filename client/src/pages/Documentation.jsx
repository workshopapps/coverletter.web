import React from "react";
import { MdOutlineUploadFile } from "react-icons/md";
import Button from "../Components/Ui/Button";
import landingPage from "../Assets/landingPageLogo.png";
import inputImage from "../Assets/inputImage.png";
import previewImage from "../Assets/previewPage.png";
import downloadImage from "../Assets/downloadImage.png";
import downloadSave from "../Assets/downloadSave.png";
import createAccount from "../Assets/createAcount.png";
import inactive from "../Assets/inactive.png";
import register from "../Assets/register.png";
import loading from "../Assets/loading.png";
import success from "../Assets/success.png";
import login from "../Assets/login.png";
import emailVerification from "../Assets/emailVerification.png";
import verification from "../Assets/verification.png";
import confirm from "../Assets/confirm.png";
import history from "../Assets/History Page.png";
import pricing from "../Assets/Pricing.png";

export default function Documentation() {
	return (
		<div>
			<div className="pt-10 bg-background">
				<Button className="btn btnLong btnPrimary  md:block ml-10">
					<p style={{ borderBottom: "1px solid #ffffff" }}>
						Step by step Guide
					</p>
				</Button>
				<div>
					<h1 className="text-6xl mt-12 font-bold mb-12">
						Landing Page (Step 1)
					</h1>
					<div className="bg-primaryMain  mx-10">
						<div className="grid grid-cols-2  pt-9 pb-28 px-20">
							<div>
								<img
									src={landingPage}
									alt=""
									className="w-50"
								/>
							</div>
							<div className=" m-auto">
								<p className="text-textWhite font-bold leading-loose text-left ml-8">
									Welcome! Let's get you acquainted with the
									Aplicar Cover Letter Environment
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h1 className="text-6xl pt-12 text-center font-bold mb-4">
						Upload CV(Step 2)
					</h1>
					<div>
						<div className="bg-textWhite p-10 m-10">
							<div className=" p-10">
								<div className="grid grid-cols-2 bg-grey100 p-20">
									<div className="m-auto text-left px-6">
										<p className=" font-bold">
											Upload your CV/Resume to make a
											cover letter
										</p>
										<p>
											Maximum file size is 10MB, and you
											can only upload a maximum of 1 file
											per upload session
										</p>
									</div>
									<div>
										<div className="border-dashed border-2 border-grey100-100 p-16 rounded-md">
											<MdOutlineUploadFile className="  m-auto text-6xl" />
											<p className="text-primaryMain font-bold">
												Drag & drop to upload
											</p>
											<p className="font-thin">
												File supported PDF, DOCX
											</p>
											<p className="text-primaryMain font-bold">
												Or browse
											</p>
										</div>
									</div>
								</div>
								<div>
									<h1 className="m-auto w-6/12 text-4xl py-16">
										Upload your CV/Resume to create your
										cover letter
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h1 className="text-6xl pt-20 pb-10 text-center font-bold mb-4">
						Personalize the Cover Letter(Step 3)
					</h1>
					<div className="grid grid-cols-2 bg-primaryLightest mx-10 mt-5">
						<div className="px-10 py-20">
							<img src={inputImage} alt="" className="w-50" />
						</div>
						<div className="m-auto">
							<p className="font-bold leading-loose text-left m-auto">
								Give us more relevant details by filling in all
								questions on this page. it helps us accurately
								generate Cover letter tailored to your job.
							</p>
						</div>
					</div>
				</div>
				<div className="bg-primaryLightest mt-40 mx-10">
					<h1 className="text-6xl pt-12 text-center font-bold mb-4">
						Preview the Cover Letter(Step 4)
					</h1>
					<div className="grid grid-cols-2  mx-10 mt-5">
						<div className="px-10 py-20">
							<img src={previewImage} alt="" className="w-50" />
						</div>
						<div className="m-auto">
							<p className="font-bold leading-loose text-left m-auto">
								Preview the Cover Letter generated before
								downloading. if you want to make changes to the
								cover letter, hit the back button at the
								top-left part of the screen and edit. if not,
								get ready for download, your are almost there!
							</p>
						</div>
					</div>
				</div>
				<div className="pb-40">
					<h1 className="text-5xl pt-20 text-center font-bold">
						Download the Cover Letter(Step 5)
					</h1>
					<div className="grid grid-cols-2 mt-20 mx-10">
						<div>
							<img src={downloadImage} alt="" className="w-50" />
						</div>
						<div className="m-auto">
							<p className="font-bold leading-loose text-left ml-10">
								Click the download button to start downloading
								directly and save to PDF, DOCX OR Text format
							</p>
						</div>
					</div>
				</div>
				<div className="bg-primaryLightest mx-10">
					<h1 className="text-6xl pt-12 text-center font-bold pb-20">
						Save to profile(Step 5)
					</h1>
					<div className="grid grid-cols-2 py-32">
						<div className="m-auto">
							<p className="font-bold leading-loose text-left ml-10">
								You can save the Cover letter to your Dashboard
								by clicking on the save save button. For your
								document, to save, you have to be a registered
								user.
							</p>
						</div>
						<div className="m-auto">
							<img src={downloadSave} alt="" />
						</div>
					</div>
				</div>
				<div className="mt-10">
					<div className=" -rotate-90 text-9xl pb-10">&larr;</div>
				</div>

				<div>
					<h1 className="text-4xl pt-12 text-center font-bold mb-4">
						AUTHENTICATION PROCESS
					</h1>
					<div className="bg-grey200 mx-10">
						<div className="grid grid-cols-2 my-20 pb-20">
							<div className="mt-20">
								<p className="text-primaryMain text-left mx-10 text-3xl">
									Step 1: Create a New Account
								</p>
								<p className="font-bold leading-loose text-left ml-10 text-3xl">
									Click on the Register button to create an
									account.
								</p>
								<p className="font-bold leading-loose text-left ml-10 text-3xl">
									Fill in your name and email address and
									Create a new Password.
								</p>
								<p className="font-bold leading-loose text-left ml-10 text-3xl">
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
									className="w-2/4 pt-20 m-auto"
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 ">
							<div className="m-auto">
								<p className="text-primaryMain text-left mx-10">
									Step 2: Verification
								</p>
								<p className="font-bold leading-loose text-left ml-10">
									After creating your account, a verification
									code will be sent to the provided Email
									address. inpu the code and click on the
									verify button ti continue.
								</p>
							</div>
							<div className="ml-40">
								<img
									src={emailVerification}
									alt=""
									className="w-2/4 my-4"
								/>

								<img
									src={verification}
									alt=""
									className="w-2/4 my-4"
								/>

								<img
									src={confirm}
									alt=""
									className="w-2/4 my-4"
								/>
							</div>
						</div>
						<div className="m-auto p-20">
							<div className="grid grid-cols-2 gap-20">
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
						<div className="grid grid-cols-2 p-20">
							<div className="m-auto">
								<p className="text-primaryMain text-left mx-10 text-3xl">
									Step 3: Log-in
								</p>
								<p className="font-bold leading-loose text-left ml-10 text-3xl">
									After successful verification, you will be
									redirected to the login page. Log into your
									account with your email address and
									generated password. Click on the log-in
									button
								</p>
								<p className="text-primaryMain text-left mx-10 text-3xl">
									Step 4: Home page
								</p>
								<p className="font-bold leading-loose text-left ml-10 text-3xl ">
									After successful Sign-in, your dashboard is
									opened.{" "}
								</p>
							</div>
							<div>
								<img
									src={login}
									alt=""
									className="w-2/3 m-auto pt-20"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-20">
					<Button className="btn btnLong btnPrimary  md:block ml-10">
						<p style={{ borderBottom: "1px solid #ffffff" }}>
							Extra Features
						</p>
					</Button>
					<div className="bg-primaryLightest p-10 m-10">
						<h1 className="text-5xl pt-20 text-center font-bold ">
							Get accessible features when you sign up to our
						</h1>
						<h1 className="text-5xl pt-10 pl-40 text-left font-bold">
							PRICING PACKAGE{" "}
						</h1>
						<div className="text-center pt-20">
							<img
								src={pricing}
								alt=""
								className="w-2/3 m-auto"
							/>
						</div>
					</div>
				</div>
				<div className="bg-primaryLightest p-40 m-10">
					<div className="grid grid-cols-2">
						<div className="px-10 pt-40">
							<img src={history} alt="" />
						</div>

						<div className="m-auto text-left leading-loose font-bold">
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
