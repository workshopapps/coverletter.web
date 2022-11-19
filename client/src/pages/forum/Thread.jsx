import React, { useState, useRef } from 'react'

const response = [
    {
        id: 1,
        img: "../forum-images/reply/r1.png",
        name: "ecolime",
        date: 'November 2, 2022',
        content: "Dear Op,Thanks for the tips.However, when last did you come across job adverts for NPA, NNPC, CBN, NDIC, FIRS, DPR, EFCC, etc... ??It may interest you to know that people retire from these organisations and are always replaced by young folks on a daily basis.Career upgrade tips are useless for the vast majority because the few opportunities in public sector have been cannibalised and hijack by people in power for their children.The SMEs that should actually be the major employers of Labour have limited room for expansion due to crazy and thoughtless government policies by these same cannibals. Thus unable to absorb jobless graduates in large numbers.Shebi na when you get job you fit dey upgrade your career na?"
    },
    {
        id: 2,
        img: "../forum-images/reply/r2.png",
        name: "Tobicjucks18",
        date: 'November 2, 2022',
        content: "85 percent of what you listed above @OP can only be archived when your alone and have no dependent..I mean one can only do this if he or she has a sponsor, or someone seeing to his or her bill's.Majority of youth's in Nigeria strive for survival and sadly enough alot never attains their potential."
    },
    {
        id: 3,
        img: "../forum-images/reply/r3.png",
        name: "johnUbah",
        date: 'November 2, 2022',
        content: "Some of the smartest people are not among the richest.Personality is too abstract, some of the richest men have shitty personality (eg Steve Jobs and Jeff Bezos) while some are cool (Gates, Buffet)."
    },
    {
        id: 4,
        img: "../forum-images/reply/r4.png",
        name: "Tobicjucks18",
        date: 'November 2, 2022',
        content: "Check the list well; He also talk about skill to get the job and how to position yourself for jobs. It's not all about government job. One can create his own job and be self-employed. You can also work remotely if you got the skill sets that will put you in the employer spot light. Above all, God is the source of help for all mankind!!"
    },
    {
        id: 5,
        img: "../forum-images/reply/r5.png",
        name: "HRsweetness24",
        date: 'November 2, 2022',
        content: "Networking is very key, skiils acquisition is paramount. Infact all the points are on point. You however missed a very very critical point which is consistency."
    },
    {
        id: 6,
        img: "../forum-images/reply/r6.png",
        name: "Madridstar007",
        date: 'November 2, 2022',
        content: "10. Ruthless efficiency in execution and completion of tasks. If they have to cut off social media, cut of certain people, cut of social activities, stay up all night, meet people/collaborators who can support, etc, they will do it. They are not emotional about things that wouldnt add value. There is a certain ruthless streak in highly successful people.Most people dont know this and when you tell them, they say \"it is harsh, no na...\". \n11. Consistency. Excellence isnt what you do once, but maintaining a high standard and performance repeatedly. This is what highly successful people do. It takes ruthlessness, it takes sacrifice, it takes being tunnel-visioned."
    },
]

