import AuthForm from "@/components/auth/AuthForm";
import styles from "./AuthPage.module.css";

export default function AuthPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Welcome!</h1>
      <AuthForm />
    </section>
  );
}
