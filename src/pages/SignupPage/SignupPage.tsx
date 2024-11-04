import AuthForm from "@/components/auth/AuthForm";
import styles from "./SignupPage.module.css";

export default function SingupPage() {
  const onSignupSubmit = (id: string, pw: string) => {
    console.log(id, pw);
  };
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>회원가입</h1>
      <AuthForm onLoginSubmit={onSignupSubmit} submitBtnText="회원가입" />
    </section>
  );
}
