import AuthForm from "@/components/auth/AuthForm";
import { usePostLogin } from "@/features/auth/authApi.query";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const { mutatePostLogin, isError, isPending } = usePostLogin();

  /**
   * 로그인 이벤트 핸들러
   */
  const onLoginSubmit = (email: string, password: string) => {
    mutatePostLogin({ email, password });
  };

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
