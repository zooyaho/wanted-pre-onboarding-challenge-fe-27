export function formatToYYYYMMDD(date: string) {
  const formatedDate = new Date(date);
  return formatedDate.toISOString().split("T")[0];
}
