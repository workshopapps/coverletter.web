import "./App.css";
import { Home, ErrorPage, ContactUs, Faq, VerifyAcc, CreateAccount, Login } from "./pages";
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
					<Route path="/createaccount" element={<CreateAccount />}/>
					<Route path="/verifyaccount" element={<VerifyAcc />}/>
					<Route path="/login" element={<Login />}/>
					<Route path="/faq" element={<Faq />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
