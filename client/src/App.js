import "./App.css";
import React,{useState} from "react";
import { Home, ErrorPage, ContactUs, History, SeeAllHistory, Faq, Career, Pricing,	Blog,
	SingleblogPage, Features, ProfilePage, UploadCV } from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from "./pages/Preview";
import PgCoverLetter from "./pages/PgCoverLetter";
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
					<Route path="/preview" element={<Preview />}></Route>
					<Route path="/cover letter" element={<PgCoverLetter />}></Route>
					<Route path="/history" element={<History />} />
					<Route path="/see-all-history" element={<SeeAllHistory />} />
					<Route path="/features" element={<Features />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/profile" element={ <ProfilePage/> }/>
					<Route path="/generate" element={ <UploadCV/> }/>
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
