import React from 'react'
import Drop from '../../Components/drop/Drop'
import SectionFive from '../../Components/sectionFive/SectionFive'
import SectionFour from '../../Components/sectionFour/SectionFour'
import SectionOne from '../../Components/sectionOne/SectionOne'
import SectionThree from '../../Components/sectionThree/SectionThree'
import SectionTwo from '../../Components/sectionTwo/SectionTwo'

function Upload() {
  return (
    <div>
        <div className="upload bg-background font-manrope">
            <SectionOne />
            <SectionTwo />
            <Drop />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </div>
    </div>
  )
}

export default Upload