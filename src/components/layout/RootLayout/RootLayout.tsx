import { CSSProperties, PropsWithChildren } from "react";
import Header from "../Header";
import styles from "./RootLayout.module.css";

interface RootLayoutPropsType extends PropsWithChildren {
  mainStyle?: CSSProperties;
}

export default function RootLayout({
  mainStyle,
  children,
}: RootLayoutPropsType) {
  return (
    <>
      <Header />
      <main className={styles.main} style={mainStyle}>
        {children}
      </main>
    </>
  );
}
