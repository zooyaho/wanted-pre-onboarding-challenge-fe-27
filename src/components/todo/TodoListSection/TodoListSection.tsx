import { Link } from "react-router-dom";
import styles from "./TodoListSection.module.css";
import Button from "@/components/common/Button";

/** todo 목록 section */
export default function TodoListSection() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Link to="/create">
          <Button text="추가" style={{ width: "80px" }} />
        </Link>
      </header>

      <div className={styles["todo-list-container"]}>TodoList</div>
    </section>
  );
}
