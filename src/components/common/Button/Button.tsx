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
      {...props}
      type={props.type ?? "button"}
      className={`${styles.button} ${styles[`button-${styleType}`]}`}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? "...Loaing" : text}
    </button>
  );
}
