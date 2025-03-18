import { Navigate, Outlet } from "react-router";
import useAuthStore from "../store/authStore";

const PublicRoutes = () => {
  const { token } = useAuthStore();

  return token ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoutes;
