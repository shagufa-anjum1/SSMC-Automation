import React from "react";
import { Card } from "@components/ui/Card";
import styles from "./FeatureGrid.module.css";

interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  columns = 3,
}) => {
  return (
    <div className={`${styles.grid} ${styles[`cols-${columns}`]}`}>
      {features.map((feature, index) => (
        <Card key={index} variant="bordered" padding="large" hoverable>
          <div className={styles.feature}>
            {feature.icon && <div className={styles.icon}>{feature.icon}</div>}
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
