import React, { useEffect, useState } from "react";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import styles from "./StatsCounter.module.css";

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

interface StatsCounterProps {
  stats: StatItem[];
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ stats }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / (duration / 16);
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(intervals[index]!);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, 16);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [isVisible, stats]);

  return (
    <div ref={ref} className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <div className={styles.value}>
            {stat.prefix}
            {counts[index]?.toLocaleString()}
            {stat.suffix}
          </div>
          <div className={styles.label}>{stat.label}</div>
          {stat.description && (
            <div className={styles.description}>{stat.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};
