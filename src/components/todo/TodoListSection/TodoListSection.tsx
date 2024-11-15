import Button from "@/components/common/Button";
import { TodoListType } from "@/types/todo.type";
import { formatToYYYYMMDD } from "@/utils/formatDate";
import { Link } from "react-router-dom";
import TodoFiltering from "../TodoFilter";
import TodoLabel from "../TodoLabel";
import styles from "./TodoListSection.module.css";

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
        <TodoFiltering />
        <Link to="/create">
          <Button text="추가" style={{ width: "80px" }} />
        </Link>
      </header>

      <ul className={styles["todo-list"]}>
        {isTodosLoading ? (
          <p>...todo 목록 불러오는 중</p>
        ) : !todos || !todos.length ? (
          <p>todo가 없습니다.</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              <Link to={`?id=${todo.id}`} className={`${styles["todo-item"]}`}>
                <p className={styles["todo-title"]}>{todo.title}</p>
                <TodoLabel priority={todo.priority} />
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
