import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@components/ui/Button";
import styles from "./NotFound.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <div className={styles.error}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Link to="/">
            <Button variant="primary" size="large">
              Go to Homepage
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="large">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
