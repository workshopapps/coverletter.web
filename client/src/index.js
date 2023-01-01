import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./fontawesome";

import { AppProvider } from "./context/context";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-T8SFMJJ'
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
);
