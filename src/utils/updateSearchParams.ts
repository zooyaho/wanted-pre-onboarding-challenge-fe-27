import { URLSearchParamsInit } from "react-router-dom";

/**
 * 쿼리스트링 업데이트 공통 함수
 * @param keyValues - 업데이트할 키-값 쌍, null일 경우 해당 키 삭제
 * @param searchParams - 기존 searchParams
 */
const updateSearchParams = (
  keyValues: Record<string, string> | null,
  searchParams: URLSearchParams
): URLSearchParamsInit => {
  const newSearchParams = new URLSearchParams(searchParams); // 기존 값 유지

  if (keyValues) {
    Object.entries(keyValues).forEach(([key, value]) => {
      newSearchParams.set(key, value.toString()); // 새로운 키-값 설정
    });
  } else {
    // keyValues가 null이면 해당 키 삭제
    Object.keys(searchParams).forEach((key) => {
      newSearchParams.delete(key);
    });
  }

  return newSearchParams;
};

export default updateSearchParams;
