import React from "react";
import { Container } from "@components/layout/Container";
import styles from "./HeroVideo.module.css";

interface HeroVideoProps {
  title: string;
  description: string;
  videoSrc?: string;
  children?: React.ReactNode;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  title,
  description,
  videoSrc,
  children,
}) => {
  return (
    <section className={styles.hero}>
      {videoSrc && (
        <video className={styles.video} autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className={styles.overlay} />
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          {children && <div className={styles.actions}>{children}</div>}
        </div>
      </Container>
    </section>
  );
};
