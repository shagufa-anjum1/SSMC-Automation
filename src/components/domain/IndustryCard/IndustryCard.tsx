import React from "react";
import { Card } from "@components/ui/Card";
import styles from "./IndustryCard.module.css";

interface IndustryCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  solutions?: string[];
  onClick?: () => void;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  icon,
  title,
  description,
  solutions,
  onClick,
}) => {
  return (
    <Card variant="bordered" padding="large" hoverable onClick={onClick}>
      <div className={styles.card}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {solutions && solutions.length > 0 && (
          <div className={styles.solutions}>
            <h4 className={styles.solutionsTitle}>Key Solutions:</h4>
            <ul className={styles.solutionsList}>
              {solutions.slice(0, 3).map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
};
