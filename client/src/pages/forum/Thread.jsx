import axios from "axios";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";

const response = [
	{
		id: 1,
		img: "../forum-images/reply/r1.png",
		name: "ecolime",
		date: "November 2, 2022",
		content:
			"Dear Op,Thanks for the tips.However, when last did you come across job adverts for NPA, NNPC, CBN, NDIC, FIRS, DPR, EFCC, etc... ??It may interest you to know that people retire from these organisations and are always replaced by young folks on a daily basis.Career upgrade tips are useless for the vast majority because the few opportunities in public sector have been cannibalised and hijack by people in power for their children.The SMEs that should actually be the major employers of Labour have limited room for expansion due to crazy and thoughtless government policies by these same cannibals. Thus unable to absorb jobless graduates in large numbers.Shebi na when you get job you fit dey upgrade your career na?",
	},
	{
		id: 2,
		img: "../forum-images/reply/r2.png",
		name: "Tobicjucks18",
		date: "November 2, 2022",
		content:
			"85 percent of what you listed above @OP can only be archived when your alone and have no dependent..I mean one can only do this if he or she has a sponsor, or someone seeing to his or her bill's.Majority of youth's in Nigeria strive for survival and sadly enough alot never attains their potential.",
	},
	{
		id: 3,
		img: "../forum-images/reply/r3.png",
		name: "johnUbah",
		date: "November 2, 2022",
		content:
			"Some of the smartest people are not among the richest.Personality is too abstract, some of the richest men have shitty personality (eg Steve Jobs and Jeff Bezos) while some are cool (Gates, Buffet).",
	},
	{
		id: 4,
		img: "../forum-images/reply/r4.png",
		name: "Tobicjucks18",
		date: "November 2, 2022",
		content:
			"Check the list well; He also talk about skill to get the job and how to position yourself for jobs. It's not all about government job. One can create his own job and be self-employed. You can also work remotely if you got the skill sets that will put you in the employer spot light. Above all, God is the source of help for all mankind!!",
	},
	{
		id: 5,
		img: "../forum-images/reply/r5.png",
		name: "HRsweetness24",
		date: "November 2, 2022",
		content:
			"Networking is very key, skiils acquisition is paramount. Infact all the points are on point. You however missed a very very critical point which is consistency.",
	},
	{
		id: 6,
		img: "../forum-images/reply/r6.png",
		name: "Madridstar007",
		date: "November 2, 2022",
		content:
			'10. Ruthless efficiency in execution and completion of tasks. If they have to cut off social media, cut of certain people, cut of social activities, stay up all night, meet people/collaborators who can support, etc, they will do it. They are not emotional about things that wouldnt add value. There is a certain ruthless streak in highly successful people.Most people dont know this and when you tell them, they say "it is harsh, no na...". \n11. Consistency. Excellence isnt what you do once, but maintaining a high standard and performance repeatedly. This is what highly successful people do. It takes ruthlessness, it takes sacrifice, it takes being tunnel-visioned.',
	},
];

const Thread = () => {
	const [data, setData] = useState(response);
	const [respo, setRespo] = useState("");
	const [content, setContent] = useState("");
	const [view, setView] = useState("");
	const [replies, setReplies] = useState("");
	const [date, setDate] = useState("");
	const [newData, setNewData] = useState(data);
	const [message, setMessage] = useState("");

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
	};
	const { user, postId } = useGlobalContext();
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
				<div className="lw:mx-[auto] lw:w-[1250px]">
					<div className="border-[#0544B8] border bg-[#fcfcfc] rounded-lg h-auto py-3 px-5 md:px-12 flex flex-col gap-5 mb-5 relative">
						<div className="flex gap-3 items-center">
							<div>
								<img
									className="rounded-full w-12 object-cover md:w-16"
									src="../forum-images/forum/f1.png"
									alt=""
								/>
							</div>
							<div>
								<div className="capitalize text-base md:text-2xl font-semibold">
									<p>{respo}</p>
								</div>
								<div className="flex flex-col md:flex-row md:gap-5 text-[#bababa] md:text-base text-sm absolute left-5 top-20 md:static">
									<p>{date}</p>
								</div>
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
							<div className="basis-4/5">
								<p className="text-sm md:text-base text-six">
									10. Ruthless efficiency in execution and
									completion of tasks. If they have to cut off
									social media, cut of certain people, cut of
									social activities, stay up all night, meet
									people/collaborators who can support, etc,
									they will do it. They are not emotional
									about things that wouldnt add value. There
									is a certain ruthless streak in highly
									successful people.Most people dont know this
									and when you tell them, they say "it is
									harsh, no na..."
									<br />
									<br />
									11. Consistency. Excellence isnt what you do
									once, but maintaining a high standard and
									performance repeatedly. This is what highly
									successful people do. It takes ruthlessness,
									it takes sacrifice, it takes being
									tunnel-visioned.
								</p>
							</div>
							<div className="h-16 w-[2px] ml-8 bg-[#bababa]"></div>
							<div className="flex gap-3 items-center">
								<div>
									<img
										className="rounded-full object-cover w-12 sm:w-16"
										src="../forum-images/reply/r7.png"
										alt=""
									/>
								</div>
								<div>
									<div className="capitalize text-base md:text-2xl font-semibold text-[#101010]">
										<p>Kreativ Mind</p>
									</div>
									<div className="flex gap-5 text-[#bababa] text-sm md:text-base">
										<p>November 2, 2022</p>
									</div>
								</div>
							</div>
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
