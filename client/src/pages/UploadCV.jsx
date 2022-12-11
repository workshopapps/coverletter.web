import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "../Components/ProfilePage/Icons";
import { useGlobalContext } from "../context/context";
import Upload from "../Components/upload/Upload";
import Uploading from "../Components/uploading/Uploading";

function UploadCV() {
	const navigate = useNavigate();
	const { fileSize } = useGlobalContext();

	return (
		<div className="bg-[#03296f11] py-8">
			<div className="w-[95%] md:w-[90%] mx-auto">
				<div className="bg-white md:w-10/12 mx-auto h-max rounded-xl py-[5em] px-3 md:px-8 flex flex-col md:flex-row">
					<div className="w-full md:w-5/12">
						<div>
							<span
								onClick={() => {
									navigate(-1);
								}}
								className=""
							>
								<p className="flex gap-4 items-center cursor-pointer ">
									<span>
										<ArrowLeft />
									</span>
									<span className="font-semibold ">Back</span>
								</p>
							</span>

							<h1 className="my-4 md:mt-[2em] text-xl md:text-[2em] font-semibold leading-[130%]">
								Upload your CV/Resume to make a Cover Letter
							</h1>

							<p className="text-[#6D6D6D] my-4 md:text-[1.3em] ">
								Maximum file size is 5MB, and you can only
								upload a maxium of 1 file per upload session
							</p>
						</div>
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
				</div>
			</div>
		</div>
	);
}

export default UploadCV;
