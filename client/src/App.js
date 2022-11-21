import React from "react";
import "./App.css";
import Event from './pages/Event'
import {
	Register,
	VerifyAcc,
	SignIn,
	ErrorPage,
	ContactUs,
	History,
	SeeAllHistory,
	About,
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
	UploadData,
	PrivacyPolicy,
	Documentation,
	Forum,
	Thread,
	Post,
	ForgotPassword,
	ResetPassword,
	EmailOTP,
	CustomerStories,
	SingleProduct,
} from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<ScrollToTop>
				<Header />
				<Routes>
					<Route exact path="/" element={<Upload />} />
					<Route path="/upload-data" element={<UploadData />} />
					<Route path="/preview" element={<Preview />} />
					<Route
						path="/cover letter"
						element={<PgCoverLetter />}
					></Route>
					<Route path="privacy-policy" element={<PrivacyPolicy />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/register" element={<Register />} />
					<Route path="/verifyaccount" element={<VerifyAcc />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/history" element={<History />} />
					<Route path="/document" element={<Documentation />} />
					<Route
						path="/see-all-history"
						element={<SeeAllHistory />}
					/>
					<Route path="/features" element={<Features />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/about" element={<About />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/generate" element={<UploadCV />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/career" element={<Career />} />
					<Route path="blog" element={<Blog />} />
					<Route path="/email-otp" element={<EmailOTP />} />
					<Route
						path="/forgot-password"
						element={<ForgotPassword />}
					/>
					<Route path="/reset" element={<ResetPassword />} />
					<Route
						path="/blogArticle/:id"
						element={<SingleblogPage />}
					/>
					<Route
						path="/event"
						element={<Event />}
					/>
					<Route
						path="/terms-and-conditions"
						element={<TermsAndCondition />}
					></Route>
					<Route path="/forum" element={<Forum />} />
					<Route path="/forum/thread" element={<Thread />} />
					<Route path="/forum/post" element={<Post />} />
					<Route
						path="/customerstories"
						element={<CustomerStories />}
					/>
					<Route
						path="/customerstories/:customerId"
						element={<SingleProduct />}
					/>
					<Route path="privacy-policy" element={<PrivacyPolicy />} />

					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/generate" element={<UploadCV />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				<Footer />
			</ScrollToTop>
		</Router>
	);
};

export default App;
