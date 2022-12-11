import React from 'react'
import { useEffect, useState } from "react";
import { ReactComponent as ArrowWhite } from "../Assets/arrow-up-white.svg";

export default function MbScrollToTopBtn() {
    // show text on hover
	const [showBTT, setShowBTT] = useState(false);
	const handleMouseOver = () => {
		setShowBTT(true);
	}
	const handleMouseOut = () => {
		setShowBTT(false);
	}

	// add scroll to top feature
	const [displayArrow, setDisplayArrow] = useState(false);

	const scrollUp = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const listenToScroll = () => {
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			setDisplayArrow(true);
		} else {
			setDisplayArrow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);


  return (
    <div>
        {displayArrow && (
            <div className="flex gap-4 items-center p-4 fixed bottom-[40px] right-[5px] bg-primaryDeep border-primaryDeep rounded-lg cursor-pointer z-40" onClick={scrollUp} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className="text-white">
                    <ArrowWhite className=""/>
                </div>
                <div className={`text-white ${showBTT ? "hidden md:block" : "hidden"}`}>
                    Back to Top
                </div>
            </div>
        )}
    </div>
  )
}
