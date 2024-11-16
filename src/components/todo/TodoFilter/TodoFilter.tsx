import Dropdown from "@/components/common/Dropdown";
import Input from "@/components/common/Input";
import { priorityOptions, sortOptions } from "./TodoFilter.data";
import styles from "./TodoFilter.module.css";
import {
  PriorityOptionValueType,
  SortOptionValueType,
} from "./TodoFilter.type";
import { useSearchParams } from "react-router-dom";

export default function TodoFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  /* 정렬 드롭다운 선택 메서드 */
  const onSelectSortDropdown = (value: SortOptionValueType | null) => {
    console.log("정렬 드롭다운 >> ", value);

    const newSearchParams = new URLSearchParams(searchParams); // 기존 값 유지

    if (value) {
      Object.entries(value).forEach(([key, value]) => {
        newSearchParams.set(key, value.toString());
      });
      console.log("[정렬] newSearchParams >> ", newSearchParams.toString());
    } else {
      newSearchParams.delete("order");
      newSearchParams.delete("sort");
    }

    setSearchParams(newSearchParams, {
      replace: true,
    });
  };

  /* 우선순위 드롭다운 선택 메서드 */
  const onSelectPriorityDropdown = (value: PriorityOptionValueType | null) => {
    console.log("우선순위 >> ", value);

    const newSearchParams = new URLSearchParams(searchParams); // 기존 값 유지

    if (value) {
      Object.entries(value).forEach(([key, value]) => {
        newSearchParams.set(key, value.toString());
      });
      console.log("[우선순위] newSearchParams >> ", newSearchParams.toString());
    } else {
      newSearchParams.delete("priority");
    }

    setSearchParams(newSearchParams, {
      replace: true,
    });
  };

  /* 검색 인풋 */
  const onKeywordInputEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const keyword = (event.target as HTMLInputElement).value.trim();

      const newSearchParams = new URLSearchParams(searchParams); // 기존 값 유지

      if (keyword) {
        newSearchParams.set("keyword", keyword.toString());
        console.log(
          "[우선순위] newSearchParams >> ",
          newSearchParams.toString()
        );
      } else {
        newSearchParams.delete("keyword");
      }

      setSearchParams(newSearchParams, {
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
