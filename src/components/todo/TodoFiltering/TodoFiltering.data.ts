import PRIORITY from "@/constants/todoPriority";

// TODO :: 쿼리 스트링 문자 상수화 작업
const sortOptions = [
  { label: "최신순", value: { sort: "updatedAt", order: "desc" } },
  { label: "오래된 순", value: { sort: "updatedAt", order: "asc" } },
  { label: "우선순위 높은 순", value: { sort: "priority", order: "desc" } },
  { label: "우선순위 낮은 순", value: { sort: "priority", order: "asc" } },
  { label: "생성일순", value: { sort: "createdAt", order: "asc" } },
];

const priorityOptions = [
  { label: "높음", value: PRIORITY.URGENT },
  { label: "보통", value: PRIORITY.NORMAL },
  { label: "낮음", value: PRIORITY.LOW },
];

export { sortOptions, priorityOptions };
