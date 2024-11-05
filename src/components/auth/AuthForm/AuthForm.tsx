import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Label from "@/components/common/Label";
import styles from "./AuthForm.module.css";
import { useState } from "react";

interface AuthFormPropsType {
  onLoginSubmit: (email: string, pw: string) => void;
  submitBtnText: string;
}

export default function AuthForm({
  onLoginSubmit,
  submitBtnText,
}: AuthFormPropsType) {
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [pwValue, setPwValue] = useState("");
  const [pwIsValid, setPwIsValid] = useState(false);

  /**
   * 아이디 필드 변경 시 호출 메서드
   * - 상태 저장
   * - 유효성 검사
   */
  const onEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmailValue = e.target.value;

    setEmailValue(newEmailValue);

    if (newEmailValue.includes("@") && newEmailValue.includes(".")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  /**
   * 비밀번호 필드 변경 시 호출 메서드
   * - 상태 저장
   * - 유효성 검사
   */
  const onPwInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPwValue = e.target.value;

    setPwValue(newPwValue);

    if (newPwValue.length >= 8) {
      setPwIsValid(true);
    } else {
      setPwIsValid(false);
    }
  };

  /**
   * submit 이벤트 호출
   */
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLoginSubmit(emailValue, pwValue);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles["input-wrapper"]}>
        <Label text="Email" isRequired />
        <Input
          value={emailValue}
          status={
            emailIsValid ? "success" : !emailValue.length ? "default" : "error"
          }
          helperMessage={
            !emailIsValid && emailValue.length
              ? "올바른 이메일 형식으로 입력해주세요."
              : ""
          }
          onChange={onEmailInputChange}
        />
      </div>
      <div className={styles["input-wrapper"]}>
        <Label text="PW" isRequired />
        <Input
          value={pwValue}
          type="password"
          status={pwIsValid ? "success" : !pwValue.length ? "default" : "error"}
          helperMessage={
            !pwIsValid && pwValue.length ? "8자 이상 입력 해주세요." : ""
          }
          onChange={onPwInputChange}
        />
      </div>
      <Button
        text={submitBtnText}
        type="submit"
        disabled={!(emailIsValid && pwIsValid)}
      />
    </form>
  );
}
