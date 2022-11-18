import Button from "../Components/Ui/Button";
import InputField from "../Components/Ui/InputField";


const VerifyAcc = () => {
    return ( 
        <div className="bg-background py-[200px]">
            <div className="bg-[#ffff] flex flex-col gap-[44px] p-[64px] text-center rounded-[8px] my-0 mx-auto w-fit">
                <div className="text-left">
                    <h2 className="text-textHeader font-bold text-[40px] mb-[8px] ">Verify your account</h2>
                    <p className="text-textBody text-base ">Enter the code sent to your email adress</p>
                </div>
                <div>
                    <InputField placeholder={"Verification code"} />
                </div>
                <Button className={"btn btnPrimary btnLong"} children={"Verify"} >

                </Button>
            </div>
        </div>
     );
}
 
export default VerifyAcc;