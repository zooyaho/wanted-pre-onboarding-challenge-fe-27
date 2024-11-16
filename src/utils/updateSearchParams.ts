import { URLSearchParamsInit } from "react-router-dom";

/**
 * 쿼리스트링 업데이트 공통 함수
 * @param keyValues - 업데이트할 키-값 쌍, null일 경우 해당 키 삭제
 * @param fieldsToRemove - 삭제할 키 배열
 * @param searchParams - 기존 searchParams
 */
const updateSearchParams = (
  keyValues: Record<string, string> | null,
  fieldsToRemove: string[],
  searchParams: URLSearchParams
): URLSearchParamsInit => {
  const newSearchParams = new URLSearchParams(searchParams); // 기존 값 유지

  if (keyValues) {
    Object.entries(keyValues).forEach(([key, value]) => {
      newSearchParams.set(key, value.toString()); // 새로운 키-값 설정
    });
  } else {
    // keyValues가 null이면 해당 키 삭제
    fieldsToRemove.forEach((field) => newSearchParams.delete(field)); // 필드 삭제
  }

  return newSearchParams;
};

export default updateSearchParams;
