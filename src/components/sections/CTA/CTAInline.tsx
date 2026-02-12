import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@components/ui/Button";
import styles from "./CTAInline.module.css";

interface CTAInlineProps {
  text: string;
  buttonText?: string;
  buttonLink?: string;
}

export const CTAInline: React.FC<CTAInlineProps> = ({
  text,
  buttonText = "Learn More",
  buttonLink = "/contact",
}) => {
  return (
    <div className={styles.ctaInline}>
      <span className={styles.text}>{text}</span>
      <Link to={buttonLink}>
        <Button variant="secondary" size="small">
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};
