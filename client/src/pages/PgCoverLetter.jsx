import React from 'react'
import CoverLetter from '../Components/Ui/CoverLetter'

const PgCoverLetter = () => {
  return (
    <div className='fixed z-40 h-screen mg:h-[600px] flex items-center justify-center top-0 w-screen bg-textWhite py-3'>
        <div className='max-w-[400px] lg:max-w-[530px] '>
            <CoverLetter/> 
        </div>
    </div>
  )
}

export default PgCoverLetter