import "./App.css";
import { Home, ErrorPage, ContactUs, Documentation } from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/document" element={<Documentation />} />

					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Documentation />
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
