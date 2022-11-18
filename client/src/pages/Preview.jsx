import Modal from '../Components/Ui/Modal'
import React,{useState, useEffect} from 'react'
import Button from '../Components/Ui/Button'
import {useGlobalContext} from '../context/context'
import lockedCover from '../Assets/cover_letter_full_2.png'
import CoverLetter from '../Components/Ui/CoverLetter'
import {useNavigate} from 'react-router-dom'

const Preview = () => {

    const {openModal, isModalOpen, closeModal} = useGlobalContext();

    // logic for the modal
    const [firstModal, setFirstModal] = useState(false);
    const handleClick = () => {
        setFirstModal(!firstModal)
    }
    useEffect(() => {
      setFirstModal(false)
    }, [openModal])

    // redirect on click cv
    const navigate = useNavigate();
    const coverRedirect = () => {
        navigate(`/cover letter`)
    }

    // the type of download select option
    const [dType, setDtype] = useState (null)
    

  return (
    <div className='bg-background pt-6 pb-36 overflow-x-hidden'>
        <div className='flex items-center px-7 lg:px-40 lg:mt-6'>
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.50014 9.33477C4.40514 9.33477 4.31014 9.29977 4.23514 9.22477L0.975137 5.96477C0.445137 5.43477 0.445137 4.56477 0.975137 4.03477L4.23514 0.774766C4.38014 0.629766 4.62014 0.629766 4.76514 0.774766C4.91014 0.919766 4.91014 1.15977 4.76514 1.30477L1.50514 4.56477C1.26514 4.80477 1.26514 5.19477 1.50514 5.43477L4.76514 8.69477C4.91014 8.83977 4.91014 9.07977 4.76514 9.22477C4.69014 9.29477 4.59514 9.33477 4.50014 9.33477Z" fill="#292D32"/>
            </svg>
            <p className='ml-3 text-sm' onClick={handleClick}>Back</p>
        </div>
        <div className='w-full flex justify-center mt-5 px-7 md:mt-11'>
            <p className='font-bold text-2xl w-[65%] text-center md:text-3xl md:w-[40%] lg:text-5xl lg:w-[40%]'>Your Cover Letter is Ready!</p>
        </div>
        <div className='w-screen overflow-x-hidden relative mt-10 md:mt-20'>
            <div className='flex relative w-full justify-center items-center md:translate-x-0 lg:translate-x-0'>
                <img src={lockedCover} alt="cover" className='mt-10 flex rounded-lg justify-center items-center bg-primaryLightest drop-shadow-lg min-w-[295px] h-[300px] min-h-[300px] md:min-h-[625px] md:min-w-[525px]' />
                <div>
                <svg  className='md:w-[32px] md:h-[30px] ' height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM17 3.5L1 3.5V4.5L17 4.5V3.5Z" fill="#434343"/>
                </svg>
                </div>
                <div className='flex justify-center items-center w-[80%] bg-primaryLightest drop-shadow-lg max-w-[530px] min-w-[395px] min-h-[410px] md:min-h-[725px] py-2 rounded-lg md:min-w-[525px]' role='button' onClick={coverRedirect}>
                   <CoverLetter/>
                </div>
                <div className=''>
                    <svg  className='md:w-[32px] md:h-[30px] ' height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM17 3.5L1 3.5V4.5L17 4.5V3.5Z" fill="#434343"/>
                    </svg>
                </div>
                <img src={lockedCover} alt="cover" className='mt-10 flex rounded-lg justify-center items-center bg-primaryLightest drop-shadow-lg min-w-[295px] h-[300px] min-h-[300px] md:min-h-[625px] md:min-w-[525px]' />
            </div>
        </div>

        <div className='w-100 flex justify-center'>
            <div className='w-full mt-5 flex justify-between px-7 max-w-[450px]  md:w-[55%]'>
                <Button className='bg-primaryMain min-w-[140px] w-[48%] min-h-[48px] rounded-lg text-background font-bold' children='Download' onClick={openModal}/>
                <Button className='bg-background border-2 border-primaryMain min-w-[140px] w-[48%] min-h-[48px] rounded-lg text-primaryMain font-bold' children='Save to profile'/>
            </div>
        </div>
        
        {
            isModalOpen && (
                !firstModal ? ( 
                        <Modal>
                            <div className='w-[350px] md:w-[450px] bg-background flex items-center flex-col min-w-[311px] min-h-[376px] rounded-md py-11 px-9'>
                                <div className='w-full flex justify-end mb-4'>
                                    <div onClick={closeModal} role='button'>
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.11357 10.3869C5.9869 10.3869 5.86023 10.3402 5.76023 10.2402C5.5669 10.0469 5.5669 9.7269 5.76023 9.53357L9.53357 5.76023C9.7269 5.5669 10.0469 5.5669 10.2402 5.76023C10.4336 5.95357 10.4336 6.27357 10.2402 6.4669L6.4669 10.2402C6.37357 10.3402 6.24023 10.3869 6.11357 10.3869Z" fill="#101010"/>
                                    <path d="M9.8869 10.3869C9.76023 10.3869 9.63357 10.3402 9.53357 10.2402L5.76023 6.4669C5.5669 6.27357 5.5669 5.95357 5.76023 5.76023C5.95357 5.5669 6.27357 5.5669 6.4669 5.76023L10.2402 9.53357C10.4336 9.7269 10.4336 10.0469 10.2402 10.2402C10.1402 10.3402 10.0136 10.3869 9.8869 10.3869Z" fill="#101010"/>
                                    <path d="M9.99967 15.1663H5.99967C2.37967 15.1663 0.833008 13.6197 0.833008 9.99967V5.99967C0.833008 2.37967 2.37967 0.833008 5.99967 0.833008H9.99967C13.6197 0.833008 15.1663 2.37967 15.1663 5.99967V9.99967C15.1663 13.6197 13.6197 15.1663 9.99967 15.1663ZM5.99967 1.83301C2.92634 1.83301 1.83301 2.92634 1.83301 5.99967V9.99967C1.83301 13.073 2.92634 14.1663 5.99967 14.1663H9.99967C13.073 14.1663 14.1663 13.073 14.1663 9.99967V5.99967C14.1663 2.92634 13.073 1.83301 9.99967 1.83301H5.99967Z" fill="#101010"/>
                                    </svg>
                                    </div>

                                </div>
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

                                            <div className='rounded-xl flex justify-center items-center bg-background border-2 border-primaryMain w-6 h-6' onClick={()=>setDtype('PDF')} role='cursor'>
                                                <div className={dType === 'PDF' ? 'w-3 h-3 rounded-lg border-primaryMain bg-primaryMain border-2': 'w-3 h-3 rounded-lg border-primaryMain border-2'}>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='w-full bg-stokeLight mt-2 border-none h-[1px]'/>
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
                                            <div className='rounded-xl flex justify-center items-center bg-background border-2 border-primaryMain w-6 h-6' onClick={()=>setDtype('DOC')} role='cursor'>
                                                <div className={dType === 'DOC' ? 'w-3 h-3 rounded-lg border-primaryMain bg-primaryMain border-2': 'w-3 h-3 rounded-lg border-primaryMain border-2'}>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='w-full bg-stokeLight mt-2 border-none h-[1px]'/>
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
                                            <div className='rounded-xl flex justify-center items-center bg-background border-2 border-primaryMain w-6 h-6' onClick={()=>setDtype('TEXT')} role='cursor'>
                                                <div className={dType === 'TEXT' ? 'w-3 h-3 rounded-lg border-primaryMain bg-primaryMain border-2': 'w-3 h-3 rounded-lg border-primaryMain border-2'}>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='w-full bg-stokeLight mt-2 border-none h-[1px]'/>
                                        <div className='w-full flex justify-between mt-4 md:justify-center'>
                                            <input type="checkbox" name='sendToEmail' className='w-5 h-5 outline-none border-none'/>
                                            <p className='text-sm md:ml-3'>Send downloaded template to email.</p>
                                        </div>
                                    </div>
                                    <Button type='submit' className='w-full min-h-[48px] bg-primaryMain rounded-lg font-bold text-background mt-7' children='Download' onClick={handleClick}/>
                            </div>                            
                        </Modal>
                    ):(
                        <Modal>
                            <div className='bg-textWhite top-[-250px] md:top-[-190px] md:left-[80%] lg:left-[150%] left-0 relative flex items-center flex-col min-w-[311px] rounded-sm py-4 px-4'>
                                <div className='flex w-full items-center justify-between'>
                                    <div className='w-[82%] bg-background h-1'>
                                        <div className='bg-successDark w-[65%] h-1'></div>
                                    </div>
                                    <div className='w-[14%] flex text-2xl justify-between'>
                                        <div>
                                            <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.98535 11.375C3.02535 11.375 0.610352 8.965 0.610352 6C0.610352 3.035 3.02535 0.625 5.98535 0.625C8.94535 0.625 11.3604 3.035 11.3604 6C11.3604 8.965 8.95035 11.375 5.98535 11.375ZM5.98535 1.375C3.43535 1.375 1.36035 3.45 1.36035 6C1.36035 8.55 3.43535 10.625 5.98535 10.625C8.53535 10.625 10.6104 8.55 10.6104 6C10.6104 3.45 8.53535 1.375 5.98535 1.375Z" fill="#292D32"/>
                                            <path d="M5.005 7.97539H4.355C3.895 7.97539 3.625 7.71039 3.625 7.26539V4.73539C3.625 4.29039 3.9 4.02539 4.355 4.02539H5C5.46 4.02539 5.73 4.29039 5.73 4.73539V7.26539C5.735 7.71039 5.46 7.97539 5.005 7.97539ZM4.375 7.22539H4.985V4.77539H4.38L4.375 7.22539Z" fill="#292D32"/>
                                            <path d="M7.64453 7.97539H6.99953C6.53953 7.97539 6.26953 7.71039 6.26953 7.26539V4.73539C6.26953 4.29039 6.54453 4.02539 6.99953 4.02539H7.64453C8.10453 4.02539 8.37453 4.29039 8.37453 4.73539V7.26539C8.37453 7.71039 8.09953 7.97539 7.64453 7.97539ZM7.01453 7.22539H7.62453V4.77539H7.01953L7.01453 7.22539Z" fill="#292D32"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.58469 7.78969C4.48969 7.78969 4.39469 7.75469 4.31969 7.67969C4.17469 7.53469 4.17469 7.29469 4.31969 7.14969L7.14969 4.31969C7.29469 4.17469 7.53469 4.17469 7.67969 4.31969C7.82469 4.46469 7.82469 4.70469 7.67969 4.84969L4.84969 7.67969C4.77969 7.75469 4.67969 7.78969 4.58469 7.78969Z" fill="#292D32"/>
                                            <path d="M7.41469 7.78969C7.31969 7.78969 7.22469 7.75469 7.14969 7.67969L4.31969 4.84969C4.17469 4.70469 4.17469 4.46469 4.31969 4.31969C4.46469 4.17469 4.70469 4.17469 4.84969 4.31969L7.67969 7.14969C7.82469 7.29469 7.82469 7.53469 7.67969 7.67969C7.60469 7.75469 7.50969 7.78969 7.41469 7.78969Z" fill="#292D32"/>
                                            <path d="M7.5 11.375H4.5C1.785 11.375 0.625 10.215 0.625 7.5V4.5C0.625 1.785 1.785 0.625 4.5 0.625H7.5C10.215 0.625 11.375 1.785 11.375 4.5V7.5C11.375 10.215 10.215 11.375 7.5 11.375ZM4.5 1.375C2.195 1.375 1.375 2.195 1.375 4.5V7.5C1.375 9.805 2.195 10.625 4.5 10.625H7.5C9.805 10.625 10.625 9.805 10.625 7.5V4.5C10.625 2.195 9.805 1.375 7.5 1.375H4.5Z" fill="#292D32"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center w-full pl-3 mt-5'>
                                    <div className='mr-3'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99967 15.1663H5.99967C2.37967 15.1663 0.833008 13.6197 0.833008 9.99967V5.99967C0.833008 2.37967 2.37967 0.833008 5.99967 0.833008H9.33301C9.60634 0.833008 9.83301 1.05967 9.83301 1.33301C9.83301 1.60634 9.60634 1.83301 9.33301 1.83301H5.99967C2.92634 1.83301 1.83301 2.92634 1.83301 5.99967V9.99967C1.83301 13.073 2.92634 14.1663 5.99967 14.1663H9.99967C13.073 14.1663 14.1663 13.073 14.1663 9.99967V6.66634C14.1663 6.39301 14.393 6.16634 14.6663 6.16634C14.9397 6.16634 15.1663 6.39301 15.1663 6.66634V9.99967C15.1663 13.6197 13.6197 15.1663 9.99967 15.1663Z" fill="#101010"/>
                                        <path d="M14.6663 7.16633H11.9997C9.71967 7.16633 8.83301 6.27967 8.83301 3.99967V1.333C8.83301 1.133 8.95301 0.946334 9.13967 0.873C9.32634 0.793 9.53967 0.839667 9.68634 0.979667L15.0197 6.313C15.1597 6.453 15.2063 6.673 15.1263 6.85967C15.0463 7.04633 14.8663 7.16633 14.6663 7.16633ZM9.83301 2.53967V3.99967C9.83301 5.71967 10.2797 6.16633 11.9997 6.16633H13.4597L9.83301 2.53967Z" fill="#101010"/>
                                        <path d="M8.66699 9.16699H4.66699C4.39366 9.16699 4.16699 8.94033 4.16699 8.66699C4.16699 8.39366 4.39366 8.16699 4.66699 8.16699H8.66699C8.94033 8.16699 9.16699 8.39366 9.16699 8.66699C9.16699 8.94033 8.94033 9.16699 8.66699 9.16699Z" fill="#101010"/>
                                        <path d="M7.33366 11.833H4.66699C4.39366 11.833 4.16699 11.6063 4.16699 11.333C4.16699 11.0597 4.39366 10.833 4.66699 10.833H7.33366C7.60699 10.833 7.83366 11.0597 7.83366 11.333C7.83366 11.6063 7.60699 11.833 7.33366 11.833Z" fill="#101010"/>
                                        </svg>
                                    </div>
                                    <p className='text-lg font-bold mr-3'>TEXT</p>
                                    <p className='text-grey400 text-sm'>Download in progress</p>
                                </div>
                            </div>
                        </Modal>
                    )
            )
        }


    
       

    </div>

    
  )
}

export default Preview