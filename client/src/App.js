import "./App.css";
import { Home, ErrorPage, ContactUs, History } from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeeAllHistory from "./pages/SeeAllHistory";
const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					{/* <Route exact path="/" element={<History />} /> */}
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/history" element={<History />} />
					<Route path="/see-all-history" element={<SeeAllHistory />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
