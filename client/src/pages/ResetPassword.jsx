import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import SuccessModal from "../Components/Ui/SuccessModal";
import Input from "../Components/Ui/Input";
import Label from "../Components/Ui/Label";
import EmailFooter from "../Layouts/EmailFooter";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
	const [passwordType, setPasswordType] = useState("password");
	const [passwordType2, setPasswordType2] = useState("password");
	const [passwordInput, setPasswordInput] = useState("");
	const [passwordInput2, setPasswordInput2] = useState("");
	const [show, setShow] = useState(false);
	const { userEmail } = useGlobalContext();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const handlePasswordChange = (evnt) => {
		setPasswordInput(evnt.target.value);
	};

	const handlePasswordChange2 = (evnt) => {
		setPasswordInput2(evnt.target.value);
	};

	const togglePassword = () => {
		if (passwordType === "password") {
			setPasswordType("text");
			return;
		}
		setPasswordType("password");
	};

	const togglePassword2 = () => {
		if (passwordType2 === "password") {
			setPasswordType2("text");
			return;
		}
		setPasswordType2("password");
	};

	const { register, formState, getValues, setError, handleSubmit } =
		useForm();
	const onResetPassword = (FormData) => {
		const ResetPassword = async () => {
			setLoading(true);
			try {
				const resp = await axios.post(
					`https://api.coverly.hng.tech/api/v1/auth/resetPassword`,
					{
						password: FormData.password,
						confirmPassword: FormData.passwordConfirmation,
						email: userEmail.email,
					},
					{
						headers: {
							Authorization: `Bearer ${userEmail.token}`,
						},
					}
				);

				setShow(true);
				console.log(resp.data);
				setTimeout(() => {
					navigate("/signin");
				}, 4000);
			} catch (error) {
				toast.error(error.response.data.msg);

				return;
			}
			setLoading(false);
		};
		ResetPassword();
	};

	return (
		<section className="reset-password bg-[#f2f2f7] pt-36 pb-20 max-[425px]:pt-20">
			<div
				className="reset-password-content mx-auto w-[89%]   bg-[transparent]
			sm:w-[75%]
			md:bg-white md:w-[474px] bg-white md:px-16 py-16
			xl:w-[528px] xl:px-16"
			>
				<SuccessModal onClose={() => setShow(false)} show={show}>
					<div className="modal-body-text">
						<p className="text-[16px] leading-6 text-gray-700 font-semibold mb-10">
							Your password has been changed successfully
						</p>
					</div>
					<div className="home-btn">
						<Link to="/signin">
							<Input
								type={"button"}
								value={"Sign In"}
								className={
									"border rounded-lg text-white py-3 px-10 bg-[#0544B8] cursor-pointer hover:scale-x-[1.02] text-[20px]"
								}
							/>
						</Link>
					</div>
				</SuccessModal>
				<h1
					className="text-black text-2xl text-center font-semibold leading-8 mb-7
				sm:text-3xl
				md:text-[32px]
				xl:text-[40px]"
				>
					Set a new password
				</h1>
				<p
					className="w-11/12 mx-auto text-base font-normal leading-6 text-[#6D6D6D] text-center
				sm:text-lg w-3/4
				tb:text-[18px] w-7/8
				lg:text-[18px]"
				>
					Your new password must contain an uppercase, a lowercase, a
					number and a unique character. You can not use a previously
					used password.
				</p>
				<div className="form-container">
					<form onSubmit={handleSubmit(onResetPassword)}>
						<div
							className="password-field my-12
						tb:my-10"
						>
							<div className="field password">
								<div className="input-area password-field mb-6 relative">
									<Label>{"New Password"}</Label>
									<input
										type={passwordType}
										// value={passwordInput}
										onChange={handlePasswordChange}
										name="password"
										placeholder="New Password"
										className={`${
											formState.errors.password
												? "border border-[#D92D20] outline-2 outline-[#D92D20]"
												: ""
										} input_password mt-2 w-full py-[12px] pl-4 rounded-lg bg-[transparent] border border-gray-800 outline-2 outline-gray-800 bg-transparent`}
										id="input-pass"
										{...register("password", {
											required: "⚠ Password is required!",
											minLength: {
												value: 5,
												message:
													"Password must have at least 5 characters",
											},
										})}
									/>
									{formState.errors.password && (
										<span className="text-left text-[#FF2635]">
											{formState.errors.password.message}
										</span>
									)}
									<span
										className="hide-icon absolute top-[45px] right-[15px]"
										onClick={togglePassword}
									>
										{passwordType === "password" ? (
											<BsFillEyeSlashFill />
										) : (
											<BsFillEyeFill />
										)}
									</span>
								</div>
							</div>
							<div className="field confirm-password">
								<div className="input-area password-field relative">
									<Label>{"Confirm Password"}</Label>
									<input
										type={passwordType2}
										// value={passwordInput2}
										onChange={handlePasswordChange2}
										name="password"
										placeholder="Confirm Password"
										{...register("passwordConfirmation", {
											required:
												"⚠ Please confirm password!",
											validate: {
												matchesPreviousPassword: (
													value
												) => {
													const { password } =
														getValues();
													return (
														password === value ||
														"⚠ Passwords do not match!"
													);
												},
											},
										})}
										className={`${
											formState.errors.password
												? "border border-[#D92D20] outline-2 outline-[#D92D20]"
												: ""
										} input_password mt-2 w-full py-[12px] pl-4 rounded-lg bg-[transparent] border border-gray-800 outline-2 outline-gray-800 bg-transparent`}
										id="input-pass"
									/>
									{formState.errors.passwordConfirmation && (
										<span className="text-left text-[#FF2635] ">
											{
												formState.errors
													.passwordConfirmation
													.message
											}
										</span>
									)}
									<span
										className="hide-icon absolute top-[45px] right-[15px]"
										onClick={togglePassword2}
									>
										{passwordType2 === "password" ? (
											<BsFillEyeSlashFill />
										) : (
											<BsFillEyeFill />
										)}
									</span>
								</div>
							</div>
						</div>
						<div className="reset-password">
							<input
								type="submit"
								value={"Reset Password"}
								className="reset-btn text-center text-white w-full bg-[#0652DD] rounded-lg py-4 cursor-pointer hover:scale-x-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
								disabled={loading}
							/>
						</div>
					</form>
				</div>
			</div>
			<EmailFooter />
		</section>
	);
};

export default ResetPassword;
