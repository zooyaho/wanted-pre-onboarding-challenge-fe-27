export const ROUTES = {
  HOME: "/",
  TODO_DETAIL: (id = ":id") => `/${id}`,
  TODO_CREATE: "/create",
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },
};
