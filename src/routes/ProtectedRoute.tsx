import { Navigate, Outlet } from "react-router";
import useAuthStore from "../store/authStore";

const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => !!state.token);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
