import axios from "axios";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";

const response = [];

const Thread = () => {
	const [data, setData] = useState(response);
	const [respo, setRespo] = useState("");
	const [content, setContent] = useState("");
	const [view, setView] = useState("");
	const [date, setDate] = useState("");
	const [replies, setReplies] = useState("");
	const [likes, setLikes] = useState("");
	const [newData, setNewData] = useState(data);
	const [message, setMessage] = useState("");

    const { user, postId } = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		let value = {
			id: newData.length,
			img: "../forum-images/reply/r7.png",
			date: `${new Date().getDay()} ${new Date().getMonth()}, ${new Date().getFullYear()}`,
			content: message,
		};
		setNewData([...newData, value]);
		setMessage("");

        const replyPost = async () => {
            const bodyData = new FormData();
            bodyData.append("content", message);

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user.token}`
				}
			};
            console.log(postId);

			try {
				const res = await axios.post(
					`https://api.coverly.hng.tech/api/v1/forum/${postId}/reply`,
                    bodyData,
                    config
                  
				);
                console.log(res)
			} catch (error) {
                console.log(error);
			}
		};
		replyPost();

	};
	useEffect(() => {
		const getPost = async () => {
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user.token}`,
				},
			};

			try {
				const res = await axios.get(
					`https://api.coverly.hng.tech/api/v1/forum/getOnePost/${postId}`,
					config
				);
				setRespo(res.data.post.title);
				setContent(res.data.post.content);
				setView(res.data.post.viewCounter);
				setReplies(res.data.post.repliesCounter);
				setDate(res.data.post.createdAt);
			} catch (error) {
                console.log(error);
			}
		};
		getPost();
	});

	return (
		<>
			<main className="bg-[#f2f2f7] mx-0 my-0 py-5 px-5 md:px-16">
				<div className="lw:w-[1250px] lw:mx-auto">
					<div className="border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-auto py-3 px-5 md:px-12 flex flex-col gap-5 mb-5 relative">
						<div className="flex gap-3 items-center">
							<div>
								<img
									className="rounded-full w-12 object-cover md:w-16"
									src="../forum-images/forum/f1.png"
									alt=""
								/>
                                </div>
							<div className="capitalize text-base md:text-2xl font-semibold">
								<p>{respo}</p>
							</div>
						</div>
						
					<div className="flex flex-col gap-5 mt-10 md:mt-0 mb-5">
						<div className="basis-4/5">
							<p className="text-sm md:text-base flex flex-col gap-3">
								{content}
							</p>
						</div>
							<div className="flex gap-8 justify-between md:justify-start items-center basis-1/5">
								<div className="text-center">
									<p className="md:text-base text-sm font-bold">
										{replies}
									</p>
									<p className="text-sm md:text-base">
										Replies
									</p>
								</div>
								<div className="text-center">
									<p className="text-sm md:text-base font-bold">
										{view}
									</p>
									<p className="text-sm md:text-base">
										Views
									</p>
								</div>
								<div>
									<img
										src="../forum-images/heart.png"
										alt=""
									/>
								</div>
								<div>
									<button className="btn btnPrimary h-12">
										Reply
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center mb-3">
						<p>All replies ({newData.length})</p>
						<img src="../forum-images/arrow-down.png" alt="" />
					</div>
					{newData.map((data) => {
						return (
							<>
								<div className="border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-auto py-3 px-5 md:px-12 flex flex-col gap-5 mb-5">
									<div className="flex gap-3 items-center">
										<div>
											<img
												className="rounded-full w-12 md:w-16 object-cover"
												src={data.img}
												alt={data.name}
											/>
										</div>
										<div>
											<div className="capitalize text-base md:text-2xl font-semibold">
												<p className="text-[#101010]">
													{data.name}
												</p>
											</div>
											<div className="flex gap-5 text-[#bababa] text-sm md:text-base">
												<p>{data.date}</p>
											</div>
										</div>
									</div>
									<div className="flex flex-col gap-5 mb-5">
										<div className="basis-4/5">
											<p className="text-sm md:text-base text-six">
												{data.content}
											</p>
										</div>
										<div className="flex gap-x-6 sm:gap-10 justify-start items-center basis-1/5">
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													fill="currentColor"
													class="bi bi-heart"
													viewBox="0 0 16 16"
													className="text-[#6D6D6D]"
												>
													{" "}
													<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />{" "}
												</svg>
											</div>
											<div>
												<button className="border border-primaryMain px-[32px] py-[12px] rounded-[8px] text-primaryMain font-semibold text-[16px]">
													Quote
												</button>
											</div>
										</div>
									</div>
								</div>
							</>
						);
					})}

					<div className="border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-auto py-3 px-5 md:px-12 flex flex-col gap-5 mb-5">
						<div className="flex gap-3 items-center">
							<div>
								<img
									className="rounded-full object-cover w-12 md:w-16"
									src="../forum-images/reply/r3.png"
									alt=""
								/>
							</div>
							<div>
								<div className="capitalize text-base md:text-2xl font-semibold text-[#101010]">
									<p>johnUbah</p>
								</div>
								<div className="flex gap-5 text-[#bababa] text-sm md:stext-base">
									<p>November 2, 2022</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-5 mb-5">
							<div>
								<form onSubmit={handleSubmit}>
									<div>
										<textarea
											required
											className="w-full p-3 outline-none resize-none"
											rows="10"
											placeholder="Type text here"
											value={message}
											onChange={(e) =>
												setMessage(e.target.value)
											}
										></textarea>
									</div>
									<div className="flex gap-8 justify-end items-center ">
										<button
											type="submit"
											className="btn btnPrimary h-12"
										>
											Reply
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Thread;
