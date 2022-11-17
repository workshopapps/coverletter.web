import "./App.css";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";

function App() {
	return (
		<div className="bg-gray-200 text-2xl text-center">
			{/* App goes here */}
			<nav>
				<Header/>
			</nav>
			<Footer />
		</div>
	);
}

export default App;
