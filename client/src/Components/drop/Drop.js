import React from 'react'
import  first from '../sectionTwo/assets/first.svg'
import  second from '../sectionTwo/assets/second.svg'
import  third from '../sectionTwo/assets/third.svg'
import  fourth from '../sectionTwo/assets/fourth.svg'

function Drop() {
  return (
    <div className='mb-[40px] md:mb-[96px]'>
            <h2 className="text-textBody my-[45px] mt-[-2px]  md:my-[96px]  relative left-[10%] text-center md:left-[25%] font-bold text-2xl md:text-4xl w-[80%] md:w-[50%] ">Follow These Steps to Seamlessly Create Your Cover Letters</h2>
      <div className="additional_info_container grid grid-cols-2 gap-[20px] md:grid-cols-4 md:gap-[60px] text-left px-[6.8%]  ">
        <div className="additional_info  box-border bg-[#FF000033]  flex flex-col items-center  md:w-[272px] md:h-[260px] rounded-lg justify-center ">
          <img className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] relative right-[20px] md:right-[26%] mb-5 " src={first} alt="" />
          <span className="text-sm md:text-[24px] w-[70%] relative left-[-10px] leading-9 text-gray-900">Upload Your CV or Resume</span>
        </div>
        <div className="additional_info px-4 py-3  box-border bg-[#0652DD33] flex flex-col items-center md:w-[272px] md:h-[260px] rounded-lg justify-center">
        <img className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] relative right-[20px] md:right-[26%] mb-5 " src={second} alt="" />
          <span className="text-sm  md:text-[24px] w-[85%] leading-9 text-gray-900">Input Additional Information</span>
        </div>
        <div className="additional_info px-4 py-3  box-border bg-[#FFB80033] flex flex-col items-center md:w-[272px] md:h-[260px] rounded-lg justify-center">
        <img className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] relative right-[20px] md:right-[26%] mb-5 " src={third} alt="" />
          <span className="text-sm  md:text-[24px] w-[85%] leading-9 text-gray-900">Generate Your Cover Letter</span>
        </div>
        <div className="additional_info px-4 py-3  box-border bg-[#00FF9133] flex flex-col items-center gap-6 md:w-22 md:h-21 rounded-lg justify-center">
          <img className="w-[60px] md:w-[80px] h-[80px] md:h-[60px] relative right-[12%] md:right-[26%] top-[2px]  " src={fourth} alt="" />
          <span className="text-sm  md:text-[24px] w-[65%] leading-9 relative left-[-20px] text-gray-900">Download or Save</span>
        </div>
        
      </div>
    </div>
  )
}

export default Drop