import { useEffect, useRef, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./Dropdown.module.css";

export type OptionType<T> = {
  label: string;
  value: T;
};

interface DropdownPropsType<T> {
  options: OptionType<T>[];
  onSelect: (value: T | null) => void;
  defaultOption?: OptionType<T>;
  defaultSelectedOption?: OptionType<T>;
  placeholder: string;
  width?: string;
}

export default function Dropdown<T>({
  options,
  onSelect,
  defaultOption,
  defaultSelectedOption,
  placeholder,
  width,
}: DropdownPropsType<T>) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<OptionType<T> | null>(
    defaultSelectedOption || defaultOption || null
  );
  const [isShowOption, setIsShowOption] = useState<boolean>(false);

  /* 옵션 선택 메서드 */
  const onSelectOption = (option: OptionType<T>) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsShowOption(false);
  };

  /* 선택 취소 클릭 이벤트 메서드 */
  const onCancelSelectOption = () => {
    if (defaultOption) {
      setSelectedOption(defaultOption);
      onSelect(defaultOption.value);
    } else {
      setSelectedOption(null);
      onSelect(null);
    }
  };

  /** 옵션 목록 비활성화 */
  const onOutsideClick = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
      setIsShowOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onOutsideClick);

    return () => {
      document.removeEventListener("mousedown", onOutsideClick);
    };
  }, []);

  return (
    <div
      className={styles["dropdown-container"]}
      ref={dropdownRef}
      style={{ width }}
    >
      <div
        className={`${styles["select-option"]} ${
          isShowOption && styles["focus"]
        }`}
        onClick={() => setIsShowOption((prev) => !prev)}
      >
        <p
          className={`${styles["select-text"]} ${
            !selectedOption?.label && styles["placeholder"]
          }`}
        >
          {selectedOption?.label || placeholder}
        </p>
        {/* 선택 취소 버튼 */}
        {selectedOption && (
          <button type="button" onClick={onCancelSelectOption}>
            <IoCloseCircleOutline />
          </button>
        )}
        {isShowOption ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <ul
        className={`${styles["option-list"]} ${
          styles[isShowOption ? "show" : "hide"]
        }`}
      >
        {options.map((option, index) => (
          <li
            className={styles["option"]}
            key={option.label + "-" + index}
            onClick={() => onSelectOption(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
