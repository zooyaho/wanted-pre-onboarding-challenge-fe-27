import { PropsWithChildren } from "react";
import Header from "../Header";
import styles from "./RootLayout.module.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
