import axiosInstance from "./axiosInstance";

/** todo 생성 */
export const postCreateTodo = async (title: string, content: string) => {
  const response = await axiosInstance.post("/todos", {
    title,
    content,
  });
  return response.data;
};
