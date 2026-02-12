import React from "react";
import styles from "./FeatureTimeline.module.css";

interface TimelineItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureTimelineProps {
  items: TimelineItem[];
}

export const FeatureTimeline: React.FC<FeatureTimelineProps> = ({ items }) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.iconWrapper}>
            {item.icon ? (
              <div className={styles.icon}>{item.icon}</div>
            ) : (
              <div className={styles.number}>{index + 1}</div>
            )}
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
          {index < items.length - 1 && <div className={styles.connector} />}
        </div>
      ))}
    </div>
  );
};
