import React from 'react'
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
	TermsAndCondition,
	Upload,
	UploadData
} from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
<<<<<<< HEAD

	
	return (

=======
	
	r
	return (
		<>
		
>>>>>>> 53ce7521bf6eae3ff1df096e4533d6538276c510
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Header />
				<Routes>
					<Route path="/" element={<Upload />} />
					<Route path="/upload-data" element={<UploadData/>} />
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
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/career" element={<Career />} />
					<Route path="blog" element={<Blog />} />
					<Route
						path="/blogArticle/:id"
						element={<SingleblogPage />}
					/>
					<Route
						path="terms-and-conditions"
						element={<TermsAndCondition />}
					></Route>
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
		
<<<<<<< HEAD
=======
		</>
>>>>>>> 53ce7521bf6eae3ff1df096e4533d6538276c510
	);
};

export default App;
