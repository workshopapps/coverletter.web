import { useParams } from "react-router-dom";
import { articles } from "../Utils/Articles/data";
import ErrorPage from "./ErrorPage";
const SingleblogPage = () => {
	const { id } = useParams();

	console.log(id);
	const item = articles.find((item) => {
		return item.id === Number(id);
	});
	const position = articles.findIndex((item) => {
		return item.id === id;
	});

	let next = position + 1;
	let prev = position - 1;
	if (next > articles.length - 1) {
		next = 0;
	}

	if (position === 0) {
		prev = articles.length - 1;
	}

	console.log(articles[prev], articles[next]);

	return (
		<main className="bg-[#F2F2F7]">
			<section className="w-4/5 mx-auto">
				<h1 className="text-2xl">SingleblogPage blog page</h1>
				<h3 className="text-2xl">{item.title}</h3>
				<p>{item.text}</p>
				<img src={item.image} alt="computer" />
			</section>
		</main>
	);
};

export default SingleblogPage;
