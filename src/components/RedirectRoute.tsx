import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RedirectRoute() {
  const { isAuth } = useAuth();

  return isAuth ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

export default RedirectRoute;
