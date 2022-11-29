import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import Uploaded from "../uploaded/Uploaded";

function Uploading() {
	const [percentage, setPercentage] = useState("0");
	const [status, setStatus] = useState("");
	const [show, setShow] = useState(true);
	const { file, fileName } = useGlobalContext();
	const Navigate = useNavigate();

	useEffect(() => {
		const uploadFile = async (e) => {
			console.log(file);
			const formData = new FormData();
			formData.append("myFile", file);

			const option = {
				onUploadProgress: (ProgressEvent) => {
					const { loaded, total } = ProgressEvent;
					let percent = Math.floor((loaded * 100) / total);
					console.log(`${loaded}byte of ${total}byte | ${percent}% `);

					if (percentage < 100) {
						setPercentage(percent);
						console.log(percentage);
					}
				},
			};

			try {
				const res = await axios.post(
					`${process.env.REACT_APP_API_URL}/api/v1/upload`,
					formData,
					option
				);
				console.log(res);
				setStatus(res.status);
			} catch (ex) {
				console.log(ex);
				alert("You imported the wrong file");
			}
		};

		uploadFile();
	}, []);

	if (status > 100 && status < 250) {
		setTimeout(() => {
			setShow(false);
		}, 1500);
	}

	console.log(status);

	return (
		<div className="whole">
			{show ? (
				<div className="flex w-[100%] h-[100%] flex-col gap-[15px] justify-center items-center">
					<h3 className="text-textBody text-center text-[16px]">
						{fileName}
					</h3>
					<div className="bar w-[220px] md:w-[380px] ">
						<div className="w-full bg-grey100 rounded-full dark:bg-grey200">
							<div
								className="bg-primaryMain text-xs font-medium text-textWhite p-[7px] leading-none rounded-full"
								style={{ width: `${percentage}%` }}
							>
								{" "}
							</div>
						</div>
					</div>
					<button className="border-[1.5px] px-4 py-2 text-[16px] font-semibold border-errorMain text-errorMain rounded-lg">
						Cancel
					</button>
				</div>
			) : (
				<Uploaded />
			)}
		</div>
	);
}

export default Uploading;
