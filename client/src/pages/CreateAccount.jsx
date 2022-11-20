import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../Components/Ui/InputField";
import man3 from "../Assets/man3.png";
import eyeslash from "../Assets/eye-slash.svg";
import Button from "../Components/Ui/Button";
import { Link } from "react-router-dom";

const CreateAcount = () => {

    const passwordRules = /(?=.*[!#$%&?^*@~() "])(?=.{8,})/;

    const CreateAccSchema = Yup.object().shape({
        fullName: Yup.string().required("Please Enter your name"),
        email: Yup.string().email("Please enter a valid email like yourname@example.com").required("Please enter your email"),
        password: Yup.string().min(5).matches(passwordRules, {message: "Please enter a stronger password"}).required("Please enter a password"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null, "Password does not match"]).required("Please confirm password")

    });

    const onSubmit = async () => {
        
        try {
            

        } catch(err) {

        }
        
    }

    const { values, errors, handleBlur, handleChange, handleSubmit, touched, }  = useFormik({
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
        <div className="relative bg-background px-[22px] md:px-[95px] py-[76px] lg:pt-[76px] lg:pb-[150px]">
            <div className="hidden lg:flex justify-end">
                <img src={man3} className="w-[997px] rounded-[8px]" alt="" />
            </div>
            <div className="lg:absolute top-[120px] px-[18px] py-[36px] md:p-[64px] rounded-lg bg-[#ffff]">
                <div className="text-center">
                    <h2 className="text-grey800 mb-[16px] font-bold text-[24px] md:text-[40px]">
                        Create your account
                    </h2>
                    <p className="text-base text-grey400 px-[60px] md:px-0">
                        Land your dream job with Aplicar cover letter
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="my-[44px] flex flex-col gap-[20px] ">
                        <InputField
                            p={errors.fullName && touched.fullName && errors.fullName}
                            className={errors.fullName && touched.fullName ? "!border-errorMain" : ""}
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        id={"fullName"} htmlFor={"fullName"} label={"Full Name"} type={"text"} placeholder={"Enter your full name"} />
                        <InputField
                            p={errors.email && touched.email && errors.email}
                            className={errors.email && touched.email ? "!border-errorMain" : ""}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        id={"email"} htmlFor={"email"} label={"Email"} type={"email"} placeholder={"Enter your email"} />
                        
                        <InputField
                            p={errors.password && touched.password && errors.password}
                            className={errors.password && touched.password ? "!border-errorMain" : ""}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        id={"password"} htmlFor={"password"} src={eyeslash} label={"Password"} type={"password"} placeholder={"Enter your password"} />
                        <InputField
                            p={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                            className={errors.confirmPassword && touched.confirmPassword ? "!border-errorMain" : ""}
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        id={"confirmPassword"} htmlFor={"confirmPassword"} src={eyeslash} label={"Confirm Password"} type={"password"} placeholder={"confirm your password"} />
                    </div>
                    <div className="flex flex-col text-center gap-[32px]">
                        <Button
                            className={"btn btnLong w-[100%] btnPrimary"}
                            children={"Register"}
                            type={"submit"}
                             />
                        <Button
                            className={"btn btnLong w-[100%] btnSecondary"}
                            children={"Register with Google"}
                            icon={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4933 7.37968C14.46 7.03968 14.1733 6.78634 13.8333 6.78634H8.79999C8.43333 6.78634 8.13333 7.08634 8.13333 7.453V8.59302C8.13333 8.95968 8.43333 9.25968 8.79999 9.25968H11.8067C11.7333 9.87302 11.3333 10.7997 10.4467 11.4197C9.87999 11.813 9.12666 12.0863 8.13333 12.0863C8.08666 12.0863 8.04666 12.0863 8 12.0797C6.3 12.0263 4.86 10.8863 4.34 9.31968C4.2 8.89968 4.12 8.45967 4.12 7.99967C4.12 7.53967 4.19999 7.093 4.33333 6.67967C4.37333 6.55967 4.41999 6.43968 4.47333 6.31968C5.08666 4.93968 6.42666 3.96634 8 3.91968C8.04 3.91301 8.08666 3.913 8.13333 3.913C9.08666 3.913 9.79999 4.22633 10.3 4.573C10.56 4.753 10.9067 4.713 11.1333 4.493L12.06 3.58634C12.3533 3.29968 12.3267 2.813 11.9933 2.573C10.9333 1.793 9.63999 1.33301 8.13333 1.33301C8.08666 1.33301 8.04666 1.33301 8 1.33968C5.44666 1.38635 3.25333 2.86635 2.17999 5.00635C1.72666 5.91301 1.46666 6.92634 1.46666 7.99967C1.46666 9.07301 1.72666 10.0863 2.17999 10.993H2.18666C3.25999 13.133 5.45333 14.613 8 14.6597C8.04666 14.6663 8.08666 14.6663 8.13333 14.6663C9.93333 14.6663 11.4467 14.073 12.5467 13.053C13.8067 11.8863 14.5333 10.1797 14.5333 8.14634C14.5333 7.85968 14.52 7.61301 14.4933 7.37968Z" fill="#0652DD" />
                                </svg>}
                            type={"submit"}
                             />
                    </div>
                    <p className="text-textBody text-center mt-[16px] text-base">Already have an account?<Link to="/login" className="text-primaryMain font-bold">Sign In</Link></p>
                </form>
            </div>
        </div>
    );
}

export default CreateAcount;