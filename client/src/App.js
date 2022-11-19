import React from "react";
import "./App.css";
import {
	Home,
	ErrorPage,
	ContactUs,
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
					<Route path="/" element={<Upload />} />
					<Route path="/upload-data" element={<UploadData />} />
					<Route path="/preview" element={<Preview />}></Route>
					<Route
						path="/cover letter"
						element={<PgCoverLetter />}
					></Route>
					<Route path="/contactus" element={<ContactUs />} />
					<Route
						path="/customerstories"
						element={<CustomerStories />}
					/>
					<Route
						path="/customerstories/:customerId"
						element={<SingleProduct />}
					/>
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				
			</ScrollToTop>
		</Router>
		
	)
};

export default App;