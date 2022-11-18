import "./App.css";
import { Home, ErrorPage, ContactUs, PrivacyPolicy, Faq } from "./pages";
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
					<Route path="privacy-policy" element={<PrivacyPolicy />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
