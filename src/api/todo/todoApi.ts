import { API_PATHS } from "@/constants/apiPaths";
import axiosInstance from "../axiosInstance";
import { GetResTodosType, PostReqTodoType } from "@/types/todo.type";

/** todo 목록 */
export const getTodos = async (): Promise<GetResTodosType> => {
  const response = await axiosInstance.get(API_PATHS.TODOS);
  return response.data;
};

/** todo 생성 */
export const postCreateTodo = async (title: string, content: string) => {
  const response = await axiosInstance.post(API_PATHS.TODOS, {
    title,
    content,
  });
  return response.data;
};

/** todo 삭제 */
export const deleteTodo = async (id: string) => {
  const response = await axiosInstance.delete(`${API_PATHS.TODOS}/${id}`);
  return response.data;
};

/** todo 수정 */
export const putUpdateTodo = async (
  id: string,
  title: string,
  content: string
) => {
  const response = await axiosInstance.put(`${API_PATHS.TODOS}/${id}`, {
    title,
    content,
  });
  return response.data;
};
