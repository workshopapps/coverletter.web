import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import Uploading from "../uploading/Uploading";
import first from "../sectionTwo/assets/first.svg";

function Upload() {
	const { setFile, setFileName, fileSize, setFileSize } = useGlobalContext();

	const changeHandler = (e) => {
		setFile(e.target.files[0]);
		setFileSize(e.target.files[0].size);
		setFileName(e.target.files[0].name);
	};
	const fileValidation = () => {
		return (
			<h2 className="text-errorMain font-semibold text-[13px]">
				This file is too large. Kindly upload a file with a maximum size
				of 5mb
			</h2>
		);
	};
	return (
		<div className="flex flex-col justify-center items-center">
			<img
				src={first}
				className="w-[67px] lg:left-[37%]  h-[67px]"
				alt=""
			/>

			<input
				data-testid="element"
				style={{ opacity: "0" }}
				type="file"
				name="file"
				accept="application/pdf"
				onChange={changeHandler}
				className="upload_file absolute cursor-pointer left-0 bottom-[10%] w-[100%] h-[80%] "
				id="upload_button"
			/>
			<label
				htmlFor="upload_button"
				className="flex flex-col items-center justify-center"
			>
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
		</div>
	);
}

export default Upload;
