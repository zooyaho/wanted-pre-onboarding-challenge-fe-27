import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  status?: "default" | "error" | "success";
  helperMessage?: string;
}

function Input({
  status = "default",
  helperMessage,
  ...props
}: InputPropsType) {
  return (
    <div className={styles["input-wrapper"]}>
      <input
        type="text"
        className={`${styles.input} ${styles[`input-${status}`]}`}
        {...props}
      />
      {helperMessage && (
        <p
          className={`${styles["helper-text"]} ${
            styles[`helper-text-${status}`]
          }`}
        >
          {helperMessage}
        </p>
      )}
    </div>
  );
}

export default Input;
