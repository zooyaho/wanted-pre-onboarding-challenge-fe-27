import axiosInstance from "./axiosInstance";

/** todo 목록 */
export const getTodos = async () => {
  const response = await axiosInstance.get("/todos");
  return response.data;
};

/** todo 생성 */
export const postCreateTodo = async (title: string, content: string) => {
  const response = await axiosInstance.post("/todos", {
    title,
    content,
  });
  return response.data;
};

/** todo 삭제 */
export const deleteTodo = async (id: string) => {
  const response = await axiosInstance.delete(`/todos/${id}`);
  return response.data;
};

/** todo 수정 */
export const putUpdateTodo = async (
  id: string,
  title: string,
  content: string
) => {
  const response = await axiosInstance.put(`/todos/${id}`, { title, content });
  return response.data;
};
