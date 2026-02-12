import React from "react";
import { Container } from "@components/layout/Container";
import styles from "./HeroMinimal.module.css";

interface HeroMinimalProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const HeroMinimal: React.FC<HeroMinimalProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <section className={styles.hero}>
      <Container maxWidth="narrow">
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          {children && <div className={styles.actions}>{children}</div>}
        </div>
      </Container>
    </section>
  );
};
