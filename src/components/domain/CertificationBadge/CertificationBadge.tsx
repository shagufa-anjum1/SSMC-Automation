import React from "react";
import styles from "./CertificationBadge.module.css";

interface CertificationBadgeProps {
  name: string;
  issuer?: string;
  year?: string;
  logo?: string;
}

export const CertificationBadge: React.FC<CertificationBadgeProps> = ({
  name,
  issuer,
  year,
  logo,
}) => {
  return (
    <div className={styles.badge}>
      {logo ? (
        <img src={logo} alt={name} className={styles.logo} />
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.icon}>✓</span>
        </div>
      )}
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        {issuer && <div className={styles.issuer}>{issuer}</div>}
        {year && <div className={styles.year}>{year}</div>}
      </div>
    </div>
  );
};
