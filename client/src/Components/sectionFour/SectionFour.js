import React from 'react'
import male from './assets/male.jpg'
import arrow from './assets/arrow.svg'

function SectionFour() {
  
  return (
    <div>
        <main className='md:px-[96px] flex flex-col justify-center  px-5'>
            <h2 className='text-2xl md:text-4xl text-center font-bold py-10 md:py-[96px] text-textBody'>What Others Are Saying...</h2>

            <div className="container grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-5 lg:gap-10">
                <div className="review w-[90%] h-252px md:h-[372px] text-left bg-textWhite flex flex-col p-5 lg:p-10 rounded-lg border-[1px] border-primaryLight ">
                    <p className='text-[18px] text-textBody' >I am impressed by the strength of the AI on this page and I think it's the best choice on the market</p>
                    <img  className='w-12 my-[20px] md:mt-[28%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-textBody text-[16px]'>Developer Alamadrid</p>
                    <span className='text-[14px] text-textBody ' >CEO, Aloy Tech</span>
                </div>
                <div className="review w-[90%] text-textBody md:h-[372px] text-left bg-textWhite flex flex-col p-5 lg:p-10 rounded-lg border-[1px] border-primaryLight ">
                    <p className='text-[18px] text-textBody'>There are so many options and I love the templates options. This makes constructing cover letters easy.</p>
                    <img  className='w-12 my-[20px] md:mt-[28%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-[16px]'>Designer Bolu</p>
                    <span className='text-[14px] text-textBody ' >CEO, Bolu Arts</span>
                </div>
                <div className="review w-[90%] text-textBody md:h-[372px] text-left bg-textWhite flex flex-col p-5 lg:p-10 rounded-lg border-[1px] border-primaryLight ">
                    <p className='text-[18px] text-textBody'>Really helpful with the format template that is provided and when you pair your resume with it makes it easier</p>
                    <img  className='w-12 my-[20px] md:mt-[28%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-textBody text-[16px]'>Designer Bamifemi</p>
                    <span className='text-[14px] text-textBody ' >CEO, Bamifemi Arts</span>
                </div>
                <div className="review w-[90%] text-textBody md:h-[372px] text-left bg-textWhite flex flex-col p-5 lg:p-10 rounded-lg border-[1px] border-primaryLight ">
                    <p className='text-[18px] text-textBody'>Quick and easy way to create a professional cover letter and allows for my own personal touch to the cover letter</p>
                    <img  className='w-12 my-[20px] md:mt-[28%] mb-3  h-12 rounded-full' src={male} alt="" />
                    <p className='font-bold text-[16px]'>Mentor Mark</p>
                    <span className='text-[14px] ' >Demi-god of HNG</span>
                </div>
            </div>
            <div className="a flex justify-center">
            <button className='px-3 py-3 mt-[85px] text-[14px] lg:text-base flex items-center justify-center w-[90%] md:w-[50%] lg:w-[40%] text-primaryMain border-[1.5px] border-solid border-blue-700 font-semibold rounded-lg gap-3'>
                <span>Read Full Customer Stories</span>
                <img className='h-[28px] w-[28px]' src={arrow}  alt="" />
                 </button>
            </div>
        </main>
    </div>
  )
}

export default SectionFour