import Button from "@/components/common/Button";
import styles from "./TodoDetailSection.module.css";
import { TodoType } from "@/types/todo.type";
import { formatToYYYYMMDD } from "@/utils/formatDate";
import { useState } from "react";
import Modal from "@/components/common/Modal";
import { useLocation, useNavigate } from "react-router-dom";

interface TodoDetailSectionPropsType {
  todo: TodoType | null;
  deleteTodo: (todoId: string) => void;
}

/** todo 읽기 section */
export default function TodoDetailSection({
  todo,
  deleteTodo,
}: TodoDetailSectionPropsType) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  /** 삭제 버튼 클릭 이벤트 메서드 */
  const onDeleteBtnClick = () => {
    setIsShowDeleteModal(true); // 모달 활성화
  };

  /** 수정 버튼 클릭 이벤트 메서드 */
  const onEditBtnClick = () => {
    // 수정관련 쿼리 스트링 추가
    navigate(`${location.pathname}?mode=edit`);
  };

  /** 모달 비활성화 메서드 */
  const closeDeleteConfirmModal = () => {
    setIsShowDeleteModal(false);
  };

  /** 삭제 확인 버튼 클릭 메서드 */
  const onDeleteTodoConfirm = () => {
    if (!todo) return;

    deleteTodo(todo.id); // 삭제 api 호출
    closeDeleteConfirmModal(); // 모달 비활성화
    navigate("/", { replace: true }); // 경로 리다이렉트
  };

  return (
    <>
      <section className={styles.section}>
        <header className={styles.header}>
          <Button
            text="삭제"
            styleType="secondary"
            style={{ width: "80px" }}
            onClick={onDeleteBtnClick}
          />
          <Button
            text="수정"
            style={{ width: "80px" }}
            onClick={onEditBtnClick}
          />
        </header>
        {todo ? (
          <div className={styles["todo-container"]}>
            <h3 className={styles.title}>{todo.title}</h3>
            <div className={styles["date-container"]}>
              <div className={styles["date-wrapper"]}>
                <span className={styles["date-desc"]}>Created</span>
                <p className={styles["date-text"]}>
                  {formatToYYYYMMDD(todo.createdAt)}
                </p>
              </div>
              <div className={styles["date-wrapper"]}>
                <span className={styles["date-desc"]}>Last Updated</span>
                <p className={styles["date-text"]}>
                  {formatToYYYYMMDD(todo.updatedAt)}
                </p>
              </div>
            </div>
            <p>{todo.content}</p>
          </div>
        ) : (
          <div className={styles["non-desc-wrapper"]}>
            <strong className={styles["non-desc"]}>todo를 선택해주세요.</strong>
          </div>
        )}
      </section>
      <Modal
        isShow={isShowDeleteModal}
        content="Todo를 삭제 하시겠습니까?"
        isShowCloseBtn
        onClose={closeDeleteConfirmModal}
        mainButton={{ text: "확인", onClick: onDeleteTodoConfirm }}
        subButton={{ text: "취소", onClick: closeDeleteConfirmModal }}
      />
    </>
  );
}
