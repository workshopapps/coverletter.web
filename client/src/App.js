import "./App.css";
import { Home, ErrorPage, ContactUs, Faq, ProfilePage, UploadCV, Career, Pricing,	Blog,
	SingleblogPage, } from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./pages/Features";

const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/features" element={<Features />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/profile" element={ <ProfilePage/> }/>
					<Route path="/generate" element={ <UploadCV/> }/>
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
