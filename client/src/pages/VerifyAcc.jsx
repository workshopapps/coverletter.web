import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { object } from "yup/lib/locale";
import Button from "../Components/Ui/Button";
import { useNavigate } from "react-router-dom";

const VerifyAcc = () => {
	const navigate = useNavigate();
	const intialState = {
		firstInput: "",
		secondInput: "",
		thirdInput: "",
		fourthInput: "",
	};
	const [otpCode, setOtpCode] = useState(intialState);
	const [isLoading, setIsLoading] = useState(false);
	const [seconds, setSeconds] = useState(120);

	useEffect(() => {
		if (seconds > 0) {
			setTimeout(() => setSeconds(seconds - 1), 1000);
		} else {
			setSeconds("Expired");
		}
	});

	const handleChange = (e) => {
		setOtpCode({ ...otpCode, [e.target.name]: e.target.value });
	};
	const { firstInput, secondInput, thirdInput, fourthInput } = otpCode;
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const onSubmit = () => {
		if (
			firstInput === "" ||
			secondInput === "" ||
			thirdInput === "" ||
			fourthInput === ""
		) {
			toast.error("please fill in all values");
			return;
		}
		const otp = Object.values(otpCode).join("");

		const verifyOtp = async () => {
			setIsLoading(true);
			try {
				const resp = await axios.post(
					`http://api.coverly.hng.tech/api/v1/auth/verify`,
					{
						otp,
					}
				);
				toast.success("You have been verified!!");
				setOtpCode(intialState);
				setTimeout(() => {
					navigate("/signin");
				}, 2000);
			} catch (error) {
				toast.error(error.response.data);
				setOtpCode(intialState);
				setIsLoading(false);
				return;
			}
		};
		verifyOtp();
	};
	const generateNewOtp = () => {
		const NewOtp = async () => {
			setIsLoading(true);
			try {
				const resp = await axios.post(
					`http://api.coverly.hng.tech/api/v1/auth/generateOtp`,
					{
						type: "verify",
						email: "dfelastevetest@gmail.com",
					}
				);
				toast.success("A new Otp has been Sent!!");
			} catch (error) {
				toast.error(error.response.data);
				setIsLoading(false);
				return;
			}
		};
		NewOtp();
	};

	return (
		<div className="bg-background px-[24px] py-[200px]">
			<div className="bg-[#ffff] px-[15.5px] py-[32px] md:p-[64px] text-center rounded-[8px] my-0 mx-auto w-fit">
				<div className="flex flex-col gap-[44px]">
					<div className="text-center">
						<h2 className="text-textHeader font-bold text-[20px] md:text-[40px] mb-[8px] ">
							Verify your account
						</h2>
						<p className="text-textBody text-[18px] ">
							Enter the code sent to your email adress
						</p>
						<p className="font-semibold text-[20px] md:text-[24px] mt-[24px] text-textBody ">
							Please Enter OTP
						</p>
						<p className="text-errorMain font-semibold text-[20px] md:text-[24px] mt-[4px]">
							{seconds}
						</p>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="flex justify-around">
							<div>
								<input
									className="w-[45px] text-[20px] font-bold text-textBody h-[48px] outline-none border py-[8px] px-[16px] border-stokeDark  rounded-[8px]"
									type="text"
									name="firstInput"
									value={firstInput}
									onChange={handleChange}
									maxLength="1"
								/>
							</div>
							<div>
								<input
									className="w-[45px] text-[20px] font-bold text-textBody h-[48px] outline-none border py-[8px] px-[16px] border-stokeDark  rounded-[8px]"
									type="text"
									value={secondInput}
									name="secondInput"
									onChange={handleChange}
									maxLength="1"
								/>
							</div>
							<div>
								<input
									className="w-[45px] text-[20px] font-bold text-textBody h-[48px] outline-none border py-[8px] px-[16px] border-stokeDark  rounded-[8px]"
									type="text"
									value={thirdInput}
									onChange={handleChange}
									name="thirdInput"
									maxLength="1"
								/>
							</div>
							<div>
								<input
									className="w-[45px] text-[20px] font-bold text-textBody h-[48px] outline-none border py-[8px] px-[16px] border-stokeDark  rounded-[8px]"
									type="text"
									value={fourthInput}
									name="fourthInput"
									onChange={handleChange}
									maxLength="1"
								/>
							</div>
						</div>
						<div className="flex gap-[16px] mt-10">
							<Button
								className={
									"btn btnSecondary w-[100%] btnShort disabled:opacity-50 disabled:cursor-not-allowed"
								}
								children={"Resend OTP"}
								type={"submit"}
								disabled={isLoading}
							/>
							<Button
								className={
									"btn btnPrimary w-[100%] btnShort disabled:opacity-50 disabled:cursor-not-allowed"
								}
								children={"Validate OTP"}
								type={"submit"}
								onClick={onSubmit}
								disabled={isLoading}
							/>
						</div>
					</form>
				</div>
				<div className="mt-[24px]">
					<Link
						to="/register"
						className="font-semibold text-primaryMain text-base underline underline-offset-[5px] cursor-pointer"
					>
						Change email
					</Link>
				</div>
			</div>
		</div>
	);
};

export default VerifyAcc;
