import React from "react";
import styles from "./ProcessTimeline.module.css";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  return (
    <div className={styles.process}>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <div className={styles.number}>{step.number}</div>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.description}>{step.description}</p>
       
        </div>
      ))}
    </div>
  );
};
