import React, { useEffect } from "react";
import Drop from "../../Components/drop/Drop";
import SectionFive from "../../Components/sectionFive/SectionFive";
import SectionFour from "../../Components/sectionFour/SectionFour";
import SectionOne from "../../Components/sectionOne/SectionOne";
import SectionThree from "../../Components/sectionThree/SectionThree";
import SectionTwo from "../../Components/sectionTwo/SectionTwo";
import axios from "axios";
import { useGlobalContext } from "../../context/context";
import {
	addEmailToLocalStorage,
	addUserToLocalStorage,
} from "../../Utils/localStorage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Upload() {
	const { setUser } = useGlobalContext();
	const navigate = useNavigate();

	useEffect(() => {
		const getUser = async () => {
			try {
				const response = await axios.get(
					`https://api.coverly.hng.tech/api/v1/auth/success`,
					{
						credentials: "include",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
							"Access-Control-Allow-Credentials": true,
						},
					}
				);
				const resp = response.data;
				const user = {
					name: resp?.user?.name,
					email: resp?.user?.email,
					userId: resp?.user?._id,
					token: resp?.token,
				};

				if (resp.success) {
					addUserToLocalStorage(user);
					setUser(user);
					addEmailToLocalStorage(user.email);
					toast.success(`Welcome Back ${user.name}`);
					navigate("/");
				}
			} catch (err) {
				toast.error("Authentication Failed");
				return;
			}
		};
		getUser();
	}, []);

	return (
		<div>
			<div className="upload bg-background font-manrope">
				<SectionOne />
				<SectionTwo />
				<Drop />
				<SectionThree />
				<SectionFour />
				<SectionFive />
			</div>
		</div>
	);
}

export default Upload;
