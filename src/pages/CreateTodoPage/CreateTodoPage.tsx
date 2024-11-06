import { postCreateTodo } from "@/api/todoApi";
import RootLayout from "@/components/layout/RootLayout";
import TodoForm from "@/components/todo/TodoForm";
import { useNavigate } from "react-router-dom";
import styles from "./CreateTodoPage.module.css";
import { ROUTES } from "@/constants/routes";

/** todo 작성 페이지 */
export default function CreateTodoPage() {
  const navigate = useNavigate();

  const onCreateSubmit = async (title: string, content: string) => {
    try {
      await postCreateTodo(title, content);
      navigate(ROUTES.HOME); // todo list 페이지 이동
    } catch (error) {
      alert("todo 생성 실패. 다시 시도해주세요.");
    }
  };
  const onCancelCreate = () => {
    navigate(ROUTES.HOME); // todo list 페이지 이동
  };

  return (
    <RootLayout>
      <section className={styles.section}>
        <TodoForm
          onSubmit={onCreateSubmit}
          mainButton={{ text: "저장" }}
          subButton={{
            text: "취소",
            onClick: onCancelCreate,
          }}
        />
      </section>
    </RootLayout>
  );
}
