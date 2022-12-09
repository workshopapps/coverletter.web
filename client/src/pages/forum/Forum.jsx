import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";
import axios from "axios";

const Forum = () => {
	const [dData, setdData] = useState([]);
	const [page, setPage] = useState(1);
	const { postId, setPostId } = useGlobalContext();

	const imgg = [
		"./forum-images/forum/f1.png",
		"./forum-images/forum/f2.png",
		"./forum-images/forum/f3.png",
		"./forum-images/forum/f4.png",
		"./forum-images/forum/f4.png",
		"./forum-images/forum/f5.png",
		"./forum-images/forum/f6.png",
		"./forum-images/forum/f7.png",
	];

	useEffect(() => {
		axios
			.get(
				`https://api.coverly.hng.tech/api/v1/forum/getAllPost?page=${page}&limit=10`
			)
			.then((res) => {
				const dValues = res.data.posts;
				const getValues = [];

				dValues.map((value) => {
					const {
						_id,
						content,
						title,
						createdAt,
						repliesCounter,
						updatedAt,
						userId,
						viewCounter,
					} = value;

					const formatVal = {
						id: _id,
						img: imgg[Math.floor(Math.random() * 8)],
						title: title,
						name: content,
						date: createdAt,
						replies: repliesCounter,
						views: viewCounter,
						userId: userId,
					};
					getValues.push(formatVal);
				});
				setdData(getValues);
			})
			.then((err) => {
			});
	}, [page]);
	return (
		<>
			<main className="bg-[#f2f2f7] mx-0 my-0 py-5 px-10 md:px-16">
				<div className="lw:mx-auto lw:w-[1250px]">
					<div className="flex flex-col gap-5 md:flex-row md:justify-between border-b border-[#cad0dd] pb-8 mb-8">
						<p className="text-[#101010] text-2xl md:text-[40px] font-bold">
							Discussion Forum
						</p>
						<Link
							to="/forum/post"
							className="btn h-[48px] w-[164px] btnPrimary "
						>
							Create new post
						</Link>
					</div>
					<div className="mb-3 mx-0 md:mx-12 flex gap-10 text-base md:text-2xl text-[#6d6d6d]">
						<div className="basis-4/5 px-0">
							<p>Topics</p>
						</div>
						<div className="hidden md:flex justify-center gap-16 basis-1/5">
							<p className="basis-1/2 text-center">Replies</p>
							<p className="basis-1/2">Views</p>
						</div>
					</div>
					<div>
						{dData.map((detail) => {
							return (
								<Link
									key={detail.id}
									to="/forum/thread"
									onClick={() => setPostId(detail.id)}
								>
									{console.log(detail.id)}
									<div className="border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-auto py-3 px-5 md:px-12 flex flex-col gap-5 mb-5">
										<div className="flex gap-3 items-center relative">
											<div>
												<img
													className="rounded-full w-12 md:w-16 object-cover"
													src={detail.img}
													alt={detail.name}
												/>
											</div>
											<div>
												<div className="capitalize text-base md:text-2xl font-semibold">
													<p>{detail.title}</p>
												</div>
												<div className="absolute mt-4 sm:mt-0 left-0 sm:static flex flex-col sm:flex-row sm:gap-5 text-[#bababa] text-sm md:text-base">
													<p>{detail.name}</p>
													<p>{detail.date}</p>
												</div>
											</div>
										</div>
										<div className="flex flex-col md:flex-row gap-5 mt-12 sm:mt-0 mb-5">
											<div className="basis-4/5">
												<p className="text-base text-[#6d6d6d]">
													{detail.content}
												</p>
											</div>
											<div className="flex md:gap-28 gap-8 justify-start md:justify-center basis-1/5">
												<p className="flex flex-col text-base md:text-2xl text-[#0544B8]">
													<span>
														{detail.replies}
													</span>
													<span className="text-[#6d6d6d] md:hidden">
														Replies
													</span>
												</p>
												<p className="flex flex-col text-base md:text-2xl text-[#6d6d6d]">
													<span>{detail.views}</span>
													<span className="md:hidden">
														Views
													</span>
												</p>
											</div>
										</div>
									</div>
								</Link>
							);
						})}
					</div>

					<div className="border-[#0544B8] md:border bg-none md:bg-[#fcfcfc] rounded-lg h-auto md:h-44 py-3 flex flex-col items-center gap-5 mb-5">
						<div className="hidden md:block pb-5 border-b w-full text-center border-[#CAD0DD]">
							<p>1 - 8 of 45 Discussions</p>
						</div>
						<div className="flex gap-5">
							<button
								onClick={() => setPage((prev) => prev - 1)}
								className="border-r border-[#bababa] px-5 btn text-disabledDisabled"
							>
								<span className="align-middle">
									&lt;Previous
								</span>
							</button>

							<div className="hidden md:flex md:gap-2 lg:gap-8">
								<button
									onClick={() => setPage(1)}
									className="btn btnSecondary"
								>
									1
								</button>
								<button
									onClick={() => setPage(2)}
									className="btn focus:btnSecondary text-primaryMain"
								>
									2
								</button>
								<button
									onClick={() => setPage(3)}
									className="btn focus:btnSecondary text-primaryMain"
								>
									3
								</button>
								<button
									onClick={() => setPage(4)}
									className="btn focus:btnSecondary text-primaryMain"
								>
									4
								</button>
								<button
									onClick={() => setPage(5)}
									className="btn focus:btnSecondary text-primaryMain"
								>
									5
								</button>
								<button
									onClick={() => setPage(6)}
									className="btn focus:btnSecondary text-primaryMain"
								>
									6
								</button>
								<button
									onClick={() => setPage(7)}
									className="btn focus:btnSecondary text-primaryMain"
								>
									7
								</button>
								<button
									onClick={() => setPage(8)}
									className="btn focus:btnSecondary text-primaryMain"
								>
									8
								</button>
							</div>

							<button
								onClick={() => setPage((prev) => prev + 1)}
								className="px-5 border-l border-[#bababa] text-primaryMain btn"
							>
								<span className="align-middle">Next &gt;</span>
							</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Forum;
