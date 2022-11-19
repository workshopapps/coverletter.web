import React from "react";
import { Link, useParams } from "react-router-dom";
import { contents } from "../Utils/data";
const SingleProduct = () => {
	const { customerId } = useParams();
	const item = contents.find((item) => {
		return item.id === Number(customerId);
	});
	const { id, title, img, talk, position, introTalk, textContents } = item;
	return (
		<main className="bg-background">
			<section className="py-17 px-24" key={id}>
				<Link to="/customerstories">Customer Stories</Link>
				<div className="md:flex  gap-x-[25px]">
					<div>
						<h3 className="md:text-[53px]">{title}</h3>
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
					{textContents.map((textContent) => {
						const {
							id,
							title,
							challengeTalk,
							reject,
							img2,
							name,
							occupation,
						} = textContent;
						return (
							<div key={id}>
								<h3>{title}</h3>
								<p>{challengeTalk}</p>
								<p>{reject}</p>
								<div>
									<img src={img2} alt="" />
									<div>
										<p>{name}</p>
										<p>{occupation}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</main>
	);
};

export default SingleProduct;
