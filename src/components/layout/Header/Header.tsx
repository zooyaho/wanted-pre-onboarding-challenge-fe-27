import Button from "@/components/common/Button";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>TODO</h1>
        <Button
          text="로그아웃"
          style={{ width: "fit-content", marginRight: "20px" }}
        />
      </header>
    </>
  );
}
