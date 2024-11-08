export interface TodoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type TodoListType = TodoType[];

export interface GetResTodosType {
  data: TodoListType;
}

export type PostReqTodoType = Pick<TodoType, "title" | "content">;
