import React from 'react'
import circle from './assets/circle.svg'
import scissor from './assets/scissor.svg'
import star from './assets/star.svg'
import pen from './assets/magicpen.svg'

function SectionThree() {

  return (
        <div className="div  md:px-[96px]  mt-10 mb-2">
           <main  className='  rounded-lg py-7 pb-[96px] relative bg-[#CDDCF8] '>
            {/* <div className=' absolute h-[100vh] w-[80vh] bg-red-900 ' /> */}
            <h2 className='text-2xl w-[80%] inline-block md:w-[100%] md:text-4xl font-bold text-center my-[50px] mt-[7px] md:my-[90px] text-textBody'>Benefits of Using Our Cover Letter Builder</h2>
            <div className="top grid md:px-[6rem] px-[7.5%]  md:grid-cols-2 grid-cols-1 gap-[60px] md:gap-[90px] ">
                <div className=" w-[327] h-[424px] md:w-[65vh] md:h-[320px] py-10 bg-textWhite text-left px-[50px] md:px-8 box-border flex flex-col rounded-[8px]">
                    <img src={circle} className='w-[80px] mb-5 md:mb-3 h-[80px]' alt="" />
                    <p className='font-bold  text-left text-[24px] text-textBody '>Make Your Job Search Easy</p>
                    <span className='text-[16px]   mt-3 '>Applying for multiple jobs means writing multiple cover letters. Our Cover Letter Builder makes it quick and easy to customize cover letters, regardless of how many you write.
                        
                    </span>
                </div>
                <div className=" w-[327] h-[424px] md:w-[65vh] md:h-[320px] py-10 bg-textWhite text-left px-[50px] md:px-8 box-border flex flex-col rounded-[8px]">
                    <img src={pen} className='w-[80px] mb-5 md:mb-3 h-[80px]' alt="" />
                    <p className='font-bold  text-left text-[24px] text-textBody '>We do the Writing For You</p>
                    <span className='text-[16px]  mt-3 '>Writer's block, begone! Our Cover Letter Builder does the work for you with professionally written text and keyword suggestions that get your letter written in minutes.
                        
                    </span>
                </div>
                <div className=" w-[327] h-[424px] md:w-[65vh] md:h-[320px] py-10 bg-textWhite text-left px-[50px] md:px-8 box-border flex flex-col rounded-[8px]">
                    <img src={scissor} className='w-[80px] mb-5 md:mb-3 h-[80px]' alt="" />
                    <p className='font-bold  text-left md:text-[24px] text-textBody '>Beautiful and Polished results</p>
                    <span className=' text-[16px]  mt-3 '>Our beautiful designed cover letter templates automatically handle the formatting as you wor. plus, our built-in spell-check feature helps ensure an error-free letter 
                        
                    </span>
                </div>
                <div className=" w-[327] h-[424px] md:w-[65vh] md:h-[320px] py-10 bg-textWhite text-left px-[50px] md:px-8 box-border flex flex-col rounded-[8px]">
                    <img src={star} className='w-[80px] mb-5 md:mb-3 h-[80px]' alt="" />
                    <p className='font-bold  text-left md:text-[24px] text-textBody '>Proven Success</p>
                    <span className=' text-[16px]  mt-3 '>Thousands of job seekers have successfully built cover letters using Aplicar Cover Letter Builder to get the jobs they want.
                        
                    </span>
                </div>
            
            </div>
        </main>
        </div>
  )
}

export default SectionThree
