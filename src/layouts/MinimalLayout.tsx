import React from "react";
import styles from "./MinimalLayout.module.css";

interface MinimalLayoutProps {
  children: React.ReactNode;
}

export const MinimalLayout: React.FC<MinimalLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
