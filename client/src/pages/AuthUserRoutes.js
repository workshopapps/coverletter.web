import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const ProtectedRoute = ({ children }) => {
	const { user } = useGlobalContext();
	if (!user) {
		return <Navigate to="/" />;
	}
	return children;
};

export default ProtectedRoute;
