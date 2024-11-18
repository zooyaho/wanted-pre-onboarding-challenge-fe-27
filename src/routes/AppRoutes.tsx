import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingupPage from "@/pages/SignupPage";
import LoginPage from "@/pages/LoginPage";
import TodoPage from "@/pages/TodoPage";
import CreateTodoPage from "@/pages/CreateTodoPage";
import { ROUTES } from "@/constants/routes";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "@/pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* 로그인 페이지 */}
        <Route path={ROUTES.AUTH.LOGIN} element={<LoginPage />} />

        {/* 회원가입 페이지 */}
        <Route path={ROUTES.AUTH.SIGNUP} element={<SingupPage />} />

        {/* 인증이 필요한 페이지 route */}
        <Route element={<PrivateRoute />}>
          {/* 루트 - Todo 목록 페이지 */}
          <Route path={ROUTES.HOME} element={<TodoPage />} />

          {/* Todo 작성 페이지 */}
          <Route path={ROUTES.TODO_CREATE} element={<CreateTodoPage />} />
        </Route>

        {/* 404 페이지 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
