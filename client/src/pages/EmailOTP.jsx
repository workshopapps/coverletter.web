import { useState } from 'react';
import { Link } from "react-router-dom";

const EmailOTP = () => {

    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return ( 
        <div className="email-content mx-auto mt-36 w-[89%] py-8 text-center bg-transparent
        tb:bg-white tb:w-[65%] bg-white py-12
        lg:w-6/12 py-12
        xxl:w-[528px]">
            <h1 className="text-black text-2xl font-semibold leading-8 mb-7
            sm:text-3xl mb-5
            tb:text-3xl mb-5
            lg:text-4xl">Email Verification</h1>
            <p className='w-10/12 mx-auto text-base font-normal leading-6 text-gray-700 
            sm:text-lg w-3/4
            lg:text-lg w-5/6'>Enter the OTP code sent to the email associated with your account to reset your password.</p>
            <h2 className='mt-10'>
                <span className='block text-xl leading-8 text-gray-700 
                tb:text-2xl
                lg:text-2xl'>Please Enter OTP</span>
                <span className='text-red-600 text-xl leading-8 font-semibold 
                tb:text-2xl
                lg:text-2xl'>1:04</span>
            </h2>
            <div className="otp-input mt-8 mb-10">
                {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field font-bold w-12 h-12 px-2 pl-4 py-4 mr-4  border border-gray-700 outine-1 outline-gray-700 rounded-lg text-gray-700 text-xl leading-8
                                tb:mr-6
                                lg:mr-8"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}
            </div>

             <div className="otp-btn mb-8
             grid grid-cols-2 gap-4 justify-between items-center 
             sm:w-80 mx-auto
             tb:w-80 mx-auto
             lg:w-96 mx-auto">
                <div className="resend-otp border border-[#ACC5F4] rounded-lg py-3 cursor-pointer hover:scale-x-[1.03]">
                    <input type="button"  value='Resend OTP' className='text-[#ACC5F4] '/>
                </div>
                <div className="validate-otp rounded-lg bg-[#0652DD] py-3 cursor-pointer hover:scale-x-[1.03]">
                    <input type="button" value='Validate OTP' className='text-white'/>
                </div>
             </div>
             <div className="change-email text-[#0652DD] text-base leading-6 underline font-semibold">
                <Link to='/'>Change Email</Link>
             </div>
        </div>
     );
}
 
export default EmailOTP;