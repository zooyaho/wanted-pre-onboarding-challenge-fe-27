import RootLayout from "@/components/layout/RootLayout";
import styles from "./TodoPage.module.css";
import TodoListSection from "@/components/todo/TodoListSection";

export default function TodoPage() {
  return (
    <RootLayout mainStyle={{ gap: "20px" }}>
      {/* todo 목록 */}
      <TodoListSection />
      {/* todo 상세 */}
      <TodoListSection />
    </RootLayout>
  );
}
