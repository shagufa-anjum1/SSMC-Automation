import React from "react";
import styles from "./ProcessDiagram.module.css";

interface DiagramStep {
  icon?: React.ReactNode;
  label: string;
}

interface ProcessDiagramProps {
  steps: DiagramStep[];
  layout?: "horizontal" | "vertical";
}

export const ProcessDiagram: React.FC<ProcessDiagramProps> = ({
  steps,
  layout = "horizontal",
}) => {
  return (
    <div className={`${styles.diagram} ${styles[layout]}`}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={styles.step}>
            {step.icon && <div className={styles.icon}>{step.icon}</div>}
            <div className={styles.label}>{step.label}</div>
          </div>
          {index < steps.length - 1 && (
            <div className={styles.connector}>
              <div className={styles.line} />
              <div className={styles.arrowhead} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
