import {
  useDeleteTodo,
  useGetTodos,
  useUpdateTodo,
} from "@/features/todo/todoApi.query";
import RootLayout from "@/components/layout/RootLayout";
import TodoDetailSection from "@/components/todo/TodoDetailSection";
import TodoEditSection from "@/components/todo/TodoEditSection";
import TodoListSection from "@/components/todo/TodoListSection";
import { QUERY_KEY } from "@/constants/queryKeys";
import { ROUTES } from "@/constants/routes";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "./TodoPage.module.css";
import { TodoPriorityType } from "@/types/todo.type";

export default function TodoPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mode = searchParams.get("mode");
  const id = searchParams.get("id");
  const { todosData, isTodosFetchLoading } = useGetTodos();
  const { mutateAsyncDeleteTodo, isDeleteTodoPending } = useDeleteTodo();
  const { mutateAsyncPutUpdateTodo } = useUpdateTodo();

  const [isSelectedTodo, setIsSelectedTodo] = useState(false);
  const isEditMode = useMemo(() => mode === "edit", [mode]);

  /** todo 삭제 호출 메서드
   * - 삭제 후 todo 목록 호출
   * - 선택한 상태 초기화
   */
  const deleteSettingTodo = async (id: string) => {
    await mutateAsyncDeleteTodo({ id });
    setIsSelectedTodo(false);
  };

  /** todo 수정 호출 메서드
   * - 수정 후 todo 목록 호출
   * - edit mode 취소
   */
  const updateSettingTodo = async (
    title: string,
    content: string,
    priority: TodoPriorityType
  ) => {
    if (!id) {
      navigate(ROUTES.HOME); // id없을 경우 루트경로로 리다이렉트
      return;
    }
    await mutateAsyncPutUpdateTodo(
      { id, title, content, priority },
      {
        onSuccess() {
          queryClient.invalidateQueries({
            queryKey: [QUERY_KEY.TODO.GET_TODO, id],
          });
        },
      }
    );
  };

  useEffect(() => {
    if (id) {
      setIsSelectedTodo(true);
    } else {
      setIsSelectedTodo(false);
    }
  }, [id]);

  return (
    <RootLayout mainStyle={{ gap: "20px" }}>
      {/* todo 목록 */}
      <TodoListSection todos={todosData} isTodosLoading={isTodosFetchLoading} />
      {!isSelectedTodo ? (
        <div className={styles["non-desc-wrapper"]}>
          <strong className={styles["non-desc"]}>todo를 선택해주세요.</strong>
        </div>
      ) : isEditMode ? (
        // todo 수정
        <TodoEditSection updateTodo={updateSettingTodo} />
      ) : (
        // todo 상세
        <TodoDetailSection
          deleteTodo={deleteSettingTodo}
          isDeleteTodoPending={isDeleteTodoPending}
        />
      )}
    </RootLayout>
  );
}
