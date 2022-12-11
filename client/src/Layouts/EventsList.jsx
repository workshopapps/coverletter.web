import React from "react";
import Button from "../Components/Ui/Button";
import ModalLight from "../Components/Ui/ModalLight";
import { useGlobalContext } from "../context/context";
import Close from "../Assets/close-event.svg";

export default function EventsList({ event }) {
	const { openModal, isModalOpen, closeModal } = useGlobalContext();

	return (
		<div
			id="events"
			className="flex md:flex-row flex-col w-full md:h-28 lg:h-40 mb-12 bg-white rounded-lg "
		>
			<img
				className="rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
				src={event.img}
				alt=""
			/>
			<div className="truncate p-5 lg:p-0 flex justify-between items-center">
				<div className="truncate pr-2 md:py-2 lg:py-5 lg:px-6">
					<p className="truncate text-grey800 font-semibold lg:text-2xl">
						{event.headline}
					</p>
					<span className="md:block md:truncate text-grey400 text-sm md:text-xs lg:text-base font-bold md:font-normal">
						{event.place}
					</span>
					<span className="md:block hidden truncate text-grey400 text-sm md:text-xs lg:text-base font-bold md:font-normal">
						{event.time}
					</span>
				</div>
				<div
					className="w-20 h-12 lg:mr-4 flex justify-center items-center bg-btnbg rounded-lg cursor-pointer"
					onClick={openModal}
				>
					<button className="text-grey400 md:text-xs lg:text-base">
						Free
					</button>
				</div>
			</div>
			{isModalOpen && (
				<ModalLight>
					<div className="bg-textWhite px-[60px] pt-[100px] pb-[50px] rounded-lg max-w-[840px] relative flex flex-col flex-start max-[790px]:mt-20 max-[790px]:rounded-[20px] max-[790px]:px-6 max-[790px]:overflow-y-scroll max-[790px]:h-screen">
						{/* // create a close button */}
						<Button
							className="absolute top-[32px] right-[60px]"
							onClick={closeModal}
						>
							<img src={Close} alt="" className="	" />
						</Button>
						<div className="modal-header flex items-start justify-between max-[790px]:flex-col max-[790px]:gap-6">
							{/* image */}
							<img
								className="rounded-lg max-[834px]:mr-[24px] max-[790px]:mr-[0] max-[834px]:w-full"
								src={event.img}
								alt={event.headline}
							/>
							<div className="modal-header-details flex flex-col gap-6 ">
								{/* title */}
								<h2 className="text-2xl font-bold text-grey800">
									{event.headline}
								</h2>
								{/* place */}
								<div className="flex gap-10">
									<p className="text-header text-sm font-bold">
										Venue:
									</p>
									<p className="text-grey400 text-sm font-bold">
										{event.place}
									</p>
								</div>

								{/* Date */}
								<div className="flex gap-10">
									<p className="text-header text-sm font-bold">
										Date:
									</p>
									<p className="text-grey400 text-sm font-bold">
										{/* {event.date} */}
										Tuesday, Nov 22, 2022.
									</p>
								</div>
								{/* time */}
								<div className="flex gap-10">
									<p className="text-header text-sm font-bold">
										Time:
									</p>
									<div className="text-grey400 text-sm font-bold ">
										<div className="flex items-start  justify-between gap-10 max-[508px]:flex-col">
											<p>{event.date}</p>
											<div
												className="flex px-[20px]
													mt-[-30px] py-[12px] justify-center items-center bg-btnbg rounded-lg cursor-pointer self-start"
												onClick={openModal}
											>
												<button className="text-grey400 md:text-xs lg:text-base ">
													Free
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="modal-body">
							{/* description */}
							<div className="flex flex-col gap-6 mt-10">
								<p
									className="text-grey400 text-sm font-bold
										line-clamp-3
											leading-[30px]
											text-justify"
								>
									{event.description}
								</p>
							</div>
						</div>
						<div className="text-center mt-[60px]">
							<Button
								className="btnPrimary w-44 px-8 py-4 rounded-lg font-bold text-base"
								type="secondary "
								onClick={closeModal}
							>
								Ok
							</Button>
						</div>
					</div>
				</ModalLight>
			)}
		</div>
	);
}
