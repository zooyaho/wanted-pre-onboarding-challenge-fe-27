import { Link } from "react-router-dom";
import styles from "./TodoListSection.module.css";
import Button from "@/components/common/Button";
import { TodoListType } from "@/types/todo.type";
import { formatToYYYYMMDD } from "@/utils/formatDate";

interface TodoListSectionPropsType {
  todos?: TodoListType;
  isTodosLoading?: boolean;
}

/** todo 목록 section */
export default function TodoListSection({
  todos,
  isTodosLoading,
}: TodoListSectionPropsType) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Link to="/create">
          <Button text="추가" style={{ width: "80px" }} />
        </Link>
      </header>

      <ul className={styles["todo-list"]}>
        {!todos || isTodosLoading ? (
          <p>...todo 목록 불러오는 중</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              <Link to={`/${todo.id}`} className={`${styles["todo-item"]}`}>
                <p className={styles["todo-title"]}>{todo.title}</p>
                <span className={styles["todo-last-update"]}>
                  {formatToYYYYMMDD(todo.updatedAt)}
                </span>
              </Link>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
