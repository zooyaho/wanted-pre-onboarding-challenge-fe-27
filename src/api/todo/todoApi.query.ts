import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, getTodos, postCreateTodo } from "./todoApi";
import { QUERY_KEY } from "@/constants/queryKeys";
import { PostReqTodoType } from "@/types/todo.type";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

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
    enabled: !!localStorage.getItem("token"), // TODO:: 인증이 완료 되었을 때 true
    refetchOnMount: "always", // 무효화 시 refetch 실행
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

/** todo 생성 */
export const usePostCreateTodo = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: mutatePostCreateTodo,
    mutateAsync: mutateAsyncPostCreateTodo,
    isPending: isCreateTodoPending,
    ...rest
  } = useMutation({
    mutationKey: [QUERY_KEY.TODO.POST_CREATE_TODO],
    mutationFn: (newTodo: PostReqTodoType) =>
      postCreateTodo(newTodo.title, newTodo.content),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.TODO.GET_TODOS],
      });
      navigate(ROUTES.HOME); // todo list 페이지 이동
    },
    onError(error) {
      alert("todo 생성 실패. 다시 시도해주세요.");
    },
  });

  return {
    mutatePostCreateTodo,
    mutateAsyncPostCreateTodo,
    isCreateTodoPending,
    ...rest,
  };
};

/** todo 삭제 */
export const useDeleteTodo = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: mutateDeleteTodo,
    mutateAsync: mutateAsyncDeleteTodo,
    isPending: isDeleteTodoPending,
    isSuccess: isDeleteTodoSuccess,
    ...rest
  } = useMutation({
    mutationKey: [QUERY_KEY.TODO.DELETE_TODO],
    mutationFn: ({ id }: { id: string }) => deleteTodo(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.TODO.GET_TODOS],
      });
      navigate(ROUTES.HOME, { replace: true }); // 경로 리다이렉트
    },
    onError(error) {
      alert("Todo 삭제가 진행되지 않았습니다.");
    },
  });

  return {
    mutateDeleteTodo,
    mutateAsyncDeleteTodo,
    isDeleteTodoPending,
    isDeleteTodoSuccess,
    ...rest,
  };
};
