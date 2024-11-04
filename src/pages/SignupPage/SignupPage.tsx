import AuthForm from "@/components/auth/AuthForm";
import styles from "./SignupPage.module.css";
import { postSignUp } from "@/api/authApi";
import { useNavigate } from "react-router-dom";

export default function SingupPage() {
  const navigate = useNavigate();

  /**
   * 회원가입 이벤트 핸들러
   * - 회원가입 요청
   * > 성공 시 로그인 페이지로 이동
   * > 실패 시 alert 활성화
   */
  const onSignupSubmit = async (email: string, pw: string) => {
    try {
      const result = await postSignUp(email, pw);
      alert(result.message);
      navigate("/auth/login");
    } catch (e) {
      alert("회원가입 실패. 다시 시도해주세요.");
    }
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>회원가입</h1>
      <AuthForm onLoginSubmit={onSignupSubmit} submitBtnText="회원가입" />
    </section>
  );
}
