import PRIORITY from "@/constants/todoPriority";
import { useGetTodo } from "@/features/todo/todoApi.query";
import { TodoPriorityType } from "@/types/todo.type";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import TodoForm from "../TodoForm";
import styles from "./TodoEditSection.module.css";

interface TodoEditSectionPropsType {
  updateTodo: (
    title: string,
    content: string,
    priority: TodoPriorityType
  ) => void;
  isPutUpdateTodoPending?: boolean;
}

export default function TodoEditSection({
  updateTodo,
  isPutUpdateTodoPending,
}: TodoEditSectionPropsType) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { todoData, isTodoFetchLoading } = useGetTodo(id ?? undefined);

  /** 수정 취소 버튼 클릭 메서드 */
  const onCancelEdit = () => {
    navigate(`${location.pathname}?id=${id}`);
  };

  /** 수정 완료 버튼 클릭 메서드 */
  const onUpdateSubmit = (
    titleValue: string,
    contentValue: string,
    priority: TodoPriorityType
  ) => {
    updateTodo(titleValue, contentValue, priority);
  };

  return (
    <section className={styles.section}>
      {isTodoFetchLoading ? (
        <p>todo 불러오는 중</p>
      ) : (
        <TodoForm
          defaultTitle={todoData?.title || ""}
          defaultContent={todoData?.content || ""}
          defaultPriority={todoData?.priority || PRIORITY.NORMAL}
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
