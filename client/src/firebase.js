// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAdmTLAUvhA3ygAqDE-rM14S8Sn1qKjW8s",
	authDomain: "coverly.firebaseapp.com",
	projectId: "coverly",
	storageBucket: "coverly.appspot.com",
	messagingSenderId: "237419298097",
	appId: "1:237419298097:web:f0a9acd52e3b5ff0530410",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
