import React from "react";
import { Article } from "../Components";
import { articles } from "../Utils/Articles/data";
const Blog = () => {
	return (
		<main className="flex flex-col py-14 sm:py-24 bg-[#F2F2F7] mx-auto">
			<section className="w-4/5 mx-auto">
				<h1 className="text-3xl sm:text-5xl mb-4  font-bold">
					Welcome to our blog!
				</h1>
				<p className="mb-16 text-start text-lg font-normal ">
					{" "}
					You'll find the best information about cover letters, career
					development and Aplicar. With our expert's help, you will
					not only generate a job-winning cover letter, but also
					improve your interview skills.
				</p>
				<section className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{articles.map((item) => {
						return <Article key={item.id} {...item} />;
					})}
				</section>
			</section>
		</main>
	);
};

export default Blog;
