import React, { useState } from 'react'
import { ChatIcon, UserProfile, LockIcon, EditIcon } from './Icons';
import PasswordModal from './PasswordModal';

const ChatIcons = <ChatIcon />;
const UserProfiles = <UserProfile />



function ProfileAccount() {
    const [showPassModal, setShowPassModal] = useState(false);


    const AccountTabs = [
        {
            img: UserProfiles,
            mainText: '24578635',
            subText: 'Account ID'
        },
        {
            img: UserProfiles,
            mainText: 'Kanyinola Bisola',
            subText: 'Full Name'
        },
        {
            img: ChatIcons,
            mainText: 'bisolakanyinola@gmail.com',
            subText: 'Email Address'
        }

    ]


    return (
        <div className='p-4 bg-white rounded-lg'>
            <h1 className='font-bold text-[1.5em] pb-4'>My Account</h1>

            <div>
                {AccountTabs.map((tab) => {
                    return (
                        <div key={tab.index} className='flex gap-4 my-8 border-[#CAD0DD] border-t pt-8 items-center'>
                            <div>
                                {tab.img}

                            </div>

                            <div className='flex gap-4 flex-col'>
                                <p className='font-bold text-[0.9em] md:text-[1.2em]'>{tab.mainText}</p>
                                <p className='text-[#6D6D6D] text-[0.8em] font-semibold'>{tab.subText}</p>
                            </div>
                        </div>
                    )
                })}

                <div className='flex justify-between gap-4 my-4 md:my-8 border-[#CAD0DD] border-t pt-4 md:pt-8 items-center'>
                    <div className='flex gap-4 md:gap-4 '>

                        <div>
                            <LockIcon />

                        </div>

                        <div>
                            <p className='font-bold text-[0.9em] md:text-[1.2em]'>**********</p>
                            <p className='text-[#6D6D6D] text-[0.8em] font-semibold'>Password</p>
                        </div>

                    </div>

                    <div className='flex items-center mx-2 gap-4 justify-between ' onClick={() => {
                        setShowPassModal(true)
                    }} >
                        <span className='cursor-pointer'><EditIcon /></span>
                        <span className='font-bold text-[0.8em] md:text-[1.2em] cursor-pointer'>Change Password</span>
                    </div>

                </div>


            </div>

            {showPassModal &&

                <PasswordModal showPassModal={showPassModal} setShowPassModal={setShowPassModal} />
            }
        </div>
    )
}

export default ProfileAccount;