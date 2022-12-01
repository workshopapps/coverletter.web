import React from "react";

function SectionFive() {
  return (
    <div>
      <div className="ads my-20 bg-primaryDeep px-[2%] md:rounded-lg  lg:mx-[96px] flex flex-col py-9 justify-center items-center ">
        <p className="text-grey100 text-[40px] mb-4 md:mb-5">Try it out !</p>
        <h1 className="text-3xl text-center leading-[50px] md-leading-[70px] text-textWhite md:text-[56px] mb-4 md:mb-5  font-bold ">
          Create Your Free Cover letter
        </h1>
        <p className="text-grey100  font-[300] text-[14px] text-center md:text-[24px] mt-2">
          You can download to your device straight away.
        </p>
        <a className="px-[32px] py-[12px] mt-[25px] text-[14px] md:text-[16px] text-textWhite bg-primaryMain hover:bg-primaryDark font-semibold rounded-lg" href="#upload_section"> Create Cover Letter</a>
      </div>
    </div>
  );
}

export default SectionFive;
