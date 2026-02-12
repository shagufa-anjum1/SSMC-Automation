import React from "react";
import { HeroMinimal } from "@components/sections/Hero/HeroMinimal";
import { Container } from "@components/layout/Container";
import { TechStack } from "@components/sections/Technology/TechStack";
import { FeatureGrid } from "@components/sections/Features/FeatureGrid";
import { CTABanner } from "@components/sections/CTA/CTABanner";
import styles from "./Engineering.module.css";

const Engineering: React.FC = () => {
  const capabilities = [
    {
      icon: "🔧",
      title: "Precision Tooling",
      description:
        "State-of-the-art CNC machining and EDM capabilities for high-precision mold manufacturing with tolerances up to ±0.01mm.",
    },
    {
      icon: "💻",
      title: "CAD/CAM Design",
      description:
        "Advanced 3D modeling and simulation using SolidWorks, CATIA, and Moldflow for optimized part design.",
    },
    {
      icon: "🤖",
      title: "Automation Systems",
      description:
        "Fully automated production lines with robotic handling, reducing cycle times and ensuring consistency.",
    },
    {
      icon: "📏",
      title: "Quality Metrology",
      description:
        "CMM inspection, optical scanning, and real-time monitoring ensuring every part meets specifications.",
    },
    {
      icon: "⚡",
      title: "Rapid Prototyping",
      description:
        "3D printing and rapid tooling services for fast iteration and design validation before production.",
    },
    {
      icon: "🔬",
      title: "Material Science",
      description:
        "In-house material testing lab for mechanical, thermal, and chemical property analysis.",
    },
  ];

  const technologies = [
    { name: "SolidWorks", category: "CAD" },
    { name: "CATIA", category: "Design" },
    { name: "Moldflow", category: "Simulation" },
    { name: "Mastercam", category: "CAM" },
    { name: "Siemens NX", category: "Engineering" },
    { name: "AutoCAD", category: "Drafting" },
    { name: "ANSYS", category: "Analysis" },
    { name: "Mold Wizard", category: "Tooling" },
  ];

  return (
    <div>
      <HeroMinimal
        title="Engineering Excellence"
        description="Advanced engineering capabilities combining cutting-edge technology with decades of manufacturing expertise."
      />

      <section className={`${styles.capabilities} section`}>
        <Container>
          <div className={styles.header}>
            <h2>Technical Capabilities</h2>
            <p className={styles.subtitle}>
              Comprehensive engineering services from concept to production with
              industry-leading precision.
            </p>
          </div>

          <FeatureGrid features={capabilities} columns={3} />
        </Container>
      </section>

      <section className={`${styles.equipment} section bg-secondary`}>
        <Container>
          <div className={styles.header}>
            <h2>Manufacturing Equipment</h2>
            <p className={styles.subtitle}>
              State-of-the-art machinery and automation systems for precision
              manufacturing.
            </p>
          </div>

          <div className={styles.equipmentGrid}>
            <div className={styles.equipmentCard}>
              <h3>Injection Molding Machines</h3>
              <ul>
                <li>50-1000 ton capacity range</li>
                <li>Electric & hydraulic systems</li>
                <li>Multi-component capability</li>
                <li>25+ machines in operation</li>
              </ul>
            </div>
            <div className={styles.equipmentCard}>
              <h3>CNC Machining Center</h3>
              <ul>
                <li>5-axis precision milling</li>
                <li>EDM wire & sinker machines</li>
                <li>High-speed machining</li>
                <li>±0.01mm tolerance</li>
              </ul>
            </div>
            <div className={styles.equipmentCard}>
              <h3>Quality Control Lab</h3>
              <ul>
                <li>CMM inspection systems</li>
                <li>Optical measurement tools</li>
                <li>Material testing equipment</li>
                <li>Environmental chambers</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className={`${styles.software} section`}>
        <Container>
          <div className={styles.header}>
            <h2>Design & Engineering Software</h2>
            <p className={styles.subtitle}>
              Industry-standard CAD/CAM tools for precision engineering and
              manufacturing.
            </p>
          </div>

          <TechStack technologies={technologies} />
        </Container>
      </section>

      <CTABanner
        title="Engineering Support for Your Project"
        description="Our technical team is ready to help you design, prototype, and manufacture your components."
        primaryButtonText="Discuss Technical Requirements"
        primaryButtonLink="/contact"
      />
    </div>
  );
};

export default Engineering;
