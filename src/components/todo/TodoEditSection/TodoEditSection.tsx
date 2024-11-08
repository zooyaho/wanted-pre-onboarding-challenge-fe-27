import TodoForm from "../TodoForm";
import styles from "./TodoEditSection.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetTodo } from "@/api/todo/todoApi.query";

interface TodoEditSectionPropsType {
  updateTodo: (title: string, content: string) => void;
  isPutUpdateTodoPending?: boolean;
}

export default function TodoEditSection({
  updateTodo,
  isPutUpdateTodoPending,
}: TodoEditSectionPropsType) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { todoData, isTodoFetchLoading } = useGetTodo(id ?? undefined);

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
      {isTodoFetchLoading ? (
        <p>todo 불러오는 중</p>
      ) : (
        <TodoForm
          defaultTitle={todoData?.title || ""}
          defaultContent={todoData?.content || ""}
          onSubmit={onUpdateSubmit}
          mainButton={{ text: "완료", isLoading: isPutUpdateTodoPending }}
          subButton={{
            text: "취소",
            onClick: onCancelEdit,
            isDisabled: isPutUpdateTodoPending,
          }}
        />
      )}
    </section>
  );
}
