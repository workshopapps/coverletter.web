import React from 'react'
import { Link } from 'react-router-dom'
import { TrashIcon, CVIcon, DownloadIcon, DownloadAlt, ViewIcon } from './Icons'

function Upload({ resume }) {
  return (
    <div className='flex gap-4 my-8 border-[#CAD0DD] border-t pt-4 md:pt-8 items-center'>
      <div className='md:w-1/12'>
        <CVIcon />
      </div>

      <div className='w-5/12 md:w-6/12'>
        <p className='font-bold text-[1.2em]'>
          <span>{resume.firstName}</span>
          <span className='hidden md:inline'> {resume.lastName}</span>
          <span> {resume.extension}</span>
        </p>
      </div>

      <div className='w-3/12 md:w-2/12'>
        <p className='flex justify-between md:justify-evenly items-center '>
          {/* Desktop */}
          <TrashIcon />
          <span className='hidden md:inline font-semibold text-primaryMain underline underline-offset-4'>View</span>

          {/* Mobile */}
          <span className='inline md:hidden'> <ViewIcon /> </span>
        </p>
      </div>

      {/* Download Responive */}
      <div className='w-1/12 md:w-3/12 '>
        {/* Mobile */}
        <Link className='md:hidden'><DownloadAlt /></Link>

        <Link className='items-center gap-4 rounded-xl border-2 border-primaryMain justify-center py-4 px-6  hidden md:flex'>

          {/* Desktop */}
          <p className='text-primaryMain'>Download</p>
          <DownloadIcon className='' />
        </Link>
      </div>
    </div>
  )
}

export default Upload