import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../Components/Ui/InputField";
import man3 from "../Assets/man3.png";
import eyeslash from "../Assets/eye-slash.svg";
import Button from "../Components/Ui/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useGlobalContext } from "../context/context";
import {
	addUserToLocalStorage,
	addEmailToLocalStorage,
} from "../Utils/localStorage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleAuth from "../Layouts/GoogleAuth";

const Login = () => {
	const { setUser, setUserEmail } = useGlobalContext();
	const [passwordShown, setPasswordShown] = useState(false);
	const navigate = useNavigate();
	const LoginSchema = Yup.object().shape({
		email: Yup.string()
			.email("Please enter a valid email like yourname@example.com")
			.required("Please enter your email"),
		password: Yup.string().required("Please enter a password"),
	});
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	};
	const onSubmit = async (values, actions) => {
		try {
			const resp = await axios.post(
				`https://api.coverly.hng.tech/api/v1/auth/login`,
				values
			);

			const UserDetails = await axios.get(
				`https://api.coverly.hng.tech/api/v1/auth/dashboard/${resp.data.user}`,
				{
					headers: {
						Authorization: `Bearer ${resp.data.token}`,
					},
				}
			);

			const user = {
				name: UserDetails.data.name,
				email: UserDetails.data.email,
				jobRole: UserDetails.data.jobRole,
				userId: resp.data.user,
				token: resp.data.token,
			};
			addUserToLocalStorage(user);
			setUser(user);
			addEmailToLocalStorage(UserDetails.data.email);
			setUserEmail(UserDetails.data.email);
			toast.success(`Welcome Back ${UserDetails.data.name}`);
			navigate("/");
		} catch (err) {
			toast.error("invalid email or password");
			return;
		}

		await new Promise((resolve) => setTimeout(resolve, 1000));
		actions.resetForm();
	};

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
			email: "",
			password: "",
		},

		validationSchema: LoginSchema,
		onSubmit,
	});

	return (
		<div className="max-w-screen-2xl m-auto relative bg-background px-[22px] md:px-[60px] py-[76px] lg:pt-[76px] lg:pb-[200px]">
			<div className="hidden lg:flex justify-end">
				<img src={man3} className="w-[1045px] rounded-[8px]" alt="" />
			</div>
			<div className="lg:absolute top-[120px] px-[18px] py-[36px] md:p-[64px] rounded-lg bg-[#ffff]">
				<div className="text-center">
					<h2 className="text-grey800 mb-[16px] font-bold text-[24px] md:text-[40px]">
						Sign In to your account
					</h2>
					<p className="text-base text-grey400 px-[60px] md:px-0">
						Land your dream job with Coverly cover letter
					</p>
				</div>

				<form onSubmit={handleSubmit}>
					<div className="my-[44px] flex flex-col gap-[24px] ">
						<InputField
							p={errors.email && touched.email && errors.email}
							className={
								errors.email && touched.email
									? "!border-errorMain"
									: null
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
					</div>
					<div className="flex flex-col gap-[24px]">
						<div className="flex flex-col gap-[8px]">
							<Button
								className={
									"btn btnLong w-[100%] btnPrimary mt-0 disabled:opacity-50 disabled:cursor-not-allowed"
								}
								children={"Login"}
								type={"submit"}
								disabled={isSubmitting}
							/>
							<p className="text-base text-stokeDark">
								Forgot password?{" "}
								<Link
									to="/forgot-password"
									className="text-primaryMain font-bold "
								>
									Click here
								</Link>
							</p>
						</div>
						<GoogleAuth />
					</div>
				</form>

				<div>
					<p className="text-base mt-[16px] text-center text-stokeDark">
						Don't have an account?{" "}
						<Link
							to="/register"
							className="text-primaryMain font-bold"
						>
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
