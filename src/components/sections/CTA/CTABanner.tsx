import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@components/layout/Container';
import { Button } from '@components/ui/Button';
import styles from './CTABanner.module.css';

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title = 'Ready to Transform Your Manufacturing?',
  description = 'Get in touch with our team to discuss your automation needs and receive a customized solution.',
  primaryButtonText = 'Request Quote',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'View Services',
  secondaryButtonLink = '/services',
}) => {
  return (
    <section className={styles.ctaBanner}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttons}>
            <Link to={primaryButtonLink}>
              <Button variant="primary" size="large">
                {primaryButtonText}
              </Button>
            </Link>
            <Link to={secondaryButtonLink}>
              <Button variant="outline" size="large">
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
        </div>
      </Container>{' '}
      {/* Yahan directly Container close ho raha hai */}
    </section>
  );
};
