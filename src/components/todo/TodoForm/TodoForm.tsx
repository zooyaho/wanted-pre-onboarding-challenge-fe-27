import styles from "./TodoForm.module.css";
import Button from "@/components/common/Button";
import Label from "@/components/common/Label";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import { useState } from "react";
import PRIORITY from "@/constants/todoPriority";
import { TodoPriorityType } from "@/types/todo.type";

interface TodoFormPropsType {
  defaultTitle?: string;
  defaultContent?: string;
  defaultPriority?: TodoPriorityType;
  onSubmit: (
    titleValue: string,
    contentValue: string,
    priority: TodoPriorityType
  ) => void;
  mainButton: {
    syleType?: "primary" | "secondary";
    text: string;
    isLoading?: boolean;
    onClick?: () => void;
  };
  subButton?: {
    syleType?: "primary" | "secondary";
    text: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    onClick: () => void;
  };
}

/** Todo 작성/수정 Form */
export default function TodoForm({
  defaultTitle = "",
  defaultContent = "",
  defaultPriority = PRIORITY.NORMAL,
  onSubmit,
  mainButton,
  subButton,
}: TodoFormPropsType) {
  const [titleValue, setTitleValue] = useState(defaultTitle);
  const [contentValue, setContentValue] = useState(defaultContent);
  const [selectedPriorityValue, setSelectedPriorityValue] =
    useState<TodoPriorityType>(defaultPriority);

  const onTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setTitleValue(newValue);
  };

  const onContentTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    setContentValue(newValue);
  };

  const onSelectedPriorityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value as TodoPriorityType;
    setSelectedPriorityValue(newValue);
  };

  const onTodoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(titleValue, contentValue, selectedPriorityValue);
  };

  return (
    <form className={styles.form} onSubmit={onTodoSubmit}>
      <header className={styles.header}>
        {subButton && (
          <Button
            text={subButton.text}
            onClick={subButton.onClick}
            isLoading={subButton.isLoading}
            disabled={subButton.isDisabled}
            styleType={subButton.syleType || "secondary"}
            style={{ width: "80px" }}
          />
        )}
        <Button
          type="submit"
          text={mainButton.text}
          styleType={mainButton.syleType || "primary"}
          onClick={mainButton?.onClick}
          isLoading={mainButton.isLoading}
          style={{ width: "80px" }}
          disabled={!(titleValue.length && contentValue.length)}
        />
      </header>

      <div className={styles["field-container"]}>
        <div className={`${styles["field-wrapper"]} ${styles["radio-field"]}`}>
          <label>
            <input
              type="radio"
              name="priority"
              value={PRIORITY.URGENT}
              checked={selectedPriorityValue === PRIORITY.URGENT}
              onChange={onSelectedPriorityChange}
            />
            Urgent
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value={PRIORITY.NORMAL}
              checked={selectedPriorityValue === PRIORITY.NORMAL}
              onChange={onSelectedPriorityChange}
            />
            Normal
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value={PRIORITY.LOW}
              checked={selectedPriorityValue === PRIORITY.LOW}
              onChange={onSelectedPriorityChange}
            />
            Low
          </label>
        </div>
        {/* title */}
        <div className={styles["field-wrapper"]}>
          <Label text="Title" isRequired htmlFor="title" />
          <Input id="title" value={titleValue} onChange={onTitleInputChange} />
        </div>
        {/* content */}
        <div className={styles["field-wrapper"]}>
          <Label text="Content" isRequired htmlFor="content" />
          <Textarea
            id="content"
            value={contentValue}
            onChange={onContentTextareaChange}
          />
        </div>
      </div>
    </form>
  );
}
