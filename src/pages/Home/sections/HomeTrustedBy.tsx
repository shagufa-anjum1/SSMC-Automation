import React from 'react';
import { Container } from '@components/layout/Container';
import styles from './HomeTrustedBy.module.css';

export const HomeTrustedBy: React.FC = () => {
  const highlights = [
    {
      icon: '🏭',
      title: 'Our Founder',
      description: 'Founded by industry veteran with 20+ years of manufacturing expertise',
      link: '/about',
    },
    {
      icon: '🚀',
      title: 'Our Journey',
      description: 'Started in 2005, grown into a diversified precision manufacturing company',
      link: '/about',
    },
    {
      icon: '📍',
      title: 'Our Footprint',
      description: 'State-of-the-art manufacturing facility in Agra, Uttar Pradesh',
      link: '/about',
    },
    {
      icon: '🤝',
      title: 'Our Clients',
      description: 'Serving 100+ Indian and global brands across multiple industries',
      link: '/about',
    },
  ];

  const showcaseImages = [
    {
      url: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format&fit=crop',
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art production facility',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&auto=format&fit=crop',
      title: 'Precision Engineering',
      description: 'High-precision molding technology',
    },
    {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop',
      title: 'Quality Assurance',
      description: 'Rigorous testing and inspection',
    },
  ];

  return (
    <>
      <section className={styles.intro}>
        <Container>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2 className={styles.introTitle}>SSMC Automation Limited</h2>
              <p className={styles.introDescription}>
                SSMC Automation is a leading, diversified Electronic Manufacturing Services provider
                for Indian and global brands. We specialize in precision plastic injection molding,
                electronic device casings, and complete assembly services.
              </p>
            </div>
            <div className={styles.introImage}>
              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format&fit=crop"
                alt="Manufacturing Excellence"
                style={{
                  width: '100%',
                  borderRadius: '15px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Three Image Showcase */}
      <section className={styles.imageShowcase}>
        <Container>
          <div className={styles.showcaseGrid}>
            {showcaseImages.map((image, index) => (
              <div key={index} className={styles.showcaseCard}>
                <div className={styles.showcaseImageWrapper}>
                  <img src={image.url} alt={image.title} className={styles.showcaseImage} />
                  <div className={styles.showcaseOverlay}>
                    <h3 className={styles.showcaseTitle}>{image.title}</h3>
                    <p className={styles.showcaseDesc}>{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.highlights}>
        <Container>
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <div key={index} className={styles.highlightCard}>
                <div className={styles.highlightIcon}>{item.icon}</div>
                <h3 className={styles.highlightTitle}>{item.title}</h3>
                <p className={styles.highlightDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.stats}>
        <Container>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Molding Machines</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>90T-2100T</div>
              <div className={styles.statLabel}>Tonnage Capacity</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Global Clients</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>20+ Years</div>
              <div className={styles.statLabel}>Experience</div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
