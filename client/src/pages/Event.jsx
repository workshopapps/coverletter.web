import React, { useState } from "react";
import EventsList from "../Layouts/EventsList.jsx";
import Calendar from "react-calendar";
import arrow_down from "../Assets/arrow_down.svg";
import searchico from "../Assets/searchico.svg";
import event_img1 from "../Assets/event_img1.png";
import event_img2 from "../Assets/event_img2.png";
import event_img3 from "../Assets/event_img3.png";
import event_img4 from "../Assets/event_img4.png";
import event_img5 from "../Assets/event_img5.png";
import event_img6 from "../Assets/event_img6.png";

const Event = () => {
	const [dateState, setDateState] = useState(true);
	const [cateState, setCateState] = useState(false);
	const [value, onChange] = useState(new Date());

	const handleDate = () => setDateState(!dateState);
	const handleCate = () => setCateState(!cateState);

	return (
		<section className="bg-eventshome pt-12 pb-20">
			<div className="content relative max-w-screen-2xl m-auto py-1 md:w-[87%] w-[89%] lw:w-[1250px] ">
				<h1 className="text-center font-semibold md:font-bold text-2xl md:text-3xl lg:text-5xl mb-12">
					View our Scheduled Events here.
				</h1>
				<div
					id="events_page"
					className="flex gap-12 max-[716px]:flex-col"
				>
					<div
						id="left"
						className="flex-[0.4] max-[940px]:flex-[0.3]"
					>
						<div className="flex flex-col gap-10">
							{/* Search */}
							<div id="search" className="">
								<label for="email" className="relative block">
									<img
										className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3"
										src={searchico}
										alt=""
									/>
									<input
										type="text"
										name="search"
										placeholder="Search"
										className="form-input w-full h-12 py-3 px-10 bg-eventshome border border-searchbd rounded-lg placeholder:text-black"
									/>
								</label>
							</div>

							<div id="filter_search_header" className="">
								<p className="font-semibold text-2xl text-grey800">
									Filters your search
								</p>
							</div>

							{/* Date */}
							<div id="date" className="flex flex-col gap-2">
								<div
									onClick={handleDate}
									className="flex cursor-pointer gap-4"
								>
									<span className="font-bold md:font-semibold text-xl md:text-2xl text-grey800">
										Date
									</span>
									<img src={arrow_down} alt="" />
								</div>
								<div
									className={`${
										dateState
											? "flex flex-col gap-2"
											: "hidden"
									}`}
								>
									<p className="text-selectdesc">
										Select any date
									</p>
									<div className="day  text-grey400 bg-white py-3 pl-3 rounded-r-lg relative">
										<div className="w-[6px] rounded-full h-full bg-primaryMain absolute left-0 top-0">
											&nbsp;
										</div>
										<span className="ml-2">Today</span>
									</div>
									<div className="day  text-grey400">
										<span className="mb-3 block">
											Tomorrow
										</span>
									</div>
									<div className="day  text-grey400">
										<span>This weekend</span>
									</div>
								</div>
							</div>

							{/* Category */}

							<div id="category" className="flex flex-col gap-2">
								<div
									onClick={handleCate}
									className="flex cursor-pointer gap-4"
								>
									<span className="mr-6 font-bold md:font-semibold text-xl md:text-2xl text-grey800">
										Category
									</span>
									<img src={arrow_down} alt="" />
								</div>
								<div
									className={`${
										cateState
											? "flex flex-col gap-2"
											: "hidden"
									}`}
								>
									<p className="text-selectdesc ">
										Select any Category
									</p>
									<div className="day  text-grey400 bg-white py-3 pl-3 rounded-r-lg relative">
										<div className="w-[6px] rounded-full h-full bg-primaryMain absolute left-0 top-0">
											&nbsp;
										</div>
										<span className="ml-2">Convention</span>
									</div>
									<div className="cate-item  text-grey400">
										<span className="block mb-3">
											Seminar
										</span>
									</div>
									<div className="cate-item  text-grey400">
										<span>Workshop</span>
									</div>
								</div>
							</div>

							{/* calendar */}

							<div id="calender" className="flex flex-col gap-4">
								<div id="the-calender" className="">
									<Calendar
										className="text-center bg-white p-4 rounded-lg"
										onChange={onChange}
										value={value}
									/>
								</div>
								<p className="text-grey400 font-bold md:font-normal">
									Click on date to see scheduled event for
									that day.
								</p>
							</div>
						</div>
					</div>
					<div
						id="right"
						className="flex-[0.6] max-[940px]:flex-[0.7] "
					>
						<h1 className="text-grey800 font-bold text-2xl mb-6">
							Upcoming Events
						</h1>
						<EventsList
							event={{
								img: event_img1,
								headline: "Coverly Career Con...",
								place: "Event Hall 1, Shelton Hotel Abuja FCT.",
								time: "Tuesday, Nov 22, 10:00am",
							}}
						/>
						<EventsList
							event={{
								img: event_img2,
								headline: "Applicar Luanch Par...",
								place: "Event Hall 1, Shelton Hotel Abuja FCT.",
								time: "Tuesday, Nov 29, 09:00am",
							}}
						/>
						<EventsList
							event={{
								img: event_img3,
								headline: "Beta Watch Party...",
								place: "Event Hall 1, Shelton Hotel Abuja FCT.",
								time: "Friday, Dec 02, 10:00am",
							}}
						/>
						<EventsList
							event={{
								img: event_img4,
								headline: "Lesson for Your Now...",
								place: "Event Hall 1, Shelton Hotel Abuja FCT.",
								time: "Tuesday, Dec 06, 10:00am",
							}}
						/>
						<EventsList
							event={{
								img: event_img5,
								headline: "The importance of ...",
								place: "Event Hall 1, Shelton Hotel Abuja FCT.",
								time: "Thursday, Dec 08, 10:00am",
							}}
						/>
						<EventsList
							event={{
								img: event_img6,
								headline: "Networking for Intro...",
								place: "Event Hall 1, Shelton Hotel Abuja FCT.",
								time: "Wednesday, Dec 14, 10:00am",
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Event;
