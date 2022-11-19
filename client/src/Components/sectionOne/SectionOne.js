import React,{useContext} from 'react'
import pic from './assets/pic.svg';


function SectionOne() {

  return (
    <div>
         <main className="flex h-[368px] md:h-[100vh] bg-primaryDeep md:px-3 md:py-5 relative box-border overflow-hidden ">
        <div className="text relative md:bottom-[20%] flex flex-col md:px-[96px] px-[2rem] h-[50vh] md:h-[auto]  md:w-[80%]  justify-center items-center auto">
          <h1 className='font-bold w-[100%] text-textWhite md-w-[] md:text-[56px] text-4xl  md:leading-[4rem] text-left md:pr-[200px]   text-white'>Create a Job-Landing Cover Letter in seconds</h1>
          <p className='text-grey100 text-left w-[100%] text-[20px] mt-3 md:text-[40px] '>100% Automated and Free</p>
        </div>
        <div className="shape hidden md:flex flex-auto">
            <img className=' w-[1440px] h-[440px] left-[200px] bottom-[-100px] absolute'src={pic} alt="" />
        </div>
      </main>

    </div>
  )
}

export default SectionOne