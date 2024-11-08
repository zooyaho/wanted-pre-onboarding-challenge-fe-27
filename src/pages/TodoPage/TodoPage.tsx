import RootLayout from "@/components/layout/RootLayout";
import styles from "./TodoPage.module.css";
import TodoListSection from "@/components/todo/TodoListSection";
import { useEffect, useMemo, useState } from "react";
import { deleteTodo, putUpdateTodo } from "@/api/todo/todoApi";
import { TodoType } from "@/types/todo.type";
import TodoDetailSection from "@/components/todo/TodoDetailSection";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import TodoEditSection from "@/components/todo/TodoEditSection";
import { ROUTES } from "@/constants/routes";
import { useDeleteTodo, useGetTodos } from "@/api/todo/todoApi.query";

export default function TodoPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const mode = searchParams.get("mode");
  const { todosData, refetchTodosData, isTodosFetchLoading } = useGetTodos();
  const { mutateAsyncDeleteTodo, isDeleteTodoPending } = useDeleteTodo();

  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);

  const isEditMode = useMemo(() => mode === "edit", [mode]);

  /** todo 삭제 호출 메서드
   * - 삭제 후 todo 목록 호출
   * - 선택한 상태 초기화
   */
  const deleteSettingTodo = async (id: string) => {
    await mutateAsyncDeleteTodo({ id });
    setSelectedTodo(null);
  };

  /** todo 수정 호출 메서드
   * - 수정 후 todo 목록 호출
   * - edit mode 취소
   */
  const updateSettingTodo = async (newTitle: string, newContent: string) => {
    try {
      if (!id) {
        navigate(ROUTES.HOME); // id없을 경우 루트경로로 리다이렉트
        return;
      }

      await putUpdateTodo(id, newTitle, newContent);
      refetchTodosData();
      navigate(location.pathname);
    } catch (error) {
      alert("Todo 수정이 진행되지 않았습니다.");
    }
  };

  useEffect(() => {
    if (id && todosData && todosData.length > 0) {
      // 선택한 todo가 있을 경우 상태 저장
      const todo = todosData.find((todo) => todo.id === id);
      setSelectedTodo(todo || null);
    } else {
      setSelectedTodo(null);
    }
  }, [id, todosData]);

  return (
    <RootLayout mainStyle={{ gap: "20px" }}>
      {/* todo 목록 */}
      <TodoListSection todos={todosData} isTodosLoading={isTodosFetchLoading} />
      {!selectedTodo ? (
        <div className={styles["non-desc-wrapper"]}>
          <strong className={styles["non-desc"]}>todo를 선택해주세요.</strong>
        </div>
      ) : isEditMode ? (
        // todo 수정
        <TodoEditSection todo={selectedTodo} updateTodo={updateSettingTodo} />
      ) : (
        // todo 상세
        <TodoDetailSection
          todo={selectedTodo}
          deleteTodo={deleteSettingTodo}
          isDeleteTodoPending={isDeleteTodoPending}
        />
      )}
    </RootLayout>
  );
}
