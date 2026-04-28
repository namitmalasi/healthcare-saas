import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isAuthChecked } = useAuthStore();

  if (!isAuthChecked) {
    return <p className="p-10">Loading...</p>;
  }
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
