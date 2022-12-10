import React from "react";
import "./App.css";
import Event from "./pages/Event";
import "react-toastify/dist/ReactToastify.css";
import MbScrollToTopBtn from "./Components/MbScrollToTopBtn";

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
	AuthUserRoute,
	ProtectedRoutes,
	FreePlan,
	ProfessionalPlan,
	ModernPlan,
} from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useGlobalContext } from "./context/context";
import {
	addUserToLocalStorage,
	addEmailToLocalStorage,
	removeUserFromLocalStorage,
	removeEmailFromLocalStorage,
} from "./Utils/localStorage";
import axios from "axios";
import { toast } from "react-toastify";

const App = () => {
	const { user, setUser, setUserEmail } = useGlobalContext();
	const [fetched, setFetched] = React.useState(false)

	React.useEffect(() => {
		let loading;
		const getUser = async () => {
			loading = true
			if (!user?.token || !user?.userId || fetched) return;
			console.log(user, fetched, "DATA ABOUT TO BE FETCHED!!!")
			try {
				const res = await axios.get(
					`https://api.coverly.hng.tech/api/v1/auth/dashboard/${user.userId}`,
					{
						headers: {
							Authorization: `Bearer ${user.token}`,
						},
					}
				);
				if (loading) {
					const userObj = {
						...user,
						...res.data
					};
					addUserToLocalStorage(userObj);
					setUser(userObj);
					addEmailToLocalStorage(res.data.email);
					setUserEmail(res.data.email);
					setFetched(true)
				}
			} catch (error) {
				console.error("ERROR RETRIEVING USER DATA FROM SERVER", error);
				if (error.code === "ERR_NETWORK") {
					toast.error("Error retrieving user data from Server");
				} else {
					removeUserFromLocalStorage();
					setUser(null);
					removeEmailFromLocalStorage();
					setUserEmail("");
				}
			}
			loading = false;
		};
		getUser();
		return () => {
			loading = false;
		};
		// eslint-disable-next-line
	}, [user, setUser, fetched, setFetched]);

	return (
		<Router>
			<ScrollToTop>
				<Header />
				<Routes>
					<Route exact path="/" element={<Upload />} />
					<Route path="/upload-data" element={<UploadData />} />
					<Route
						path="/preview"
						element={
							<ProtectedRoutes>
								<Preview />
							</ProtectedRoutes>
						}
					/>
					<Route
						path="/cover letter"
						element={<PgCoverLetter />}
					></Route>
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/register" element={<Register />} />
					<Route path="/verifyaccount" element={<VerifyAcc />} />
					<Route path="/signin" element={<SignIn />} />
					<Route
						path="/history"
						element={
							<AuthUserRoute>
								<History />
							</AuthUserRoute>
						}
					/>
					<Route path="/document" element={<Documentation />} />
					<Route
						path="/see-all-history"
						element={
							<AuthUserRoute>
								<SeeAllHistory />
							</AuthUserRoute>
						}
					/>
					<Route path="/features" element={<Features />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/profile"
						element={
							<AuthUserRoute>
								<ProfilePage />
							</AuthUserRoute>
						}
					/>
					<Route path="/generate" element={<UploadCV />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/free-plan" element={<FreePlan />} />
					<Route
						path="/professional-plan"
						element={<ProfessionalPlan />}
					/>
					<Route path="/modern-plan" element={<ModernPlan />} />
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
					<Route path="/event" element={<Event />} />
					<Route
						path="/terms-and-conditions"
						element={<TermsAndCondition />}
					></Route>
					{/* <Route path="/forum" element={<Forum />} />
					<Route path="/forum/thread" element={<Thread />} />

					<Route
						path="/forum/post"
						element={
							<AuthUserRoute>
								<Post />
							</AuthUserRoute>
						}
					/> */}
					<Route
						path="/customerstories"
						element={<CustomerStories />}
					/>
					<Route
						path="/customerstories/:customerId"
						element={<SingleProduct />}
					/>
					<Route path="privacy-policy" element={<PrivacyPolicy />} />

					<Route
						path="/profile"
						element={
							<AuthUserRoute>
								<ProfilePage />
							</AuthUserRoute>
						}
					/>
					<Route path="/generate" element={<UploadCV />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				<ToastContainer position="top-center"></ToastContainer>

				<MbScrollToTopBtn />

				<Footer />
			</ScrollToTop>
		</Router>
	);
};

export default App;
