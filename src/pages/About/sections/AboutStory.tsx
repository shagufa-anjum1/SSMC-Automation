import React from "react";
import { Container } from "@components/layout/Container";
import styles from "./AboutStory.module.css";

export const AboutStory: React.FC = () => {
  return (
    <section className={`${styles.story} section`}>
      <Container>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img
              src="/src/assets/images/backgrounds/image3.jpg"
              alt="SSMC Automation Manufacturing Unit"
              className={styles.image}
            />
          </div>

          <div className={styles.textSection}>
            <div className={styles.badge}>Our Story</div>
            <h2>15+ Years of Manufacturing Excellence</h2>
            <p className={styles.paragraph}>
              Founded in 2005, SSMC Automation began with a vision to revolutionize plastic
              manufacturing in India. What started as a small workshop in Agra has grown into a
              leading manufacturer serving clients across 15+ countries.
            </p>
            <p className={styles.paragraph}>
              Our journey has been driven by innovation, quality, and an unwavering commitment to
              customer satisfaction. Today, we operate state-of-the-art facilities equipped with
              cutting-edge technology and staffed by over 200 skilled professionals.
            </p>
            <p className={styles.paragraph}>
              We specialize in precision plastic molding for electronics, automotive, medical
              devices, and industrial applications. Every component we manufacture meets
              international quality standards and undergoes rigorous testing.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
