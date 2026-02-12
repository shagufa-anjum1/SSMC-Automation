import React from "react";
import styles from "./StatsGrid.module.css";

interface StatItem {
  icon?: React.ReactNode;
  value: string;
  label: string;
}

interface StatsGridProps {
  stats: StatItem[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          {stat.icon && <div className={styles.icon}>{stat.icon}</div>}
          <div className={styles.value}>{stat.value}</div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
