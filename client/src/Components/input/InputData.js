import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import back from "./asesets/arrow.png";
import { useGlobalContext } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function InputData() {
	const Navigate = useNavigate();

	const { file, setCoverLetter, setUserData } = useGlobalContext();
	const [fullName, setFullName] = useState("");
	const [isLoading, setIsloading] = useState(false);
	const [location, setLocation] = useState("");
	const [email, setEmail] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [companyAddress, setCompanyNameAddress] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [date, setDate] = useState("");
	const [role, setRole] = useState("");
	const [years, setYears] = useState("");
	const [name, setName] = useState("");
	const [department, setDepartment] = useState("");
	const [error, setError] = useState(false);
	const [percentage, setPercentage] = useState("0");

	const clickHandler = () => {
		Navigate("/");
	};

	const uploadToast = () => {
		toast(" Error Processing your CV ");
	};

	const fullNameHandler = (e) => {
		setFullName(e.target.value);
	};
	const locationHandler = (e) => {
		setLocation(e.target.value);
	};
	const emailHandler = (e) => {
		setEmail(e.target.value);
	};
	const companyHandler = (e) => {
		setCompanyName(e.target.value);
	};
	const companyAddressHandler = (e) => {
		setCompanyNameAddress(e.target.value);
	};
	const cityHandler = (e) => {
		setCity(e.target.value);
	};
	const countryHandler = (e) => {
		setCountry(e.target.value);
	};
	const dateHandler = (e) => {
		setDate(e.target.value);
	};
	const roleHandler = (e) => {
		setRole(e.target.value);
	};
	const yearsHandler = (e) => {
		setYears(e.target.value);
	};
	const nameHandler = (e) => {
		setName(e.target.value);
	};
	const departmentHandler = (e) => {
		setDepartment(e.target.value);
	};

	const submit = (e) => {
		e.preventDefault();

		if (
			companyName.length === 0 ||
			companyAddress.length === 0 ||
			city.length ||
			country.length ||
			date.length ||
			role.length ||
			years.length ||
			name.length ||
			fullName.length ||
			email.length ||
			location.length
		) {
			setError(true);
		}
		const uploadFile = async (e) => {
			const formData = new FormData();
			formData.append("myFile", file);
			formData.append("company_name", companyName);
			formData.append("company_address", companyAddress);
			formData.append("city", city);
			formData.append("country", country);
			formData.append("role", role);
			formData.append("years_of_exp", years);
			formData.append("recipient_name", name);
			formData.append("full_name", fullName);
			formData.append("email", email);
			formData.append("location", location);

			const option = {
				onUploadProgress: (ProgressEvent) => {
					const { loaded, total } = ProgressEvent;
					let percent = Math.floor((loaded * 100) / total);
					let changed = percent - 20;

					if (changed < 100) {
						setPercentage(changed);
					}
				},
			};

			try {
				const res = await axios.post(
					`https://api.coverly.hng.tech/api/v1/generate`,
					formData,
					option
				);
				setCoverLetter({ ...res.data.data });
				setUserData({
					name: fullName,
					address: location,
					email: email,
					...res.data.data,
					date: date,
					recipient_department: department,
				});
				Navigate("/preview");
			} catch (ex) {
				uploadToast();
				setIsloading(false);
				console.log(ex);
			}
		};
		if (
			companyAddress &&
			companyName &&
			country &&
			city &&
			date &&
			role &&
			years &&
			name &&
			fullName &&
			location &&
			email
		) {
			setIsloading(true);
			uploadFile();
		}
	};

	return (
		<div className="bg-background lg:px-[204px] lg:py-[120px] font-manrope">
			<ToastContainer />
			<main
				className={` ${
					isLoading && "filter blur-[0.7px] opacity-30"
				}  lg:px-[80px] px-[30px] rounded-lg h-sreen pt-12 bg-textWhite `}
			>
				<button
					onClick={clickHandler}
					className="flex items-center  mt-[55px] gap-3 font-semibold"
				>
					<img
						src={back}
						className="h-[30] lg:h-[36px] w-[30px] lg:w-[36px]"
						alt=""
					/>
					<span className="text-[20] text-textBody lg:text-[24px]">
						Back
					</span>
				</button>
				<h1 className="title mt-[80px] text-textBody text-left font-semibold text-[24px] lg:text-[40px]">
					Tell Us A Little About the Job
				</h1>
				<p className="subtitle text-left text-textBody mt-2 text-[16px] lg:text-[20px]">
					This information would help us to customize your cover
					letter and tailor it to your specific application
				</p>
				<form
					method="post"
					action="/generate"
					encType="multipart/form-data"
					onSubmit={submit}
					className="form font-manrope grid w-[100%]  lg:grid-cols-2 lg:gap-20 gap-12 my-[80px] grid-cols-1 "
				>
					<div className="left">
						<div className="a flex font-manrope flex-col text-left mb-[2rem] ">
							<label
								htmlFor="fullName"
								className="my-[4px] text-textBody text-[18px]"
							>
								Full Name
							</label>
							<input
								name="full_name"
								className={`px-3 py-[9px] border-[1.5px] ${
									error && fullName <= 0
										? "border-[#240b0c]"
										: "border-gray-300"
								} rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200 `}
								onChange={fullNameHandler}
								autoFocus
								type="text"
								value={fullName}
								id="fullName"
							/>
							{error && fullName <= 0 ? (
								<p className="text-[#FF2635] mt-2 ml-2 text-[14px]">
									Full name is required
								</p>
							) : (
								""
							)}
						</div>
						<div className="a flex flex-col text-left mb-[2rem] ">
							<label
								htmlFor="email"
								className="my-[4px] text-textBody text-[18px]"
							>
								Email Address
							</label>
							<input
								name="email"
								className={`px-3 py-[9px] border-[1.5px] ${
									error && email <= 0
										? "border-[#FF2635]"
										: "border-gray-300"
								} rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200  `}
								type="email"
								onChange={emailHandler}
								value={email}
								id="email"
							/>
							{error && email <= 0 ? (
								<p className="text-[#FF2635] mt-2 ml-2 text-[14px]">
									Email Address is required
								</p>
							) : (
								""
							)}
						</div>
						<div className="a flex flex-col text-left mb-[2rem] ">
							<label
								htmlFor="location"
								className="my-[4px] text-textBody text-[18px]"
							>
								Your Address(Preferred Location)
							</label>
							<input
								name="role"
								className={`px-3 py-[9px] border-[1.5px] ${
									error && location <= 0
										? "border-[#FF2635]"
										: "border-gray-300"
								} rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200  `}
								type="text"
								onChange={locationHandler}
								value={location}
								id="location"
							/>
							{error && location <= 0 ? (
								<p className="text-[#FF2635] mt-2 ml-2 text-[14px]">
									Your Location is required
								</p>
							) : (
								""
							)}
						</div>
						<div className="a flex font-manrope flex-col text-left mb-[2rem] ">
							<label
								htmlFor="companyName"
								className="my-[4px] text-textBody text-[18px]"
							>
								Company's Name
							</label>
							<input
								name="company_name"
								className={`px-3 py-[9px] border-[1.5px] ${
									error && companyName <= 0
										? "border-[#FF2635]"
										: "border-gray-300"
								} rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200  `}
								onChange={companyHandler}
								type="text"
								value={companyName}
								id="companyName"
							/>
							{error && companyName <= 0 ? (
								<p className="text-[#FF2635] mt-2 ml-2 text-[14px]">
									Company's Name is required
								</p>
							) : (
								""
							)}
						</div>
						<div className="a flex flex-col text-left mb-[2rem] ">
							<label
								htmlFor="companyAddress"
								className="my-[3px] text-textBody text-[18px]"
							>
								Company's Address
							</label>
							<input
								name="company_address"
								className={`px-3 py-[9px] border-[1.5px] ${
									error && companyAddress <= 0
										? "border-[#FF2635]"
										: "border-gray-300"
								} rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200  `}
								onChange={companyAddressHandler}
								type="text"
								value={companyAddress}
								id="companyAddress"
							/>
							{error && companyAddress <= 0 ? (
								<p className="text-[#FF2635] mt-2 ml-2 text-[14px]">
									Company's Address is required
								</p>
							) : (
								""
							)}
						</div>
						<div className="b  flex flex-col text-left ">
							<label className="my-[4px] text-textBody text-[18px]">
								Country
							</label>
							<select
								id="country"
								className={`px-3 py-[9px] border-[1.5px] ${
									error && country <= 0
										? "border-[#FF2635]"
										: "border-gray-300"
								} rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200  `}
								onChange={countryHandler}
								name="country"
							>
								<option>select country</option>
								<option value="AF">Afghanistan</option>
								<option value="AX">Aland Islands</option>
								<option value="AL">Albania</option>
								<option value="DZ">Algeria</option>
								<option value="AS">American Samoa</option>
								<option value="AD">Andorra</option>
								<option value="AO">Angola</option>
								<option value="AI">Anguilla</option>
								<option value="AQ">Antarctica</option>
								<option value="AG">Antigua and Barbuda</option>
								<option value="AR">Argentina</option>
								<option value="AM">Armenia</option>
								<option value="AW">Aruba</option>
								<option value="AU">Australia</option>
								<option value="AT">Austria</option>
								<option value="AZ">Azerbaijan</option>
								<option value="BS">Bahamas</option>
								<option value="BH">Bahrain</option>
								<option value="BD">Bangladesh</option>
								<option value="BB">Barbados</option>
								<option value="BY">Belarus</option>
								<option value="BE">Belgium</option>
								<option value="BZ">Belize</option>
								<option value="BJ">Benin</option>
								<option value="BM">Bermuda</option>
								<option value="BT">Bhutan</option>
								<option value="BO">Bolivia</option>
								<option value="BQ">
									Bonaire, Sint Eustatius and Saba
								</option>
								<option value="BA">
									Bosnia and Herzegovina
								</option>
								<option value="BW">Botswana</option>
								<option value="BV">Bouvet Island</option>
								<option value="BR">Brazil</option>
								<option value="IO">
									British Indian Ocean Territory
								</option>
								<option value="BN">Brunei Darussalam</option>
								<option value="BG">Bulgaria</option>
								<option value="BF">Burkina Faso</option>
								<option value="BI">Burundi</option>
								<option value="KH">Cambodia</option>
								<option value="CM">Cameroon</option>
								<option value="CA">Canada</option>
								<option value="CV">Cape Verde</option>
								<option value="KY">Cayman Islands</option>
								<option value="CF">
									Central African Republic
								</option>
								<option value="TD">Chad</option>
								<option value="CL">Chile</option>
								<option value="CN">China</option>
								<option value="CX">Christmas Island</option>
								<option value="CC">
									Cocos (Keeling) Islands
								</option>
								<option value="CO">Colombia</option>
								<option value="KM">Comoros</option>
								<option value="CG">Congo</option>
								<option value="CD">
									Congo, Democratic Republic of the Congo
								</option>
								<option value="CK">Cook Islands</option>
								<option value="CR">Costa Rica</option>
								<option value="CI">Cote D'Ivoire</option>
								<option value="HR">Croatia</option>
								<option value="CU">Cuba</option>
								<option value="CW">Curacao</option>
								<option value="CY">Cyprus</option>
								<option value="CZ">Czech Republic</option>
								<option value="DK">Denmark</option>
								<option value="DJ">Djibouti</option>
								<option value="DM">Dominica</option>
								<option value="DO">Dominican Republic</option>
								<option value="EC">Ecuador</option>
								<option value="EG">Egypt</option>
								<option value="SV">El Salvador</option>
								<option value="GQ">Equatorial Guinea</option>
								<option value="ER">Eritrea</option>
								<option value="EE">Estonia</option>
								<option value="ET">Ethiopia</option>
								<option value="FK">
									Falkland Islands (Malvinas)
								</option>
								<option value="FO">Faroe Islands</option>
								<option value="FJ">Fiji</option>
								<option value="FI">Finland</option>
								<option value="FR">France</option>
								<option value="GF">French Guiana</option>
								<option value="PF">French Polynesia</option>
								<option value="TF">
									French Southern Territories
								</option>
								<option value="GA">Gabon</option>
								<option value="GM">Gambia</option>
								<option value="GE">Georgia</option>
								<option value="DE">Germany</option>
								<option value="GH">Ghana</option>
								<option value="GI">Gibraltar</option>
								<option value="GR">Greece</option>
								<option value="GL">Greenland</option>
								<option value="GD">Grenada</option>
								<option value="GP">Guadeloupe</option>
								<option value="GU">Guam</option>
								<option value="GT">Guatemala</option>
								<option value="GG">Guernsey</option>
								<option value="GN">Guinea</option>
								<option value="GW">Guinea-Bissau</option>
								<option value="GY">Guyana</option>
								<option value="HT">Haiti</option>
								<option value="HM">
									Heard Island and Mcdonald Islands
								</option>
								<option value="VA">
									Holy See (Vatican City State)
								</option>
								<option value="HN">Honduras</option>
								<option value="HK">Hong Kong</option>
								<option value="HU">Hungary</option>
								<option value="IS">Iceland</option>
								<option value="IN">India</option>
								<option value="ID">Indonesia</option>
								<option value="IR">
									Iran, Islamic Republic of
								</option>
								<option value="IQ">Iraq</option>
								<option value="IE">Ireland</option>
								<option value="IM">Isle of Man</option>
								<option value="IL">Israel</option>
								<option value="IT">Italy</option>
								<option value="JM">Jamaica</option>
								<option value="JP">Japan</option>
								<option value="JE">Jersey</option>
								<option value="JO">Jordan</option>
								<option value="KZ">Kazakhstan</option>
								<option value="KE">Kenya</option>
								<option value="KI">Kiribati</option>
								<option value="KP">
									Korea, Democratic People's Republic of
								</option>
								<option value="KR">Korea, Republic of</option>
								<option value="XK">Kosovo</option>
								<option value="KW">Kuwait</option>
								<option value="KG">Kyrgyzstan</option>
								<option value="LA">
									Lao People's Democratic Republic
								</option>
								<option value="LV">Latvia</option>
								<option value="LB">Lebanon</option>
								<option value="LS">Lesotho</option>
								<option value="LR">Liberia</option>
								<option value="LY">
									Libyan Arab Jamahiriya
								</option>
								<option value="LI">Liechtenstein</option>
								<option value="LT">Lithuania</option>
								<option value="LU">Luxembourg</option>
								<option value="MO">Macao</option>
								<option value="MK">
									Macedonia, the Former Yugoslav Republic of
								</option>
								<option value="MG">Madagascar</option>
								<option value="MW">Malawi</option>
								<option value="MY">Malaysia</option>
								<option value="MV">Maldives</option>
								<option value="ML">Mali</option>
								<option value="MT">Malta</option>
								<option value="MH">Marshall Islands</option>
								<option value="MQ">Martinique</option>
								<option value="MR">Mauritania</option>
								<option value="MU">Mauritius</option>
								<option value="YT">Mayotte</option>
								<option value="MX">Mexico</option>
								<option value="FM">
									Micronesia, Federated States of
								</option>
								<option value="lg">Moldova, Republic of</option>
								<option value="MC">Monaco</option>
								<option value="MN">Mongolia</option>
								<option value="ME">Montenegro</option>
								<option value="MS">Montserrat</option>
								<option value="MA">Morocco</option>
								<option value="MZ">Mozambique</option>
								<option value="MM">Myanmar</option>
								<option value="NA">Namibia</option>
								<option value="NR">Nauru</option>
								<option value="NP">Nepal</option>
								<option value="NL">Netherlands</option>
								<option value="AN">Netherlands Antilles</option>
								<option value="NC">New Caledonia</option>
								<option value="NZ">New Zealand</option>
								<option value="NI">Nicaragua</option>
								<option value="NE">Niger</option>
								<option value="NG">Nigeria</option>
								<option value="NU">Niue</option>
								<option value="NF">Norfolk Island</option>
								<option value="MP">
									Northern Mariana Islands
								</option>
								<option value="NO">Norway</option>
								<option value="OM">Oman</option>
								<option value="PK">Pakistan</option>
								<option value="PW">Palau</option>
								<option value="PS">
									Palestinian Territory, Occupied
								</option>
								<option value="PA">Panama</option>
								<option value="PG">Papua New Guinea</option>
								<option value="PY">Paraguay</option>
								<option value="PE">Peru</option>
								<option value="PH">Philippines</option>
								<option value="PN">Pitcairn</option>
								<option value="PL">Poland</option>
								<option value="PT">Portugal</option>
								<option value="PR">Puerto Rico</option>
								<option value="QA">Qatar</option>
								<option value="RE">Reunion</option>
								<option value="RO">Romania</option>
								<option value="RU">Russian Federation</option>
								<option value="RW">Rwanda</option>
								<option value="BL">Saint Barthelemy</option>
								<option value="SH">Saint Helena</option>
								<option value="KN">
									Saint Kitts and Nevis
								</option>
								<option value="LC">Saint Lucia</option>
								<option value="MF">Saint Martin</option>
								<option value="PM">
									Saint Pierre and Miquelon
								</option>
								<option value="VC">
									Saint Vincent and the Grenadines
								</option>
								<option value="WS">Samoa</option>
								<option value="SM">San Marino</option>
								<option value="ST">
									Sao Tome and Principe
								</option>
								<option value="SA">Saudi Arabia</option>
								<option value="SN">Senegal</option>
								<option value="RS">Serbia</option>
								<option value="CS">
									Serbia and Montenegro
								</option>
								<option value="SC">Seychelles</option>
								<option value="SL">Sierra Leone</option>
								<option value="SG">Singapore</option>
								<option value="SX">Sint Maarten</option>
								<option value="SK">Slovakia</option>
								<option value="SI">Slovenia</option>
								<option value="SB">Solomon Islands</option>
								<option value="SO">Somalia</option>
								<option value="ZA">South Africa</option>
								<option value="GS">
									South Georgia and the South Sandwich Islands
								</option>
								<option value="SS">South Sudan</option>
								<option value="ES">Spain</option>
								<option value="LK">Sri Lanka</option>
								<option value="SD">Sudan</option>
								<option value="SR">Suriname</option>
								<option value="SJ">
									Svalbard and Jan Mayen
								</option>
								<option value="SZ">Swaziland</option>
								<option value="SE">Sweden</option>
								<option value="CH">Switzerland</option>
								<option value="SY">Syrian Arab Republic</option>
								<option value="TW">
									Taiwan, Province of China
								</option>
								<option value="TJ">Tajikistan</option>
								<option value="TZ">
									Tanzania, United Republic of
								</option>
								<option value="TH">Thailand</option>
								<option value="TL">Timor-Leste</option>
								<option value="TG">Togo</option>
								<option value="TK">Tokelau</option>
								<option value="TO">Tonga</option>
								<option value="TT">Trinidad and Tobago</option>
								<option value="TN">Tunisia</option>
								<option value="TR">Turkey</option>
								<option value="TM">Turkmenistan</option>
								<option value="TC">
									Turks and Caicos Islands
								</option>
								<option value="TV">Tuvalu</option>
								<option value="UG">Uganda</option>
								<option value="UA">Ukraine</option>
								<option value="AE">United Arab Emirates</option>
								<option value="GB">United Kingdom</option>
								<option value="US">United States</option>
								<option value="UM">
									United States Minor Outlying Islands
								</option>
								<option value="UY">Uruguay</option>
								<option value="UZ">Uzbekistan</option>
								<option value="VU">Vanuatu</option>
								<option value="VE">Venezuela</option>
								<option value="VN">Viet Nam</option>
								<option value="VG">
									Virgin Islands, British
								</option>
								<option value="VI">Virgin Islands, U.s.</option>
								<option value="WF">Wallis and Futuna</option>
								<option value="EH">Western Sahara</option>
								<option value="YE">Yemen</option>
								<option value="ZM">Zambia</option>
								<option value="ZW">Zimbabwe</option>
							</select>
							{error && country <= 0 ? (
								<p className="text-[#FF2635] mt-2 ml-2 text-[14px]">
									Country is required
								</p>
							) : (
								""
							)}
						</div>
					</div>

					<div className="right mt-[-1rem] lg:mt-0 ">
						<div className="b flex flex-col text-left mb-[2rem] ">
							<label
								htmlFor="city"
								className="my-[4px] text-textBody text-[18px]"
							>
								City
							</label>
							<input
								name="city"
								className={`px-3 py-[9px] border-[1.5px] ${
									error && city <= 0
										? "border-[#FF2635]"
										: "border-gray-300"
								} rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200  `}
								onChange={cityHandler}
								type="text"
								value={city}
								id="city"
							/>
							{error && city <= 0 ? (
								<p className="text-[#FF2635] mt-2 ml-2 text-[14px]">
									City is required
								</p>
							) : (
								""
							)}
						</div>
						<div className="a flex flex-col text-left mb-[2rem] ">
							<label
								htmlFor="role"
								className="my-[4px] text-textBody text-[18px]"
							>
								What Role Are You Applying For?
							</label>
							<input
								name="role"
								className={`px-3 py-[9px] border-[1.5px] ${
									error && role <= 0
										? "border-[#FF2635]"
										: "border-gray-300"
								} rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200  `}
								type="text"
								onChange={roleHandler}
								value={role}
								id="role"
							/>
							{error && role <= 0 ? (
								<p className="text-[#FF2635] mt-2 ml-2 text-[14px]">
									Role is required
								</p>
							) : (
								""
							)}
						</div>

						<div className="a flex flex-col text-left mb-[2rem]">
							<label
								htmlFor="date"
								className="my-[4px]  text-textBody text-[18px]"
							>
								Date of Application
							</label>
							<input
								name="date"
								className={`px-3 py-[9px] border-[1.5px] ${
									error && date <= 0
										? "border-[#FF2635]"
										: "border-gray-300"
								} rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200  `}
								onChange={dateHandler}
								type="date"
								value={date}
								id="date"
							/>
							{error && date <= 0 ? (
								<p className="text-[#FF2635] mt-2 ml-2 text-[14px]">
									Date is required
								</p>
							) : (
								""
							)}
						</div>
						<div className="a flex flex-col text-left mb-[2rem] ">
							<label
								htmlFor="years"
								className="my-[4px] text-textBody text-[18px]"
							>
								Years of Experience
							</label>
							<input
								name="years_of_exp"
								className={`px-3 py-[9px] border-[1.5px] ${
									error && years <= 0
										? "border-[#FF2635]"
										: "border-gray-300"
								} rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200  `}
								type="number"
								onChange={yearsHandler}
								value={years}
								id="years"
							/>
							{error && years <= 0 ? (
								<p className="text-[#FF2635] mt-2 ml-2 text-[14px]">
									Years of experience is required{" "}
								</p>
							) : (
								""
							)}
						</div>
						<div className="a flex flex-col text-left mb-[2rem] ">
							<label
								htmlFor="rec_name"
								className="my-[4px] text-textBody text-[18px]"
							>
								Recipient's Name
							</label>
							<input
								name="recipient_email"
								className={`px-3 py-[9px] border-[1.5px] ${
									error && name <= 0
										? "border-[#FF2635]"
										: "border-gray-300"
								} rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200  `}
								type="text"
								onChange={nameHandler}
								value={name}
								id="rec_name"
							/>
							{error && name <= 0 ? (
								<p className="text-[#FF2635] mt-2 ml-2 text-[14px]">
									Name is required
								</p>
							) : (
								""
							)}
						</div>
						<div className="a flex flex-col text-left">
							<label
								htmlFor="rec_dept"
								className="my-[4px] text-textBody text-[18px]"
							>
								Recipient's Department(Optional)
							</label>
							<input
								name="recipient_department"
								className="px-3 py-[9px] rounded-lg focus:outline focus:outline-[1px] focus:outline-grey400 border-[1.5px] border-grey200"
								type="text"
								onChange={departmentHandler}
								value={department}
								id="rec_dept"
							/>
						</div>
					</div>

					{!isLoading && (
						<button
							type="submit"
							className="hover:bg-primaryDark px-5 w-[100%] py-4 mt-[12px] mb-[100px] text-[18px] text-textWhite bg-primaryMain  font-semibold rounded-lg"
						>
							Continue
						</button>
					)}
					{isLoading && (
						<button
							disabled={isLoading}
							className=" hover:bg-primaryDark px-5 w-[100%] py-3 mt-[12px] mb-[100px] text-[18px] text-textWhite bg-primaryMain  font-semibold rounded-lg disabled:opacity-80 disabled:cursor-not-allowed"
						>
							<div className="flex justify-center items-center">
								<div
									className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
									role="status"
								>
									<span className="visually-hidden">l</span>
								</div>
							</div>
						</button>
					)}
				</form>
			</main>
			{isLoading && (
				<div className=" bg-textWhite absolute bottom-[90%] top-[80rem] sm:top-[50rem] left-[5%] md:left-[10%] lg:left-[25%] w-[90%] md:w-[80%] lg:w-[50%] rounded-lg h-[369px] md:h-[512px] flex flex-col justify-center items-center gap-[20px]">
					<h3 className="text-textBody text-center text-[16px]">
						{percentage < 78
							? "Extracting your details..."
							: "Almost finished..."}
					</h3>
					<div className="bar w-[80%] ">
						<div className="w-full bg-grey100 rounded-full dark:bg-grey300">
							<div
								className="bg-primaryMain text-xs font-medium text-textWhite p-[7px] leading-none rounded-full"
								style={{ width: `${percentage}%` }}
							></div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default InputData;
