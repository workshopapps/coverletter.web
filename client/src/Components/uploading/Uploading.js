import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import Uploaded from "../uploaded/Uploaded";

function Uploading() {
	const [percentage, setPercentage] = useState("");
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
                    if(percent === 100){
                        setTimeout(() =>{
                            alert('Uploaded succesfully');
                            setShow(false)
                        },2000)
                    }
                   
                    
                },
            };
    
            try {
                const res = await axios.post(
                    `http://api.aplicar.hng.tech/api/v1/upload`,
                    formData,
                    option
                );
                console.log(res);
                // Navigate("/upload-data");
            } catch (ex) {
                console.log(ex);
                alert("You imported the wrong file");
            }
        };
    
        uploadFile();
    
    },[])

    return (
		<div className="whole">
			{show ? (
				<div className="flex flex-col gap-[15px] justify-center items-center">
					<h3 className="text-textBody text-[16px]">{fileName}</h3>
					<div className="bar w-[100%] md:w-[380px] ">
                         <div className="w-full bg-grey100 rounded-full dark:bg-grey200">
                            <div className="bg-primaryMain text-xs font-medium text-textWhite p-0.5 leading-none rounded-full" style = {{ width : `${percentage}%` }}>{percentage}</div>
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
