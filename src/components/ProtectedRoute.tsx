import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute() {
  const { isAuth } = useAuth();
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
