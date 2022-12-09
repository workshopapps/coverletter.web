import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../../context/context";

const Post = () => {
	const [title, setTitle] = useState("");
	const [contents, setContents] = useState("");

	const Navigate = useNavigate();
	const { user, setPostId } = useGlobalContext();

	const submitHandler = (e) => {
		e.preventDefault();

		const createPost = async () => {
			const formData = new FormData();
			formData.append("title", title);
			formData.append("content", contents);
			console.log([...formData]);

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user.token}`,
				},
			};

			try {
				const res = await axios.post(
					`https://api.coverly.hng.tech/api/v1/forum/createPost`,
					formData,
					config
				);
				Navigate("/forum");
			} catch (error) {
				console.log(error);
			}
		};
		createPost();
	};
	const date = new Date();
	let day = date.getDate();
	// let month = date.getMonth();
	let year = date.getFullYear();
	let currentDate = `December ${day}, ${year}`;

	return (
		<>
			<main className="bg-[#f2f2f7] mx-0 my-0 py-5 px-5 md:px-16">
				<div className="text-2xl md:text-[40px] font-bold mb-10 md:mb-5">
					<p>Create a new post</p>
				</div>
				<div className="flex gap-3 items-center">
					<div>
						<img
							className="rounded-full w-12 sm:w-16 object-cover"
							src="../forum-images/reply/r7.png"
							alt=""
						/>
					</div>
					<div>
						<div className="capitalize text-base md:text-2xl font-semibold">
							<p>{user.name}</p>
						</div>
						<div className="flex gap-5 text-five text-sm md:text-base">
							<p className="text-[#bababa]">{currentDate}</p>
						</div>
					</div>
				</div>
				<form
					className="mt-5"
					method="post"
					encType="multipart/form-data"
					onSubmit={submitHandler}
				>
					<div className="flex flex-col gap-3 h-[400px] bg-[#fcfcfc]">
						<input
							className="border-none outline-none bg-opacity-0 px-6 pt-3"
							type="text"
							placeholder="Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<div className="w-full h-px bg-[#CAD0DD]"></div>
						<textarea
							rows="14"
							className="appearance-none outline-none resize-none bg-opacity-0 px-6"
							id=""
							placeholder="Type text here"
							value={contents}
							onChange={(e) => setContents(e.target.value)}
						></textarea>
					</div>
					<div className="w-full text-right mt-3">
						<button
							type="submit"
							className="btn btnPrimary w-[170px] text-base font-bold"
						>
							Post
						</button>
					</div>
				</form>
			</main>
		</>
	);
};

export default Post;
