import React from 'react'
import CoverLetter from '../Components/Ui/CoverLetter'

const PgCoverLetter = () => {
  return (
    <div className='fixed z-40 max-h-[screen] mg:h-[600px] flex items-center justify-center top-0 w-screen bg-textWhite py-3'>
        <div className='max-w-[400px] md:scale-[80%] flex lg:max-w-[530px] h-[95%] '>
            <CoverLetter/> 
        </div>
    </div>
  )
}

export default PgCoverLetter