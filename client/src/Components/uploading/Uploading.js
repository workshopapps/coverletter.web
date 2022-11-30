import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../../context/context";
import axios, { isCancel } from "axios";
import Uploaded from "../uploaded/Uploaded";

function Uploading() {
	const [percentage, setPercentage] = useState("0");
	const [status, setStatus] = useState("");
	const [show, setShow] = useState(true);
	const { file, fileName } = useGlobalContext();

    const cancelFileUpload = useRef(null)

	useEffect(() => {
	const uploadFile = async (e) => {
			console.log(file);
			const formData = new FormData();
			formData.append("myFile", file);
    
            const option = {
                onUploadProgress: (ProgressEvent) => {
                    const { loaded, total } = ProgressEvent;
                    let percent = Math.floor((loaded * 100) / total);
                    // console.log(`${loaded}byte of ${total}byte | ${percent}% `);
    
                    if (percentage < 100) {
                        setPercentage(percent);
                        // console.log(percentage);
                    }
                },

               cancelToken: new axios.CancelToken( cancel => (cancelFileUpload.current = cancel))
            };
    
            try {
                const res = await axios.post(
                    `http://api.coverly.hng.tech/api/v1/upload`,
                    formData,
                    option
                );
                console.log(res);
                setStatus(res.status)
            } catch (ex) {
                console.log(ex);
                // alert("You imported the wrong file");
                if(isCancel(ex)){
                    alert(ex.message)
                }
            }
        };

    
        uploadFile();
    
    },[])


    if(status> 100 && status < 250){
        setTimeout(() =>{
            setShow(false)
        },500)
    }

			

    const cancelUpload = () =>{
        if(cancelFileUpload){
        cancelFileUpload.current("User has canceled the file upload")
    }
    }

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
					<button onClick={cancelUpload} className="border-[1.5px] px-4 py-2 text-[16px] font-semibold border-errorMain text-errorMain rounded-lg">
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
