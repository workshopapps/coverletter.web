import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
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
	const [loadingImage, setLoadingImage] = useState(false);

	const [errorObj, setErrorObj] = useState({
		name: "",
		jobRole: "",
	});

	const fileInputRef = useRef();

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
				const res = await axios.put(
					"https://api.coverly.hng.tech/api/v1/auth",
					{
						name: values.name,
						jobRole: values.jobRole,
					},
					{
						headers: {
							Authorization: `Bearer ${user.token}`,
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
				setErrorObj({
					...errorObj,
					name: "Server error, please try again later.",
				});
			}
		}
		setLoading(false);
	};

	const handleFileUpload = async (e) => {
		const file = e.target.files[0];
		if (file.size > 1000000) {
			toast.warning("Photo upload size must not exceed 1MB");
			return;
		}
		setLoadingImage(true);
		try {
			const formData = new FormData();
			formData.append("myFile", file);
			const res = await axios.patch(
				"https://api.coverly.hng.tech/api/v1/auth/dashboard/update-icon",
				formData,
				{ headers: { Authorization: `Bearer ${user.token}` } }
			);
			const userObj = {
				...user,
				...(res?.data?.data ? res.data.data : {}),
			};
			setUser(userObj);
			addUserToLocalStorage(userObj);
		} catch (error) {
			toast.error("Server error. please try again later");
		}
		setTimeout(() => {
			setLoadingImage(false);
		}, 1000);
		// setLoadingImage(false)
	};

	return (
		<div>
			<div
				className="bg-[#00000065] h-screen w-screen fixed left-0 fixed top-0 z-10 "
				onClick={() => {
					setShowEditProfileModal(false);
				}}
			></div>
			<div className="fixed bg-white w-full max-w-lg m-4 h-max z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 md:p-6 rounded">
				<div className="w-full overflow-hidden flex flex-col gap-4">
					<div
						onClick={() => fileInputRef.current.click()}
						className="h-32 w-32 rounded-full bg-grey200 my-4 self-center overflow-hidden relative group cursor-pointer"
					>
						<input
							ref={fileInputRef}
							type="file"
							className="hidden"
							onChange={handleFileUpload}
							accept="image/*"
							multiple={false}
						/>
						{user.profileIconUrl ? (
							<img
								src={user.profileIconUrl}
								alt={`Change ${user.name}'s avatar`}
								className="w-full h-full object-cover"
							/>
						) : (
							<FontAwesomeIcon
								className="text-grey100 absolute bottom-0 left-[50%] translate-x-[-50%] text-[6rem]"
								icon={["fas", "user"]}
							/>
						)}
						{!!loadingImage && (
							<div className="w-full h-full flex justify-center items-center bg-overlay2 text-primaryDark text-2xl">
								<FontAwesomeIcon
									icon={["fas", "spinner"]}
									spin
								/>
							</div>
						)}
						<div className="absolute bottom-0 translate-y-[100%] group-hover:translate-y-0 h-8 w-full bg-overlay transition ease-in-out duration-200 flex justify-center items-center text-textWhite">
							<FontAwesomeIcon icon={["fas", "camera"]} />
						</div>
					</div>
					<h1 className="font-bold text-2xl pb-4 text-center">
						Edit Profile
					</h1>
					<form className="z-50 flex flex-col justify-center gap-4">
						<Input
							id="name"
							type="text"
							value={values.name || ""}
							icon={["fas", "user"]}
							placeholder="John Doe"
							labelText="Full name"
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
							labelText="Job role"
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
	);
}

export default EditProfileModal;
