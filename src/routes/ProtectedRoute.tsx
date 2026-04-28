import { Navigate } from "react-router-dom";

const isAuthenticated = true; // temporary

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;