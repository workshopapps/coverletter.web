import React from "react";
import Button from "../Components/Ui/Button";
import { ReactComponent as Google } from "../Assets/google.svg";
// import { useGlobalContext } from "../context/context";
// import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
	// const { googleSignIn } = useGlobalContext();
	// const navigate = useNavigate();

	// const handleGoogleSignIn = async () => {
	// 	try {
	// 		await googleSignIn();
	// 		navigate("/profile");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<form action="https://api.coverly.hng.tech/api/v1/auth/google">
			<Button
				className={
					"btn btnLong w-[100%] btnSecondary disabled:opacity-50 disabled:cursor-not-allowed"
				}
				children={"Register with Google"}
				icon={<Google />}
				type="submit"
				// onClick={handleGoogleSignIn}
			/>
		</form>
	);
};

export default GoogleAuth;
