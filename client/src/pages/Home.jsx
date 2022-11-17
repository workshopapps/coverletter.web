import { useGlobalContext } from "../Context/context";
import { Footer } from "../Layouts";

const Home = () => {
	const { isModalOpen } = useGlobalContext();
	console.log(isModalOpen);
	return (
		<main className="bg-gray-200 text-2xl py-6 text-center">
			home
			<Footer />
		</main>
	);
};

export default Home;