const Thread = () => {
  const [data, setData] = useState(response)
  const [newData, setNewData] = useState(data)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let value = {id: newData.length, img: '../forum-images/reply/r7.png', date: `${new Date().getDay()} ${new Date().getMonth()}, ${new Date().getFullYear()}`, content: message}
    setNewData([...newData, value])
    setMessage('')
  }
  return <>
    <main className='bg-[#f2f2f7] mx-0 my-0 py-5 px-5 md:px-16'>
        <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-auto py-3 px-5 md:px-12 flex flex-col gap-5 mb-5 relative'>
            <div className='flex gap-3 items-center'>
                <div>
                    <img className='rounded-full w-12 object-cover md:w-16' src="../forum-images/forum/f1.png" alt="" />
                </div>
                <div>
                    <div className='capitalize text-base md:text-2xl font-semibold'>
                        <p>Quick Career Upgrade Tip for 2022</p>
                    </div>
                    <div className='flex flex-col md:flex-row md:gap-5 text-[#bababa] md:text-base text-sm absolute left-5 top-20 md:static'>
                        <p>By Lite16nl</p>
                        <p>November 2, 2022</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 mt-10 md:mt-0 mb-5'>
                <div className='basis-4/5'>
                    <p className='text-sm md:text-base flex flex-col gap-3'>
                        <span>
                            1. Identify your career strengths and weaknesses.
                        </span>
                        <span>
                            2. Start skills training in the areas of your weaknesses for improvement.
                        </span>
                        <span>
                            3. Search for internship programs for practical industry experience.
                        </span>
                        <span>
                            4. Update your CV with newly acquired skills and experience.
                        </span>
                        <span>
                            5. Get your online presence ready (Facebook and LinkedIn).
                        </span>
                        <span>
                            6. Identify your ideal employers.
                        </span>
                        <span>
                            7. Engage in strategic networking by joining Facebook Groups and LinkedIn.
                        </span>
                        <span>
                            8. Practice interview questions & answers related to your field.
                        </span>
                        <span>
                            9. Proceed to Job Hunt (offline and online) such as using Indeed or Joobie
                        </span>
                    </p>
                </div>
                <div className='flex gap-8 justify-between md:justify-start items-center basis-1/5'>
                    <div className='text-center'>
                        <p className='md:text-base text-sm font-bold'>20</p>
                        <p className='text-sm md:text-base'>Replies</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm md:text-base font-bold'>20</p>
                        <p className='text-sm md:text-base'>Views</p>
                    </div>
                    <div>
                        <img src="../forum-images/heart.png" alt="" />
                    </div>
                    <div>
                        <button className='btn btnPrimary h-12'>Reply</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='flex items-center mb-3'>
            <p>All replies ({newData.length})</p>
            <img src='../forum-images/arrow-down.png' alt='' />
        </div>
        {
            newData.map(data => {
                return <>        
                    <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-auto py-3 px-5 md:px-12 flex flex-col gap-5 mb-5'>
                        <div className='flex gap-3 items-center'>
                            <div>
                                <img className='rounded-full w-12 md:w-16 object-cover' src={data.img} alt={data.name} />
                            </div>
                            <div>
                                <div className='capitalize text-base md:text-2xl font-semibold'>
                                    <p className='text-[#101010]'>{data.name}</p>
                                </div>
                                <div className='flex gap-5 text-[#bababa] text-sm md:text-base'>
                                    <p>{data.date}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 mb-5'>
                            <div className='basis-4/5'>
                                <p className='text-sm md:text-base text-six'>
                                    {data.content}
                                </p>
                            </div>
                            <div className='flex gap-8 justify-start items-center basis-1/5'>
                                <div>
                                    <faHeart />
                                </div>
                                <div>
                                    <button className='btn btnPrimary h-12'>Quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            })
        }

        <div className='border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-auto py-3 px-5 md:px-12 flex flex-col gap-5 mb-5'>
            <div className='flex gap-3 items-center'>
                <div>
                    <img className='rounded-full object-cover w-12 md:w-16' src="../forum-images/reply/r3.png" alt="" />
                </div>
                <div>
                    <div className='capitalize text-base md:text-2xl font-semibold text-[#101010]'>
                        <p>johnUbah</p>
                    </div>
                    <div className='flex gap-5 text-[#bababa] text-sm md:stext-base'>
                        <p>November 2, 2022</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 mb-5'>
                <div className='basis-4/5'>
                    <p className='text-sm md:text-base text-six'>
                        10. Ruthless efficiency in execution and completion of tasks. If they have to cut off social media, cut of certain people, cut of social activities, stay up all night, meet people/collaborators who can support, etc, they will do it. They are not emotional about things that wouldnt add value. There is a certain ruthless streak in highly successful people.Most people dont know this and when you tell them, they say "it is harsh, no na..."
                        <br /><br />
                        11. Consistency. Excellence isnt what you do once, but maintaining a high standard and performance repeatedly. This is what highly successful people do. It takes ruthlessness, it takes sacrifice, it takes being tunnel-visioned.
                    </p>
                </div>
                <div className='h-16 w-[2px] ml-8 bg-[#bababa]'></div>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='rounded-full object-cover w-12 sm:w-16' src="../forum-images/reply/r7.png" alt="" />
                    </div>
                    <div>
                        <div className='capitalize text-base md:text-2xl font-semibold text-[#101010]'>
                            <p>Kreativ Mind</p>
                        </div>
                        <div className='flex gap-5 text-[#bababa] text-sm md:text-base'>
                            <p>November 2, 2022</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <textarea required className='w-full p-3 outline-none resize-none' rows="10" placeholder='Type text here' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        </div>
                        <div className='flex gap-8 justify-end items-center '>
                                <button type='submit' className='btn btnPrimary h-12'>Reply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
  </>
}

export default Thread
