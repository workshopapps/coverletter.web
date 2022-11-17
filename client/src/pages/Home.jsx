import { useGlobalContext } from "../context/context";

const Home = () => {
	const { isModalOpen } = useGlobalContext();
	console.log(isModalOpen);
	return <main className="bg-gray-200 text-2xl py-6 text-center">home</main>;
};

export default Home;
