import Button from "@/components/common/Button";
import styles from "./TodoDetailSection.module.css";
import { TodoType } from "@/types/todo.type";
import { formatToYYYYMMDD } from "@/utils/formatDate";

interface TodoDetailSectionPropsType {
  todo: TodoType | null;
}

/** todo 읽기 section */
export default function TodoDetailSection({
  todo,
}: TodoDetailSectionPropsType) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Button text="삭제" styleType="secondary" style={{ width: "80px" }} />
        <Button text="수정" style={{ width: "80px" }} />
      </header>
      {todo ? (
        <div className={styles["todo-container"]}>
          <h3 className={styles.title}>{todo.title}</h3>
          <div className={styles["date-container"]}>
            <div className={styles["date-wrapper"]}>
              <span className={styles["date-desc"]}>Created</span>
              <p className={styles["date-text"]}>
                {formatToYYYYMMDD(todo.createdAt)}
              </p>
            </div>
            <div className={styles["date-wrapper"]}>
              <span className={styles["date-desc"]}>Last Updated</span>
              <p className={styles["date-text"]}>
                {formatToYYYYMMDD(todo.updatedAt)}
              </p>
            </div>
          </div>
          <p>{todo.content}</p>
        </div>
      ) : (
        <strong className={styles["non-desc"]}>todo를 선택해주세요.</strong>
      )}
    </section>
  );
}
