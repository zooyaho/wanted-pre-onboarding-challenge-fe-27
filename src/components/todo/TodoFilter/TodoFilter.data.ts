import {
  TODO_FILTER_KEYS,
  TODO_ORDER_VALUES,
  TODO_SORT_VALUES,
} from "@/constants/todoFilter";
import PRIORITY from "@/constants/todoPriority";

const sortOptions = [
  {
    label: "최신순",
    value: {
      [TODO_FILTER_KEYS.SORT]: TODO_SORT_VALUES.UPDATED_AT,
      [TODO_FILTER_KEYS.ORDER]: TODO_ORDER_VALUES.DESC,
    },
  },
  {
    label: "오래된 순",
    value: {
      [TODO_FILTER_KEYS.SORT]: TODO_SORT_VALUES.UPDATED_AT,
      [TODO_FILTER_KEYS.ORDER]: TODO_ORDER_VALUES.ASC,
    },
  },
  {
    label: "우선순위 높은 순",
    value: {
      [TODO_FILTER_KEYS.SORT]: TODO_SORT_VALUES.PRIORITY,
      [TODO_FILTER_KEYS.ORDER]: TODO_ORDER_VALUES.DESC,
    },
  },
  {
    label: "우선순위 낮은 순",
    value: {
      [TODO_FILTER_KEYS.SORT]: TODO_SORT_VALUES.PRIORITY,
      [TODO_FILTER_KEYS.ORDER]: TODO_ORDER_VALUES.ASC,
    },
  },
  {
    label: "생성일순",
    value: {
      [TODO_FILTER_KEYS.SORT]: TODO_SORT_VALUES.CREATED_AT,
      [TODO_FILTER_KEYS.ORDER]: TODO_ORDER_VALUES.ASC,
    },
  },
];

const priorityOptions = [
  {
    label: "높음",
    value: { [TODO_FILTER_KEYS.PRIORITY_FILTER]: PRIORITY.URGENT },
  },
  {
    label: "보통",
    value: { [TODO_FILTER_KEYS.PRIORITY_FILTER]: PRIORITY.NORMAL },
  },
  {
    label: "낮음",
    value: { [TODO_FILTER_KEYS.PRIORITY_FILTER]: PRIORITY.LOW },
  },
];

export { sortOptions, priorityOptions };
