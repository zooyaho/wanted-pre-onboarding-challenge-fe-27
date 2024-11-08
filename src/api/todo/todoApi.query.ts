import { useQuery } from "@tanstack/react-query";
import { getTodos } from "./todoApi";
import { QUERY_KEY } from "@/constants/queryKeys";

/** todo 목록 */
export const useGetTodos = () => {
  const {
    data: todosData,
    refetch: refetchTodosData,
    isError: isTodosFetchError,
    isLoading: isTodosFetchLoading,
    ...rest
  } = useQuery({
    queryKey: [QUERY_KEY.TODO.GET_TODOS],
    queryFn: () => getTodos(),
    enabled: false, // TODO:: 인증이 완료 되었을 때 true
    select: (result) => {
      const { data } = result;
      return data;
    },
  });

  if (isTodosFetchError) {
    alert("Todo 목록 불러오기를 실패했습니다.");
  }

  return {
    todosData,
    refetchTodosData,
    isTodosFetchError,
    isTodosFetchLoading,
    ...rest,
  };
};
