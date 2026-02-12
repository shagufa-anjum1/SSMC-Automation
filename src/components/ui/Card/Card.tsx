import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "bordered" | "elevated";
  padding?: "none" | "small" | "medium" | "large";
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  padding = "medium",
  hoverable = false,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`${styles.card} ${styles[variant]} ${styles[`padding-${padding}`]} ${hoverable ? styles.hoverable : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
