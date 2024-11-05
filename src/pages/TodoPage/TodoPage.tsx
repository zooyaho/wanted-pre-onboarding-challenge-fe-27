import RootLayout from "@/components/layout/RootLayout";
import styles from "./TodoPage.module.css";
import TodoListSection from "@/components/todo/TodoListSection";
import { useEffect, useState } from "react";
import { getTodos } from "@/api/todoApi";
import { TodoListType, TodoType } from "@/types/todo.type";
import TodoDetailSection from "@/components/todo/TodoDetailSection";
import { useParams } from "react-router-dom";

export default function TodoPage() {
  const { id } = useParams();
  const [todos, setTodos] = useState<TodoListType>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);

  useEffect(() => {
    if (id && todos.length > 0) {
      const todo = todos.find((todo) => todo.id === id);
      setSelectedTodo(todo || null);
    }
  }, [id, todos]);

  useEffect(() => {
    // 초기 렌더링 시 todos 초기화
    const fetchGetTodos = async () => {
      const todos = await getTodos();
      setTodos(todos.data);
    };
    fetchGetTodos();
  }, []);

  return (
    <RootLayout mainStyle={{ gap: "20px" }}>
      {/* todo 목록 */}
      <TodoListSection todos={todos} />
      {/* todo 상세 */}
      <TodoDetailSection todo={selectedTodo} />
    </RootLayout>
  );
}
