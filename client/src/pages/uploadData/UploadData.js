import React from "react";
import { useState } from "react";
import InputData from "../../Components/input/InputData";

const Modal = () => {
	return (
		<div className="bg-overlay fixed top-0 bottom-0 w-full grid place-items-center">
			<div className="bg-backgroundWhite w-[300px] md:w-[648px] h-[369px] md:h-[512px] px-7 flex justify-center items-center">
				<div className="md:w-[390px] text-center space-y-2">
					<p>Extracting your details...</p>
					<div className="relative h-[4px] rounded-full bg-primaryLightest">
						<div className="w-1/2 h-[4px] rounded-full bg-primaryMain absolute animate-move"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

function UploadData() {
	const [modal, setModal] = useState(false);
	return (
		<>
			{modal && <Modal />}
			<div>
				<main className="bg-gray-100 ">
					<InputData setModal={setModal} />
				</main>
			</div>
		</>
	);
}

export default UploadData;
