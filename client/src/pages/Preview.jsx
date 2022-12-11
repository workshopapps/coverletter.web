import Modal from "../Components/Ui/Modal";
import React, { useState, useEffect } from "react";
import Button from "../Components/Ui/Button";
import { useGlobalContext } from "../context/context";
import lockedCover_1 from "../Assets/preview_1.png";
import lockedCover_2 from "../Assets/preview_2.png";
import CoverLetter from "../Components/Ui/CoverLetter";
import notePad from "../Assets/notepad.svg";
import cancelIcon from "../Assets/cancel.svg";
import leftArrowIcon from "../Assets/leftArrow.svg";
import BigLeftArrowIcon from "../Assets/bigLeftArrow";
import BigRightArrowIcon from "../Assets/bigRightArrow";
import PDFtemplate1 from "../Components/pdf-templates/pdfTemplate1";
import { downloadPdf, downloadDOCX } from "../Utils/download-util";
import { convertToTxt } from "../Utils/txtDownload";
import Loader from "../Assets/Loader.png";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Preview = () => {
	const {
		openModal,
		isModalOpen,
		closeModal,
		coverLetter: data,
		userData,
		user,
	} = useGlobalContext();

	// logic for the modal
	const [firstModal, setFirstModal] = useState(false);
	const [dType, setDtype] = useState("doc");
	const [download, setDownload] = useState(false);
	const [spin, setSpin] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);
	const [isLoading, setIsloading] = useState(false);
	const [sendToMail, setSendToMail] = useState(false);

	const [touchPosition, setTouchPosition] = useState(null);
	const [mouseClickPosiition, setMouseClickPosition] = useState(null);

	const [title, setTitle] = useState("Your Cover Letter is Ready");


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
		setFirstModal(true);
		const save = setTimeout(() => {
			if (dType === "pdf") {
				downloadPdf(
					"pdf-coverletter-target",
					sendToMail,
					userData?.email || user.email
				);
			} else if (dType === "doc") {
				//ADD YOUR FUNCTION TO DOWNLOAD DOC HERE
				try {
					downloadDOCX(
						data,
						userData,
						sendToMail,
						userData?.email || user.email
					);
				} catch (error) {
					console.error(error);
				}
			} else if (dType === "text") {
				convertToTxt(sendToMail, userData?.email || user.email);
			} else {
				//TELL USER TO PICK ONE OF THE 3 OPTIONS
			}
			setDtype(null);
			setTitle("Your Cover letter has been downloaded.");
		}, 500);
		const close = setTimeout(() => {
			setDownload(false);
			setFirstModal(false);
			closeModal();
		}, 4000);

		// setFirstModal(!firstModal);
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

	let displayLeft = true;
	let displayRight = true;

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

	const navigate = useNavigate();

	const saveToProfile = async () => {
		if (user && user?.token && user?.userId) {
			setIsloading(true);
			const info = { ...userData, user_id: user.userId };
			try {
				const resp = await axios.post(
					`https://api.coverly.hng.tech/api/v1/saveCoverletter`,

					info,
					{
						headers: {
							Authorization: `Bearer ${user.token}`,
						},
					}
				);

				toast.success(`saved successfully`);
			} catch (err) {
				toast.error("something went wrong,try again");
				setIsloading(false);
				return;
			}
		} else {
			setIsloading(true);
			toast.error("You must be signed in");
			setTimeout(() => {
				navigate("/signin");
			}, 2000);
		}
	};

	return (
		<div className={`bg-background pt-6 pb-36 overflow-x-hidden relative`}>
			<div className={`${download && "opacity-0"}`}>
				<span
					onClick={() => navigate(-1)}
					className="flex items-center px-7 lg:px-40 lg:mt-6 cursor-pointer"
				>
					<img
						src={leftArrowIcon}
						alt="left arrow"
						className="md:w-[50px]"
					/>
					<p className="ml-1 text-sm font-bold md:text-xl">Back</p>
				</span>
				<div className="w-full flex justify-center mt-5 px-7 md:mt-11">
					<p className="font-bold text-2xl w-[65%] text-center md:text-3xl md:w-[40%] lg:text-5xl lg:w-[40%]">
						{title}
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
						<Link to="/pricing">
							<img
								src={lockedCover_1}
								alt="cover"
								className=" cursor-pointer mt-10 flex rounded-lg justify-center items-center bg-primaryLightest drop-shadow-lg min-w-[295px] h-[300px] min-h-[300px] sm:min-h-[485px] sm:min-w-[400px]"
							/>
						</Link>
						<div className="md:mr-[-25px] flex ">
							<BigLeftArrowIcon className="w-[15] h-[15px]md:w-[32px] md:h-[30px]" />
						</div>
						<div
							className="flex justify-center items-center w-[80%] bg-primaryLightest drop-shadow-lg  min-w-[268px] min-h-[372px] sm:min-h-[660px] rounded-lg md:w-auto sm:min-w-[476px] md:scale-[90%]"
							role="button"
						>
							<CoverLetter />
						</div>
						<div className="md:ml-[-25px]">
							<BigRightArrowIcon className="w-[15] h-[15px]md:w-[32px] md:h-[30px]" />
						</div>
						<Link to="/pricing">
							<img
								src={lockedCover_2}
								alt="cover"
								className="cursor-pointer mt-10 flex rounded-lg justify-center items-center bg-primaryLightest drop-shadow-lg min-w-[295px] h-[300px] min-h-[300px] sm:min-h-[485px] sm:min-w-[400px]"
							/>
						</Link>
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
							className="bg-background border-2 border-primaryMain min-w-[140px] w-[48%] min-h-[48px] rounded-lg text-primaryMain font-bold disabled:opacity-50 disabled:cursor-not-allowed"
							children="Save to profile"
							onClick={saveToProfile}
							disabled={isLoading}
						/>
					</div>
				</div>
				<PDFtemplate1 />
			</div>

			{isModalOpen &&
				(!firstModal && !download ? (
					<Modal>
						<div className="w-[350px] md:w-[450px] bg-background flex items-center flex-col min-w-[311px] min-h-[376px] rounded-md py-11 px-9">
							<div className="w-full flex justify-end mb-4">
								<div onClick={closeModal} role="button">
									{<img src={cancelIcon} alt="pause" />}
								</div>
							</div>
							<p className="font-bold">Select Download Option</p>
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
								{dType !== "pdf" && (
									<div className="w-full flex justify-between mt-4 md:justify-center">
										<input
											type="checkbox"
											name="sendToMail"
											className="w-5 h-5 outline-none border-none"
											checked={sendToMail}
											onClick={() => {
												setSendToMail(!sendToMail);
											}}
											readOnly
										/>
										<p className="text-sm md:ml-3">
											Send downloaded template to email.
										</p>
									</div>
								)}
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
					<div className="bg-textWhite top-1/2 left-0 flex items-start flex-col w-screen h-screen rounded-sm py-12 px-4 absolute">
						<div className="flex flex-col w-full h-[30rem] items-center justify-start">
							<div className=" h-2/3 flex flex-col justify-between items-center">
								<p className="font-bold text-2xl leading-9 text-[#252b42] text-center">
									Downloading Cover letter...
								</p>
								<div>
									<div className="mb-5">
										{<img src={Loader} alt="pause" />}
									</div>
									<p className="text-[15px] font-normal leading-normal text-[#73747d]">
										Loading...
									</p>
								</div>
							</div>
							<div className="h-1/3 w-full flex items-end justify-center">
								<button className="btn btnPrimary w-full md:w-1/2 lg:w-1/3 xl:w-[28%]">
									Cancel Download
								</button>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default Preview;
