import { Formik, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import InputField from "../Components/Ui/InputField";
import man3 from "../Assets/man3.png";
import eyeslash from "../Assets/eye-slash.svg";
import Button from "../Components/Ui/Button";
import { Link, useNavigate } from "react-router-dom";
import SuccessModal from "../Components/Ui/SuccessModal";
import Input from "../Components/Ui/Input";
import { toast } from "react-toastify";
import { useGlobalContext } from "../context/context";
import { addEmailToLocalStorage } from "../Utils/localStorage";
import axios from "axios";
import GoogleAuth from "../Layouts/GoogleAuth";

const CreateAcount = () => {
	const { setUserEmail, userEmail, googleSignIn } = useGlobalContext();
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [passwordShown, setPasswordShown] = useState(false);
	// const [googleUserData, setGoogleUserData] = useState({});
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	};
	const onSubmit = async (values, actions) => {
		try {
			const resp = await axios.post(
				`https://api.coverly.hng.tech/api/v1/auth/signup`,
				{
					name: values.fullName,
					email: values.email,
					password: values.password,
				}
			);
			setShow(true);
			setUserEmail({ email: values.email });
			addEmailToLocalStorage({ email: values.email });
		} catch (err) {
			toast.error("Email already in use");
			return;
		}
		await new Promise((resolve) => setTimeout(resolve, 20000));
		actions.resetForm();
	};

	const passwordRules = /(?=.{5,})/;

	const CreateAccSchema = Yup.object().shape({
		fullName: Yup.string().required("Please Enter your name"),
		email: Yup.string()
			.email("Please enter a valid email like yourname@example.com")
			.required("Please enter your email"),
		password: Yup.string()
			.min(5)
			.matches(passwordRules, {
				message: "Please enter a stronger password",
			})
			.required("Please enter a password"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Password does not match")
			.required("Please confirm password"),
	});

	const {
		values,
		errors,
		handleBlur,
		handleChange,
		handleSubmit,
		touched,
		isSubmitting,
	} = useFormik({
		initialValues: {
			fullName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},

		validationSchema: CreateAccSchema,
		onSubmit,
	});

	return (
		<div className="max-w-screen-2xl m-auto relative bg-background px-[22px] md:px-[60px] py-[76px] lg:pt-[76px] lg:pb-[150px]">
			<div className="hidden lg:flex justify-end">
				<img src={man3} className="w-[1045px] rounded-[8px]" alt="" />
			</div>
			<div className="lg:absolute top-[120px] px-[18px] py-[36px] md:p-[64px] rounded-lg bg-[#ffff]">
				<div className="text-center">
					<h2 className="text-grey800 mb-[16px] font-bold text-[24px] md:text-[40px]">
						Create your account
					</h2>
					<p className="text-base text-grey400 px-[60px] md:px-0">
						Land your dream job with Coverly cover letter
					</p>
				</div>

				<form onSubmit={handleSubmit}>
					<div className="my-[44px] flex flex-col gap-[20px] ">
						<InputField
							p={
								errors.fullName &&
								touched.fullName &&
								errors.fullName
							}
							className={
								errors.fullName && touched.fullName
									? "!border-errorMain"
									: ""
							}
							value={values.fullName}
							onChange={handleChange}
							onBlur={handleBlur}
							id={"fullName"}
							htmlFor={"fullName"}
							label={"Full Name"}
							type={"text"}
							placeholder={"Enter your full name"}
						/>
						<InputField
							p={errors.email && touched.email && errors.email}
							className={
								errors.email && touched.email
									? "!border-errorMain"
									: ""
							}
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							id={"email"}
							htmlFor={"email"}
							label={"Email"}
							type={"email"}
							placeholder={"Enter your email"}
						/>

						<InputField
							p={
								errors.password &&
								touched.password &&
								errors.password
							}
							className={
								errors.password && touched.password
									? "!border-errorMain"
									: ""
							}
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							id={"password"}
							htmlFor={"password"}
							src={eyeslash}
							label={"Password"}
							type={passwordShown ? "text" : "password"}
							placeholder={"Enter your password"}
							passwordShown={togglePassword}
							visible={passwordShown}
						/>
						<InputField
							p={
								errors.confirmPassword &&
								touched.confirmPassword &&
								errors.confirmPassword
							}
							className={
								errors.confirmPassword &&
								touched.confirmPassword
									? "!border-errorMain"
									: ""
							}
							value={values.confirmPassword}
							onChange={handleChange}
							onBlur={handleBlur}
							id={"confirmPassword"}
							htmlFor={"confirmPassword"}
							src={eyeslash}
							label={"Confirm Password"}
							type={passwordShown ? "text" : "password"}
							placeholder={"confirm your password"}
							passwordShown={togglePassword}
							visible={passwordShown}
						/>
					</div>
					<div className="flex flex-col text-center gap-[32px]">
						<Button
							className={
								"btn btnLong w-[100%] btnPrimary disabled:opacity-50 disabled:cursor-not-allowed"
							}
							children={"Register"}
							type={"submit"}
							disabled={isSubmitting}
						/>
						<GoogleAuth />
					</div>
					<p className="text-textBody text-center mt-[16px] text-base">
						Already have an account?
						<Link
							to="/signin"
							className="text-primaryMain font-bold"
						>
							Sign In
						</Link>
					</p>
				</form>
			</div>
			<SuccessModal
				className={"rounded-[8px]"}
				onClose={() => {
					navigate("/verifyaccount");
					setShow(false);
				}}
				show={show}
			>
				<div>
					<h3 className="text-textHeader mb-[4px] text-[24px]">
						Success
					</h3>
					<p className="text-[16px] text-textBody leading-6 text-gray-700 font-semibold mb-10">
						We sent an email with login instructions to{" "}
						<span className="underline">{values.email}</span>
					</p>
				</div>
				<div className="home-btn">
					<Link to="/verifyaccount">
						<Input
							type={"button"}
							value={"Continue"}
							className={
								"border rounded-lg text-white py-3 px-10 bg-[#0544B8] cursor-pointer hover:scale-x-[1.02] text-[20px]"
							}
						/>
					</Link>
				</div>
			</SuccessModal>
		</div>
	);
};

export default CreateAcount;
