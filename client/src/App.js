import "./App.css";
import { ScrollToTop } from "./Components";
import { Home, ErrorPage, ContactUs, History, SeeAllHistory, Faq, Career, Pricing,	Blog,
	SingleblogPage, Features, ProfilePage, UploadCV } from "./pages";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/history" element={<History />} />
					<Route path="/see-all-history" element={<SeeAllHistory />} />
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
