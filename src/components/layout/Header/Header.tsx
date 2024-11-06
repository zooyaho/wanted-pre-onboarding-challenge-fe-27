import Button from "@/components/common/Button";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@/components/common/Modal";
import { useState } from "react";
import { ROUTES } from "@/constants/routes";

export default function Header() {
  const navigate = useNavigate();
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);

  /** 로그아웃 버튼 클릭 이벤트 메서드 */
  const onLogoutBtnClick = () => {
    setIsShowLogoutModal(true); // 컨펌 모달 활성화
  };

  /** 로그아웃 컨펌 모달의 확인 버튼 클릭 메서드 */
  const onConfirmLogout = () => {
    // 확인 시 토큰 삭제 후 로그인 페이지 리다이렉트
    localStorage.removeItem("token");
    navigate(ROUTES.AUTH.LOGIN);
  };

  /** 로그아웃 컨펌 모달의 취소 버튼 클릭 메서드 */
  const onCancelLogout = () => {
    // 취소 시 모달 비활성화
    setIsShowLogoutModal(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Link to={"/"}>
          <h1 className={styles.logo}>TODO</h1>
        </Link>
        <Button
          text="로그아웃"
          styleType="secondary"
          style={{ width: "fit-content", marginRight: "20px" }}
          onClick={onLogoutBtnClick}
        />
      </header>
      {/* 로그아웃 컨펌 모달 */}
      <Modal
        isShow={isShowLogoutModal}
        content="정말로 로그아웃 하시겠습니까?"
        isShowCloseBtn
        onClose={onCancelLogout}
        mainButton={{ text: "확인", onClick: onConfirmLogout }}
        subButton={{ text: "취소", onClick: onCancelLogout }}
      />
    </>
  );
}
