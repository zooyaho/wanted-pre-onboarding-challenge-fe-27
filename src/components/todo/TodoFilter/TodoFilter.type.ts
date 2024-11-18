import {
  TODO_FILTER_KEYS,
  TODO_SORT_VALUES,
  TODO_ORDER_VALUES,
} from "@/constants/todoFilter";
import PRIORITY from "@/constants/todoPriority";

export type TodoFilterKeyType =
  (typeof TODO_FILTER_KEYS)[keyof typeof TODO_FILTER_KEYS];

export interface TodoSortOptionValueType {
  sort: (typeof TODO_SORT_VALUES)[keyof typeof TODO_SORT_VALUES];
  order: (typeof TODO_ORDER_VALUES)[keyof typeof TODO_ORDER_VALUES];
}

export interface TodoPriorityOptionValueType {
  priorityFilter: (typeof PRIORITY)[keyof typeof PRIORITY];
}
