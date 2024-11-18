import Dropdown from "@/components/common/Dropdown";
import Input from "@/components/common/Input";
import { priorityOptions, sortOptions } from "./TodoFilter.data";
import styles from "./TodoFilter.module.css";
import {
  TodoPriorityOptionValueType,
  TodoSortOptionValueType,
} from "./TodoFilter.type";
import { useSearchParams } from "react-router-dom";
import updateSearchParams from "@/utils/updateSearchParams";
import { useMemo } from "react";
import { OptionType } from "@/components/common/Dropdown/Dropdown";
import { TODO_FILTER_KEYS } from "@/constants/todoFilter";

export default function TodoFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  /* 기존 선택된 초기 정렬 옵션 */
  const defaultSelectedSortOption = useMemo<
    OptionType<TodoSortOptionValueType> | undefined
  >(() => {
    const sortValue = searchParams.get(TODO_FILTER_KEYS.SORT);
    const orderValue = searchParams.get(TODO_FILTER_KEYS.ORDER);

    if (sortValue && orderValue) {
      return (
        sortOptions.find(
          (option) =>
            option.value.sort === sortValue && option.value.order === orderValue
        ) || undefined
      );
    }
    return undefined;
  }, []);

  /* 기존 선택된 초기 우선순위 옵션 */
  const defaultSelectedPriorityOption = useMemo<
    OptionType<TodoPriorityOptionValueType> | undefined
  >(() => {
    const priorityValue = searchParams.get(TODO_FILTER_KEYS.PRIORITY_FILTER);

    if (priorityValue) {
      return (
        priorityOptions.find(
          (option) => option.value.priorityFilter === priorityValue
        ) || undefined
      );
    }
    return undefined;
  }, []);

  /* 기존 초기 키워드 */
  const defaultKeyword = useMemo(() => {
    const keywordValue = searchParams.get(TODO_FILTER_KEYS.KEYWORD);
    return keywordValue || undefined;
  }, []);

  /* 정렬 드롭다운 선택 메서드 */
  const onSelectSortDropdown = (value: TodoSortOptionValueType | null) => {
    const updatedParams = updateSearchParams(
      value as Record<string, string> | null,
      [TODO_FILTER_KEYS.SORT, TODO_FILTER_KEYS.ORDER],
      searchParams
    );

    setSearchParams(updatedParams, { replace: true });
  };

  /* 우선순위 드롭다운 선택 메서드 */
  const onSelectPriorityDropdown = (
    value: TodoPriorityOptionValueType | null
  ) => {
    const updatedParams = updateSearchParams(
      value as Record<string, string> | null,
      [TODO_FILTER_KEYS.PRIORITY_FILTER],
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
        [TODO_FILTER_KEYS.KEYWORD],
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
        defaultSelectedOption={defaultSelectedSortOption}
        options={sortOptions}
        placeholder="정렬"
        onSelect={onSelectSortDropdown}
      />
      {/* 정렬 드롭다운 */}
      <Dropdown
        width="120px"
        defaultSelectedOption={defaultSelectedPriorityOption}
        options={priorityOptions}
        placeholder="우선순위"
        onSelect={onSelectPriorityDropdown}
      />
      <Input
        placeholder="키워드 검색"
        defaultValue={defaultKeyword}
        onKeyDown={onKeywordInputEnter}
      />
    </div>
  );
}
