import RootLayout from "@/components/layout/RootLayout";
import styles from "./CreateTodoPage.module.css";
import Button from "@/components/common/Button";
import Label from "@/components/common/Label";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";

export default function CreateTodoPage() {
  return (
    <RootLayout>
      <form className={styles.form}>
        <header className={styles.header}>
          <Button text="취소" styleType="secondary" style={{ width: "80px" }} />
          <Button text="저장" style={{ width: "80px" }} />
        </header>

        <div className={styles["field-container"]}>
          <div className={styles["field-wrapper"]}>
            <Label text="Title" isRequired />
            <Input />
          </div>
          <div className={styles["field-wrapper"]}>
            <Label text="Content" isRequired />
            <Textarea />
          </div>
        </div>
      </form>
    </RootLayout>
  );
}
