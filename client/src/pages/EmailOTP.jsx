import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import EmailFooter from "../Layouts/EmailFooter";
// import FailModal "../Components/Ui/FailModal.css";
import Input from "../Components/Ui/Input";
import SuccessModal from "../Components/Ui/SuccessModal";

const EmailOTP = () => {
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);
	const [failShow, setFailShow] = useState(false);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(30);

	const [input, setInput] = useState({
		one: "",
		two: "",
		three: "",
		four: "",
	});

	const one = useRef(null);
	const two = useRef(null);
	const three = useRef(null);
	const four = useRef(null);

	const handleChange = (element, type) => {
		setInput({
			...input,
			[type]: element.value
				? element.value[element.value.length - 1]
				: "",
		});
		const next = { one: two, two: three, three: four, four };
		if (element.value) {
			next[type].current.focus();
		}
	};

	const handleKeyPress = (e, type) => {
		const next = { one: two, two: three, three: four, four };
		const prev = { one, two: one, three: two, four: three };
		if (e.key === "ArrowRight") {
			next[type].current.focus();
		}
		// if (e.key==="ArrowUp" || e.key==="ArrowDown"){
		//     e.preventDefault()
		// }
		if (e.key === "ArrowLeft") {
			prev[type].current.focus();
		}
		if (e.key === "Backspace") {
			prev[type].current.focus();
		}
	};

	const validateOTP = () => {
		const otp = input.one + input.two + input.three + input.four;
		console.log(otp);
		fetch(`https://api.coverly.hng.tech/api/v1/auth/validateOTP`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				otp,
			}),
		})
			.then((res) => {
				if (res.ok) {
					setShow(true);
				} else {
					setFailShow(true);
				}
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	const resendOTP = () => {
		setMinutes(0);
		setSeconds(30);
		setInput({
			one: "",
			two: "",
			three: "",
			four: "",
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}

			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(interval);
				} else {
					setSeconds(59);
					setMinutes(minutes - 1);
				}
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [minutes, seconds]);
	const { handleSubmit } = useForm();
	const otpValidate = () => {
		setShow(true);
	};

	return (
		<section className="email-otp bg-[#F2F2F7] pt-36 pb-20">
			<div className="email-content mx-auto w-[89%] py-8 text-center bg-[transparent] sm:w-[75%] md:bg-white md:w-[474px] bg-white py-16 md:px-1 xl:w-[528px]">
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
				<h1 className="text-black text-2xl font-semibold leading-8 mb-7 sm:text-3xl mb-5 md:text-[32px] mb-5 lg:text-[40px]">
					Email Verification
				</h1>
				<p className="w-10/12 mx-auto text-base font-normal leading-6 text-[#6D6D6D] sm:text-lg sm:w-3/4 lg:text-lg lg:mx-auto">
					Enter the OTP code sent to the email associated with your
					account to reset your password.
				</p>
				<h2 className="mt-10">
					<span className="block text-xl leading-8 text-[#6D6D6D] md:text-[24px] lg:text-2xl">
						Please Enter OTP
					</span>
					<span className="text-[#FF2635] text-xl leading-8 font-semibold md:text-[24px] lg:text-2xl">
						{seconds > 0 || minutes > 0 ? (
							<p>
								{minutes < 10 ? `0${minutes}` : minutes}:
								{seconds < 10 ? `0${seconds}` : seconds}
							</p>
						) : (
							<p></p>
						)}
						{/* 1:04 */}
					</span>
				</h2>
				<form onSubmit={handleSubmit(otpValidate)}></form>
				<div className="otp-input mt-8 mb-10">
					<input
						className="otp-field font-bold w-12 h-12 px-2 pl-4 py-4 mr-4 border border-[#6D6D6D] outine-1 outline-[#6D6D6D] rounded-lg text-[#6D6D6D] text-xl leading-8 md:mr-6 lg:mr-8"
						ref={one}
						type="number"
						name="otp"
						maxLength={1}
						value={input.one}
						onChange={(e) => handleChange(e.target, "one")}
						onKeyUp={(e) => handleKeyPress(e, "one")}
					/>
					<input
						className="otp-field font-bold w-12 h-12 px-2 pl-4 py-4 mr-4 border border-[#6D6D6D] outine-1 outline-[#6D6D6D] rounded-lg text-[#6D6D6D] text-xl leading-8
                        md:mr-6
                        lg:mr-8"
						ref={two}
						type="number"
						name="otp"
						maxLength={1}
						value={input.two}
						onChange={(e) => handleChange(e.target, "two")}
						onKeyUp={(e) => handleKeyPress(e, "two")}
					/>
					<input
						className="otp-field font-bold w-12 h-12 px-2 pl-4 py-4 mr-4 border border-[#6D6D6D] outine-1 outline-[#6D6D6D] rounded-lg text-[#6D6D6D] text-xl leading-8
                        md:mr-6
                        lg:mr-8"
						ref={three}
						type="number"
						name="otp"
						maxLength={1}
						value={input.three}
						onChange={(e) => handleChange(e.target, "three")}
						onKeyUp={(e) => handleKeyPress(e, "three")}
					/>
					<input
						className="otp-field font-bold w-12 h-12 px-2 pl-4 py-4 mr-4 border border-[#6D6D6D] outine-1 outline-[#6D6D6D] rounded-lg text-[#6D6D6D] text-xl leading-8
                        md:mr-6
                        lg:mr-8"
						ref={four}
						type="number"
						name="otp"
						maxLength={1}
						value={input.four}
						onChange={(e) => handleChange(e.target, "four")}
						onKeyUp={(e) => handleKeyPress(e, "four")}
					/>
				</div>

				<div className="otp-btn mb-8 grid grid-cols-2 gap-4 justify-between items-center  sm:w-[370px] mx-auto lg:w-96 mx-auto">
					<div
						className={`${
							seconds > 0 || minutes > 0 ? "" : "border-[#0652DD]"
						} resend-otp border border-[#ACC5F4] rounded-lg hover:scale-x-[1.02]`}
					>
						<input
							disabled={seconds > 0 || minutes > 0}
							type="button"
							value="Resend OTP"
							className={`${
								seconds > 0 || minutes > 0
									? "text-[#ACC5F4] cursor-not-allowed"
									: "text-[#0652DD] cursor-pointer"
							} py-3 px-10`}
							onClick={resendOTP}
						/>
					</div>
					<div className="validate-otp rounded-lg bg-[#0652DD] hover:scale-x-[1.02]">
						<input
							type="submit"
							value={loading ? "Validating..." : "Validate OTP"}
							className="text-white py-3 px-10 cursor-pointer"
							onClick={validateOTP}
						/>
					</div>
				</div>
			</div>
			<EmailFooter />
		</section>
	);
};

export default EmailOTP;
