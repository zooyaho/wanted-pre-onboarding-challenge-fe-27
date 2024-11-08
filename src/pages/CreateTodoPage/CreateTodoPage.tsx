import RootLayout from "@/components/layout/RootLayout";
import TodoForm from "@/components/todo/TodoForm";
import { useNavigate } from "react-router-dom";
import styles from "./CreateTodoPage.module.css";
import { ROUTES } from "@/constants/routes";
import { usePostCreateTodo } from "@/api/todo/todoApi.query";

/** todo 작성 페이지 */
export default function CreateTodoPage() {
  const navigate = useNavigate();
  const { mutatePostCreateTodo, isCreateTodoPending } = usePostCreateTodo();

  const onCreateSubmit = async (title: string, content: string) => {
    mutatePostCreateTodo({ title, content });
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
