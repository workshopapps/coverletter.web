import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const Forum = () => {
  let {name} = useParams()
  return <>
    <main className='bg-[#f2f2f7] mx-0 my-0 py-5 px-16'>
        <div className='flex justify-between border-b border-[#cad0dd] pb-8 mb-8'>
            <p className='text-[#101010] text-[40px] font-bold'>Discussion Forum</p>
            <Link to='/forum/post' className='btn h-[48px] btnPrimary '>Create new post</Link>
        </div>
        <div className='mb-3 mx-12 flex gap-10 text-2xl text-[#6d6d6d]'>
            <div className='basis-4/5'>
                <p>Topics</p>
            </div>
            <div className='flex justify-center gap-16 basis-1/5'>
                <p className='basis-1/2 text-center'>Replies</p>
                <p className='basis-1/2'>Views</p>
            </div>
        </div>
        <div>
            <Link to='/forum/thread'>
                <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-48 py-3 px-12 flex flex-col gap-5 mb-5'>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <img className='rounded-full w-16' src="./forum-images/f1.png" alt="" />
                        </div>
                        <div>
                            <div className='capitalize text-2xl font-semibold'>
                                The best work from home jobs in 2022
                            </div>
                            <div className='flex gap-5 text-five text-base'>
                                <p>By Ida Peterson</p>
                                <p>November 14, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 mb-5'>
                        <div className='basis-4/5'>
                            <p className='text-base text-six'>
                                If long commutes and noisy office environments are something you'd like to avoid, getting a remote job is a good option. We've compiled a list of the best work from home jobs for you to consider. Over the past couple of years, many companies in the US and around the world have adopted work from home policies.
                            </p>
                        </div>
                        <div className='flex gap-28 justify-center basis-1/5'>
                            <p className='text-2xl text-four'>20</p>
                            <p className='text-2xl text-six'>322</p>
                        </div>
                    </div>
                </div>
            </Link>
            <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-48 py-3 px-12 flex flex-col gap-5 mb-5'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='rounded-full w-16' src="./forum-images/f1.png" alt="" />
                    </div>
                    <div>
                        <div className='capitalize text-2xl font-semibold'>
                            The best work from home jobs in 2022
                        </div>
                        <div className='flex gap-5 text-five text-base'>
                            <p>By Ida Peterson</p>
                            <p>November 14, 2022</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 mb-5'>
                    <div className='basis-4/5'>
                        <p className='text-base text-six'>
                            If long commutes and noisy office environments are something you'd like to avoid, getting a remote job is a good option. We've compiled a list of the best work from home jobs for you to consider. Over the past couple of years, many companies in the US and around the world have adopted work from home policies.
                        </p>
                    </div>
                    <div className='flex gap-28 justify-center basis-1/5'>
                        <p className='text-2xl text-four'>20</p>
                        <p className='text-2xl text-six'>322</p>
                    </div>
                </div>
            </div>
            <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-48 py-3 px-12 flex flex-col gap-5 mb-5'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='rounded-full w-16' src="./forum-images/f1.png" alt="" />
                    </div>
                    <div>
                        <div className='capitalize text-2xl font-semibold'>
                            The best work from home jobs in 2022
                        </div>
                        <div className='flex gap-5 text-five text-base'>
                            <p>By Ida Peterson</p>
                            <p>November 14, 2022</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 mb-5'>
                    <div className='basis-4/5'>
                        <p className='text-base text-six'>
                            If long commutes and noisy office environments are something you'd like to avoid, getting a remote job is a good option. We've compiled a list of the best work from home jobs for you to consider. Over the past couple of years, many companies in the US and around the world have adopted work from home policies.
                        </p>
                    </div>
                    <div className='flex gap-28 justify-center basis-1/5'>
                        <p className='text-2xl text-four'>20</p>
                        <p className='text-2xl text-six'>322</p>
                    </div>
                </div>
            </div>
            <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-48 py-3 px-12 flex flex-col gap-5 mb-5'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='rounded-full w-16' src="./forum-images/f1.png" alt="" />
                    </div>
                    <div>
                        <div className='capitalize text-2xl font-semibold'>
                            The best work from home jobs in 2022
                        </div>
                        <div className='flex gap-5 text-five text-base'>
                            <p>By Ida Peterson</p>
                            <p>November 14, 2022</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 mb-5'>
                    <div className='basis-4/5'>
                        <p className='text-base text-six'>
                            If long commutes and noisy office environments are something you'd like to avoid, getting a remote job is a good option. We've compiled a list of the best work from home jobs for you to consider. Over the past couple of years, many companies in the US and around the world have adopted work from home policies.
                        </p>
                    </div>
                    <div className='flex gap-28 justify-center basis-1/5'>
                        <p className='text-2xl text-four'>20</p>
                        <p className='text-2xl text-six'>322</p>
                    </div>
                </div>
            </div>
            <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-48 py-3 px-12 flex flex-col gap-5 mb-5'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='rounded-full w-16' src="./forum-images/f1.png" alt="" />
                    </div>
                    <div>
                        <div className='capitalize text-2xl font-semibold'>
                            The best work from home jobs in 2022
                        </div>
                        <div className='flex gap-5 text-five text-base'>
                            <p>By Ida Peterson</p>
                            <p>November 14, 2022</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 mb-5'>
                    <div className='basis-4/5'>
                        <p className='text-base text-six'>
                            If long commutes and noisy office environments are something you'd like to avoid, getting a remote job is a good option. We've compiled a list of the best work from home jobs for you to consider. Over the past couple of years, many companies in the US and around the world have adopted work from home policies.
                        </p>
                    </div>
                    <div className='flex gap-28 justify-center basis-1/5'>
                        <p className='text-2xl text-four'>20</p>
                        <p className='text-2xl text-six'>322</p>
                    </div>
                </div>
            </div>
            <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-48 py-3 px-12 flex flex-col gap-5 mb-5'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='rounded-full w-16' src="./forum-images/f1.png" alt="" />
                    </div>
                    <div>
                        <div className='capitalize text-2xl font-semibold'>
                            The best work from home jobs in 2022
                        </div>
                        <div className='flex gap-5 text-five text-base'>
                            <p>By Ida Peterson</p>
                            <p>November 14, 2022</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 mb-5'>
                    <div className='basis-4/5'>
                        <p className='text-base text-six'>
                            If long commutes and noisy office environments are something you'd like to avoid, getting a remote job is a good option. We've compiled a list of the best work from home jobs for you to consider. Over the past couple of years, many companies in the US and around the world have adopted work from home policies.
                        </p>
                    </div>
                    <div className='flex gap-28 justify-center basis-1/5'>
                        <p className='text-2xl text-four'>20</p>
                        <p className='text-2xl text-six'>322</p>
                    </div>
                </div>
            </div>
            <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-48 py-3 px-12 flex flex-col gap-5 mb-5'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='rounded-full w-16' src="./forum-images/f1.png" alt="" />
                    </div>
                    <div>
                        <div className='capitalize text-2xl font-semibold'>
                            The best work from home jobs in 2022
                        </div>
                        <div className='flex gap-5 text-five text-base'>
                            <p>By Ida Peterson</p>
                            <p>November 14, 2022</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 mb-5'>
                    <div className='basis-4/5'>
                        <p className='text-base text-six'>
                            If long commutes and noisy office environments are something you'd like to avoid, getting a remote job is a good option. We've compiled a list of the best work from home jobs for you to consider. Over the past couple of years, many companies in the US and around the world have adopted work from home policies.
                        </p>
                    </div>
                    <div className='flex gap-28 justify-center basis-1/5'>
                        <p className='text-2xl text-four'>20</p>
                        <p className='text-2xl text-six'>322</p>
                    </div>
                </div>
            </div>
            <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-48 py-3 px-12 flex flex-col gap-5 mb-5'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='rounded-full w-16' src="./forum-images/f1.png" alt="" />
                    </div>
                    <div>
                        <div className='capitalize text-2xl font-semibold'>
                            The best work from home jobs in 2022
                        </div>
                        <div className='flex gap-5 text-five text-base'>
                            <p>By Ida Peterson</p>
                            <p>November 14, 2022</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 mb-5'>
                    <div className='basis-4/5'>
                        <p className='text-base text-six'>
                            If long commutes and noisy office environments are something you'd like to avoid, getting a remote job is a good option. We've compiled a list of the best work from home jobs for you to consider. Over the past couple of years, many companies in the US and around the world have adopted work from home policies.
                        </p>
                    </div>
                    <div className='flex gap-28 justify-center basis-1/5'>
                        <p className='text-2xl text-four'>20</p>
                        <p className='text-2xl text-six'>322</p>
                    </div>
                </div>
            </div>
            <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-44 py-3 flex flex-col items-center gap-5 mb-5'>
                <div className='pb-5 border-b w-full text-center border-[#CAD0DD]'>
                    <p>1 - 8 of 45 Discussions</p>
                </div>
                <div className='flex gap-5'>
                    <button className='border-r border-[#bababa] px-5'><FaChevronLeft className='inline-block' /> <span className='align-middle'>Previous</span></button>

                    <div className='flex gap-8'>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>7</button>
                        <button>8</button>
                    </div>

                    <button className='px-5 border-l border-[#bababa]'><span className='align-middle'>Next</span> <FaChevronRight className='inline-block' /></button>
                </div>
            </div>
        </div>
    </main>
  </>
}

export default Forum