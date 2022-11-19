import React from 'react'
import { PasswordLockIcon } from './Icons.js'

function PasswordModal({  setShowPassModal }) {


    return (
        <>
            
                <div className='' >
                    <div className='bg-[#00000065] h-full w-full left-0 fixed top-0 z-10 '
                        onClick={() => {
                            setShowPassModal(false);
                        }}>

                    </div>

                    <div className='absolute bg-white w-11/12 md:w-6/12 h-5/6 z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3 md:p-6 rounded-3xl'>
                        <div className='w-11/12  mx-auto overflow-hidden'>
                            {/* Close Button */}
                            <p className='inline rounded-full py-2 px-4  absolute top-[-2%] right-[-1%] z-40 font-bold text-xl bg-primaryMain text-white cursor-pointer border-4 border-white'
                                onClick={() => {
                                    setShowPassModal(false)
                                }}>X</p>

                            <div>

                                <div>
                                    <h1 className='font-bold text-[1.5em] pb-2 text-center'>Change Password</h1>
                                </div>

                                <form action="" className='z-50'>
                                    <div className='my-4 '>
                                        <label htmlFor="oldPassword" className='font-bold text-[#6D6D6D]'>Old Password</label>
                                        <div className='relative '>
                                            <PasswordLockIcon className='absolute top-4 left-4 ' />
                                            <input type="password" className='focus:border-[#6D6D6D] w-full border rounded-lg my-2 px-12 py-2 ' id='oldPassword' placeholder='Enter Old Password' />
                                        </div>
                                    </div>

                                    <div className='my-4 '>
                                        <label htmlFor="confirmOldPassword" className='font-bold text-[#6D6D6D]'>Confirm Old Password</label>
                                        <div className='relative '>
                                            <PasswordLockIcon className='absolute top-4 left-4 ' />
                                            <input type="password" className='focus:border-[#6D6D6D] w-full border rounded-lg my-2 px-12 py-2 ' id='confirmOldPassword' placeholder='Confirm Old Password' />
                                        </div>
                                    </div>

                           

                                    <div className='my-4 '>
                                        <label htmlFor="newPassword" className='font-bold text-[#6D6D6D]'>New Password</label>
                                        <div className='relative '>
                                            <PasswordLockIcon className='absolute top-4 left-4 ' />
                                            <input type="password" className='focus:border-[#6D6D6D] w-full border rounded-lg my-2 px-12 py-2 ' id='newPassword' placeholder='Enter New Password' />
                                        </div>
                                    </div>

                                    <div className='my-4 '>
                                        <label htmlFor="confirmNewPassword" className='font-bold text-[#6D6D6D]'>Confirm New Password</label>
                                        <div className='relative '>
                                            <PasswordLockIcon className='absolute top-4 left-4 ' />
                                            <input type="password" className='focus:border-[#6D6D6D] w-full border rounded-lg my-2 px-12 py-2 ' id='confirmNewPassword' placeholder='Confirm New Password' />
                                        </div>
                                    </div>

                                    <div className='flex gap-6 justify-end'>
                                        <button className='bg-primaryMain px-8 py-4 rounded-lg text-white font-bold cursor-pointer'>Save</button>
                                        <p className='border-2 border-primaryMain px-8 py-4 rounded-lg text-primaryMain font-bold cursor-pointer' onClick={()=>{
                                            setShowPassModal(false)
                                        }}>Cancel</p>


                                    </div>


                                </form>



                            </div>

                        </div>
                    </div>


                </div>
            

        </>
    )
}

export default PasswordModal