import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Label from "@/components/common/Label";
import styles from "./AuthForm.module.css";
import { useState } from "react";

export default function AuthForm() {
  const [idValue, setIdValue] = useState("");
  const [idIsValid, setIdIsValid] = useState(false);

  const [pwValue, setPwValue] = useState("");
  const [pwIsValid, setPwIsValid] = useState(false);

  /**
   * 아이디 필드 변경 시 호출 메서드
   * - 상태 저장
   * - 유효성 검사
   */
  const onIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIdValue = e.target.value;

    setIdValue(newIdValue);

    if (newIdValue.includes("@") && newIdValue.includes(".")) {
      setIdIsValid(true);
    } else {
      setIdIsValid(false);
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

  return (
    <form className={styles.form}>
      <div className={styles["input-wrapper"]}>
        <Label text="ID" isRequired />
        <Input
          value={idValue}
          status={idIsValid ? "success" : !idValue.length ? "default" : "error"}
          helperMessage={
            !idIsValid && idValue.length
              ? "올바른 이메일 형식으로 입력해주세요."
              : ""
          }
          onChange={onIdInputChange}
        />
      </div>
      <div className={styles["input-wrapper"]}>
        <Label text="PW" isRequired />
        <Input
          value={pwValue}
          status={pwIsValid ? "success" : !pwValue.length ? "default" : "error"}
          helperMessage={
            !pwIsValid && pwValue.length ? "8자 이상 입력 해주세요." : ""
          }
          onChange={onPwInputChange}
        />
      </div>
      <Button
        text="로그인 또는 회원가입"
        type="submit"
        disabled={!(idIsValid && pwIsValid)}
      />
    </form>
  );
}
