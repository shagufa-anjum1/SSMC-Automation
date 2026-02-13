import React from "react";
import { HeroIndustrial } from "@components/sections/Hero/HeroIndustrial";
import { Container } from "@components/layout/Container";
import { Card } from "@components/ui/Card";
import { Badge } from "@components/ui/Badge";
import { StatsCounter } from "@components/sections/Stats/StatsCounter";
import { CTABanner } from "@components/sections/CTA/CTABanner";
import styles from "./Sustainability.module.css";

const Sustainability: React.FC = () => {
  const initiatives = [
    {
      icon: "♻️",
      title: "Circular Economy",
      description:
        "Implementing closed-loop recycling systems to minimize waste and maximize material reuse in our manufacturing processes.",
      achievements: [
        "95% material recycling rate",
        "Zero waste to landfill goal by 2027",
      ],
    },
    {
      icon: "⚡",
      title: "Renewable Energy",
      description:
        "Transitioning to clean energy sources with solar installations and energy-efficient equipment across our facilities.",
      achievements: [
        "40% renewable energy use",
        "Carbon neutral by 2030 target",
      ],
    },
    {
      icon: "💧",
      title: "Water Conservation",
      description:
        "Advanced water recycling systems and efficient cooling processes to reduce water consumption in operations.",
      achievements: ["60% water recycling", "30% reduction in usage"],
    },
    {
      icon: "🌱",
      title: "Sustainable Materials",
      description:
        "Developing biodegradable and bio-based plastic alternatives for environmentally conscious applications.",
      achievements: ["20+ bio-plastic formulations", "FDA approved materials"],
    },
    {
      icon: "📉",
      title: "Emissions Reduction",
      description:
        "Continuous monitoring and reduction of greenhouse gas emissions through process optimization and technology upgrades.",
      achievements: [
        "35% emissions reduction since 2020",
        "ISO 14001 certified",
      ],
    },
    {
      icon: "🤝",
      title: "Supply Chain",
      description:
        "Working with suppliers who share our commitment to environmental and social responsibility.",
      achievements: ["100% certified suppliers", "Ethical sourcing policy"],
    },
  ];

  const stats = [
    {
      value: 35,
      suffix: "%",
      label: "Carbon Reduction",
      description: "Since 2020",
    },
    {
      value: 95,
      suffix: "%",
      label: "Material Recycled",
      description: "Annual rate",
    },
    {
      value: 40,
      suffix: "%",
      label: "Renewable Energy",
      description: "Current usage",
    },
    { value: 0, label: "Landfill Waste", description: "Goal by 2027" },
  ];

  return (
    <div>
      <HeroIndustrial
        subtitle="Sustainability Commitment"
        title="Building a Greener Future"
        description="Environmental responsibility is at the core of our operations. We're committed to sustainable manufacturing practices that protect our planet for future generations."
        backgroundImage="/src/assets/images/Service/servicePro8.jpg"
      />

      <section className={`${styles.impact} section`}>
        <Container>
          <div className={styles.header}>
            <Badge variant="success" size="large">
              Our Impact
            </Badge>
            <h2>Environmental Performance</h2>
            <p className={styles.subtitle}>
              Measurable progress toward our sustainability goals with
              transparent reporting and continuous improvement.
            </p>
          </div>

          <StatsCounter stats={stats} />
        </Container>
      </section>

      <section className={`${styles.initiatives} section bg-secondary`}>
        <Container>
          <div className={styles.header}>
            <h2>Sustainability Initiatives</h2>
            <p className={styles.subtitle}>
              Comprehensive programs addressing every aspect of our
              environmental footprint.
            </p>
          </div>

          <div className={styles.grid}>
            {initiatives.map((initiative, index) => (
              <Card key={index} variant="elevated" padding="large" hoverable>
                <div className={styles.initiativeCard}>
                  <div className={styles.icon}>{initiative.icon}</div>
                  <h3 className={styles.title}>{initiative.title}</h3>
                  <p className={styles.description}>{initiative.description}</p>
                  <div className={styles.achievements}>
                    <h4 className={styles.achievementsTitle}>
                      Key Achievements:
                    </h4>
                    <ul className={styles.achievementsList}>
                      {initiative.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className={`${styles.certifications} section`}>
        <Container>
          <div className={styles.header}>
            <h2>Environmental Certifications</h2>
            <p className={styles.subtitle}>
              Recognized standards ensuring our commitment to environmental
              excellence.
            </p>
          </div>

          <div className={styles.certGrid}>
            <Card variant="bordered" padding="large">
              <div className={styles.certCard}>
                <div className={styles.certIcon}>✓</div>
                <h3>ISO 14001:2015</h3>
                <p>
                  Environmental Management System certified for sustainable
                  operations.
                </p>
              </div>
            </Card>
            <Card variant="bordered" padding="large">
              <div className={styles.certCard}>
                <div className={styles.certIcon}>✓</div>
                <h3>RoHS Compliant</h3>
                <p>
                  Restriction of Hazardous Substances in all manufacturing
                  processes.
                </p>
              </div>
            </Card>
            <Card variant="bordered" padding="large">
              <div className={styles.certCard}>
                <div className={styles.certIcon}>✓</div>
                <h3>Zero Waste Certified</h3>
                <p>
                  Diverting 95% of waste from landfills through recycling and
                  reuse.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Partner for Sustainable Manufacturing"
        description="Choose a manufacturing partner committed to environmental responsibility and sustainable practices."
        primaryButtonText="Discuss Your Project"
        primaryButtonLink="/contact"
      />
    </div>
  );
};

export default Sustainability;
