import "./App.css";
import { Home, ErrorPage, ContactUs, Faq, Career } from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from "./pages/Preview";
import PgCoverLetter from "./pages/PgCoverLetter";
const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/preview" element={<Preview />}></Route>
					<Route path="/cover letter" element={<PgCoverLetter />}></Route>
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/career" element={<Career />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
