import { ORDER_KEYS, SORT_KEYS } from "@/constants/sortOptions";
import PRIORITY from "@/constants/todoPriority";

const sortOptions = [
  {
    label: "최신순",
    value: { sort: SORT_KEYS.UPDATED_AT, order: ORDER_KEYS.DESC },
  },
  {
    label: "오래된 순",
    value: { sort: SORT_KEYS.UPDATED_AT, order: ORDER_KEYS.ASC },
  },
  {
    label: "우선순위 높은 순",
    value: { sort: SORT_KEYS.PRIORITY, order: ORDER_KEYS.DESC },
  },
  {
    label: "우선순위 낮은 순",
    value: { sort: SORT_KEYS.PRIORITY, order: ORDER_KEYS.ASC },
  },
  {
    label: "생성일순",
    value: { sort: SORT_KEYS.CREATED_AT, order: ORDER_KEYS.ASC },
  },
];

const priorityOptions = [
  { label: "높음", value: { priority: PRIORITY.URGENT } },
  { label: "보통", value: { priority: PRIORITY.NORMAL } },
  { label: "낮음", value: { priority: PRIORITY.LOW } },
];

export { sortOptions, priorityOptions };
