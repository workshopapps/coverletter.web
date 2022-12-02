import React, { useState } from "react";
import { Article } from "../Components";
import { articles } from "../Utils/Articles/data";
import search from "../Assets/search.svg";
import axios from "axios";

const Blog = () => {
	const [srch, setSrch] = useState("");
	const [diArticle, setDiArticle] = useState(articles);

	const handleSearch = async () => {
		try {
			const res = await axios.get(
				`https://api.coverly.hng.tech/api/v1/blogs/search?query=${srch}`
			);
			console.log(res);
			setDiArticle(res);
		} catch (error) {
			console.log(error);
			setDiArticle(null);
		}
	};

	return (
		<main className="flex flex-col py-14 sm:py-24 bg-[#F2F2F7] mx-auto">
			<section className="w-4/5 mx-auto">
				<div className="w-full justify-between flex items-center mb-5">
					<h1 className="text-3xl sm:text-5xl mb-4  font-bold">
						Welcome to our blog!
					</h1>
					<div className="w-[450px] relative flex items-center">
						<input
							type="text"
							className="bg-background rounded-lg border-textHeader border-[2px] px-3 py-1 w-[100%]"
							placeholder="Search"
							onChange={(e) => setSrch(e.target.value)}
						/>
						<div
							className="absolute top-50 right-0 mr-3 cursor-pointer"
							onClick={handleSearch}
						>
							<img src={search} alt="" />
						</div>
					</div>
				</div>

				<p className="mb-16 text-start text-lg font-normal ">
					{" "}
					You'll find the best information about cover letters, career
					development and Coverly. With our expert's help, you will
					not only generate a job-winning cover letter, but also
					improve your interview skills.
				</p>
				{diArticle != null ? (
					<section className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
						{diArticle.map((item) => {
							return <Article key={item.id} {...item} />;
						})}
					</section>
				) : (
					<section className="flex w-full justify-center ">
						<p className="text-3xl font-bold">
							We couldn't find any blog with that title
						</p>
					</section>
				)}
			</section>
		</main>
	);
};

export default Blog;
