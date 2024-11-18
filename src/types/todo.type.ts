import {
  TODO_FILTER_KEYS,
  TODO_ORDER_VALUES,
  TODO_SORT_VALUES,
} from "@/constants/todoFilter";
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

export type PutUpdateReqTodoType = Pick<
  TodoType,
  "id" | "title" | "content" | "priority"
>;

export interface GetTodosParamsType {
  [TODO_FILTER_KEYS.SORT]?: (typeof TODO_SORT_VALUES)[keyof typeof TODO_SORT_VALUES];
  [TODO_FILTER_KEYS.ORDER]?: (typeof TODO_ORDER_VALUES)[keyof typeof TODO_ORDER_VALUES];
  [TODO_FILTER_KEYS.PRIORITY_FILTER]?: TodoPriorityType;
  [TODO_FILTER_KEYS.KEYWORD]?: string;
  [TODO_FILTER_KEYS.COUNT_ONLY]?: boolean;
}
