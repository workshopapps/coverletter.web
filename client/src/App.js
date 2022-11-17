import "./App.css";
import { Home, ErrorPage } from "./pages";
import { ScrollToTop } from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
