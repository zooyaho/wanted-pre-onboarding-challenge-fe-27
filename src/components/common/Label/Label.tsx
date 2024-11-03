import { LabelHTMLAttributes } from "react";
import styles from "./Label.module.css";

interface LabelPropsType extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  isRequired?: boolean;
}

export default function Label({ text, isRequired, ...props }: LabelPropsType) {
  return (
    <label className={styles.label} {...props}>
      {text}
      {isRequired && <i className={styles["required-asterisk"]}>*</i>}
    </label>
  );
}
