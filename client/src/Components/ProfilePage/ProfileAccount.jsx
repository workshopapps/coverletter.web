import React from 'react'
import { Link } from 'react-router-dom';
import { ChatIcon, UserProfile, LockIcon } from './Icons';
import Button from '../Ui/Button';

const ChatIcons = <ChatIcon />;
const UserProfiles = <UserProfile />



function ProfileAccount() {
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
            <div className='flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <h1 className='font-bold text-[1.5em] pb-2'>Profile</h1>
                    <p className='bg-[#D7EBE2] text-[#26704C] border-2 border-[#068850] px-2 py-1 text-[0.6em] font-bold rounded-lg'>Free Plan</p>
                </div>

                <Link to='/' className='font-bold text-white bg-[#0652DD] block text-center py-2 rounded-lg px-4'>Generate Cover Letter</Link>

            </div>

            <div>
                {AccountTabs.map((tab) => {
                    return (
                        <div className='flex gap-4 my-8 border-[#CAD0DD] border-t pt-8 items-center'>
                            <div>
                                {tab.img}

                            </div>

                            <div className='flex gap-4 flex-col'>
                                <p className='font-bold text-[1.2em]'>{tab.mainText}</p>
                                <p className='text-[#6D6D6D] font-semibold'>{tab.subText}</p>
                            </div>
                        </div>
                    )
                })}

                <div className='flex gap-4 my-8 border-[#CAD0DD] border-t pt-8 items-center'>
                    <div className='flex gap-4 '>

                        <div>
                            <LockIcon />

                        </div>

                        <div>
                            <p className='font-bold text-[1.2em]'>***************</p>
                            <p>Password</p>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default ProfileAccount;