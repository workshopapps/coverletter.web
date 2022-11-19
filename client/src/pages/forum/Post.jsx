import React from 'react'

const Post = () => {
  return <>
    <main className='bg-[#f2f2f7] mx-0 my-0 py-5 px-5 md:px-16'>
        <div className='text-2xl md:text-[40px] font-bold mb-10 md:mb-5'>
            <p>Create a new post</p>
        </div>
        <div className='flex gap-3 items-center'>
            <div>
                <img className='rounded-full w-12 sm:w-16 object-cover' src="../forum-images/reply/r7.png" alt="" />
            </div>
            <div>
                <div className='capitalize text-base md:text-2xl font-semibold'>
                    <p>Kreativ Mind</p>
                </div>
                <div className='flex gap-5 text-five text-sm md:text-base'>
                    <p className='text-[#bababa]'>November 2, 2022</p>
                </div>
            </div>
        </div>
        <form className='mt-5' method='post'>
            <div className='flex flex-col gap-3 h-[400px] bg-[#fcfcfc]'>
                <input className='border-none outline-none appearance-none bg-opacity-0 px-6 pt-3' type="text" placeholder='Title' />
                <div className='w-full h-px bg-[#CAD0DD]'></div>
                <textarea rows='14' className='appearance-none outline-none resize-none bg-opacity-0 px-6' name="" id="" placeholder='Type text here' ></textarea>
            </div>
            <div className='w-full text-right mt-3'>
                <button type="submit" className='btn btnPrimary w-[170px] text-base font-bold'>Post</button>
            </div>
        </form>
    </main>
  </>
}

export default Post
