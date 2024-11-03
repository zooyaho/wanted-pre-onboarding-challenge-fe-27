import { TextareaHTMLAttributes, useRef } from "react";
import styles from "./Textarea.module.css";

interface TextareaPropsType
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  minHeight?: number;
}

export default function Textarea({
  minHeight = 200,
  ...props
}: TextareaPropsType) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onInput = () => {
    if (textareaRef.current) {
      // 높이를 초기화한 후 scrollHeight로 높이 설정
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <textarea
      ref={textareaRef}
      className={styles.textarea}
      style={{
        minHeight: `${minHeight}px`,
      }}
      onInput={onInput}
      {...props}
    />
  );
}
