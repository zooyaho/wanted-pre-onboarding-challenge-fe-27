import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "@/constants/queryKeys";
import { useMutation } from "@tanstack/react-query";
import { postLogin, postSignUp } from "./authApi";
import { AxiosError } from "axios";
import { ROUTES } from "@/constants/routes";
import { UserType } from "@/types/user.type";
import { useDispatch } from "react-redux";
import { setToken } from "./authSlice";

/**
 * - 로그인 요청
 * > 성공 시 localstorage에 token 저장 후 루트 경로로 이동
 * > 실패 시 alert 활성화
 */
export const usePostLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    mutate: mutatePostLogin,
    mutateAsync: mutateAsyncPostLogin,
    ...rest
  } = useMutation({
    mutationKey: [QUERY_KEY.AUTH.POST_LOGIN],
    mutationFn: (reqBody: UserType) =>
      postLogin(reqBody.email, reqBody.password),
    onSuccess(data) {
      dispatch(setToken(data.token));
      alert(data.message);
      navigate(ROUTES.HOME);
    },
    onError(error) {
      if ((error as AxiosError).response?.status === 400) {
        alert("로그인 실패. 이메일과 비밀번호를 다시 확인해주세요.");
      } else {
        alert("로그인 실패. 다시 시도해주세요.");
      }
    },
  });

  return {
    mutatePostLogin,
    mutateAsyncPostLogin,
    ...rest,
  };
};

/**
 * - 회원가입 요청
 * > 성공 시 로그인 페이지로 이동
 * > 실패 시 alert 활성화
 */
export const usePostSignUp = () => {
  const navigate = useNavigate();

  const {
    mutate: mutatePostSignUp,
    mutateAsync: mutateAsyncPostSignUp,
    ...rest
  } = useMutation({
    mutationKey: [QUERY_KEY.AUTH.POST_SIGNUP],
    mutationFn: (reqBody: UserType) =>
      postSignUp(reqBody.email, reqBody.password),
    onSuccess(data) {
      alert(data.message);
      navigate(ROUTES.AUTH.LOGIN);
    },
    onError(error) {
      alert("회원가입 실패. 다시 시도해주세요.");
    },
  });

  return {
    mutatePostSignUp,
    mutateAsyncPostSignUp,
    ...rest,
  };
};
