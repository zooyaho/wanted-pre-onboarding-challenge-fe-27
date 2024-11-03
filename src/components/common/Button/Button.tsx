import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  styleType?: "primary" | "secondary";
  isLoading?: boolean;
}

export default function Button({
  text,
  styleType = "primary",
  isLoading,
  ...props
}: ButtonPropsType) {
  return (
    <button
      type={props.type ?? "button"}
      className={`${styles.button} ${styles[`button-${styleType}`]}`}
      disabled={props.disabled ?? isLoading}
      {...props}
    >
      {isLoading ? "...Loaing" : text}
    </button>
  );
}
