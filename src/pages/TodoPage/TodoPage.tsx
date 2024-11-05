import RootLayout from "@/components/layout/RootLayout";
import styles from "./TodoPage.module.css";
import TodoListSection from "@/components/todo/TodoListSection";
import { useEffect, useMemo, useState } from "react";
import { deleteTodo, getTodos } from "@/api/todoApi";
import { TodoListType, TodoType } from "@/types/todo.type";
import TodoDetailSection from "@/components/todo/TodoDetailSection";
import { useParams, useSearchParams } from "react-router-dom";
import TodoEditSection from "@/components/todo/TodoEditSection";

export default function TodoPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [todos, setTodos] = useState<TodoListType>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);

  const isEditMode = useMemo(() => mode === "edit", [mode]);

  /** todo 목록 호출 메서드
   * - 상태에 저장
   */
  const fetchGetTodos = async () => {
    try {
      const todos = await getTodos();
      setTodos(todos.data);
    } catch (error) {
      alert("Todo 목록 불러오기를 실패했습니다.");
    }
  };

  /** todo 삭제 호출 메서드
   * - 삭제 후 todo 목록 호출
   * - 선택한 상태 초기화
   */
  const fetchDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      fetchGetTodos();
      setSelectedTodo(null);
    } catch (error) {
      alert("Todo삭제가 진행되지 않았습니다.");
    }
  };

  useEffect(() => {
    if (id && todos.length > 0) {
      // 선택한 todo가 있을 경우 상태 저장
      const todo = todos.find((todo) => todo.id === id);
      setSelectedTodo(todo || null);
    }
  }, [id, todos]);

  useEffect(() => {
    // 초기 렌더링 시 todos 초기화
    fetchGetTodos();
  }, []);

  return (
    <RootLayout mainStyle={{ gap: "20px" }}>
      {/* todo 목록 */}
      <TodoListSection todos={todos} />
      {!selectedTodo ? (
        <div className={styles["non-desc-wrapper"]}>
          <strong className={styles["non-desc"]}>todo를 선택해주세요.</strong>
        </div>
      ) : isEditMode ? (
        // todo 수정
        <TodoEditSection todo={selectedTodo} />
      ) : (
        // todo 상세
        <TodoDetailSection todo={selectedTodo} deleteTodo={fetchDeleteTodo} />
      )}
    </RootLayout>
  );
}
