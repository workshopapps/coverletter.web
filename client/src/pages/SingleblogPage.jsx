import { useParams } from "react-router-dom";
import { articles } from "../Utils/Articles/data";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow1 } from "../Assets/arrow1.svg";
import { ReactComponent as Arrow2 } from "../Assets/arrow2.svg";
const SingleblogPage = () => {
	const { id } = useParams();
	const item = articles.find((item) => {
		return item.id === Number(id);
	});
	const position = articles.findIndex((item) => {
		return item.id === Number(id);
	});

	let next = position + 1;
	let prev = position - 1;
	if (next > articles.length - 1) {
		next = 0;
	}

	if (position === 0) {
		prev = articles.length - 1;
	}
	const { id: nextItemId, title: nextItemTitle } = articles[next];
	const { id: prevItemId, title: prevItemTitle } = articles[prev];
	console.log(nextItemId);

	return (
		<main className="bg-[#F2F2F7] pt-12 pb-32 ">
			<section className="w-4/5 mx-auto mt-1 sm:mt-12">
				<div className="flex items-start sm:items-center flex-col">
					<h1 className="text-3xl sm:text-5xl font-bold sm:text-center">
						{item.title}
					</h1>
					<div className="flex gap-6 items-center mb-6 sm:my-8 ">
						<img
							src={item.authorImg}
							alt="author"
							className="w-12 rounded-full h-12 object-cover"
						/>
						<div>
							<p className="text-sm font-bold"> {item.author}</p>
							<p className="text-xs opacity-60">{item.date}</p>
						</div>
					</div>
				</div>
				{item.Content}
				<hr />
				<div className="mt-10">
					<div className="flex gap-4 items-center my-8 ">
						<img
							src={item.authorImg}
							alt="author"
							className="w-16 rounded-full h-16 object-cover"
						/>
						<div>
							<p className=" text-lg sm:text-xl font-bold">
								{" "}
								{item.authorShortName}
							</p>
							<p className="text-sm opacity-80">
								{item.authorDetail}
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 mt-10 gap-4  bo">
						<Link
							to={`/blogArticle/${prevItemId}`}
							className="border py-3 px-1 sm:py-9 sm:px-3 flex items-center gap-2 sm:gap-6 rounded-lg"
						>
							<Arrow2 className=" w-2 " />
							<div>
								<p className=" text-sm font-bold ">
									Previous article
								</p>
								<p className="  hidden sm:block w-4/5  text-primaryMain font-bold">
									{prevItemTitle}
								</p>
							</div>
						</Link>
						<Link
							to={`/blogArticle/${nextItemId}`}
							className="border sm:py-9 sm:px-3 flex items-center justify-around rounded-lg"
						>
							<div>
								<p className="text-base font-bold">
									Next article
								</p>
								<p className="  hidden sm:block w-4/5 text-primaryMain font-bold">
									{nextItemTitle}
								</p>
							</div>
							<Arrow1 className=" w-2" />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default SingleblogPage;
