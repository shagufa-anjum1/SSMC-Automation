import React from "react";
import styles from "./ProjectShowcase.module.css";

interface ProjectShowcaseProps {
  image?: string;
  client: string;
  title: string;
  description: string;
  industry: string;
  results?: string[];
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  image,
  client,
  title,
  description,
  industry,
  results,
}) => {
  return (
    <div className={styles.showcase}>
      <div className={styles.imageSection}>
        {image ? (
          <img src={image} alt={title} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>Project Image</div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.client}>{client}</span>
          <span className={styles.industry}>{industry}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {results && results.length > 0 && (
          <div className={styles.results}>
            <h4 className={styles.resultsTitle}>Results:</h4>
            <ul className={styles.resultsList}>
              {results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
