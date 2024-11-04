import RootLayout from "@/components/layout/RootLayout";
import styles from "./TodoPage.module.css";
import TodoListSection from "@/components/todo/TodoListSection";
import { useEffect, useState } from "react";
import { getTodos } from "@/api/todoApi";
import { TodoListType } from "@/types/todo.type";

export default function TodoPage() {
  const [todos, setTodos] = useState<TodoListType>([]);

  useEffect(() => {
    // 초기 렌더링 시 todos 초기화
    const fetchGetTodos = async () => {
      const todos = await getTodos();
      setTodos(todos.data);
    };
    fetchGetTodos();

    // TODO :: 경로 변경 시 todos 업데이트
  }, []);

  return (
    <RootLayout mainStyle={{ gap: "20px" }}>
      {/* todo 목록 */}
      <TodoListSection todos={todos} />
      {/* todo 상세 */}
      <TodoListSection todos={todos} />
    </RootLayout>
  );
}
