import React from "react";
import { Badge } from "@components/ui/Badge";
import styles from "./TechShowcase.module.css";

interface TechShowcaseProps {
  title: string;
  description: string;
  features: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export const TechShowcase: React.FC<TechShowcaseProps> = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt = "Technology",
}) => {
  return (
    <div className={styles.showcase}>
      <div className={styles.imageSection}>
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>Technology Image</div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <Badge key={index} variant="primary" size="medium">
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
