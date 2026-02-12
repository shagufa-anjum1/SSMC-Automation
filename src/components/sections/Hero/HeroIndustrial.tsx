import React from 'react';
import { Container } from '@components/layout/Container';
import styles from './HeroIndustrial.module.css';

interface HeroIndustrialProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export const HeroIndustrial: React.FC<HeroIndustrialProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  children,
}) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
      }}
    >
      <Container>
        <div className={styles.content}>
          <div className={styles.subtitle}>{subtitle}</div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          {children && <div className={styles.actions}>{children}</div>}
        </div>
      </Container>
    </section>
  );
};
