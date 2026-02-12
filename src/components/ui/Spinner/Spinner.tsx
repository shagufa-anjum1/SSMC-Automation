import React from "react";
import styles from "./Spinner.module.css";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "white";
  fullScreen?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "primary",
  fullScreen = false,
}) => {
  const spinner = (
    <div className={`${styles.spinner} ${styles[size]} ${styles[color]}`}>
      <div className={styles.circle}></div>
    </div>
  );

  if (fullScreen) {
    return <div className={styles.fullScreen}>{spinner}</div>;
  }

  return spinner;
};
