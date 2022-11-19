import "./App.css";
import React,{useState} from "react";
import {  ErrorPage, ContactUs, Faq } from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./pages/upload/Upload";
import UploadData from "./pages/uploadData/UploadData";
export const UserContext = React.createContext()

const App = () => {
	const [file,setFile]= useState()
	const [fileName,setFileName]= useState('')
	const Provider = UserContext.Provider
	return (
		<>
		<Provider value= {{ file, setFile, fileName, setFileName }}>
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Header />
				<Routes>
					<Route path="/" element={<Upload />} />
					<Route path="/upload-data" element={<UploadData />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
		</Provider>
		</>
	);
};

export default App;
