import React from 'react'
import {Link} from 'react-router-dom'

const Forum = () => {
  const data = [
    {
        id: new Date().getTime().toString(),
        img: "./forum-images/forum/f1.png",
        title: 'The best work from home jobs in 2022',
        name: 'By Ida Peterson',
        date: 'November 14, 2022',
        content: "If long commutes and noisy office environments are something you'd like to avoid, getting a remote job is a good option. We've compiled a list of the best work from home jobs for you to consider. Over the past couple of years, many companies in the US and around the world have adopted work from home policies.",
        replies: 20,
        views: 322
    },
    {
        id: new Date().getTime().toString(),
        img: "./forum-images/forum/f2.png",
        title: 'How To Write a Good LinkedIn Summary: Examples and Tips',
        name: 'By Jess Chen',
        date: 'November 12, 2022',
        content: "The best LinkedIn summaries are different from career objectives. Use this key element of your profile to bolster your job hunt, and check out our LinkedIn summary examples. One of the most important tools for a job seeker is their LinkedIn profile. But without a great LinkedIn summary, a profile is bound to fall...",
        replies: 63,
        views: 512
    },
    {
        id: new Date().getTime().toString(),
        img: "./forum-images/forum/f3.png",
        title: 'Do I Need a Cover Letter? Are Cover Letters Necessary in 2022',
        name: 'By Bart Turczynski',
        date: 'November 12, 2022',
        content: "Are cover letters necessary? Do I need a cover letter? You send out dozens of applications to land a job interview. You spend hours tweaking your resume and looking for opportunities. If a cover letter is a waste of time, why bother. It’s 2022. Does anyone even read cover letters anymore,..",
        replies: 18,
        views: 103
    },
    {
        id: new Date().getTime().toString(),
        img: "./forum-images/forum/f4.png",
        title: 'How To Identify A Scam Interview Invitation',
        name: 'Br LaurelP',
        date: 'November 7, 2022',
        content: "I have seen so many People complaining and lamenting their ordeal in the hands of fake scam companies who invite people for interview only to introduce them to fake drug marketing business.I'm doing this not only because these companies waste people's time, energy and T-fair going to such interviews, but also because most of these scamm...",
        replies: 74,
        views: 827
    },
    {
        id: new Date().getTime().toString(),
        img: "./forum-images/forum/f4.png",
        title: '4 reasons WHY the global economy is slowing down',
        name: 'By LaurelP',
        date: 'November 7, 2022',
        content: "Global markets remained shaky due to growing concerns about a global economic slowdown. The economic activity continues to slow across advanced economies including the major economies like the USA and Europe is likely on the brink of a recession due to the war-induced energy crisis. Recently United Nations (UN) projected that glob...",
        replies: 23,
        views: 232
    },
    {
        id: new Date().getTime().toString(),
        img: "./forum-images/forum/f5.png",
        title: 'Soft Skills: Definition & Examples for Resumes',
        name: 'By Paul',
        date: 'November 6, 2022',
        content: "One of the most important tools for a job seeker is their LinkedIn profile. But without a great LinkedIn summary, a profile is bound to fall flat.  A well-written, engaging LinkedIn summary tells people who you are and where you plan on taking your career. If it’s compelling enough, it has the power to attract recruiters, land interviews, and even convince a cus...",
        replies: 53,
        views: 436
    },
    {
        id: new Date().getTime().toString(),
        img: "./forum-images/forum/f6.png",
        title: 'How to Answer “Why Do You Want to Work Here?”',
        name: 'By Ida Pettersson',
        date: 'November 3, 2022',
        content: "Got a job interview lined up? “Why do you want to work here?” is a popular interview question most employers ask. Here’s how to answer it and convince your interviewer that you’re the right person for the job. Fortunately, with some preparation, this interview question is a good opportunity to highlight your enthusiasm for the job and show the in...",
        replies: 173,
        views: 627
    },
    {
        id: new Date().getTime().toString(),
        img: "./forum-images/forum/f7.png",
        title: 'Quick Career Upgrade Tip for 2022',
        name: 'By Lite16nl',
        date: 'November 2, 2022',
        content: "1. Identify your career strengths and weaknesses.<br /><br />2. Start skills training in the area of your weaknesses for improvement...",
        replies: 7,
        views: 46
    },
  ]
  return <>
    <main className='bg-[#f2f2f7] mx-0 my-0 py-5 px-10 md:px-16'>
        <div className='flex flex-col gap-5 md:flex-row md:justify-between border-b border-[#cad0dd] pb-8 mb-8'>
            <p className='text-[#101010] text-2xl md:text-[40px] font-bold'>Discussion Forum</p>
            <Link to='/forum/post' className='btn h-[48px] w-[164px] btnPrimary '>Create new post</Link>
        </div>
        <div className='mb-3 mx-0 md:mx-12 flex gap-10 text-base md:text-2xl text-[#6d6d6d]'>
            <div className='basis-4/5 px-0'>
                <p>Topics</p>
            </div>
            <div className='hidden md:flex justify-center gap-16 basis-1/5'>
                <p className='basis-1/2 text-center'>Replies</p>
                <p className='basis-1/2'>Views</p>
            </div>
        </div>
        <div>
            {
                data.map(detail => {
                    return <Link key={detail.id} to='/forum/thread'>
                        <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-auto py-3 px-5 md:px-12 flex flex-col gap-5 mb-5'>
                            <div className='flex gap-3 items-center relative'>
                                <div>
                                    <img className='rounded-full w-12 md:w-16 object-cover' src={detail.img} alt={detail.name} />
                                </div>
                                <div>
                                    <div className='capitalize text-base md:text-2xl font-semibold'>
                                        <p>{detail.title}</p>
                                    </div>
                                    <div className='absolute left-0 md:static flex flex-col md:flex-row md:gap-5 text-[#bababa] text-sm md:text-base'>
                                        <p>{detail.name}</p>
                                        <p>{detail.date}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-5 mt-8 md:mt-0 mb-5'>
                                <div className='basis-4/5'>
                                    <p className='text-base text-[#6d6d6d]'>
                                        {detail.content}
                                    </p>
                                </div>
                                <div className='flex md:gap-28 gap-8 justify-start md:justify-center basis-1/5'>
                                    <p className='flex flex-col text-base md:text-2xl text-[#0544B8]'>
                                        <span>{detail.replies}</span>
                                        <span className='text-[#6d6d6d] md:hidden'>Replies</span>
                                    </p>
                                    <p className='flex flex-col text-base md:text-2xl text-[#6d6d6d]'>
                                        <span>{detail.views}</span>
                                        <span className='md:hidden'>Views</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
  
        <div className='border-[#0544B8] md:border bg-none md:bg-[#fcfcfc] rounded-lg h-auto md:h-44 py-3 flex flex-col items-center gap-5 mb-5'>
            <div className='hidden md:block pb-5 border-b w-full text-center border-[#CAD0DD]'>
                <p>1 - 8 of 45 Discussions</p>
            </div>
            <div className='flex gap-5'>
                <button className='border-r border-[#bababa] px-5 btn text-disabledDisabled'> <span className='align-middle'>&lt;Previous</span></button>

                <div className='hidden md:flex gap-8'>
                    <button className='btn btnSecondary'>1</button>
                    <button className='btn text-primaryMain'>2</button>
                    <button className='btn text-primaryMain'>3</button>
                    <button className='btn text-primaryMain'>4</button>
                    <button className='btn text-primaryMain'>5</button>
                    <button className='btn text-primaryMain'>6</button>
                    <button className='btn text-primaryMain'>7</button>
                    <button className='btn text-primaryMain'>8</button>
                </div>

                <button className='px-5 border-l border-[#bababa] text-primaryMain btn'><span className='align-middle'>Next &gt;</span></button>
            </div>
        </div>
    </main>
  </>
}

export default Forum