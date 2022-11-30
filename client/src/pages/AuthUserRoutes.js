import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const AuthUserRoute = ({ children }) => {
	const { user } = useGlobalContext();
	if (!user) {
		return <Navigate to="/" />;
	}
	return children;
};

export default AuthUserRoute;
