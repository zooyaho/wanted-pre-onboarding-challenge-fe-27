import AuthForm from "@/components/auth/AuthForm";
import styles from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "@/constants/routes";
import { usePostLogin } from "@/api/auth/authApi.query";

export default function LoginPage() {
  const navigate = useNavigate();
  const { mutatePostLogin, isError, isPending } = usePostLogin();

  /**
   * 로그인 이벤트 핸들러
   */
  const onLoginSubmit = (email: string, password: string) => {
    mutatePostLogin({ email, password });
  };

  // 컴포넌트가 렌더링될 때 토큰 확인하여 리다이렉트
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // 토큰이 있으면 루트경로로 리다이렉트
      navigate(ROUTES.HOME);
    }
  }, [navigate]);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Welcome!</h1>
      <div className={styles["form-wrapper"]}>
        <AuthForm
          onLoginSubmit={onLoginSubmit}
          submitBtnText="로그인"
          isFetchError={isError}
          isSubmitLoading={isPending}
        />
        <Link to="/auth/signup" className={styles["signup-link"]}>
          회원가입 하러가기
        </Link>
      </div>
    </section>
  );
}
