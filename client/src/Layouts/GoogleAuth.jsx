import React from "react";
import Button from "../Components/Ui/Button";
import { ReactComponent as Google } from "../Assets/google.svg";

const GoogleAuth = () => {
	return (
		<form action="https://api.coverly.hng.tech/api/v1/auth/google">
			<Button
				className={
					"btn btnLong w-[100%] btnSecondary disabled:opacity-50 disabled:cursor-not-allowed"
				}
				children={"Continue with Google"}
				icon={<Google />}
				type="submit"
			/>
		</form>
	);
};

export default GoogleAuth;
