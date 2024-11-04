import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Label from "@/components/common/Label";
import styles from "./AuthForm.module.css";

export default function AuthForm() {
  return (
    <form className={styles.form}>
      <div className={styles["input-wrapper"]}>
        <Label text="ID" isRequired />
        <Input status="error" />
      </div>
      <div className={styles["input-wrapper"]}>
        <Label text="PW" isRequired />
        <Input />
      </div>
      <Button text="로그인 또는 회원가입" type="submit" />
    </form>
  );
}
