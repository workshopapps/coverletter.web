import React from "react";
import { SuccessIcon } from "./Icons";

function SuccessModal({ setShowSuccess }) {
	return (
		<>
			<div
				className="bg-[#00000065] h-full w-full left-0 fixed top-0 z-10 "
				onClick={() => {
					setShowSuccess(false);
				}}
			>
				<div className="absolute bg-white w-11/12 md:w-6/12 h-max z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3 md:p-6 rounded">
					<div className="w-11/12 py-12  mx-auto overflow-hidden flex flex-col gap-4 justify-center items-center">
						<div>
							<SuccessIcon />
						</div>

						<p className="font-bold text-xl">Success</p>
						<p className="text-[#6D6D6D] font-bold">
							Your details have been updated
						</p>
						<p
							className="bg-primaryMain px-8 text-white rounded-xl font-bold py-2 cursor-pointer"
							onClick={() => {
								setShowSuccess(false);
							}}
						>
							Continue
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default SuccessModal;
