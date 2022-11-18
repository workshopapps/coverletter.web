import "./App.css";
import { Home, ErrorPage, ContactUs, Faq, Forum, Post, Thread } from "./pages";
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
					<Route path="/" element={<Home />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="forum" element={<Forum />} />
					<Route path="/forum/post" element={<Post />} />
					<Route path="/forum/thread" element={<Thread />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
