import React from "react";
import { Link} from 'react-router-dom'
import SectionThree from "../sectionThree/SectionThree";
import SectionTwo from "../sectionTwo/SectionTwo";

function SectionFive() {
  
  

  return (
    <div>
      <div className="ads w-full my-20 bg-primaryDeep md:rounded-lg flex flex-col py-9 justify-center items-center ">
        <p className="text-grey100 w-4/5 text-center text-[40px] mb-5">Try it out !</p>
        <h1 className="text-3xl text-textWhite md:text-[56px] mb-5 font-bold leading-normal w-4/5 text-center">
          Create Your Free Cover letter
        </h1>
        <p className="text-grey100 w-4/5 text-center font-[300] text-[14px] md:text-[24px] mt-2 mb-5">
          You can download to your device straight away.
        </p>
        <a className="px-[32px] py-[12px] mt-[25px] text-[14px] md:text-[16px] text-textWhite bg-primaryMain  font-semibold rounded-lg" href="#upload_section"> Create Cover Letter</a>
      </div>
    </div>
  );
}

export default SectionFive