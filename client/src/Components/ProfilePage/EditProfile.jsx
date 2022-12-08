import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../../context/context.jsx";
import { addUserToLocalStorage } from "../../Utils/localStorage.js";
import Input from "../Ui/Form.jsx";

function EditProfileModal({ setShowEditProfileModal, setShowSuccess }) {
	const { user, setUser } = useGlobalContext();
	const [values, setValues] = useState({
		name: "",
		jobRole: "",
		...user,
	});
	const [loading, setLoading] = useState(false);

	const [errorObj, setErrorObj] = useState({
		name: "",
		jobRole: "",
	});

	const validate = () => {
		let errors = errorObj;
		if (!values.name.trim()) {
			errors = { ...errors, name: "This field is required" };
		}
		if (!values.jobRole.trim()) {
			errors = { ...errors, jobRole: "This field is required" };
		}
		setErrorObj({ ...errorObj, ...errors });
		return errors;
	};

	const onChange = (field, value) => {
		setErrorObj({
			[field]: "",
		});
		setValues({
			...values,
			[field]: value,
		});
	};

	const anyError = (errors) => {
		return Object.values(errors).some((value) => value !== "");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const isError = anyError(validate());
		// TODO: Handle API call
		if (!isError) {
			try {
				console.log("About to call");
				const res = await axios.put(
					"https://api.coverly.hng.tech/api/v1/auth",
					values,
					{
						headers: {
							Authorization: `Bearer ${user?.token}`,
						},
					}
				);
				setLoading(false);
				const newUserInfo = { ...user, ...res.data.data };
				setUser(newUserInfo);
				addUserToLocalStorage(newUserInfo);
				setShowSuccess(true);
				setShowEditProfileModal(false);
			} catch (error) {
				console.log(error);
				setErrorObj({
					...errorObj,
					name: "Server error, please try again later.",
				});
			}
		}
		setLoading(false);
	};

	return (
		<div>
			<div
				className="bg-[#00000065] h-screen w-screen fixed left-0 fixed top-0 z-10 "
				onClick={() => {
					setShowEditProfileModal(false);
				}}
			></div>
			<div className="fixed bg-white w-11/12 md:w-6/12 h-max z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3 md:p-6 rounded">
				<div className="w-11/12  mx-auto overflow-hidden">
					<div>
						<div>
							<h1 className="font-bold text-[1.5em] py-4 text-center">
								Edit Profile
							</h1>
						</div>
						<form className="z-50 flex flex-col justify-center gap-4">
							<Input
								id="name"
								type="text"
								value={values.name || ""}
								icon={["fas", "user"]}
								placeholder="John Doe"
								onChange={(e) => {
									onChange("name", e.target.value);
								}}
								alertType={errorObj.name ? "error" : ""}
								helperText={errorObj.name}
							/>
							<Input
								id="jobRole"
								type="text"
								value={values.jobRole || ""}
								icon={["fas", "sitemap"]}
								placeholder="Designer"
								onChange={(e) => {
									onChange("jobRole", e.target.value);
								}}
								alertType={errorObj.jobRole ? "error" : ""}
								helperText={errorObj.jobRole}
							/>

							<div className="flex gap-6 justify-end">
								<button
									onClick={handleSubmit}
									disabled={loading || !values.name}
									type="submit"
									className="bg-primaryMain px-8 py-4 rounded-lg text-white font-bold disabled:bg-primaryLight min-w-[105px]"
								>
									{loading ? (
										<FontAwesomeIcon
											icon={["fas", "spinner"]}
											spin
										/>
									) : (
										"Save"
									)}
								</button>
								<p
									className="border-2 border-primaryMain px-8 py-4 rounded-lg text-primaryMain font-bold cursor-pointer"
									onClick={() => {
										setShowEditProfileModal(false);
									}}
								>
									Cancel
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditProfileModal;
