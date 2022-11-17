import Modal from '../Components/Ui/Modal'
import React,{useState} from 'react'
import Button from '../Components/Ui/Button'
import {useGlobalContext} from '../context/context'


const Preview = () => {

    const {openModal, isModalOpen} = useGlobalContext();

    const [firstModal, setFirstModal] = useState(false);

    const handleClick = () => {
        setFirstModal(!firstModal)
    }

  return (
    <div className='bg-background px-7 pt-6 pb-36'>
        <div className='flex items-center'>
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.50014 9.33477C4.40514 9.33477 4.31014 9.29977 4.23514 9.22477L0.975137 5.96477C0.445137 5.43477 0.445137 4.56477 0.975137 4.03477L4.23514 0.774766C4.38014 0.629766 4.62014 0.629766 4.76514 0.774766C4.91014 0.919766 4.91014 1.15977 4.76514 1.30477L1.50514 4.56477C1.26514 4.80477 1.26514 5.19477 1.50514 5.43477L4.76514 8.69477C4.91014 8.83977 4.91014 9.07977 4.76514 9.22477C4.69014 9.29477 4.59514 9.33477 4.50014 9.33477Z" fill="#292D32"/>
            </svg>
            <p className='ml-3 text-sm' onClick={handleClick}>Back</p>
        </div>
        <div className='w-full flex justify-center mt-5'>
            <p className='font-bold text-2xl w-[65%] text-center'>Your Cover Letter is Ready!</p>
        </div>
        <div className='mt-10 flex justify-center items-center bg-coverContainer drop-shadow-lg min-w-[295px] min-h-[410px]'>
            <div className='min-w-[290px] min-h-[400px] bg-grey100'>
                ksldkl
            </div>
        </div>
        <div className='w-full mt-5 flex justify-between'>
            <Button className='bg-primaryMain min-w-[140px] w-[48%] min-h-[48px] rounded-lg text-background font-bold' children='Download' onClick={openModal}/>
            <Button className='bg-background border-2 border-primaryMain min-w-[140px] w-[48%] min-h-[48px] rounded-lg text-primaryMain font-bold' children='Save to profile'/>
        </div>
        
        {
            isModalOpen && (
                !firstModal ? ( 
                        <Modal>
                            <div className='bg-background flex items-center flex-col min-w-[311px] min-h-[376px] rounded-md py-11 px-9'>
                                <p className='font-bold'>Select Download Option</p>
                                    <div className='w-full'>
                                        <div className='flex justify-between w-full mt-7'>
                                            <div className=' flex items-center'>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.4997 8.63379H5.83301C5.55967 8.63379 5.33301 8.40712 5.33301 8.13379C5.33301 7.86046 5.55967 7.63379 5.83301 7.63379H10.4997C10.773 7.63379 10.9997 7.86046 10.9997 8.13379C10.9997 8.40712 10.773 8.63379 10.4997 8.63379Z" fill="#101010"/>
                                                <path d="M8.75301 11.2998H5.83301C5.55967 11.2998 5.33301 11.0731 5.33301 10.7998C5.33301 10.5265 5.55967 10.2998 5.83301 10.2998H8.75301C9.02634 10.2998 9.25301 10.5265 9.25301 10.7998C9.25301 11.0731 9.02634 11.2998 8.75301 11.2998Z" fill="#101010"/>
                                                <path d="M9.83301 4.49967H7.16634C6.52634 4.49967 5.33301 4.49967 5.33301 2.66634C5.33301 0.833008 6.52634 0.833008 7.16634 0.833008H9.83301C10.473 0.833008 11.6663 0.833008 11.6663 2.66634C11.6663 3.30634 11.6663 4.49967 9.83301 4.49967ZM7.16634 1.83301C6.50634 1.83301 6.33301 1.83301 6.33301 2.66634C6.33301 3.49967 6.50634 3.49967 7.16634 3.49967H9.83301C10.6663 3.49967 10.6663 3.32634 10.6663 2.66634C10.6663 1.83301 10.493 1.83301 9.83301 1.83301H7.16634Z" fill="#101010"/>
                                                <path d="M10.5 15.1669H6.5C2.75333 15.1669 2 13.4469 2 10.6669V6.66695C2 3.62695 3.1 2.32695 5.80667 2.18695C6.07333 2.17361 6.32 2.38028 6.33333 2.66028C6.34667 2.94028 6.13333 3.16695 5.86 3.18028C3.96667 3.28695 3 3.85361 3 6.66695V10.6669C3 13.1336 3.48667 14.1669 6.5 14.1669H10.5C13.5133 14.1669 14 13.1336 14 10.6669V6.66695C14 3.85361 13.0333 3.28695 11.14 3.18028C10.8667 3.16695 10.6533 2.92695 10.6667 2.65361C10.68 2.38028 10.92 2.16695 11.1933 2.18028C13.9 2.32695 15 3.62695 15 6.66028V10.6603C15 13.4469 14.2467 15.1669 10.5 15.1669Z" fill="#101010"/>
                                                </svg>
                                                <p className='ml-3'>PDF</p>
                                            </div>
                                            <input type="radio" className='bg-background text-background rounded-lg w-5 h-5  text-primaryMain border-4 border-primaryMain' id='PDF' name='PDF' value="PDF" />
                                        </div>
                                        <hr className='w-full bg-stokeLight mt-2'/>
                                    </div>
                                    <div className='w-full'>
                                        <div className='flex justify-between w-full mt-7'>
                                            <div className=' flex items-center'>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.4997 8.63379H5.83301C5.55967 8.63379 5.33301 8.40712 5.33301 8.13379C5.33301 7.86046 5.55967 7.63379 5.83301 7.63379H10.4997C10.773 7.63379 10.9997 7.86046 10.9997 8.13379C10.9997 8.40712 10.773 8.63379 10.4997 8.63379Z" fill="#101010"/>
                                                <path d="M8.75301 11.2998H5.83301C5.55967 11.2998 5.33301 11.0731 5.33301 10.7998C5.33301 10.5265 5.55967 10.2998 5.83301 10.2998H8.75301C9.02634 10.2998 9.25301 10.5265 9.25301 10.7998C9.25301 11.0731 9.02634 11.2998 8.75301 11.2998Z" fill="#101010"/>
                                                <path d="M9.83301 4.49967H7.16634C6.52634 4.49967 5.33301 4.49967 5.33301 2.66634C5.33301 0.833008 6.52634 0.833008 7.16634 0.833008H9.83301C10.473 0.833008 11.6663 0.833008 11.6663 2.66634C11.6663 3.30634 11.6663 4.49967 9.83301 4.49967ZM7.16634 1.83301C6.50634 1.83301 6.33301 1.83301 6.33301 2.66634C6.33301 3.49967 6.50634 3.49967 7.16634 3.49967H9.83301C10.6663 3.49967 10.6663 3.32634 10.6663 2.66634C10.6663 1.83301 10.493 1.83301 9.83301 1.83301H7.16634Z" fill="#101010"/>
                                                <path d="M10.5 15.1669H6.5C2.75333 15.1669 2 13.4469 2 10.6669V6.66695C2 3.62695 3.1 2.32695 5.80667 2.18695C6.07333 2.17361 6.32 2.38028 6.33333 2.66028C6.34667 2.94028 6.13333 3.16695 5.86 3.18028C3.96667 3.28695 3 3.85361 3 6.66695V10.6669C3 13.1336 3.48667 14.1669 6.5 14.1669H10.5C13.5133 14.1669 14 13.1336 14 10.6669V6.66695C14 3.85361 13.0333 3.28695 11.14 3.18028C10.8667 3.16695 10.6533 2.92695 10.6667 2.65361C10.68 2.38028 10.92 2.16695 11.1933 2.18028C13.9 2.32695 15 3.62695 15 6.66028V10.6603C15 13.4469 14.2467 15.1669 10.5 15.1669Z" fill="#101010"/>
                                                </svg>
                                                <p className='ml-3'>DOC</p>
                                            </div>
                                            <input type="radio" className='bg-background text-background rounded-lg w-5 h-5  text-primaryMain border-4 border-primaryMain' id='DOC' name='DOC' value="DOC" />
                                        </div>
                                        <hr className='w-full bg-stokeLight mt-2'/>
                                    </div>
                                    <div className='w-full'>
                                        <div className='flex justify-between w-full mt-7'>
                                            <div className=' flex items-center'>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.4997 8.63379H5.83301C5.55967 8.63379 5.33301 8.40712 5.33301 8.13379C5.33301 7.86046 5.55967 7.63379 5.83301 7.63379H10.4997C10.773 7.63379 10.9997 7.86046 10.9997 8.13379C10.9997 8.40712 10.773 8.63379 10.4997 8.63379Z" fill="#101010"/>
                                                <path d="M8.75301 11.2998H5.83301C5.55967 11.2998 5.33301 11.0731 5.33301 10.7998C5.33301 10.5265 5.55967 10.2998 5.83301 10.2998H8.75301C9.02634 10.2998 9.25301 10.5265 9.25301 10.7998C9.25301 11.0731 9.02634 11.2998 8.75301 11.2998Z" fill="#101010"/>
                                                <path d="M9.83301 4.49967H7.16634C6.52634 4.49967 5.33301 4.49967 5.33301 2.66634C5.33301 0.833008 6.52634 0.833008 7.16634 0.833008H9.83301C10.473 0.833008 11.6663 0.833008 11.6663 2.66634C11.6663 3.30634 11.6663 4.49967 9.83301 4.49967ZM7.16634 1.83301C6.50634 1.83301 6.33301 1.83301 6.33301 2.66634C6.33301 3.49967 6.50634 3.49967 7.16634 3.49967H9.83301C10.6663 3.49967 10.6663 3.32634 10.6663 2.66634C10.6663 1.83301 10.493 1.83301 9.83301 1.83301H7.16634Z" fill="#101010"/>
                                                <path d="M10.5 15.1669H6.5C2.75333 15.1669 2 13.4469 2 10.6669V6.66695C2 3.62695 3.1 2.32695 5.80667 2.18695C6.07333 2.17361 6.32 2.38028 6.33333 2.66028C6.34667 2.94028 6.13333 3.16695 5.86 3.18028C3.96667 3.28695 3 3.85361 3 6.66695V10.6669C3 13.1336 3.48667 14.1669 6.5 14.1669H10.5C13.5133 14.1669 14 13.1336 14 10.6669V6.66695C14 3.85361 13.0333 3.28695 11.14 3.18028C10.8667 3.16695 10.6533 2.92695 10.6667 2.65361C10.68 2.38028 10.92 2.16695 11.1933 2.18028C13.9 2.32695 15 3.62695 15 6.66028V10.6603C15 13.4469 14.2467 15.1669 10.5 15.1669Z" fill="#101010"/>
                                                </svg>
                                                <p className='ml-3'>TEXT</p>
                                            </div>
                                            <input type="radio" className='bg-background text-background rounded-lg w-5 h-5  text-primaryMain border-4 border-primaryMain' id='TEXT' name='TEXT' value="TEXT" />
                                        </div>
                                        <hr className='w-full bg-stokeLight mt-2'/>
                                    </div>
                                    <Button type='submit' className='w-full min-h-[48px] bg-primaryMain rounded-lg font-bold text-background mt-7' children='Download' onClick={handleClick}/>
                            </div>                            
                        </Modal>
                    ):(
                        <Modal>
                            <div className='bg-background top-[-100px] left-0 relative flex items-center flex-col min-w-[311px] min-h-[376px] rounded-md py-11 px-9'>
                                <p className='font-bold'>Select Download Option</p>  
                            </div>
                        </Modal>
                    )
            )
        }


    
       

    </div>

    
  )
}

export default Preview