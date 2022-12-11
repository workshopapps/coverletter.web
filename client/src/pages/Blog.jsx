import React, { useState, useEffect } from "react";
import { Article } from "../Components";
import search from "../Assets/search.svg";
import axios from "axios";
import previous from "../Assets/previous.svg";
import next from "../Assets/next.svg";

const Blog = () => {
	const [srch, setSrch] = useState("");
	const [diArticle, setDiArticle] = useState([]);

	String.prototype.trimEllip = function (length) {
		return this.length > length ? this.substring(0, length) + "..." : this;
	};

	useEffect(() => {
		axios
			.get("https://api.coverly.hng.tech/api/v1/blog/")
			.then((res) => {
				console.log(res);
				const values = res.data.posts;

				// console.log(values);

				const dValue = [];
				values.map((value) => {
					const { _id, title, content, imageUrl } = value;

					const dContent = content.trimEllip(250);
					const mainContent = dContent.replace(
						"#### Introduction",
						""
					);

					const formatVal = {
						id: _id,
						title: title,
						text: mainContent,
						time: "5 mins READ",
						image: imageUrl,
					};
					dValue.push(formatVal);
				});
				// console.log(dValue);

				setDiArticle(dValue);
			})
			.then((err) => {
				console.log(err);
			});
	}, []);

	const handleSearch = async (e) => {
		e.preventDefault();
		setSrch(e.target.value);

		try {
			const res = await axios.get(
				`https://api.coverly.hng.tech/api/v1/blogs/search?query=${srch}`
			);
			const values = res.data.posts;

			const dValue = [];
			values.map((value) => {
				const { _id, title, content, imageUrl } = value;

				const dContent = content.trimEllip(250);
				const mainContent = dContent.replace("#### Introduction", "");

				const formatVal = {
					id: _id,
					title: title,
					text: mainContent,
					time: "5 mins READ",
					image: imageUrl,
				};
				dValue.push(formatVal);
			});

			setDiArticle(dValue);
			console.log(dValue);
		} catch (error) {
			console.log(error);
			setDiArticle(null);
		}
	};

	console.log(diArticle);
	return (
		<main className="flex flex-col py-14 sm:py-24 bg-[#F2F2F7] mx-auto">
			<section className="w-4/5 mx-auto lw:w-[1250px]">
				<div className="w-full justify-between flex items-center mb-5 flex-wrap">
					<h1 className="text-3xl sm:text-5xl mb-4  font-bold">
						Welcome to our blog!
					</h1>
					<div className="w-[450px] relative flex items-center">
						<input
							type="text"
							className="bg-background rounded-lg border-stokeDark border px-3 py-1 w-[100%] h-12"
							placeholder="Search for article"
							onChange={(e) => handleSearch(e)}
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
