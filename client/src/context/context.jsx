import React, { useState, useContext, createContext, useEffect } from "react";
import {
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	// signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebase";

import {
	getUserFromLocalStorage,
	getEmailFromLocalStorage,
} from "../Utils/localStorage";
const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [user, setUser] = useState(getUserFromLocalStorage());
	const [googleUser, setGoogleUser] = useState({});
	const [file, setFile] = useState("");
	const [coverLetter, setCoverLetter] = useState(false);
	const [fileName, setFileName] = useState("");
	const [userEmail, setUserEmail] = useState(getEmailFromLocalStorage());
	const [userData, setUserData] = useState("");
	const [fileSize, setFileSize] = useState();

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setGoogleUser(currentUser);
			console.log("User", currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isModalOpen,
				openModal,
				closeModal,
				openSidebar,
				closeSidebar,
				setIsModalOpen,
				file,
				setFile,
				fileName,
				setFileName,
				coverLetter,
				setCoverLetter,
				user,
				setUser,
				userEmail,
				setUserEmail,
				setUserData,
				fileSize,
				setFileSize,
				userData,
				googleSignIn,
				googleUser,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// invoke this hook in any component to have access to the global state
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };
