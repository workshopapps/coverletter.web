import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../Components/Ui/InputField";
import man3 from "../Assets/man3.png";
import eyeslash from "../Assets/eye-slash.svg";
import Button from "../Components/Ui/Button";

const Login = () => {
    
    const passwordRules = /(?=.*[!#$%&?^*@~() "])(?=.{8,})/;

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Please enter a valid email like Kamaldeen@gmail.com").required("Please enter your email"),
        password: Yup.string().min(5).matches(passwordRules, {message: "Please enter a stronger password"}).required("Please enter a password"),
  

    });

    const onSubmit = () => {
        console.log("submitted");
    }

    const { values, errors, handleBlur, handleChange, handleSubmit, touched }  = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: LoginSchema,
        onSubmit,
    });

    console.log(errors);

    return ( 
        <div className="relative bg-background px-[95px] pt-[76px] pb-[150px]">
        <div className="flex justify-end">
            <img src={man3} className="" alt="" />
        </div>
        <div className="absolute top-[100px] p-[64px] rounded-lg bg-[#ffff]">
            <div className="text-left">
                <h2 className="text-grey800 mb-[16px] font-bold text-[40px]">
                    Login to your account
                </h2>
                <p className="text-base text-grey400">
                    Land your dream job with Aplicar cover letter
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="my-[44px] flex flex-col gap-[24px] ">
                    <InputField
                        p={errors.email && touched.email && errors.email}
                        className={errors.email && touched.email ? "border-errorMain" : ""}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    id={"email"} label={"Email"} type={"email"} placeholder={"Enter your email"} />
                    
                    <InputField
                        p={errors.password && touched.password && errors.password}
                        className={errors.password && touched.password ? "border-errorMain" : ""}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    id={"password"} src={eyeslash} label={"Password"} type={"password"} placeholder={"Enter your password"} />
                </div>
                <div className="flex flex-col gap-[8px]">
                    <Button
                        className={"btn btnLong btnPrimary mt-0"}
                        children={"Login"}
                        type={"submit"} />
                        <p className="text-[12px] mt-0 font-bold text-stokeDark">Forgot password? <span className="text-primaryMain">Click here</span></p>
                </div>
            </form>

            <div>
                <p className="text-[12px] font-bold mt-[24px] text-center text-stokeDark">Don't have an account? <span className="text-primaryMain">Register</span></p>
            </div>
        </div>
    </div>
     );
}
 
export default Login;