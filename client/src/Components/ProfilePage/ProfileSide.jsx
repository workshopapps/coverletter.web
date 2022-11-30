import React from 'react'
import { EditIcon } from './Icons'


function ProfileSide() {
    return (
        <>
            <div className='flex justify-between gap-4 items-center'>
                <div className='w-2/12 text-center rounded-full h-max'>
                    <p className='bg-[#CDDCF8] py-6 font-bold rounded-full text-[#0652DD]'>B</p>

                </div>

                <div className='w-6/12 '>
                    <p className='font-bold mb-3'>Bisola Kanyinola</p>
                    <p>UI/UX Designer</p>

                </div>

                <div className='w-3/12'>
                    <p className='flex gap-4 items-center'>
                        <span><EditIcon /></span>
                        <span>Edit</span>
                    </p>

                </div>
            </div>

            {/* <div className='my-8 '>
                <h1 className='font-bold text-[1.5em] border-b pb-4'>Profile</h1>

                <Link to='/' className='font-bold text-white bg-[#0652DD] block text-center py-2 rounded-lg'>Account</Link>


            </div> */}
        </>

    )
}

export default ProfileSide