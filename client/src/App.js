import "./App.css";
import { Home, ErrorPage, ContactUs } from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAcount from "./pages/CreateAccount";
import VerifyAcc from "./pages/VerifyAcc";
import Login from "./pages/Login";
const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/createaccount" element={<CreateAcount />}/>
					<Route path="/verifyaccount" element={<VerifyAcc />}/>
					<Route path="/login" element={<Login />}/>
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
