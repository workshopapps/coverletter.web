import ProfileAccount from "../Components/ProfilePage/ProfileAccount";
import ProfileSide from "../Components/ProfilePage/ProfileSide";
import Upload from "../Components/ProfilePage/Upload";

const ProfilePage = () => {
    const ResumeUploaded = [
        {
            name: 'Jessica adamee.pdf'
        },
        {
            name: 'Jessica adamee.pdf'
        }
    ]


    return (
        <div className='bg-[#03296f11] py-8'>
            <div className="w-[95%] md:w-[90%] mx-auto">

                <div className='flex gap-4'>
                    <div className="bg-white w-4/12 rounded-md h-max p-6">
                        <ProfileSide />
                    </div>

                    <div className='flex flex-col gap-4  w-8/12'>
                        <div>
                            <h1 className='font-bold text-[1.5em] pb-4'>My Account</h1>
                            <ProfileAccount />

                        </div>

                        <div className="bg-white rounded-md h-max p-6">
                            <h1 className='font-bold text-[1.5em] pb-4'>Resume Uploaded</h1>

                            <div>
                                { ResumeUploaded.map((resume)=>{
                                    return (
                                        <Upload resume={ resume }/>
                                    )
                                }) }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProfilePage;