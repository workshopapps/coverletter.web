import Button from "../Components/Ui/Button";
import InputField from "../Components/Ui/InputField";


const VerifyAcc = () => {

    return ( 
        <div className="bg-background px-[24px] py-[200px]">
            <div className="bg-[#ffff] px-[15.5px] py-[32px] md:p-[64px] text-center rounded-[8px] my-0 mx-auto w-fit">
                <div className='flex flex-col gap-[44px]'>
                    <div className="text-center">
                        <h2 className="text-textHeader font-bold text-[20px] md:text-[40px] mb-[8px] ">Verify your account</h2>
                        <p className="text-textBody text-[18px] ">Enter the code sent to your email adress</p>
                        <p className="font-semibold text-[20px] md:text-[24px] mt-[24px] text-textBody ">Please Enter OTP</p>
                        <p className="text-errorMain font-semibold text-[20px] md:text-[24px] mt-[4px]">4:04</p>
                    </div>
                    <div className="flex justify-around">
                        <div>
                            <input className="w-[45px] text-[20px] font-bold text-textBody h-[48px] outline-none border py-[8px] px-[16px] border-stokeDark  rounded-[8px]" type="text" />
                        </div>
                        <div>
                            <input className="w-[45px] text-[20px] font-bold text-textBody h-[48px] outline-none border py-[8px] px-[16px] border-stokeDark  rounded-[8px]" type="text" />
                        </div>
                        <div>
                            <input className="w-[45px] text-[20px] font-bold text-textBody h-[48px] outline-none border py-[8px] px-[16px] border-stokeDark  rounded-[8px]" type="text" />
                        </div>
                        <div>
                            <input className="w-[45px] text-[20px] font-bold text-textBody h-[48px] outline-none border py-[8px] px-[16px] border-stokeDark  rounded-[8px]" type="text" />
                        </div>
                    </div>
                    <div className="flex gap-[16px]">
                        <Button className={"btn btnSecondary w-[100%] btnShort"} children={"Resend OTP"} />
                        <Button className={"btn btnPrimary w-[100%] btnShort"} children={"Validate OTP"} />
                    </div>
                </div>
                <p className="font-semibold text-primaryMain text-base underline underline-offset-[5px] cursor-pointer mt-[24px]">Change email</p>
            </div>
        </div>
     );
}
 
export default VerifyAcc;