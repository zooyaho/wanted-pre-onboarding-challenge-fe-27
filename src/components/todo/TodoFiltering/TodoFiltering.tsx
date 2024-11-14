import Dropdown from "@/components/common/Dropdown";
import styles from "./TodoFiltering.module.css";
import { priorityOptions, sortOptions } from "./TodoFiltering.data";
import Input from "@/components/common/Input";

export default function TodoFiltering() {
  return (
    <div className={styles["container"]}>
      <Dropdown
        width="160px"
        options={sortOptions}
        placeholder="우선순위"
        onSelect={() => {}}
      />
      <Dropdown
        width="80px"
        options={priorityOptions}
        placeholder="정렬"
        onSelect={() => {}}
      />
      <Input placeholder="키워드 검색" />
    </div>
  );
}
