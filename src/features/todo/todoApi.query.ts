import { QUERY_KEY } from "@/constants/queryKeys";
import { ROUTES } from "@/constants/routes";
import { RootStateType } from "@/store/store";
import { PostCreateReqTodoType, PutUpdateReqTodoType } from "@/types/todo.type";
import updateSearchParams from "@/utils/updateSearchParams";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  deleteTodo,
  getTodo,
  getTodos,
  postCreateTodo,
  putUpdateTodo,
} from "./todoApi";

/** todo 목록 */
export const useGetTodos = () => {
  const isAuthenticated = useSelector(
    (state: RootStateType) => state.auth.isAuthenticated
  );
  const {
    data: todosData,
    refetch: refetchTodosData,
    isError: isTodosFetchError,
    isLoading: isTodosFetchLoading,
    ...rest
  } = useQuery({
    queryKey: [QUERY_KEY.TODO.GET_TODOS],
    queryFn: () => getTodos(),
    enabled: isAuthenticated,
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

/** 개별 todo */
export const useGetTodo = (id?: string) => {
  const isAuthenticated = useSelector(
    (state: RootStateType) => state.auth.isAuthenticated
  );
  const {
    data: todoData,
    refetch: refetchTodoData,
    isError: isTodoFetchError,
    isLoading: isTodoFetchLoading,
    ...rest
  } = useQuery({
    queryKey: [QUERY_KEY.TODO.GET_TODO, id],
    queryFn: () => getTodo(id ?? ""),
    enabled: isAuthenticated && !!id,
    refetchOnMount: "always", // 무효화 시 refetch 실행
    select: (result) => {
      const { data } = result;
      return data;
    },
  });

  if (isTodoFetchError) {
    alert("Todo 불러오기를 실패했습니다.");
  }

  return {
    todoData,
    refetchTodoData,
    isTodoFetchError,
    isTodoFetchLoading,
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
    mutationFn: (newTodo: PostCreateReqTodoType) =>
      postCreateTodo(newTodo.title, newTodo.content, newTodo.priority),
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
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

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
      const updateParams = updateSearchParams(null, ["id"], searchParams);
      setSearchParams(updateParams);
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

/** todo 수정 */
export const useUpdateTodo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const {
    mutate: mutatePutUpdateTodo,
    mutateAsync: mutateAsyncPutUpdateTodo,
    isPending: isPutUpdateTodoPending,
    isSuccess: isPutUpdateTodoSuccess,
    ...rest
  } = useMutation({
    mutationKey: [QUERY_KEY.TODO.PUT_UPDATE_TODO],
    mutationFn: (reqParams: PutUpdateReqTodoType) =>
      putUpdateTodo(
        reqParams.id,
        reqParams.title,
        reqParams.content,
        reqParams.priority
      ),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.TODO.GET_TODOS],
      });
      const updateParams = updateSearchParams(null, ["mode"], searchParams);
      setSearchParams(updateParams);
    },
    onError(error) {
      alert("Todo 수정이 진행되지 않았습니다.");
    },
  });

  return {
    mutatePutUpdateTodo,
    mutateAsyncPutUpdateTodo,
    isPutUpdateTodoPending,
    isPutUpdateTodoSuccess,
    ...rest,
  };
};
