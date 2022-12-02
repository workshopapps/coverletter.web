import Modal from "../Components/Ui/Modal";
import React, { useState, useEffect } from "react";
import Button from "../Components/Ui/Button";
import { useGlobalContext } from "../context/context";
import lockedCover_1 from "../Assets/cover_letter_full_2.jpg";
import lockedCover_2 from "../Assets/cover_letter_full_3.jpg";
import CoverLetter from "../Components/Ui/CoverLetter";
import notePad from "../Assets/notepad.svg";
import pauseIcon from "../Assets/pause.svg";
import cancelIcon from "../Assets/cancel.svg";
import leftArrowIcon from "../Assets/leftArrow.svg";
import BigLeftArrowIcon from "../Assets/bigLeftArrow";
import PDFtemplate1 from "../Components/pdf-templates/pdfTemplate1";
import { downloadPdf, downloadDOCX } from "../Utils/download-util";
import { convertToTxt } from "../Utils/txtDownload";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/// import { useNavigate } from "react-router-dom";

const Preview = () => {
	const {
		openModal,
		isModalOpen,
		closeModal,
		coverLetter: data,
		userData,
	} = useGlobalContext();

	// logic for the modal
	const [firstModal, setFirstModal] = useState(false);
	const [dType, setDtype] = useState("");
	const [download, setDownload] = useState(false);
	const [spin, setSpin] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	const [touchPosition, setTouchPosition] = useState(null);
	const [mouseClickPosiition, setMouseClickPosition] = useState(null);

	// window.addEventListener("resize", (e) => {
	// 	if (e.target.screen.width > 900) {
	// 		setIterate(0);
	// 		setStyle({
	// 			transform: `translateX(${iterate}px)`,
	// 		});
	// 	}
	// });

	//handles click start event
	const handleMouseDown = (e) => {
		const mouseDown = e.clientX;
		setMouseClickPosition(mouseDown);
	};

	const handleMouseMove = (e) => {
		const mouseDown = mouseClickPosiition;

		if (mouseDown === null) {
			return;
		}

		const currentClick = e.clientX;
		const dragDiff = mouseDown - currentClick;

		if (dragDiff > 5) {
			clickRight();
		}
		if (dragDiff < -5) {
			clickLeft();
		}

		setMouseClickPosition(null);
	};
	//handles touch start event
	const handleTouchStart = (e) => {
		const touchDown = e.touches[0].clientX;
		setTouchPosition(touchDown);
	};

	//decides whether or not div should move left or right based on difference between swipe positions
	const handleTouchMove = (e) => {
		const touchDown = touchPosition;

		if (touchDown === null) {
			return;
		}

		const currentTouch = e.touches[0].clientX;
		const swipeDiff = touchDown - currentTouch;

		if (swipeDiff > 5) {
			clickRight();
		}

		if (swipeDiff < -5) {
			clickLeft();
		}

		setTouchPosition(null);
	};

	const handleClick = () => {
		// INITIATE DOWNLOAD STATE ON CLICK
		setDownload(true);
		setTimeout(() => {
			if (dType === "pdf") {
				downloadPdf("pdf-coverletter-target");
			} else if (dType === "doc") {
				//ADD YOUR FUNCTION TO DOWNLOAD DOC HERE
				downloadDOCX(data, userData);
			} else if (dType === "text") {
				convertToTxt();
			} else {
				//TELL USER TO PICK ONE OF THE 3 OPTIONS
			}
			setDtype(null);
			closeModal();
		}, 500);
		// setFirstModal(!firstModal);
	};

	useEffect(() => {
		setFirstModal(false);
		const downloadTime = setTimeout(() => setDownload(false), 2000);

		const spinTime = setInterval(() => setSpin(!spin), 2000);

		return () => {
			clearInterval(spinTime);
			clearTimeout(downloadTime);
		};
	}, [openModal]);

	// redirect on click cv
	// const navigate = useNavigate();
	const coverRedirect = () => {
		// navigate(`/cover letter`);
	};

	// get the width of the page and work on the mobile nav
	function getWindowSize() {
		const { innerWidth } = window;
		return { innerWidth };
	}
	const [windowSize, setWindowSize] = useState(getWindowSize());
	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);
	let mobile;
	windowSize.innerWidth <= 950 ? (mobile = true) : (mobile = false);

	// get the cover letter container so as to apply the translateX property
	const [iterate, setIterate] = useState(0);
	const [style, setStyle] = useState({
		transform: `translateX(${iterate}px)`,
	});

	const clickLeft = () => {
		if (iterate === 1) {
			return;
		}
		setIterate(iterate + 1);
	};

	const clickRight = () => {
		if (iterate === -1) {
			return;
		}
		setIterate(iterate - 1);
	};

	var displayLeft = true;
	var displayRight = true;

	useEffect(() => {
		setStyle({ transform: `translateX(${iterate * 280}px)` });
	}, [iterate]);

	if (!mobile) {
		displayLeft = false;
		displayRight = false;
		// setIterate(0);
	} else if (mobile && iterate >= 1) {
		displayLeft = false;
		displayRight = true;
	} else if (mobile && iterate <= -1) {
		displayRight = false;
		displayLeft = true;
	}

	return (
		<div className={`bg-background pt-6 pb-36 overflow-x-hidden relative`}>
			<div className={`${download && "opacity-50"}`}>
				<div className="flex items-center px-7 lg:px-40 lg:mt-6">
					<img src={leftArrowIcon} alt="left arrow" />
					<p className="ml-1 text-sm font-bold">Back</p>
				</div>
				<div className="w-full flex justify-center mt-5 px-7 md:mt-11">
					<p className="font-bold text-2xl w-[65%] text-center md:text-3xl md:w-[40%] lg:text-5xl lg:w-[40%]">
						Your Cover Letter is Ready!
					</p>
				</div>
				<div className="w-screen md:overflow-x-hidden relative mt-10 md:mt-20">
					<div
						className="testing1 flex relative w-full justify-center md:justify-center items-center transition-all duration-200 "
						style={
							mobile ? style : { transform: "translateX" + "0px" }
						}
						onMouseDown={handleMouseDown}
						onMouseMove={handleMouseMove}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						// onTouchMove={(e)}
					>
						<img
							src={lockedCover_1}
							alt="cover"
							className=" mt-10 flex rounded-lg justify-center items-center bg-primaryLightest drop-shadow-lg min-w-[295px] h-[300px] min-h-[300px] sm:min-h-[485px] sm:min-w-[400px]"
						/>
						<div className="md:mr-[-25px]">
							<BigLeftArrowIcon className="w-[15] h-[15px]md:w-[32px] md:h-[30px]" />
						</div>
						<div
							className="flex justify-center items-center w-[80%] bg-primaryLightest drop-shadow-lg  min-w-[268px] min-h-[372px] sm:min-h-[660px] rounded-lg md:w-auto sm:min-w-[476px] md:scale-[90%]"
							role="button"
							onClick={coverRedirect}
						>
							<CoverLetter />
						</div>
						<div className="md:ml-[-25px]">
							<BigLeftArrowIcon className="w-[15] h-[15px]md:w-[32px] md:h-[30px]" />
						</div>
						<img
							src={lockedCover_2}
							alt="cover"
							className=" mt-10 flex rounded-lg justify-center items-center bg-primaryLightest drop-shadow-lg min-w-[295px] h-[300px] min-h-[300px] sm:min-h-[485px] sm:min-w-[400px]"
						/>
					</div>
				</div>

				<div className="w-100 flex justify-center">
					<div className="w-full mt-5 flex justify-between px-7 max-w-[450px]  md:w-[55%]">
						<Button
							className="bg-primaryMain min-w-[140px] w-[48%] min-h-[48px] rounded-lg text-background font-bold"
							children="Download"
							onClick={openModal}
						/>
						<Button
							className="bg-background border-2 border-primaryMain min-w-[140px] w-[48%] min-h-[48px] rounded-lg text-primaryMain font-bold"
							children="Save to profile"
						/>
					</div>
				</div>
				<PDFtemplate1 />

				{isModalOpen &&
					(!firstModal ? (
						<Modal>
							<div className="w-[350px] md:w-[450px] bg-background flex items-center flex-col min-w-[311px] min-h-[376px] rounded-md py-11 px-9">
								<div className="w-full flex justify-end mb-4">
									<div onClick={closeModal} role="button">
										{<img src={cancelIcon} alt="pause" />}
									</div>
								</div>
								<p className="font-bold">
									Select Download Option
								</p>
								<div className="w-full">
									<div className="flex justify-between w-full mt-7">
										<div className=" flex items-center">
											{
												<img
													src={notePad}
													alt="notepad icon"
												/>
											}
											<p className="ml-3">PDF</p>
										</div>

										<div
											className="rounded-xl cursor-pointer flex justify-center items-center bg-background border-2 border-primaryMain w-6 h-6"
											onClick={() => setDtype("pdf")}
										>
											<div
												className={
													dType === "pdf"
														? "w-3 h-3 rounded-lg border-primaryMain bg-primaryMain border-2"
														: "w-3 h-3 rounded-lg border-primaryMain border-2"
												}
											></div>
										</div>
									</div>
									<hr className="w-full bg-stokeLight mt-2 border-none h-[1px]" />
								</div>
								<div className="w-full">
									<div className="flex justify-between w-full mt-7">
										<div className=" flex items-center">
											{
												<img
													src={notePad}
													alt="notepad icon"
												/>
											}
											<p className="ml-3">DOC</p>
										</div>
										<div
											className="rounded-xl cursor-pointer flex justify-center items-center bg-background border-2 border-primaryMain w-6 h-6"
											onClick={() => setDtype("doc")}
										>
											<div
												className={
													dType === "doc"
														? "w-3 h-3 rounded-lg border-primaryMain bg-primaryMain border-2"
														: "w-3 h-3 rounded-lg border-primaryMain border-2"
												}
											></div>
										</div>
									</div>
									<hr className="w-full bg-stokeLight mt-2 border-none h-[1px]" />
								</div>
								<div className="w-full">
									<div className="flex justify-between w-full mt-7">
										<div className=" flex items-center">
											{
												<img
													src={notePad}
													alt="notepad icon"
												/>
											}
											<p className="ml-3">TEXT</p>
										</div>
										<div
											className="rounded-xl cursor-pointer flex justify-center items-center bg-background border-2 border-primaryMain w-6 h-6"
											onClick={() => setDtype("text")}
										>
											<div
												className={
													dType === "text"
														? "w-3 h-3 rounded-lg border-primaryMain bg-primaryMain border-2"
														: "w-3 h-3 rounded-lg border-primaryMain border-2"
												}
											></div>
										</div>
									</div>
									<hr className="w-full bg-stokeLight mt-2 border-none h-[1px]" />
									<div className="w-full flex justify-between mt-4 md:justify-center">
										<input
											type="checkbox"
											name="sendToEmail"
											className="w-5 h-5 outline-none border-none"
										/>
										<p className="text-sm md:ml-3">
											Send downloaded template to email.
										</p>
									</div>
								</div>
								<Button
									type="submit"
									className="w-full min-h-[48px] bg-primaryMain rounded-lg font-bold text-background mt-7"
									children="Download"
									disabled={!dType}
									onClick={handleClick}
								/>
							</div>
						</Modal>
					) : (
						<Modal>
							<div className="bg-textWhite top-[-250px] md:top-[-190px] md:left-[80%] lg:left-[150%] left-0 relative flex items-center flex-col min-w-[311px] rounded-sm py-4 px-4">
								<div className="flex w-full items-center justify-between">
									<div className="w-[82%] bg-background h-1">
										<div className="bg-successDark w-[65%] h-1"></div>
									</div>
									<div className="w-[14%] flex text-2xl justify-between">
										<div>
											{
												<img
													src={pauseIcon}
													alt="pause"
												/>
											}
										</div>
										<div>
											{
												<img
													src={cancelIcon}
													alt="cancel"
												/>
											}
										</div>
									</div>
								</div>
								<div className="flex items-center w-full pl-3 mt-5">
									<div className="mr-3">
										{<img src={notePad} alt="pause" />}
									</div>
									<p className="text-lg font-bold mr-3">
										TEXT
									</p>
									<p className="text-grey400 text-sm">
										Download in progress
									</p>
								</div>
							</div>
						</Modal>
					))}
			</div>

			{download && (
				<div
					className={`absolute top-0 left-0 w-full h-[250%] bg-overlay z-50 flex justify-center items-center ${
						download && "opacity-100"
					}`}
				>
					<div className="fixed w-25% h-25% top-[37.5%] left-[50%-30px] flex flex-col gap-5">
						<FontAwesomeIcon
							className={`text-textWhite text-[120px] ${
								spin && "rotate-[360deg] duration-[2000ms]"
							}`}
							icon={faSpinner}
						/>
						<p className="text-textWhite text-[60px] font-bold">
							DOWNLOADING
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Preview;
