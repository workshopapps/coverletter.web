import React from 'react'
import { CVUpload } from '../Components/UploadCV/Icons.js'

function UploadCV() {
    return (
        <div className='bg-[#03296f11] py-8'>
            <div className="w-[95%] md:w-[90%] mx-auto">
                <div className='bg-white md:w-10/12 mx-auto h-max rounded-xl py-[5em] px-3 md:px-8 md:my-[4em] flex flex-col md:flex-row'>
                    <div className='w-full md:w-5/12'>
                        <h1 className='my-4 md:mt-[2em] text-xl md:text-[2em] font-semibold leading-[130%]'>
                            Upload your CV/Resume to make a Cover Letter
                        </h1>

                        <p className='text-[#6D6D6D] my-4 md:text-[1.3em] '>
                            Maximum file size is 5MB, and you can only upload a maxium of 1 file per upload session
                        </p>
                    </div>

                    <div className='w-full md:w-7/12 border-2 border-dashed py-[5em] rounded-xl'>
                        <label htmlFor="fileUpload" className='items-center flex flex-col gap-4 py-8'>
                            <div>
                                <CVUpload />
                            </div>
                            <p className='text-primaryMain text-2xl font-semibold'>Drag & Drop top Upload</p>
                            <p className='text-[#6D6D6D]'>File Supported: PDF</p>
                            <p className='font-bold '>Or Browse</p>

                            <input type="file" id='fileUpload'  className='hidden'/>
                        </label>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default UploadCV