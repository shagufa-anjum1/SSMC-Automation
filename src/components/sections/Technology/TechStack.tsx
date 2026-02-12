import React from "react";
import styles from "./TechStack.module.css";

interface TechItem {
  name: string;
  logo?: string;
  category?: string;
}

interface TechStackProps {
  technologies: TechItem[];
}

export const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <div className={styles.techStack}>
      {technologies.map((tech, index) => (
        <div key={index} className={styles.techItem}>
          {tech.logo ? (
            <img src={tech.logo} alt={tech.name} className={styles.logo} />
          ) : (
            <div className={styles.placeholder}>{tech.name.charAt(0)}</div>
          )}
          <div className={styles.name}>{tech.name}</div>
          {tech.category && (
            <div className={styles.category}>{tech.category}</div>
          )}
        </div>
      ))}
    </div>
  );
};
