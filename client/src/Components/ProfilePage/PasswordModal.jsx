import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../../context/context.jsx";
import { PasswordLockIcon } from "./Icons.js";

function PasswordModal({ setShowPassModal, setShowSuccess }) {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");

	const [loading, setLoading] = useState(false);

	const [errorObj, setErrorObj] = useState({
		oldPass: "",
		newPass: "",
		confirmPass: "",
	});

	const { user } = useGlobalContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		var errors = {};
		if (!oldPassword.trim()) {
			errors = { ...errors, oldPass: "Password field cannot be empty" };
		}
		if (!newPassword.trim()) {
			errors = { ...errors, newPass: "Password field cannot be empty" };
		}
		if (!confirmNewPassword.trim()) {
			errors = {
				...errors,
				confirmPass: "Password field cannot be empty",
			};
		}
		if (
			newPassword !== confirmNewPassword &&
			!!newPassword.trim() &&
			!!confirmNewPassword.trim()
		) {
			errors = {
				...errors,
				confirmPass: "This field must be the same as new password",
			};
		}
		if (
			newPassword === oldPassword &&
			!!newPassword.trim() &&
			!!oldPassword.trim()
		) {
			errors = {
				...errors,
				newPass: "This field cannot be the same as old password",
			};
		}
		setErrorObj(errors);
		const isError = errors.oldPass || errors.newPass || errors.confirmPass;
		if (!isError) {
			try {
				const baseUrl = "https://api.coverly.hng.tech";
				await axios.put(
					`${baseUrl}/api/v1/auth/updatePassword`,
					{
						oldPassword,
						password: newPassword,
						confirmPassword: confirmNewPassword,
					},
					{ headers: { Authorization: `Bearer ${user?.token}` } }
				);
				setLoading(false);
				setShowSuccess(true);
				setShowPassModal(false);
			} catch (error) {
				if (error.code === "ERR_NETWORK") {
					setErrorObj({
						...errorObj,
						oldPass: "Server error, please try again later.",
					});
				} else {
					setErrorObj({ ...errorObj, oldPass: "Invalid password" });
				}
			}
		}
		setLoading(false);
	};

	return (
		<div>
			<div
				className="bg-[#00000065] h-screen w-screen fixed left-0 fixed top-0 z-10 "
				onClick={() => {
					setShowPassModal(false);
				}}
			></div>
			<div className="fixed bg-white w-11/12 md:w-6/12 h-max z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3 md:p-6 rounded">
				<div className="w-11/12  mx-auto overflow-hidden">
					<div>
						<div>
							<h1 className="font-bold text-[1.5em] py-4 text-center">
								Change Password
							</h1>
						</div>
						<form
							action=""
							onSubmit={handleSubmit}
							className="z-50 flex flex-col justify-center gap-4"
						>
							<div className="my-2 ">
								<label
									htmlFor="oldPassword"
									className="font-bold text-[#6D6D6D]"
								>
									Old Password
								</label>
								<div className="relative ">
									<PasswordLockIcon className="absolute top-4 left-4 " />
									<input
										style={{
											borderColor: errorObj.oldPass
												? "#FF2635"
												: "",
										}}
										type="password"
										className="border-grey200 border focus:border-[#6D6D6D] outline-0  w-full  rounded-lg my-2 px-12 py-2"
										id="oldPassword"
										placeholder="Enter Old Password"
										onChange={(e) => {
											setOldPassword(e.target.value);
											setErrorObj({
												...errorObj,
												oldPass: "",
											});
										}}
									/>
									{errorObj.oldPass && (
										<span className="text-errorMain text-sm">
											{errorObj.oldPass}
										</span>
									)}
								</div>
							</div>
							<div className="my-2 ">
								<label
									htmlFor="newPassword"
									className="font-bold text-[#6D6D6D]"
								>
									New Password
								</label>
								<div className="relative ">
									<PasswordLockIcon className="absolute top-4 left-4 " />
									<input
										style={{
											borderColor: errorObj.newPass
												? "#FF2635"
												: "",
										}}
										type="password"
										className="border-grey200 border focus:border-[#6D6D6D] outline-0  w-full  rounded-lg my-2 px-12 py-2"
										id="newPassword"
										placeholder="Enter New Password"
										onChange={(e) => {
											setNewPassword(e.target.value);
											setErrorObj({
												...errorObj,
												newPass: "",
											});
										}}
									/>
									{errorObj.newPass && (
										<span className="text-errorMain text-sm">
											{errorObj.newPass}
										</span>
									)}
								</div>
							</div>
							<div className="my-2 ">
								<label
									htmlFor="confirmNewPassword"
									className="font-bold text-[#6D6D6D]"
								>
									Confirm New Password
								</label>
								<div className="relative ">
									<PasswordLockIcon className="absolute top-4 left-4 " />
									<input
										style={{
											borderColor: errorObj.confirmPass
												? "#FF2635"
												: "",
										}}
										type="password"
										className="border-grey200 border focus:border-[#6D6D6D] outline-0  w-full  rounded-lg my-2 px-12 py-2"
										id="confirmNewPassword"
										placeholder="Confirm New Password"
										onChange={(e) => {
											setConfirmNewPassword(
												e.target.value
											);
											setErrorObj({
												...errorObj,
												confirmPass: "",
											});
										}}
									/>
									{errorObj.confirmPass && (
										<span className="text-errorMain text-sm">
											{errorObj.confirmPass}
										</span>
									)}
								</div>
							</div>
							<div className="flex gap-6 justify-end">
								<button
									disabled={
										loading ||
										!oldPassword ||
										!newPassword ||
										!confirmNewPassword
									}
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
										setShowPassModal(false);
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

export default PasswordModal;
