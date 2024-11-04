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
