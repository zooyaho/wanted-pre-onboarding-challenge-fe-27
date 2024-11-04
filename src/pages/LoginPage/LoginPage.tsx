import AuthForm from "@/components/auth/AuthForm";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const onLoginSubmit = (id: string, pw: string) => {
    console.log(id, pw);
  };

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
