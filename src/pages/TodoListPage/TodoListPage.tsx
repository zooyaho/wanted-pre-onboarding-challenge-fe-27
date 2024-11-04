import Button from "@/components/common/Button";
import RootLayout from "@/components/layout/RootLayout";
import { Link } from "react-router-dom";
import styles from "./TodoListPage.module.css";

export default function TodoListPage() {
  return (
    <RootLayout>
      <section className={styles.section}>
        <header className={styles.header}>
          <Link to="/create">
            <Button text="추가" style={{ width: "80px" }} />
          </Link>
        </header>

        <div className={styles["todo-list-container"]}>TodoListPage</div>
      </section>
    </RootLayout>
  );
}
