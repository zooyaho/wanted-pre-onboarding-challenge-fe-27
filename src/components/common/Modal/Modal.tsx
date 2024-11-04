import { PropsWithChildren } from "react";
import Button from "@/components/common/Button";
import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";

interface ModalPropsType extends PropsWithChildren {
  title?: string;
  content?: string;
  isShowCloseBtn?: boolean;
  isShow: boolean;
  onClose?: () => void;
  mainButton?: {
    syleType?: "primary" | "secondary";
    text: string;
    disabled?: boolean;
    isLoading?: boolean;
    onClick: () => void;
  };
  subButton?: {
    syleType?: "primary" | "secondary";
    text: string;
    disabled?: boolean;
    isLoading?: boolean;
    onClick: () => void;
  };
}

export default function Modal({
  isShow,
  title,
  content,
  isShowCloseBtn,
  onClose,
  mainButton,
  subButton,
  children,
}: ModalPropsType) {
  return (
    <>
      <div
        className={`${styles.overlay} ${
          isShow ? styles.visible : styles.hidden
        }`}
      >
        <div
          className={`${styles.modal} ${
            isShow ? styles.scaleIn : styles.scaleOut
          }`}
        >
          {(title || isShowCloseBtn) && (
            <header className={styles.header}>
              <h2 className={styles.title}>{title}</h2>
              {onClose && (
                <button className={styles.closeButton} onClick={onClose}>
                  <IoClose />
                </button>
              )}
            </header>
          )}
          <div className={styles.content}>
            {children}
            {content && <p>{content}</p>}
          </div>
          {(subButton || mainButton) && (
            <footer className={styles.footer}>
              {subButton && (
                <Button
                  styleType={subButton.syleType || "secondary"}
                  onClick={subButton.onClick}
                  disabled={subButton.disabled}
                  isLoading={subButton.isLoading}
                  text={subButton.text}
                />
              )}
              {mainButton && (
                <Button
                  styleType={mainButton.syleType || "primary"}
                  onClick={mainButton.onClick}
                  disabled={mainButton.disabled}
                  isLoading={mainButton.isLoading}
                  text={mainButton.text}
                />
              )}
            </footer>
          )}
        </div>
      </div>
    </>
  );
}
