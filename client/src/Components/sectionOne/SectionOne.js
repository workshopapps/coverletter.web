import React from 'react'
import pic from './assets/pic.svg';


function SectionOne() {

  return (
    <div>
         <main className="flex h-[418px] md:h-[50vh] lg:h-[100vh] bg-primaryDeep lg:px-3 lg:py-5 relative box-border overflow-hidden ">
        <div className="text relative bottom-[15%] lg:bottom-[20%] flex flex-col lg:px-[96px] px-[2rem] h-[50vh] lg:h-[auto]  lg:w-[80%]  justify-center items-center auto">
          <h1 className='font-bold w-[100%] text-textWhite lg-w-[] lg:text-[56px] md:text-[50px] text-4xl  lg:leading-[4rem] leading-[3rem] text-left lg:pr-[200px]'>Create a Job-Landing Cover Letter in seconds</h1>
          <p className='text-grey100 text-left w-[100%] text-[20px] mt-3 lg:text-[40px] '>100% Automated and Free</p>
        </div>
        <div className="shape hidden md:flex flex-auto">
            <img className=' w-[1440px] h-[440px] left-[200px] bottom-[-100px] absolute'src={pic} alt="hero" />
        </div>
      </main>

    </div>
  )
}

export default SectionOne