import React from "react";
import styles from "./FeatureComparison.module.css";

interface ComparisonRow {
  feature: string;
  standard: string | boolean;
  premium: string | boolean;
}

interface FeatureComparisonProps {
  rows: ComparisonRow[];
}

export const FeatureComparison: React.FC<FeatureComparisonProps> = ({
  rows,
}) => {
  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <span className={styles.checkmark}>✓</span>
      ) : (
        <span className={styles.cross}>✗</span>
      );
    }
    return value;
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerFeature}>Feature</th>
            <th className={styles.headerPlan}>Standard</th>
            <th className={styles.headerPlan}>Premium</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className={styles.featureCell}>{row.feature}</td>
              <td className={styles.valueCell}>{renderCell(row.standard)}</td>
              <td className={styles.valueCell}>{renderCell(row.premium)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
