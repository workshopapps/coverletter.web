import React from 'react'
import { useEffect, useState } from "react";
import { ReactComponent as ArrowBlue } from "../Assets/arrow-up-blue.svg";

export default function MbScrollToTopBtn() {
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
            <ArrowBlue
                className="fixed bottom-[40px] right-[5px] md:hidden"
                onClick={scrollUp}
            />
		)}
    </div>
  )
}
