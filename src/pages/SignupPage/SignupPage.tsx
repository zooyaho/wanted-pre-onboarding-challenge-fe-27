import AuthForm from "@/components/auth/AuthForm";
import styles from "./SignupPage.module.css";
import { usePostSignUp } from "@/api/auth/authApi.query";

export default function SingupPage() {
  const { mutatePostSignUp, isPending } = usePostSignUp();

  /**
   * 회원가입 이벤트 핸들러
   */
  const onSignupSubmit = (email: string, password: string) => {
    mutatePostSignUp({ email, password });
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>회원가입</h1>
      <AuthForm
        onLoginSubmit={onSignupSubmit}
        submitBtnText="회원가입"
        isSubmitLoading={isPending}
      />
    </section>
  );
}
