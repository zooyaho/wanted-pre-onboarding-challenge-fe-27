import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 루트 - Todo 목록 페이지 */}
        {/* <Route path="/" element={<TodoListPage />} /> */}

        {/* Todo 상세 페이지 */}
        {/* <Route path="/:id" element={<TodoDetailPage />} /> */}

        {/* Todo 수정 페이지 */}
        {/* <Route path="/:id/edit" element={<TodoEditPage />} /> */}

        {/* 로그인 페이지 */}
        <Route path="/auth/login" element={<LoginPage />} />

        {/* 회원가입 페이지 */}
        <Route path="/auth/signup" element={<SingupPage />} />

        {/* Todo 작성 페이지 */}
        {/* <Route path="/create" element={<CreateTodoPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
