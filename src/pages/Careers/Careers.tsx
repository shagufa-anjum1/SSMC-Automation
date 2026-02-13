import React from "react";
import { Link } from "react-router-dom";
import { HeroIndustrial } from "@components/sections/Hero/HeroIndustrial";
import { Container } from "@components/layout/Container";
import { Card } from "@components/ui/Card";
import { Button } from "@components/ui/Button";
import { FeatureGrid } from "@components/sections/Features/FeatureGrid";
import styles from "./Careers.module.css";

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description:
        "Industry-leading compensation packages with performance-based bonuses and annual increments.",
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description:
        "Comprehensive medical coverage for you and your family including dental and vision care.",
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description:
        "Continuous training programs, certifications, and skill development opportunities.",
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description:
        "Flexible working hours, paid time off, and family-friendly policies.",
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description:
        "Clear career progression paths with opportunities to lead teams and projects.",
    },
    {
      icon: "🎉",
      title: "Team Culture",
      description:
        "Collaborative work environment with regular team events and celebrations.",
    },
  ];

  const openings = [
    {
      title: "Senior Mechanical Engineer",
      department: "Engineering",
      location: "Agra, Uttar Pradesh",
      type: "Full-time",
      experience: "5-8 years",
    },
    {
      title: "Production Manager",
      department: "Operations",
      location: "Agra, Uttar Pradesh",
      type: "Full-time",
      experience: "7-10 years",
    },
    {
      title: "Quality Control Specialist",
      department: "Quality Assurance",
      location: "Agra, Uttar Pradesh",
      type: "Full-time",
      experience: "3-5 years",
    },
    {
      title: "Injection Molding Technician",
      department: "Production",
      location: "Agra, Uttar Pradesh",
      type: "Full-time",
      experience: "2-4 years",
    },
    {
      title: "Sales Executive - B2B",
      department: "Sales",
      location: "Agra, Uttar Pradesh",
      type: "Full-time",
      experience: "3-6 years",
    },
    {
      title: "CAD Design Engineer",
      department: "Design",
      location: "Agra, Uttar Pradesh",
      type: "Full-time",
      experience: "2-5 years",
    },
  ];

  return (
    <div>
      <HeroIndustrial
        subtitle="Join Our Team"
        title="Build Your Career with SSMC Automation"
        description="Be part of a dynamic team that's shaping the future of precision manufacturing. We offer challenging projects, growth opportunities, and a collaborative culture."
        backgroundImage="/src/assets/images/contact/contactImg1.jpg"
      >
        <a href="#openings">
          <Button variant="primary" size="large">
            View Open Positions
          </Button>
        </a>
      </HeroIndustrial>

      <section className={`${styles.benefits} section`}>
        <Container>
          <div className={styles.header}>
            <h2>Why Work With Us?</h2>
            <p className={styles.subtitle}>
              We invest in our people and create an environment where talent
              thrives and innovation flourishes.
            </p>
          </div>

          <FeatureGrid features={benefits} columns={3} />
        </Container>
      </section>

      <section
        id="openings"
        className={`${styles.openings} section bg-secondary`}
      >
        <Container>
          <div className={styles.header}>
            <h2>Current Openings</h2>
            <p className={styles.subtitle}>
              Explore exciting opportunities across engineering, operations,
              quality, and sales departments.
            </p>
          </div>

          <div className={styles.jobList}>
            {openings.map((job, index) => (
              <Card key={index} variant="bordered" padding="large" hoverable>
                <div className={styles.jobCard}>
                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <div className={styles.jobMeta}>
                        <span className={styles.department}>
                          {job.department}
                        </span>
                        <span className={styles.separator}>•</span>
                        <span className={styles.location}>{job.location}</span>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button variant="primary" size="small">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                  <div className={styles.jobDetails}>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>Type:</span>
                      <span className={styles.detailValue}>{job.type}</span>
                    </div>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>Experience:</span>
                      <span className={styles.detailValue}>
                        {job.experience}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className={`${styles.cta} section`}>
        <Container maxWidth="narrow">
          <div className={styles.ctaContent}>
            <h2>Don't See the Right Role?</h2>
            <p>
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="large">
                Submit Your Resume
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Careers;
