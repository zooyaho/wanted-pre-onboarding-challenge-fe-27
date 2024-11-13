import { ROUTES } from "@/constants/routes";
import { RootStateType } from "@/store/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isAuthenticated = useSelector(
    (state: RootStateType) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    alert("로그인이 필요합니다.");
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  }
  return <Outlet />;
}
