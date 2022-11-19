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
	ForgotPassword,
	ResetPassword,
	EmailOTP,
} from "./pages";
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
					<Route path="/email-otp" element={<EmailOTP />} />
					<Route path="/reset" element={<ResetPassword />} />
					<Route
						path="/forgot-password"
						element={<ForgotPassword />}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
