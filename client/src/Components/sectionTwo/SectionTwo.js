import React from "react";
import { useGlobalContext } from "../../context/context";
import Upload from "../upload/Upload";
import Uploading from "../uploading/Uploading";

function SectionTwo() {
	const { fileSize } = useGlobalContext();

	return (
		<div
			id="upload_section"
			className="px-1 z-20  relative flex flex-col items-center lg:flex-rol bg-gray-100  py-[50px]"
		>
			<main className="flex flex-col items-center gap-7 w-[85%]  m-auto lg:flex-row lg:mt-[60px] xl:w-[1160px] lw:w-[1250px] ">
				<div className="left text-left text-gray-800 lg:w-[50%] w-[100%] mb-[20px] lg:mb-09  flex flex-col justify-center items-center lw:w-[550px]">
					<h2 className="lg:text-3xl text-textBody text-left text-[24px] font-bold leading-[2.4rem] mb-[4px] xl:text-4xl ">
						Upload your CV/Resume to make a Cover Letter
					</h2>
					<p className="text-gray text-left md:text-center lg:text-left lg:text-[20px] mt-2 text-[20px] text-[#666060] ">
						Maximum file size is 5MB, and you can only upload a
						maximum of 1 file per upload session
					</p>
				</div>
				<div
					className={`right lg:w-[540px] lw:w-[640px] h-[443px] w-[100%] border-2 flex flex-col px-[8px] justify-center items-center lg:ml-[3.5em] ${
						fileSize > 5000000
							? "border-[#e42424]"
							: "border-[gray]"
					}  border-dashed rounded-lg `}
				>
					<div className="uploadContainer relative flex flex-col items-center justify-center lg:px-[2vh] lg:py-[15vh] py-[15vh]">
						{fileSize < 5000000 && fileSize > 0 ? (
							<Uploading />
						) : (
							<Upload />
						)}
					</div>
				</div>
			</main>
		</div>
	);
}

export default SectionTwo;
