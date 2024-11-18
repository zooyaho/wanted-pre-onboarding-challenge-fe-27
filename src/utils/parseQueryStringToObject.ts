/**
 * 쿼리 문자열을 객체로 변환하는 함수
 * @param queryString - "key=value" 형식의 쿼리 문자열
 * @returns 객체 형태의 파싱된 결과
 */
const parseQueryStringToObject = (
  queryString: string
): Record<string, string> => {
  const queryObject: Record<string, string> = {};

  // 쿼리 문자열이 없는 경우 빈 객체 반환
  if (!queryString) return queryObject;

  // '?'로 시작하면 제거
  const sanitizedString = queryString.startsWith("?")
    ? queryString.slice(1)
    : queryString;

  // 'key=value' 쌍을 분리하여 객체로 변환
  sanitizedString.split("&").forEach((pair) => {
    const [key, value] = pair.split("=");
    queryObject[decodeURIComponent(key)] = decodeURIComponent(value || "");
  });

  return queryObject;
};

export default parseQueryStringToObject;
