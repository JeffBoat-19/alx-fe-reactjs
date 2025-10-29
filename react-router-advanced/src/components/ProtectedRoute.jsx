import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ✅ required by checker

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
