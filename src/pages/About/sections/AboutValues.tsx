import React from "react";
import { Container } from "@components/layout/Container";
import { Card } from "@components/ui/Card";
import styles from "./AboutValues.module.css";

export const AboutValues: React.FC = () => {
  const values = [
    {
      icon: "🎯",
      title: "Quality First",
      description:
        "We never compromise on quality. Every product undergoes rigorous testing to ensure it meets the highest standards.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "Continuous improvement and technological advancement drive our manufacturing processes and product development.",
    },
    {
      icon: "🤝",
      title: "Customer Focus",
      description:
        "Our clients success is our success. We build long-term partnerships based on trust and exceptional service.",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "Environmental responsibility is core to our operations. We implement eco-friendly practices throughout our manufacturing.",
    },
    {
      icon: "⚡",
      title: "Efficiency",
      description:
        "Optimized processes and lean manufacturing principles ensure timely delivery without compromising quality.",
    },
    {
      icon: "🛡️",
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices in all our operations.",
    },
  ];

  return (
    <section className={`${styles.values} section bg-secondary`}>
      <Container>
        <div className={styles.header}>
          <h2>Our Core Values</h2>
          <p className={styles.subtitle}>
            The principles that guide every decision we make and every product
            we manufacture.
          </p>
        </div>

        <div className={styles.grid}>
          {values.map((value, index) => (
            <Card key={index} variant="elevated" padding="large" hoverable>
              <div className={styles.valueCard}>
                <div className={styles.icon}>{value.icon}</div>
                <h3 className={styles.title}>{value.title}</h3>
                <p className={styles.description}>{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
