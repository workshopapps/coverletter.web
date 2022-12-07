import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input, { TextField, Select } from "../Components/Ui/Form";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const followUsData = [
	{
		icon: ["fab", "twitter"],
		text: "Twitter",
		url: "https://twitter.com/coverlyng",
	},
	{
		icon: ["fab", "instagram"],
		text: "Instagram",
		url: "http://www.instagram.com/coverly_ng",
	},
	{
		icon: ["fab", "facebook"],
		text: "Facebook",
		url: "https://facebook.com/profile.php?id=100088156789141",
	},
];

const IconButton = (props) => {
	const { text, icon, href } = props;
	return (
		<div className="flex items-center flex-col">
			<a
				href={href || "#"}
				target="_blank"
				rel="noreferrer"
				className="h-10 w-10 flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-full mb-1 hover:border-[#101010] text-xl text-[#101010] active:text-white active:bg-[#101010] active:border-[#DCDCDC]"
			>
				{icon && <FontAwesomeIcon icon={icon} />}
			</a>
			<p className="text-xs text-grey400">{text}</p>
		</div>
	);
};

const TertiaryButton = (props) => {
	const { type, label, text, href, className } = props;
	return (
		<a
			className={`${
				type === "secondary" ? "btnSecondary" : "btnPrimary"
			} ${className} p-3 rounded-md min-w-[200px] lg:min-w-0`}
			href={href}
		>
			<div className="overflow-hidden text-center">
				<p className="text-xs font-semibold text-[#101010] active:text-textWhite">
					{label}
				</p>
				<p className="font-bold">{text}</p>
			</div>
		</a>
	);
};

const Button = (props) => {
	const { type, children, disabled, onClick, className } = props;
	return (
		<button
			disabled={disabled}
			onClick={disabled ? undefined : onClick}
			className={`${
				type === "secondary" ? "btnSecondary" : "btnPrimary"
			} p-3 px-6 rounded-md ${!!disabled && "bg-[#acc5f4]"} ${className}`}
		>
			<p className="font-bold">{children}</p>
		</button>
	);
};

const H1 = (props) => {
	const { children, className } = props;
	const defaultClassName = "text-5xl text-grey900 font-semibold mb-5";
	return <h1 className={`${defaultClassName} ${className}`}>{children}</h1>;
};

const H2 = (props) => {
	const { children, className } = props;
	const defaultClassName = "text-3xl text-grey900 font-semibold mb-5";
	return <h2 className={`${defaultClassName} ${className}`}>{children}</h2>;
};

const BodyText = (props) => {
	const { children, className } = props;
	const defaultClassName = "text-base text-grey400  mb-2";
	return <p className={`${defaultClassName} ${className}`}>{children}</p>;
};

const FollowUsLinks = (props) => {
	const { className } = props;
	return (
		<div className={className}>
			<p className="text-grey900 font-bold mb-2 text-center text-2xl">
				Follow Us
			</p>
			<div className="flex space-x-5 justify-center">
				{followUsData.map(({ icon, text, url }, index) => (
					<IconButton key={index} {...{ icon, text, href: url }} />
				))}
			</div>
		</div>
	);
};

const Alert = (props) => {
	const { msg, type } = props;
	const alertContainer = React.useRef(null);
	const [height, setHeight] = React.useState("0px");

	React.useEffect(() => {
		setHeight(!!msg ? "100px" : "0px");
	}, [msg, setHeight]);

	return (
		<div
			ref={alertContainer}
			style={{ maxHeight: height }}
			className="transition-all duration-200 overflow-hidden"
		>
			<div
				className={`w-full py-2 px-4 bg-${
					type || "error"
				}Main rounded flex justify-between items-center text-textWhite`}
			>
				<p className="text-sm">{msg}</p>{" "}
				<FontAwesomeIcon icon={["fas", "circle-info"]} />
			</div>
		</div>
	);
};

const SuccessModal = (props) => {
	const { open, onClose } = props;
	if (!open) return <React.Fragment />;
	return (
		<div
			className="h-screen w-screen fixed top-0 left-0 z-50 bg-[#03296F7A] flex items-center justify-center"
			onClick={onClose}
		>
			<div className="w-[250px] p-8 bg-[#fff] rounded flex items-center flex-col text-center space-y-2">
				<div className=" bg-successMain rounded-full text-textWhite text-2xl h-[70px] w-[70px]  flex items-center justify-center border-8 border-successLight">
					<FontAwesomeIcon icon={["fas", "check"]} />
				</div>
				<h4 className="text-grey600 text-lg">Success</h4>
				<p className="text-grey400 text-sm">
					Thanks for contacting us, we will get back to you{" "}
				</p>
				<Button onClick={onClose}>Continue</Button>
			</div>
		</div>
	);
};

