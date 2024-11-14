import PRIORITY from "@/constants/todoPriority";

export interface TodoType {
  title: string;
  content: string;
  id: string;
  priority: TodoPriorityType;
  createdAt: string;
  updatedAt: string;
}

export type TodoListType = TodoType[];

export type TodoPriorityType = (typeof PRIORITY)[keyof typeof PRIORITY];

export interface GetResTodosType {
  data: TodoListType;
}
export interface GetResTodoType {
  data: TodoType;
}

export type PostCreateReqTodoType = Pick<
  TodoType,
  "title" | "content" | "priority"
>;

export type PutUpdateReqTodoType = Pick<TodoType, "id" | "title" | "content">;
