import "./App.css";
import {
	Home,
	ErrorPage,
	ContactUs,
	History,
	SeeAllHistory,
	Faq,
	Career,
	Pricing,
	Blog,
	SingleblogPage,
	Features,
	ProfilePage,
	UploadCV,
<<<<<<< HEAD
	Preview,
	PgCoverLetter,
=======
>>>>>>> ad9be1b801736a6af45a0c05fc8d33faf368c6fe
} from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import Preview from "./pages/Preview";
import PgCoverLetter from "./pages/PgCoverLetter";
>>>>>>> ad9be1b801736a6af45a0c05fc8d33faf368c6fe

const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/preview" element={<Preview />}></Route>
					<Route
						path="/cover letter"
						element={<PgCoverLetter />}
					></Route>
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/history" element={<History />} />
					<Route
						path="/see-all-history"
						element={<SeeAllHistory />}
					/>
					<Route path="/features" element={<Features />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/generate" element={<UploadCV />} />
<<<<<<< HEAD
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/career" element={<Career />} />
					<Route path="blog" element={<Blog />} />
					<Route
						path="/blogArticle/:id"
						element={<SingleblogPage />}
					/>
					<Route path="*" element={<ErrorPage />}></Route>
=======
					<Route path="*" element={<ErrorPage />} />
>>>>>>> ad9be1b801736a6af45a0c05fc8d33faf368c6fe
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
