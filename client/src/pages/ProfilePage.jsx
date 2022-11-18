import { Link } from "react-router-dom";
import ProfileAccount from "../Components/ProfilePage/ProfileAccount";
import ProfileSide from "../Components/ProfilePage/ProfileSide";
import Upload from "../Components/ProfilePage/Upload";


const ProfilePage = () => {
    const ResumeUploaded = [
        {
            firstName: 'Jessica',
            lastName: 'Adamee',
            extension: '.pdf'
        },
        {
            firstName: 'Jessica',
            lastName: 'Adamee',
            extension: '.pdf'
        }
    ]

    const CVGenerated = [
        {
            firstName: 'Bisola',
            lastName: 'Kanyinsola',
            extension: '.pdf'
        },
        {
            firstName: 'Bisola',
            lastName: 'Kanyinsola',
            extension: '.pdf'
        },
    ]


    return (
        <div className='bg-[#03296f11] py-8'>
            <div className="w-[95%] md:w-[90%] mx-auto">

                <div className='md:flex md:gap-4'>
                    <div className="bg-white w-4/12 rounded-md h-max p-6 hidden md:block">
                        <ProfileSide />
                    </div>

                    <div className='md:flex md:flex-col md:gap-4 w-full md:w-8/12'>
                        <div>
                            <div className='flex flex-col md:flex-row justify-between mb-6'>
                                <div className='flex gap-4 items-center'>
                                    <h1 className='font-bold text-[1.5em] pb-2'>Profile</h1>
                                    <p className='bg-[#D7EBE2] text-[#26704C] hidden md:block border-2 border-[#068850] px-2 py-1 text-[0.6em] font-bold rounded-lg'>Free Plan</p>
                                </div>

                                <Link to='/generate' className='font-bold text-white bg-[#0652DD] block text-center py-2 rounded-lg px-4'>Generate Cover Letter</Link>

                            </div>

                            <ProfileAccount />

                        </div>


                        {/* Resume Uploaded Section */}
                        <div className="bg-white rounded-md h-max p-6 my-6">
                            <h1 className='font-bold text-[1.5em]'>Resume Uploaded</h1>

                            <div>
                                {ResumeUploaded.map((resume) => {
                                    return (
                                        <Upload resume={resume} key={resume.index} />
                                    )
                                })}
                            </div>
                        </div>

                        {/* Cover Letter Generated Section */}
                        <div className="bg-white rounded-md h-max p-6 my-6">
                            <h1 className='font-bold text-[1.5em]'>Cover Letter Generated</h1>

                            <div>
                                {CVGenerated.map((CV) => {
                                    return (
                                        <Upload resume={CV} key={CV.index} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProfilePage;