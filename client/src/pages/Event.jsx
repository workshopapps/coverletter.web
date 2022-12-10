import React, { useEffect, useState } from "react";
import EventsList from "../Layouts/EventsList.jsx";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import arrow_down from "../Assets/arrow_down.svg";
import searchico from "../Assets/searchico.svg";
import { eventCategories, eventData } from "../Constants/eventData.js";
import Button from "../Components/Ui/Button.jsx";

const Event = () => {
	const [dateState, setDateState] = useState(true);
	const [cateState, setCateState] = useState(true);
	const [date, setDate] = useState(null);
	const [search, setSearch] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");
	const [filteredEvents, setFilteredEvents] = useState([]);

	const handleDate = () => setDateState(!dateState);
	const handleCate = () => setCateState(!cateState);

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const handleActiveCategory = (e) => {
		setActiveCategory(e);
		filterByCategory(e);
	};

	const filterBySearch = () => {
		return eventData.filter((event) =>
			event.headline.toLowerCase().includes(search)
		);
	};

	const filterByDate = (date) => {
		if (date) {
			const firstDate = new Date(date[0]);
			const secondDate = new Date(date[1]);
			const minDate = Math.min(firstDate, secondDate);
			const maxDate = Math.max(firstDate, secondDate);
			console.log(firstDate, secondDate);
			setFilteredEvents(
				eventData.filter(
					(event) =>
						new Date(event.date) >= minDate &&
						new Date(event.date) <= maxDate
				)
			);
		} else setFilteredEvents(eventData);
	};

	const filterByCategory = (e) => {
		if (e === "All") {
			setFilteredEvents(eventData);
		} else {
			setFilteredEvents(
				eventData.filter((event) => event.category === e)
			);
		}
	};

	useEffect(() => {
		let result = filteredEvents;
		result = filterBySearch();
		setFilteredEvents(result);
	}, [search]);

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
						className="flex-[0.4] max-[1218px]:flex-[0.3]"
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
										onChange={handleSearch}
										value={search}
									/>
								</label>
							</div>

							<div id="filter_search_header" className="">
								<p className="font-semibold text-2xl text-grey800">
									Filters your search
								</p>
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
									{eventCategories.map((event) => (
										<div
											key={event.id}
											onClick={() => {
												handleActiveCategory(
													event.category
												);
											}}
											className={
												activeCategory ===
												event.category
													? "text-grey400 cursor-pointer bg-white py-3 pl-3 rounded-r-lg relative"
													: "text-grey400 cursor-pointer"
											}
										>
											<div
												className={
													activeCategory ===
													event.category
														? "w-[6px] rounded-full h-full bg-primaryMain absolute left-0 top-0"
														: "hidden"
												}
											>
												&nbsp;
											</div>
											<span className="ml-2">
												{event.category}
											</span>
										</div>
									))}
								</div>
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
									{/* calendar */}

									<div className="flex flex-col gap-4">
										<Calendar
											className="text-center bg-white p-4 rounded-lg !border-none"
											onChange={(e) => {
												setDate(e);
												filterByDate(e);
											}}
											value={date}
											selectRange={true}
										/>
										<p className="text-grey400 font-bold md:font-normal">
											Click on date to see scheduled event
											for that day.
										</p>
									</div>
									<div>
										{date && (
											<p
												className="hover:text-primaryDark text-primaryMain text-base cursor-pointer"
												onClick={() => {
													setDate(null);
													filterByDate();
												}}
											>
												Clear Date
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						id="right"
						className="flex-[0.6] max-[1218px]:flex-[0.7] "
					>
						<h1 className="text-grey800 font-bold text-2xl mb-6">
							Upcoming Events
						</h1>
						{filteredEvents.map((event) => (
							<EventsList key={event.id} event={event} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Event;
