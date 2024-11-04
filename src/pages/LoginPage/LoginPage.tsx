import AuthForm from "@/components/auth/AuthForm";
import styles from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "@/api/authApi";
import { useEffect } from "react";
import { AxiosError } from "axios";

export default function LoginPage() {
  const navigate = useNavigate();

  /**
   * 로그인 이벤트 핸들러
   * - 로그인 요청
   * > 성공 시 localstorage에 token 저장 후 루트 경로로 이동
   * > 실패 시 alert 활성화
   */
  const onLoginSubmit = async (email: string, pw: string) => {
    try {
      const result = await postLogin(email, pw);
      localStorage.setItem("token", result.token);
      alert(result.message);
      navigate("/");
    } catch (error) {
      console.error(error);
      if ((error as AxiosError).response?.status === 400) {
        alert("로그인 실패. 이메일과 비밀번호를 다시 확인해주세요.");
      } else {
        alert("로그인 실패. 다시 시도해주세요.");
      }
    }
  };

  // 컴포넌트가 렌더링될 때 토큰 확인하여 리다이렉트
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // 토큰이 있으면 루트경로로 리다이렉트
      navigate("/");
    }
  }, [navigate]);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Welcome!</h1>
      <div className={styles["form-wrapper"]}>
        <AuthForm onLoginSubmit={onLoginSubmit} submitBtnText="로그인" />
        <Link to="/auth/signup" className={styles["signup-link"]}>
          회원가입 하러가기
        </Link>
      </div>
    </section>
  );
}
