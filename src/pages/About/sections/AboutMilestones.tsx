import React from "react";
import { Container } from "@components/layout/Container";
import { FeatureTimeline } from "@components/sections/Features/FeatureTimeline";
import styles from "./AboutMilestones.module.css";

export const AboutMilestones: React.FC = () => {
  const milestones = [
    {
      title: "2005 - Foundation",
      description:
        "SSMC Automation founded in Agra with a small team of 10 dedicated professionals and a vision to transform plastic manufacturing.",
      icon: "🏭",
    },
    {
      title: "2010 - ISO Certification",
      description:
        "Achieved ISO 9001:2008 certification, marking our commitment to international quality standards.",
      icon: "🏆",
    },
    {
      title: "2015 - Expansion",
      description:
        "Expanded operations with a new 50,000 sq ft facility and advanced injection molding equipment.",
      icon: "📈",
    },
    {
      title: "2018 - Global Reach",
      description:
        "Established partnerships with clients across 15 countries, serving major electronics and automotive brands.",
      icon: "🌍",
    },
    {
      title: "2021 - Automation",
      description:
        "Implemented Industry 4.0 technologies and fully automated production lines for enhanced efficiency.",
      icon: "🤖",
    },
    {
      title: "2025 - Sustainability",
      description:
        "Achieved carbon-neutral manufacturing and launched eco-friendly biodegradable plastic solutions.",
      icon: "🌱",
    },
  ];

  return (
    <section className={`${styles.milestones} section`}>
      <Container maxWidth="narrow">
        <div className={styles.header}>
          <h2>Our Journey</h2>
          <p className={styles.subtitle}>
            Two decades of growth, innovation, and excellence in precision
            manufacturing.
          </p>
        </div>

        <FeatureTimeline items={milestones} />
      </Container>
    </section>
  );
};
