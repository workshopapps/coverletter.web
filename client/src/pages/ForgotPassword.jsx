import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessModal from "../Components/Ui/SuccessModal";
import checkEmailIcon from "../Assets/check-email.svg";
import Input from "../Components/Ui/Input";
import EmailFooter from "../Layouts/EmailFooter";

const ForgotPassword = () => {
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);

	const { register, handleSubmit, formState, setError } = useForm();
	const onEmailSubmit = (FormData) => {
		setLoading(true);
		fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/forgotPassword`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: FormData.email,
			}),
		})
			.then((res) => {
				if (res.ok) {
					setShow(true);
				} else {
					setError("email", {
						type: "custom",
						message: "We can not find your mail",
					});
				}
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};
	return (
		<section className="forgot-password bg-[#f2f2f7] pt-36 pb-24">
			<div className="forgot-password mx-auto w-[89%] py-8 bg-[transparent] sm:w-[75%] md:bg-white md:w-[474px] bg-white py-16 md:px-10 lg:px-16 xl:w-[528px]">
				<SuccessModal onClose={() => setShow(false)} show={show}>
					<div className="modal-body-text">
						<p className="text-[16px] leading-6 text-gray-700 font-semibold mb-10">
							Account found! We have sent further instructions on
							how to reset your password to the email provided
						</p>
					</div>
					<div className="home-btn">
						<a href="https://gmail.com">
							<Input
								type={"button"}
								value={"Open Email"}
								className={
									"border rounded-lg text-white py-3 px-10 bg-[#0544B8] cursor-pointer hover:scale-x-[1.03] text-[20px]"
								}
							/>
						</a>
					</div>
				</SuccessModal>
				<h1 className="text-black text-2xl text-center font-semibold leading-8 mb-7 sm:text-3xl mb-5 md:text-[32px] mb-5 lg:text-[40px]">
					Forgot Password?
				</h1>
				<p className="w-[92%] mx-auto text-base font-normal leading-6 text-[#6D6D6D] text-center sm:text-lg w-3/4 md:text-[18px] w-7/8 lg:text-[18px] w-[99%] xl:w-[418px] mx-auto">
					To reset your password, enter the email associated with your
					Aplicar account
				</p>
				<div className="form-container">
					<form
						onSubmit={handleSubmit(onEmailSubmit)}
						className="form mb-5"
					>
						<div className="email-field my-9 relative tb:my-10">
							<label
								className="text-left text-gray-700"
								htmlFor="email"
							>
								Email
							</label>
							<input
								type="email"
								placeholder="John Doe"
								className={`${
									formState.errors.email
										? "border border-[#D92D20]"
										: ""
								} input_password mt-2 w-full py-[12px] bg-[transparent] pl-4 rounded-lg border border-[#6D6D6D] outline-none bg-transparent`}
								id="email"
								name="email"
								{...register("email", {
									required: "Please enter your email",
								})}
							/>
							{formState.errors.email && (
								<span className="text-left text-[#FF2635]">
									{formState.errors.email.message}
								</span>
							)}
							<span className="absolute top-[48px] right-[15px]">
								<img src={checkEmailIcon} alt="" />
							</span>
						</div>
						<div className="send-link">
							<input
								type="submit"
								value={
									loading
										? "Loading..."
										: "Send link to email"
								}
								className="text-center w-full bg-[#0652DD] border rounded-lg text-white py-4 cursor-pointer hover:scale-x-[1.01] font-semibold"
							/>
						</div>
					</form>
					<p className="text-center">
						<span className="text-gray-700 font-semibold">
							Back to{" "}
						</span>
						<span className="text-[#0652DD] text-base leading-6 underline font-semibold">
							<Link to="/forgot-password">Login Page</Link>
						</span>
					</p>
				</div>
			</div>
			<EmailFooter />
		</section>
	);
};

export default ForgotPassword;
