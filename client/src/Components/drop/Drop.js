import React from 'react'
import  first from '../sectionTwo/assets/first.svg'
import  second from '../sectionTwo/assets/second.svg'
import  third from '../sectionTwo/assets/third.svg'
import  fourth from '../sectionTwo/assets/fourth.svg'

function Drop() {
  return (
    <div className='mb-[40px] md:mb-[96px]'>
            <h2 className="text-textBody my-[45px] mt-[-2px]  md:my-[96px]  relative left-[10%] text-center md:left-[25%] font-bold text-2xl md:text-4xl w-[80%] md:w-[50%] ">Follow These Steps to Seamlessly Create Your Cover Letters</h2>
      <div className="additional_info_container grid grid-cols-2 gap-[20px] lg:grid-cols-4 md:gap-[60px] lg:gap-5 text-left px-[6.8%]  ">
        <div className="additional_info  box-border bg-[#FF000033] flex flex-col items-start col-span-1  md:h-[260px] rounded-lg justify-center px-5 py-3">
          <img className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] mb-5 " src={first} alt="" />
          <span className="text-sm md:text-[24px] leading-9 text-gray-900">Upload Your CV or Resume</span>
        </div>
        <div className="additional_info box-border bg-[#0652DD33] flex flex-col items-start col-span-1  md:h-[260px] rounded-lg justify-center px-5 py-3">
        <img className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] mb-5 " src={second} alt="" />
          <span className="text-sm  md:text-[24px] leading-9 text-gray-900">Input Additional Information</span>
        </div>
        <div className="additional_info box-border bg-[#FFB80033] flex flex-col items-start col-span-1  md:h-[260px] rounded-lg justify-center px-5 py-3">
        <img className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] mb-5 " src={third} alt="" />
          <span className="text-sm  md:text-[24px] leading-9 text-gray-900">Generate Your Cover Letter</span>
        </div>
        <div className="additional_info box-border bg-[#00FF9133] flex flex-col items-start col-span-1  md:h-[260px] rounded-lg justify-center px-5 py-3">
          <img className="w-[60px] md:w-[80px] h-[80px] md:h-[60px] mb-5" src={fourth} alt="" />
          <span className="text-sm  md:text-[24px] leading-9 text-gray-900">Download or Save</span>
        </div>
        
      </div>
    </div>
  )
}

export default Drop