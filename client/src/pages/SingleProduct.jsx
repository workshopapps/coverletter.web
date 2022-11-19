import React from "react";
import { Link, useParams } from "react-router-dom";
import { contents } from "../Utils/data";
const SingleProduct = () => {
	const { customerId } = useParams();
	const item = contents.find((item) => {
		return item.id === Number(customerId);
	});
	const {
		id,
		title,
		img,
		talk,
		position,
		introTalk,
		challengeTalk,
		reject,
		img2,
		outcome,
		solutionTalk,
	} = item;
	return (
		<main className="bg-background">
			<section className="py-17 px-24" key={id}>
				<Link to="/customerstories">Customer Stories</Link>
				<div className="md:flex  gap-x-[25px]">
					<div>
						<h3 className="md:text-[53px] w-[503px]">{title}</h3>
						<p>
							Talking with <span>{talk}</span> ,{position}
						</p>
					</div>
					<img src={img} alt="" />
				</div>
				<div>
					<h3>Introduction</h3>
					<p>{introTalk}</p>
				</div>
				<div>
					<h3>Challenge</h3>
					<p>{challengeTalk}</p>
				</div>
				<div>
					<p>{reject}</p>
					<div>
						<img src={img2} alt="" />
						<div>
							<p>{talk}</p>
							<p>{position}</p>
						</div>
					</div>
				</div>
				<div>
					<h3>Solution</h3>
					<p>{solutionTalk}</p>
				</div>
				<div>
					<p>{reject}</p>
					<div>
						<img src={img2} alt="" />
						<div>
							<p>{talk}</p>
							<p>{position}</p>
						</div>
					</div>
				</div>
				<div>
					<h3>Outcome</h3>
					<p>{outcome}</p>
				</div>
			</section>
		</main>
	);
};

export default SingleProduct;
