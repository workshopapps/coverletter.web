import React from "react";
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
	Preview,
	PgCoverLetter,
<<<<<<< HEAD
=======
	TermsAndCondition,
	Upload,
	UploadData,
<<<<<<< HEAD
	Documentation,
>>>>>>> dev
=======
>>>>>>> dev
} from "./pages";
import TermsAndCondition from "./pages/TermsAndConditions";
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
					<Route path="/" element={<Upload />} />
					<Route path="/upload-data" element={<UploadData />} />
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
=======
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/career" element={<Career />} />
					<Route path="blog" element={<Blog />} />
<<<<<<< HEAD
					<Route path="/document" element={<Documentation />} />
>>>>>>> dev
=======
>>>>>>> dev
					<Route
						path="/terms-and-conditions"
						element={<TermsAndCondition />}
					/>

					<Route path="*" element={<ErrorPage />}></Route>
					<Route path="/terms-and-conditions" />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/generate" element={<UploadCV />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
