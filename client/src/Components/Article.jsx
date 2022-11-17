import { Link } from "react-router-dom";
const Article = ({ image, id, title, text, time }) => {
	return (
		<Link
			to={`/blogArticle/${id}`}
			className="bg-white border-gray-200 shadow-md relative hover:shadow-lg "
		>
			<img
				src={image}
				alt={title}
				className=" rounded-md  w-full object-cover"
			/>

			<div className="m-4">
				<h5 className="font-bold">{title}</h5>
				<p className="block text-gray-500 text-xs">{text}</p>
				<p className="text-xs font-bold mt-3">{time}</p>
			</div>
		</Link>
	);
};

export default Article;
