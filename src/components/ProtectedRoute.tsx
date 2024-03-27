import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingLayout from "./LoadingLayout";

function ProtectedRoute() {
  const { isAuth, isLoading } = useAuth();

  console.log({ isAuth, isLoading });

  return (
    <LoadingLayout isLoading={isLoading}>
      {isAuth ? <Outlet /> : <Navigate to="/login" replace />}
    </LoadingLayout>
  );
}

export default ProtectedRoute;
