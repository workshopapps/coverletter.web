import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import Uploaded from "../uploaded/Uploaded";
import Upload from "../upload/Upload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Uploading() {
	const [percentage, setPercentage] = useState("0");
	const [status, setStatus] = useState("");
	const [show, setShow] = useState(true);
	const [error, setError] = useState("");
	const { file, setFile, setFileSize, fileName } = useGlobalContext();

	const ourRequest = useRef(null);

	const showToast = () => {
		toast(" You imported the wrong file! ");
	};

	const cancelToast = () => {
		toast(" You cancelled the operation! ");
	};

	useEffect(() => {
		ourRequest.current = axios.CancelToken.source();
		const uploadFile = async (e) => {
			const formData = new FormData();
			formData.append("myFile", file);
    
            const option = {
                onUploadProgress: (ProgressEvent) => {
                    const { loaded, total } = ProgressEvent;
                    let percent = Math.floor((loaded * 100) / total);
    
                    if (percent < 100) {
                        setPercentage(percent);
                    }
                },
				cancelToken: ourRequest.current.token
            };
    
            try {
                const res = await axios.post(
                    `https://api.coverly.hng.tech/api/v1/upload`,
                    formData, option,
                );
                setStatus(res.status)
            } catch (ex) {
                setError(ex.code);
                
            }
        };

		uploadFile();

		if (error === "ERR_BAD_REQUEST") {
			showToast();
			setFile("");
			setFileSize();
		}
	}, [error]);

	if (status > 100 && status < 250) {
		setTimeout(() => {
			setShow(false);
		}, 500);
	}

	const cancelUpload = () => {
		ourRequest.current.cancel();
		setError("ERR_BAD_REQUEST");
		setFile("");
		setFileSize();
		cancelToast();
	};

	return (
		<div className="whole">
			{error === "ERR_BAD_REQUEST" ? (
				<Upload />
			) : show ? (
				<div className="flex w-[100%] h-[100%] flex-col gap-[15px] justify-center items-center">
					<ToastContainer />
					<h3 className="text-textBody text-center text-[16px]">
						{fileName}
					</h3>
					<div className="bar w-[220px] md:w-[380px] ">
						<div className="w-full bg-grey100 rounded-full dark:bg-grey200">
							<div
								className="bg-primaryMain text-xs font-medium text-textWhite p-[7px] leading-none rounded-full"
								style={{ width: `${percentage}%` }}
							></div>
						</div>
					</div>
					<button
						onClick={cancelUpload}
						className="border-[1.5px] px-4 py-2 text-[16px] font-semibold border-errorMain text-errorMain rounded-lg"
					>
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
