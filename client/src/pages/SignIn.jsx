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
import { addUserToLocalStorage } from "../Utils/localStorage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
	const { setUser } = useGlobalContext();
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
				`${process.env.REACT_APP_API_URL}/api/v1/auth/login`,
				values
			);
			const UserDetails = await axios.post(
				`${process.env.REACT_APP_API_URL}/api/v1/auth/dashboard`,
				values
			);

			const user = {
				name: UserDetails.data.name,
				email: UserDetails.data.email,
				userId: UserDetails.data._id,
				token: resp.data.token,
			};
			addUserToLocalStorage(user);
			setUser(user);
			toast.success(`Welcome Back ${UserDetails.data.name}`);
			navigate("/");
		} catch (err) {
			toast.error(err.response.data.msg);
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
		<div className="relative bg-background px-[22px] md:px-[60px] py-[76px] lg:pt-[76px] lg:pb-[200px]">
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
									to="/"
									className="text-primaryMain font-bold "
								>
									Click here
								</Link>
							</p>
						</div>
						<Button
							className={
								"btn btnLong w-[100%] btnSecondary disabled:opacity-50 disabled:cursor-not-allowed"
							}
							children={"Sign with Google"}
							disabled={isSubmitting}
							icon={
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M14.4933 7.37968C14.46 7.03968 14.1733 6.78634 13.8333 6.78634H8.79999C8.43333 6.78634 8.13333 7.08634 8.13333 7.453V8.59302C8.13333 8.95968 8.43333 9.25968 8.79999 9.25968H11.8067C11.7333 9.87302 11.3333 10.7997 10.4467 11.4197C9.87999 11.813 9.12666 12.0863 8.13333 12.0863C8.08666 12.0863 8.04666 12.0863 8 12.0797C6.3 12.0263 4.86 10.8863 4.34 9.31968C4.2 8.89968 4.12 8.45967 4.12 7.99967C4.12 7.53967 4.19999 7.093 4.33333 6.67967C4.37333 6.55967 4.41999 6.43968 4.47333 6.31968C5.08666 4.93968 6.42666 3.96634 8 3.91968C8.04 3.91301 8.08666 3.913 8.13333 3.913C9.08666 3.913 9.79999 4.22633 10.3 4.573C10.56 4.753 10.9067 4.713 11.1333 4.493L12.06 3.58634C12.3533 3.29968 12.3267 2.813 11.9933 2.573C10.9333 1.793 9.63999 1.33301 8.13333 1.33301C8.08666 1.33301 8.04666 1.33301 8 1.33968C5.44666 1.38635 3.25333 2.86635 2.17999 5.00635C1.72666 5.91301 1.46666 6.92634 1.46666 7.99967C1.46666 9.07301 1.72666 10.0863 2.17999 10.993H2.18666C3.25999 13.133 5.45333 14.613 8 14.6597C8.04666 14.6663 8.08666 14.6663 8.13333 14.6663C9.93333 14.6663 11.4467 14.073 12.5467 13.053C13.8067 11.8863 14.5333 10.1797 14.5333 8.14634C14.5333 7.85968 14.52 7.61301 14.4933 7.37968Z"
										fill="#0652DD"
									/>
								</svg>
							}
							type={"submit"}
						/>
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
