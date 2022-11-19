import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import SuccessModal from "../Components/Ui/SuccessModal";
import checkEmailIcon from "../Assets/check-email.svg";
import Input from "../Components/Ui/Input";
import Label from "../Components/Ui/Label";

const validate = (values) => {
	const errors = {};

	if (!values.email) {
		errors.email = "Email field cannot be empty!";
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Looks like an invalid email address!";
	}

	return errors;
};

const ForgotPassword = () => {
	const [show, setShow] = useState(false);
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div
			className="forgot-password-content mx-auto mt-36 w-[89%] py-8 bg-transparent
        tb:bg-white tb:w-[60%] tb:px-14 py-[70px]
        lg:w-6/12 py-12
        xxl:w-[528px]"
		>
			<SuccessModal onClose={() => setShow(false)} show={show}>
				<div className="modal-body-text">
					<p className="text-[16px] leading-6 text-gray-700 font-semibold mb-10">
						Account found! We have sent further instructions on how
						to reset your password to the email provided
					</p>
				</div>
				<div className="home-btn">
					<Link to="/">
						<Input
							type={"button"}
							value={"Open Email"}
							className={
								"border rounded-lg text-white py-3 px-10 bg-[#0544B8] cursor-pointer hover:scale-x-[1.03] text-[20px]"
							}
						/>
					</Link>
				</div>
			</SuccessModal>
			<h1
				className="text-black text-2xl font-semibold leading-8 mb-7 text-center
            sm:text-3x1 mb-5
            tb:text-[30px] mb-5
            lg:text-[38px]"
			>
				Forgot Password?
			</h1>
			<p
				className="w-[92%] mx-auto text-base font-normal leading-6 text-gray-700 text-center
            sm:text-lg w-3/4
            tb:text-[18px] w-7/8
            lg:text-[18px] w-[99%]"
			>
				To reset your password, enter the email associated with your
				Aplicar account
			</p>

			<div className="form-container">
				<form onSubmit={formik.handleSubmit} className="form mb-5">
					<div
						className="email-field my-9 relative
                    tb:my-10"
					>
						<label className="text-left text-gray-700" for="email">
							Email
						</label>
						<input
							type="email"
							placeholder="John Doe"
							className="input_password mt-2 w-full py-[12px] pl-4 rounded-lg border border-gray-700 outline-2 outline-gray-700 bg-transparent"
							id="email"
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email && (
							<span className="text-red-700">
								{formik.errors.email}
							</span>
						)}
						<span className="absolute top-[48px] right-[15px]">
							<img src={checkEmailIcon} alt="" />
						</span>
					</div>
					<div className="send-link">
						<Link>
							<input
								// onClick={()=>{setShow(true)}}
								type="submit"
								value="Send link to email"
								className="text-center w-full bg-[#0652DD] border rounded-lg text-white py-4 cursor-pointer hover:scale-x-[1.01] font-semibold"
							/>
						</Link>
					</div>
				</form>
				<p className="text-center">
					<span className="text-gray-700 font-semibold">
						Back to{" "}
					</span>
					<span className="text-blue-700 text-base leading-6 underline font-semibold">
						<Link to="/forgot-password">Login Page</Link>
					</span>
				</p>
			</div>
		</div>
	);
};

export default ForgotPassword;