const ContactUs = () => {
	const emptyForm = {
		name: "",
		email: "",
		phone: "",
		issue: "",
		message: "",
	};

	const [formData, setFormData] = React.useState(emptyForm);
	const [errors, setErrors] = React.useState(emptyForm);
	const [loading, setLoading] = React.useState(false);
	const [alert, setAlert] = React.useState({ msg: "", type: "" });
	const [openModal, setOpenModal] = React.useState(false);

	const navigate = useNavigate();

	React.useEffect(() => {
		return () => {
			setOpenModal(false);
		};
	}, [setOpenModal]);

	const handleChange = (id, value) => {
		setAlert({ msg: "", alert: "" });
		setFormData((prevFormData) => {
			return { ...prevFormData, [id]: value };
		});
		setErrors((prevErrors) => {
			return { ...prevErrors, [id]: "" };
		});
	};

	const validate = () => {
		var errorObject = emptyForm;
		const requiredErrorText = "This is a required field";
		if (!formData.name) {
			errorObject = { ...errorObject, name: requiredErrorText };
		}
		if (!formData.email) {
			errorObject = { ...errorObject, email: requiredErrorText };
		}
		if (!formData.phone) {
			errorObject = { ...errorObject, phone: requiredErrorText };
		}
		if (!formData.issue) {
			errorObject = { ...errorObject, issue: requiredErrorText };
		}
		if (!formData.message) {
			errorObject = { ...errorObject, message: requiredErrorText };
		}
		if (
			!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
		) {
			errorObject = { ...errorObject, email: "Invalid email address" };
		}
		return errorObject;
	};

	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setAlert({ msg: "", alert: "" });
		const errorResult = validate();
		setErrors(validate());
		if (!anyError(errorResult)) {
			try {
				const backendApIurl = "https://api.coverly.hng.tech";
				const body = {
					fullName: formData.name,
					userEmail: formData.email,
					subject: formData.issue,
					description: formData.message,
					phone: formData.phone,
				};
				await axios.post(`${backendApIurl}/api/v1/contact`, body);
				setFormData(emptyForm);
				setLoading(false);
				setOpenModal(true);
			} catch (error) {
				setAlert({
					msg: "Internal server error, please try again",
					type: "error",
				});
				console.error(error);
			}
		}
		setLoading(false);
	};

	const anyError = (errors) => {
		return Object.values(errors).some((value) => value !== "");
	};

	const getError = (id) => {
		return errors[id] !== "";
	};

	return (
		<div className="bg-background">
			<div className="container max-w-[900px] mx-auto px-6 mt-6  py-20">
				<div className="max-w-[600px] mx-auto lg:text-center md:mb-4">
					<H1>Talk to Us</H1>
					<BodyText>
						Let us know how we can help and we will get right back
						to you
					</BodyText>
					<div className="flex flex-col lg:flex-row items-start lg:space-x-5 space-y-5 lg:space-y-0 my-10">
						<TertiaryButton
							label="Email Us"
							text="Coverlyorg@gmail.com"
							href="mailto:coverlyorg@gmail.com"
							type="secondary"
							className="w-full"
						/>
						<TertiaryButton
							label="Call Us"
							text="0907 426 5463"
							href="tel:+2349074265463"
							type="secondary"
							className="w-full"
						/>
					</div>
				</div>
				<div className="w-full">
					<div className="bg-[#fff] rounded-lg p-4 py-10 lg:py-16 lg:px-24 mb-5 md:px-10 border-[1px] border-[#CAD0DD]">
						<H2 className="text-center">Contact us</H2>
						<BodyText className="text-center">
							Reach out to our{" "}
							<Link
								to="/faq"
								className="font-bold text-primaryMain"
							>
								FAQ
							</Link>{" "}
							or contact our team
						</BodyText>
						<Alert {...alert} />
						<form className="flex flex-col space-y-3 mt-6">
							<Input
								id="name"
								type="text"
								labelText="Full Name"
								placeholder="John Doe"
								icon={["fas", "user"]}
								value={formData.name}
								onChange={(e) =>
									handleChange("name", e.target.value)
								}
								alertType={getError("name") && "error"}
								helperText={errors.name}
							/>
							<Input
								id="email"
								type="email"
								labelText="Email Address"
								placeholder="abcd@gmail.com"
								icon={["fas", "envelope"]}
								value={formData.email}
								onChange={(e) =>
									handleChange("email", e.target.value)
								}
								alertType={getError("email") && "error"}
								helperText={errors.email}
							/>
							<Input
								id="phone"
								type="phone"
								labelText="Phone Number"
								placeholder="0819 345 3214"
								icon={["fas", "phone"]}
								value={formData.phone}
								onChange={(e) =>
									handleChange("phone", e.target.value)
								}
								alertType={getError("phone") && "error"}
								helperText={errors.phone}
							/>
							<Select
								id="issue"
								labelText="What can we help you with?"
								options={[
									"Couldn’t upload CV",
									"Want a more personalized cover letter",
									"Couldn’t download CV",
								]}
								value={formData.issue}
								onChange={(e) =>
									handleChange("issue", e.target.value)
								}
								alertType={getError("issue") && "error"}
								helperText={errors.issue}
							/>
							<TextField
								id="message"
								placeholder="Write your Message"
								labelText="Full Description"
								value={formData.message}
								onChange={(e) =>
									handleChange("message", e.target.value)
								}
								alertType={getError("message") && "error"}
								helperText={errors.message}
							/>
							<div>
								<Button
									className="rounded p-3 min-w-[90px] text-center w-full"
									disabled={
										loading ||
										Object.values(formData).some(
											(val, index) => val === ""
										)
									}
									onClick={submit}
								>
									{loading ? (
										<FontAwesomeIcon
											icon={["fas", "spinner"]}
											spin
										/>
									) : (
										"Send"
									)}
								</Button>
							</div>
						</form>
					</div>
				</div>
				<FollowUsLinks className="block pt-6" />
			</div>

			<SuccessModal
				open={openModal}
				onClose={() => {
					setOpenModal(false);
					navigate("/");
				}}
			/>
		</div>
	);
};

export default ContactUs;
