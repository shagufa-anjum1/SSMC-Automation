import React from "react";
import { Container } from "@components/layout/Container";
import styles from "./HeroIndustrial.module.css";

interface HeroIndustrialProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export const HeroIndustrial: React.FC<HeroIndustrialProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "Industrial manufacturing",
  children,
}) => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.textSection}>
            <div className={styles.subtitle}>{subtitle}</div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            {children && <div className={styles.actions}>{children}</div>}
          </div>
          <div className={styles.imageSection}>
            {imageSrc ? (
              <img src={imageSrc} alt={imageAlt} className={styles.image} />
            ) : (
              <div className={styles.placeholder}>
                <span>Manufacturing Excellence</span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
