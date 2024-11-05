import { TodoType } from "@/types/todo.type";
import TodoForm from "../TodoForm";
import styles from "./TodoEditSection.module.css";

interface TodoEditSectionPropsType {
  todo: TodoType;
}

export default function TodoEditSection({ todo }: TodoEditSectionPropsType) {
  const onCancelEdit = () => {};
  const onUpdateSubmit = () => {};

  return (
    <section className={styles.section}>
      <TodoForm
        defaultTitle={todo.title}
        defaultContent={todo.content}
        onSubmit={onUpdateSubmit}
        mainButton={{ text: "완료" }}
        subButton={{
          text: "취소",
          onClick: onCancelEdit,
        }}
      />
    </section>
  );
}
