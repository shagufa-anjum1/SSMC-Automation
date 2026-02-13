import React from "react";
import { HeroMinimal } from "@components/sections/Hero/HeroMinimal";
import { Container } from "@components/layout/Container";
import { IndustryCard } from "@components/domain/IndustryCard";
import { CTABanner } from "@components/sections/CTA/CTABanner";
import styles from "./Industries.module.css";
import ServiceHeroImg2 from "@assets/images/Service/ServiceHeroImg2.jpg";

const Industries: React.FC = () => {
  const industries = [
    {
      icon: "📱",
      title: "Electronics & Consumer Devices",
      description:
        "Precision plastic housings and components for smartphones, tablets, laptops, wearables, and IoT devices. Supporting leading electronics brands worldwide.",
      solutions: [
        "Smartphone & tablet casings",
        "Laptop chassis components",
        "Wearable device housings",
        "Smart home device enclosures",
        "Audio equipment cases",
      ],
    },
    {
      icon: "🚗",
      title: "Automotive",
      description:
        "Durable automotive components meeting stringent industry standards. From interior trim to exterior panels, built for performance and longevity.",
      solutions: [
        "Dashboard & console components",
        "Interior trim parts",
        "Exterior body panels",
        "Lighting housings",
        "Under-hood components",
      ],
    },
    {
      icon: "🏥",
      title: "Medical Devices",
      description:
        "FDA-compliant medical device components with exceptional quality control. Cleanroom manufacturing for sterile applications.",
      solutions: [
        "Diagnostic equipment housings",
        "Surgical instrument components",
        "Medical device enclosures",
        "Laboratory equipment parts",
        "Patient monitoring devices",
      ],
    },
    {
      icon: "🏭",
      title: "Industrial Equipment",
      description:
        "Heavy-duty industrial enclosures and components designed for harsh manufacturing environments and continuous operation.",
      solutions: [
        "Control panel housings",
        "Machine guards & covers",
        "Industrial enclosures",
        "Safety equipment components",
        "Automation system parts",
      ],
    },
    {
      icon: "🏠",
      title: "Consumer Goods",
      description:
        "Attractive and functional plastic components for household appliances and consumer products. Focus on aesthetics and durability.",
      solutions: [
        "Home appliance housings",
        "Kitchen equipment parts",
        "Bathroom fixtures",
        "Consumer electronics",
        "Packaging solutions",
      ],
    },
    {
      icon: "⚡",
      title: "Energy & Power",
      description:
        "Robust components for renewable energy systems and electrical equipment. UV-resistant and weatherproof for outdoor applications.",
      solutions: [
        "Solar panel mounting frames",
        "Battery enclosures",
        "Electrical junction boxes",
        "Power distribution housings",
        "Energy meter cases",
      ],
    },
    {
      icon: "🔬",
      title: "Scientific & Laboratory",
      description:
        "Precision components for laboratory equipment and scientific instruments. Chemical-resistant materials for demanding applications.",
      solutions: [
        "Laboratory equipment housings",
        "Analytical instrument parts",
        "Sample containers",
        "Research equipment components",
        "Testing apparatus parts",
      ],
    },
    {
      icon: "📡",
      title: "Telecommunications",
      description:
        "Network equipment housings and telecom infrastructure components. Built for durability and environmental protection.",
      solutions: [
        "Network equipment enclosures",
        "Router & modem housings",
        "Outdoor telecom cabinets",
        "Fiber optic components",
        "Communication device parts",
      ],
    },
  ];

  return (
    <div>
      <HeroMinimal
        title="Industries We Serve"
        description="Delivering precision-engineered plastic components across diverse sectors with specialized solutions for each industry's unique requirements."
        backgroundImage={ServiceHeroImg2}
      />

      <section className={`${styles.industries} section`}>
        <Container>
          <div className={styles.grid}>
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                solutions={industry.solutions}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Don't See Your Industry?"
        description="We work with clients across many sectors. Contact us to discuss your specific manufacturing needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />
    </div>
  );
};

export default Industries;
