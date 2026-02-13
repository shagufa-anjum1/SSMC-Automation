import React from "react";
import { Container } from "@components/layout/Container";
import styles from "./AboutLeadership.module.css";
import teamLeaderImg1 from "@assets/images/team/teamLeaderImg1.jpg";
import teamLeaderImg3 from "@assets/images/team/teamLeaderImg3.jpg";
import teamLeaderImg5 from "@assets/images/team/teamLeaderImg5.jpg";
import teamLeaderImg6 from "@assets/images/team/teamLeaderImg6.jpg";

export const AboutLeadership: React.FC = () => {
  const leaders = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: teamLeaderImg1,
      bio: "25+ years of experience in manufacturing and automation. Visionary leader driving innovation.",
    },
    {
      name: "Priya Sharma",
      position: "Chief Operations Officer",
      image: teamLeaderImg6,
      bio: "Expert in lean manufacturing and process optimization. 18 years in operations management.",
    },
    {
      name: "Amit Patel",
      position: "Head of Engineering",
      image: teamLeaderImg3,
      bio: "Specialist in injection molding technology. Led 200+ successful automation projects.",
    },
    {
      name: "Neha Singh",
      position: "Quality Assurance Director",
      image: teamLeaderImg5,
      bio: "ISO certification expert ensuring highest quality standards across all products.",
    },
  ];

  return (
    <section className={`${styles.leadership} section bg-secondary`}>
      <Container>
        <div className={styles.header}>
          <h2>Leadership Team</h2>
          <p className={styles.subtitle}>
            Meet the experienced professionals guiding SSMC Automation to new
            heights of excellence.
          </p>
        </div>

        <div className={styles.grid}>
          {leaders.map((leader, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.placeholder}>
                    {leader.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <h3 className={styles.name}>{leader.name}</h3>
              <p className={styles.position}>{leader.position}</p>
              <p className={styles.bio}>{leader.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
