import React from "react";
import { Card } from "@components/ui/Card";
import { Badge } from "@components/ui/Badge";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  image?: string;
  title: string;
  category: string;
  description: string;
  features?: string[];
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  category,
  description,
  features,
  onClick,
}) => {
  return (
    <Card variant="elevated" padding="none" hoverable onClick={onClick}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          {image ? (
            <img src={image} alt={title} className={styles.image} />
          ) : (
            <div className={styles.placeholder}>Product Image</div>
          )}
          <Badge variant="primary" size="small" className={styles.badge}>
            {category}
          </Badge>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>

          {features && features.length > 0 && (
            <ul className={styles.features}>
              {features.slice(0, 3).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
};
