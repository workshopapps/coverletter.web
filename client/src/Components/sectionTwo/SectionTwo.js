import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import Uploaded from "../uploaded/Uploaded";
import Uploading from "../uploading/Uploading";
import first from "./assets/first.svg";

function SectionTwo() {
	const [fileSize, setFileSize] = useState();
	const [show, setShow] = useState(false);

	const { setFile, setFileName } = useGlobalContext();

	const changeHandler = (e) => {
		setFile(e.target.files[0]);
		setFileSize(e.target.files[0].size);
		setFileName(e.target.files[0].name);
	};
	const fileValidation = () => {
		return (
			<h2 className="text-errorMain font-semibold text-[13px]">
				The file too large. Please Upload a file with maximum of 5mb
			</h2>
		);
	};
	return (
		<div
			id="upload_section"
			className="px-1 z-20  relative flex flex-col items-center lg:flex-rol bg-gray-100  py-[50px]"
		>
			<main className="flex flex-col items-center  lg:w-[98%] w-[90%]  lg:flex-row lg:mt-[60px]  ">
				<div className="left text-left text-gray-800  lg:px-[8%] lg:w-[50%] w-[100%] mb-[20px] lg:mb-09  flex flex-col justify-center items-center ">
					<h2 className="lg:text-4xl text-textBody text-[24px] font-bold leading-[3rem] mb-[11px]   ">
						Upload your CV/Resume to make a Cover Letter
					</h2>
					<p className="text-gray lg:text-[22px] mt-2 text-[20px] text-[#666060] ">
						Maximum file size is 5MB, and you can only upload a
						maximum of 1 file per upload session
					</p>
					{console.log(fileSize)}
				</div>
				<div
					className={`right lg:w-[540px] h-[443px] w-[100%] border-2 flex flex-col px-[8px] justify-center items-center lg:ml-[3.5em] ${
						show ? "border-[#e42424]" : "border-[gray]"
					} border-dashed rounded-lg `}
				>
					<div className="uploadContainer relative flex flex-col items-center justify-center lg:px-[2vh] lg:py-[15vh] py-[15vh]">
						{fileSize > 0 && fileSize < 5000000 ? null : (
							<img
								src={first}
								className="w-[67px] lg:left-[37%]  h-[67px]"
								alt=""
							/>
						)}
						{fileSize > 0 && fileSize < 5000000 ? null : (
							<input
								style={{ opacity: "0" }}
								type="file"
								name="file"
								accept="application/pdf"
								onChange={changeHandler}
								className="upload_file absolute cursor-pointer left-0 bottom-[10%] w-[100%] h-[80%] "
								id="upload_button"
							/>
						)}

						{fileSize > 0 && fileSize < 5000000 ? (
							// <Uploaded />
							<Uploading />
						) : (
							<label for="upload_file" className="flex flex-col items-center justify-center">
								<img src="" alt="" />

								<h3 className=" text-primaryMain lg:text-[24px] text-center mt-4 text-[20px] font-semibold">
									Drag & Drop to Upload{" "}
								</h3>

								<p className="text-grey300 text-[16px] text-center">
									File Supported: PDF
								</p>
								{fileSize > 5000000 ? fileValidation() : null}
								<button className="text-primaryMain text-[16px]  mt-3 text-center font-bold ">
									Or browse
								</button>
							</label>
						)}
					</div>
				</div>
			</main>
		</div>
	);
}

export default SectionTwo;
