import { Route, Routes, Navigate } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoutes from "./PublicRoute";
import Dashboard from "@/views/Dashboard";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Loading from "@/components/common/Loading";

const AppRouter = () => (
  <Routes>
    <Route element={<PublicRoutes />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/loading" element={<Loading />} />
    </Route>

    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>

    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
);

export default AppRouter;
