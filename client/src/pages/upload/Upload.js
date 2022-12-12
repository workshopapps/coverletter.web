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
import { useRef } from "react";

function Upload() {
	const { user, setUser } = useGlobalContext();
	const navigate = useNavigate();

	let renderTwice = useRef(true);
	useEffect(() => {
		const getUser = async () => {
			if (user) return;
			try {
				const response = await axios.get(
					`https://api.coverly.hng.tech/api/v1/auth/success`,
					{
						withCredentials: true,
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
				} else {
					toast.error("Authentication Failed");
				}
			} catch (err) {
				console.log(err);
			}
		};
		if (renderTwice.current) {
			renderTwice.current = false;
			getUser();
		}
		// eslint-disable-next-line
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
