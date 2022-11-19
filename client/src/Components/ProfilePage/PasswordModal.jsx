import React, { useState } from 'react'
import { PasswordLockIcon } from './Icons.js'

function PasswordModal({ setShowPassModal }) {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    // const [confirmOldPassword, setConfirmOldPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [emptyError, setEmptyError] = useState(false)
    const [unMatch, setUnMatch] = useState(false)




    const [isValid, setIsValid] = useState(false);








    const handleSubmit = (e) => {
        e.preventDefault();

        if (oldPassword.trim().length === 0 || newPassword.trim().length === 0) {
            setIsValid(false);
            setEmptyError(true);
            setUnMatch(true);
            console.log("EMPTY EMRROR")



        } else if (newPassword !== confirmNewPassword) {
            setIsValid(false);
            setEmptyError(false);
            setUnMatch(true);
            console.log("UNMACH ERROR")

            return
        } else {
            setIsValid(true)
            setUnMatch(false);
            setEmptyError(false)

            console.log("GBAYII")

            return
        }



    }




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

                            <form action="" onSubmit={handleSubmit}
                                className='z-50 flex flex-col justify-center gap-4' >
                                <div className='my-4 '>
                                    <label htmlFor="oldPassword" className='font-bold text-[#6D6D6D]'>Old Password</label>
                                    <div className='relative '>
                                        <PasswordLockIcon className='absolute top-4 left-4 ' />
                                        <input style={{
                                            borderColor: emptyError ? 'red' : '' 
                                        }} type="password" className='focus:border-[#6D6D6D] w-full border rounded-lg my-2 px-12 py-2 ' id='oldPassword' placeholder='Enter Old Password' onChange={(e) => {
                                            setOldPassword(e.target.value)

                                        }} />
                                        { emptyError && <span className='text-errorMain'>New or Old Password cannot be Empty</span> }
                                    </div>
                                </div>




                                <div className='my-4 '>
                                    <label htmlFor="newPassword" className='font-bold text-[#6D6D6D]'>New Password</label>
                                    <div className='relative '>
                                        <PasswordLockIcon className='absolute top-4 left-4 ' />
                                        <input style={{
                                            borderColor: emptyError ? 'red' : '' 
                                        }} type="password" className='focus:border-[#6D6D6D] w-full border rounded-lg my-2 px-12 py-2 ' id='oldPassword' placeholder='Enter New Password' onChange={(e) => {
                                            setNewPassword(e.target.value)

                                        }} />
                                        { emptyError && <span className='text-errorMain'>New or Old Password cannot be Empty</span> }
                                    </div>
                                </div>

                                <div className='my-4 '>
                                    <label htmlFor="confirmNewPassword" className='font-bold text-[#6D6D6D]'>Confirm New Password</label>
                                    <div className='relative '>
                                        <PasswordLockIcon className='absolute top-4 left-4 ' />
                                        <input style={{
                                            borderColor: emptyError ? 'red' : '' 
                                        }} type="password" className='focus:border-[#6D6D6D] w-full border rounded-lg my-2 px-12 py-2 ' id='oldPassword' placeholder='Enter Old Password' onChange={(e) => {
                                            setConfirmNewPassword(e.target.value)

                                        }} />
                                        { unMatch && <span className='text-errorMain'>New nad Old Password must be the same</span> }
                                    </div>
                                </div>

                                <div className='flex gap-6 justify-end'>
                                    <button style={{
                                        backgroundColor: isValid ? '#0652DD' : '#0544B8' 
                                    }} disabled={ isValid } type='submit' className='bg-primaryMain px-8 py-4 rounded-lg text-white font-bold cursor-pointer'>
                                        Save
                                    </button>

                                    <p className='border-2 border-primaryMain px-8 py-4 rounded-lg text-primaryMain font-bold cursor-pointer' onClick={() => {
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