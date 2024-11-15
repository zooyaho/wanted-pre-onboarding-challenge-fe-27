import { ORDER_KEYS, SORT_KEYS } from "@/constants/sortOptions";
import PRIORITY from "@/constants/todoPriority";

export interface SortOptionValueType {
  sort: (typeof SORT_KEYS)[keyof typeof SORT_KEYS];
  order: (typeof ORDER_KEYS)[keyof typeof ORDER_KEYS];
}

export interface PriorityOptionValueType {
  priority: (typeof PRIORITY)[keyof typeof PRIORITY];
}
