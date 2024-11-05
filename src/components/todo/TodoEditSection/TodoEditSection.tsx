import { TodoType } from "@/types/todo.type";
import TodoForm from "../TodoForm";
import styles from "./TodoEditSection.module.css";
import { useLocation, useNavigate } from "react-router-dom";

interface TodoEditSectionPropsType {
  todo: TodoType;
  updateTodo: (title: string, content: string) => void;
}

export default function TodoEditSection({
  todo,
  updateTodo,
}: TodoEditSectionPropsType) {
  const navigate = useNavigate();
  const location = useLocation();

  /** 수정 취소 버튼 클릭 메서드 */
  const onCancelEdit = () => {
    navigate(location.pathname);
  };

  /** 수정 완료 버튼 클릭 메서드 */
  const onUpdateSubmit = (titleValue: string, contentValue: string) => {
    updateTodo(titleValue, contentValue);
  };

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
