import "./App.css";

import { Home, ErrorPage, ContactUs, History, SeeAllHistory, Faq, Career, Pricing,	Blog,
	SingleblogPage, Features, PrivacyPolicy } from "./pages";

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
        	<Route exact path="/" element={<Home />} />
					<Route path="privacy-policy" element={<PrivacyPolicy />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/history" element={<History />} />
					<Route path="/see-all-history" element={<SeeAllHistory />} />
					<Route path="/features" element={<Features />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/career" element={<Career />} />
					<Route path="blog" element={<Blog />} />
					<Route
						path="blogArticle/:id"
						element={<SingleblogPage />}
					/>
					<Route path="/pricing" element={<Pricing />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
