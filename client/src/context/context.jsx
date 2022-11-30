import React, { useState, useContext, createContext } from "react";

import { getUserFromLocalStorage } from "../Utils/localStorage";
const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [user, setUser] = useState(getUserFromLocalStorage());
	const [file, setFile] = useState("");
	const [coverLetter, setCoverLetter] = useState("");
	const [fileName, setFileName] = useState("");
	const [fileSize, setFileSize] = useState();
	const [userData, setUserData] = useState({});

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
				userData,
				setUserData,
				fileSize,
				setFileSize,
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
