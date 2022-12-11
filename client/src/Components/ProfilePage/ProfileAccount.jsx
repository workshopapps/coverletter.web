import React from 'react'
import { useGlobalContext } from '../../context/context';
import { ChatIcon, UserProfile, LockIcon, EditIcon } from './Icons';
const ChatIcons = <ChatIcon />;
const UserProfiles = <UserProfile />



function ProfileAccount({setShowPassModal, setShowEditProfileModal}) {

    const {user} = useGlobalContext()

    const AccountTabs = [
        {
            img: UserProfiles,
            mainText: user?.name,
            subText: 'Full Name'
        },
        {
            img: ChatIcons,
            mainText: user?.email,
            subText: 'Email Address'
        }

    ]


    return (
        <div className='p-4 bg-white rounded-lg'>
            <h1 className='flex justify-between items-center font-bold text-[1.5em] pb-4'> <span>My Account</span> <span className='cursor-pointer xs:block  min-[938px]:hidden' onClick={()=> setShowEditProfileModal(true)}><EditIcon /></span></h1>
            <div>
                {AccountTabs.map((tab, index) => {
                    return (
                        <div key={index} className='flex gap-4 my-8 border-[#CAD0DD] border-t pt-8 items-center'>
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
        </div>
    )
}

export default ProfileAccount;