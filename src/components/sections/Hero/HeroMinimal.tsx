import React from 'react';
import { Container } from '@components/layout/Container';
import styles from './HeroMinimal.module.css';

interface HeroMinimalProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export const HeroMinimal: React.FC<HeroMinimalProps> = ({
  title,
  description,
  backgroundImage, // 👈 ADD THIS
  children,
}) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
      }}
    >
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
