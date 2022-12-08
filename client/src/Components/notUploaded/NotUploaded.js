import React from "react";
import first from "../sectionTwo/assets/first.svg";

function NotUploaded() {
	const fileValidation = () => {
		return (
			<h2 className="text-rose-600 font-semibold text-[13px]">
				This file is too large. Kindly upload a file with a maximum size
				of 5mb
			</h2>
		);
	};

	//   const changeHandler = (e) => {
	//     setFile(e.target.files);
	//     setFileName(e.target.files[0].name);
	//     setFileSize(e.target.files[0].size);
	//   };
	return (
		<div>
			<img
				src={first}
				className="w-[67px] relative left-[37%]  h-[67px]"
				alt=""
			/>

			<input
				style={{ opacity: "0" }}
				type="file"
				accept="application/pdf"
				onChange={changeHandler}
				className="upload_file absolute  left-0 bottom-0 w-[100%] h-[100%] "
				id="upload_button"
			/>
			<label htmlFor="upload_file" className="">
				<img src="" alt="" />

				<h3 className=" text-blue-700 md:text-[24px] mt-4 text-[20px] font-semibold">
					Drag & Drop to Upload{" "}
				</h3>

				<p className="text-gray-500 text-[16px]">File Supported: PDF</p>
				{fileSize > 5000000 ? fileValidation() : null}
				<button className="text-blue-700 text-[16px] mt-3 font-bold ">
					Or browse
				</button>
			</label>
		</div>
	);
}

export default NotUploaded;
