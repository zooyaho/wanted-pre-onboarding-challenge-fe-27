import Dropdown from "@/components/common/Dropdown";
import Input from "@/components/common/Input";
import { priorityOptions, sortOptions } from "./TodoFilter.data";
import styles from "./TodoFilter.module.css";
import {
  PriorityOptionValueType,
  SortOptionValueType,
} from "./TodoFilter.type";
import { useSearchParams } from "react-router-dom";
import updateSearchParams from "@/utils/updateSearchParams";

export default function TodoFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  /* 정렬 드롭다운 선택 메서드 */
  const onSelectSortDropdown = (value: SortOptionValueType | null) => {
    const updatedParams = updateSearchParams(
      value as Record<string, string> | null,
      ["sort", "order"],
      searchParams
    );

    setSearchParams(updatedParams, { replace: true });
  };

  /* 우선순위 드롭다운 선택 메서드 */
  const onSelectPriorityDropdown = (value: PriorityOptionValueType | null) => {
    const updatedParams = updateSearchParams(
      value as Record<string, string> | null,
      ["priority"],
      searchParams
    );

    setSearchParams(updatedParams, { replace: true });
  };

  /* 검색 인풋 */
  const onKeywordInputEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const keyword = (event.target as HTMLInputElement).value.trim();
      const kewordParams = keyword ? { keyword } : null;

      const updatedParams = updateSearchParams(
        kewordParams,
        ["keyword"],
        searchParams
      );

      setSearchParams(updatedParams, {
        replace: true,
      });
    }
  };

  return (
    <div className={styles["container"]}>
      {/* 우선순위 드롭다운 */}
      <Dropdown
        width="160px"
        options={sortOptions}
        placeholder="정렬"
        onSelect={onSelectSortDropdown}
      />
      {/* 정렬 드롭다운 */}
      <Dropdown
        width="120px"
        options={priorityOptions}
        placeholder="우선순위"
        onSelect={onSelectPriorityDropdown}
      />
      <Input placeholder="키워드 검색" onKeyDown={onKeywordInputEnter} />
    </div>
  );
}
