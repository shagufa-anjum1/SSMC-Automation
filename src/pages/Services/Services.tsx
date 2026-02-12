import React from "react";
import { HeroIndustrial } from "@components/sections/Hero/HeroIndustrial";
import { Container } from "@components/layout/Container";
import { ProductCard } from "@components/domain/ProductCard";
import { ProcessTimeline } from "@components/sections/Process/ProcessTimeline";
import { CTABanner } from "@components/sections/CTA/CTABanner";
import { Button } from "@components/ui/Button";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";

const Services: React.FC = () => {
  const services = [
    {
      image: "",
      title: "Injection Molding",
      category: "Core Service",
      description:
        "High-precision plastic injection molding with advanced multi-cavity molds for mass production.",
      features: [
        "Multi-cavity tooling",
        "Automated production lines",
        "Micro to large-scale parts",
      ],
    },
    {
      image: "",
      title: "Custom Plastic Fabrication",
      category: "Manufacturing",
      description:
        "Tailored plastic component manufacturing for unique product requirements and specifications.",
      features: [
        "Custom design support",
        "Prototype development",
        "Low to high volume runs",
      ],
    },
    {
      image: "",
      title: "Assembly Services",
      category: "Value-Added",
      description:
        "Complete assembly solutions including ultrasonic welding, adhesive bonding, and final packaging.",
      features: [
        "Ultrasonic welding",
        "Insert molding",
        "Final assembly & packaging",
      ],
    },
    {
      image: "",
      title: "Quality Testing",
      category: "Quality Assurance",
      description:
        "Comprehensive quality control with dimensional inspection, material testing, and certification.",
      features: [
        "CMM inspection",
        "Material analysis",
        "ISO compliance testing",
      ],
    },
    {
      image: "",
      title: "Tool Design & Manufacturing",
      category: "Engineering",
      description:
        "In-house mold design and manufacturing capabilities for optimized production efficiency.",
      features: ["CAD/CAM design", "Rapid prototyping", "Tool maintenance"],
    },
    {
      image: "",
      title: "Product Development",
      category: "Consulting",
      description:
        "End-to-end product development support from concept to production launch.",
      features: [
        "Design consultation",
        "Material selection",
        "Production optimization",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Understand your requirements, specifications, and project goals through detailed consultation.",
    },
    {
      number: "02",
      title: "Design & Engineering",
      description:
        "Our engineers create optimized designs and develop manufacturing plans tailored to your needs.",
    },
    {
      number: "03",
      title: "Prototyping",
      description:
        "Rapid prototype development for testing, validation, and design refinement before production.",
    },
    {
      number: "04",
      title: "Production",
      description:
        "Full-scale manufacturing with automated systems ensuring consistent quality and timely delivery.",
    },
    {
      number: "05",
      title: "Quality Control",
      description:
        "Rigorous testing and inspection at every stage to ensure products meet specifications.",
    },
    {
      number: "06",
      title: "Delivery & Support",
      description:
        "On-time delivery with comprehensive after-sales support and technical assistance.",
    },
  ];

  return (
    <div>
      <HeroIndustrial
        subtitle="Our Services"
        title="Comprehensive Manufacturing Solutions"
        description="From design to delivery, we provide end-to-end plastic manufacturing services with precision, quality, and reliability."
      >
        <Link to="/contact">
          <Button variant="primary" size="large">
            Request Quote
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" size="large">
            Schedule Consultation
          </Button>
        </Link>
      </HeroIndustrial>

      <section className={`${styles.services} section`}>
        <Container>
          <div className={styles.header}>
            <h2>What We Offer</h2>
            <p className={styles.subtitle}>
              Comprehensive manufacturing capabilities backed by ISO
              certification and 15+ years of expertise.
            </p>
          </div>

          <div className={styles.grid}>
            {services.map((service, index) => (
              <ProductCard
                key={index}
                image={service.image}
                title={service.title}
                category={service.category}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className={`${styles.process} section bg-secondary`}>
        <Container>
          <div className={styles.header}>
            <h2>Our Process</h2>
            <p className={styles.subtitle}>
              A proven 6-step methodology ensuring quality, efficiency, and
              customer satisfaction.
            </p>
          </div>
          <ProcessTimeline steps={processSteps} />
        </Container>
      </section>

      <CTABanner />
    </div>
  );
};

export default Services;
