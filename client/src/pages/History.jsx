import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import HistoryList from "../Layouts/HistoryList";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { Audio } from "react-loader-spinner";

const History = () => {
	const [clList, setClList] = useState({});
	const { user } = useGlobalContext();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCoverLetters = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					"https://api.coverly.hng.tech/api/v1/template",
					{
						headers: {
							Authorization: `Bearer ${user.token}`,
						},
					}
				);
				const resp = response.data;
				console.log(resp);
				setClList(resp.data);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		};
		fetchCoverLetters();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center  h-screen">
				<Audio
					height="100%"
					width="150"
					radius="9"
					color="blue"
					ariaLabel="loading"
					wrapperStyle
					wrapperClass
				/>
			</div>
		);
	}
	return (
		<main className="bg-background py-10">
			<div className="max-w-screen-2xl m-auto px-5">
				<div className="mb-16 max-[576px]:mb-8">
					<h1 className="text-grey800 text-[56px] leading-[4.5rem] max-[768px]:text-2xl">
						History
					</h1>
					<p className="text-grey400 text-2xl mt-1 max-[576px]:text-base">
						Cover Letters
					</p>
				</div>

				<div className="bg-white px-12 py-9">
					<p className="text-grey800 font-semibold text-[40px] leading-[3rem] mb-8 max-[768px]:text-xl">
						All Cover Letters
					</p>

					<HistoryList Items={clList} />
				</div>
			</div>
		</main>
	);
};

export default History;
