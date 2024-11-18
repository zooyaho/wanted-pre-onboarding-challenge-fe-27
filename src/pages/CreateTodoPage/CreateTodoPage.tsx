import RootLayout from "@/components/layout/RootLayout";
import TodoForm from "@/components/todo/TodoForm";
import { useNavigate } from "react-router-dom";
import styles from "./CreateTodoPage.module.css";
import { ROUTES } from "@/constants/routes";
import { usePostCreateTodo } from "@/features/todo/todoApi.query";
import { TodoPriorityType } from "@/types/todo.type";

/** todo 작성 페이지 */
export default function CreateTodoPage() {
  const navigate = useNavigate();
  const { mutatePostCreateTodo, isCreateTodoPending } = usePostCreateTodo();

  const onCreateSubmit = async (
    title: string,
    content: string,
    priority: TodoPriorityType
  ) => {
    mutatePostCreateTodo({ title, content, priority });
  };
  const onCancelCreate = () => {
    navigate(ROUTES.HOME); // todo list 페이지 이동
  };

  return (
    <RootLayout>
      <section className={styles.section}>
        <TodoForm
          onSubmit={onCreateSubmit}
          mainButton={{ text: "저장", isLoading: isCreateTodoPending }}
          subButton={{
            text: "취소",
            isDisabled: isCreateTodoPending,
            onClick: onCancelCreate,
          }}
        />
      </section>
    </RootLayout>
  );
}
