export const TODO_FILTER_KEYS = {
  ORDER: "order",
  SORT: "sort",
  PRIORITY_FILTER: "priorityFilter",
  KEYWORD: "keyword",
  COUNT_ONLY: "countOnly",
} as const;

export const TODO_SORT_VALUES = {
  UPDATED_AT: "updatedAt",
  CREATED_AT: "createdAt",
  PRIORITY: "priority",
} as const;

export const TODO_ORDER_VALUES = {
  ASC: "asc",
  DESC: "desc",
} as const;
