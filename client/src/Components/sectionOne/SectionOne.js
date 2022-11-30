import React,{useContext} from 'react'
import pic from './assets/pic.svg';


function SectionOne() {

  return (
    <div>
         <main className="flex items-center h-[368px] md:h-[100vh] bg-primaryDeep md:px-3 md:py-5 relative box-border overflow-hidden ">
        <div className="text relative md:bottom-[20%] flex flex-col md:px-[56px] md:-left-[5%] lg:left-0 lg:w-[80%]  lg:px-[50px] px-[2rem] h-[50vh] md:h-[auto]  md:w-[80%]  justify-center items-center auto z-10">
          <h1 className='font-bold w-[100%] text-textWhite md:text-[45px] lg:text-[52px] text-4xl  md:leading-[4rem] text-left'>Create a Job-Landing Cover Letter in seconds</h1>
          <p className='text-grey100 text-left w-[100%] text-[20px] mt-3 md:text-[25px] lg:text-[32px] '>100% Automated and Free</p>
        </div>
        <div className="shape hidden md:flex flex-auto">
            <img className=' w-[1440px] h-[440px] left-[200px] lg:left-[300px] bottom-[-100px] md:bottom-[-110px] lg:bottom-[-100px] absolute'src={pic} alt="" />
        </div>
      </main>

    </div>
  )
}

export default SectionOne