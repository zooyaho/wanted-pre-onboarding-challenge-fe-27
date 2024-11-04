import Button from "@/components/common/Button";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  /**
   * 로그아웃 버튼 클릭 이벤트 메서드
   * - 컨펌 모달 활성화
   * > 확인 시 토큰 삭제 후 로그인 페이지 리다이렉트
   * > 취소 시 모달 비활성화
   */
  const onLogoutClick = () => {
    // TODO :: 로그아웃 컨펌 모달 작업
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>TODO</h1>
        <Button
          text="로그아웃"
          style={{ width: "fit-content", marginRight: "20px" }}
          onClick={onLogoutClick}
        />
      </header>
    </>
  );
}
