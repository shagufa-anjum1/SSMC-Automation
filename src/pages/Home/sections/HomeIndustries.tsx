import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@components/layout/Container';
import { IndustryCard } from '@components/domain/IndustryCard';
import { Button } from '@components/ui/Button';
import styles from './HomeIndustries.module.css';

export const HomeIndustries: React.FC = () => {
  const industries = [
    {
      icon: '📱',
      title: 'Electronics & Consumer Devices',
      description:
        'Precision housings for smartphones, tablets, laptops, wearables, and IoT devices.',
      solutions: ['Smartphone casings', 'Laptop components', 'Wearable device housings'],
    },
    {
      icon: '🚗',
      title: 'Automotive Components',
      description: 'Durable automotive parts meeting stringent industry standards.',
      solutions: ['Dashboard components', 'Interior trim parts', 'Lighting housings'],
    },
    {
      icon: '🏥',
      title: 'Medical Devices',
      description: 'FDA-compliant medical device components with cleanroom manufacturing.',
      solutions: ['Diagnostic equipment', 'Surgical instruments', 'Medical enclosures'],
    },
    {
      icon: '🏠',
      title: 'Home Appliances',
      description: 'Quality components for air conditioners, washing machines, and coolers.',
      solutions: ['AC components', 'Washing machine parts', 'Cooler assemblies'],
    },
  ];

  const productImages = [
    {
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&auto=format&fit=crop',
      title: 'Precision Manufacturing',
      category: 'Electronics',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop',
      title: 'Injection Molding',
      category: 'Process',
    },
    {
      url: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format&fit=crop',
      title: 'Quality Control',
      category: 'Manufacturing',
    },
    {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop',
      title: 'Advanced Technology',
      category: 'Automation',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&auto=format&fit=crop',
      title: 'Production Line',
      category: 'Assembly',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&auto=format&fit=crop',
      title: 'Electronic Components',
      category: 'Products',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&auto=format&fit=crop',
      title: 'Testing Equipment',
      category: 'Quality',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&auto=format&fit=crop',
      title: 'Plastic Components',
      category: 'Manufacturing',
    },
    {
      url: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format&fit=crop',
      title: 'Industrial Facility',
      category: 'Infrastructure',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop',
      title: 'Modern Equipment',
      category: 'Technology',
    },
    {
      url: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format&fit=crop',
      title: 'Assembly Line',
      category: 'Production',
    },
    {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop',
      title: 'Smart Manufacturing',
      category: 'Innovation',
    },
  ];

  return (
    <section className={styles.industries}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Products & Solutions</h2>
          <p className={styles.subtitle}>
            We have emerged as a one-stop-solution for brands, building enduring relationships
            across business verticals
          </p>
        </div>

        {/* Product Image Gallery */}
        <div className={styles.imageGallery}>
          {productImages.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <img src={image.url} alt={image.title} className={styles.galleryImage} />
              <div className={styles.imageOverlay}>
                <span className={styles.imageCategory}>{image.category}</span>
                <h3 className={styles.imageTitle}>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

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

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/industries">
            <Button
              size="large"
              style={{
                background: '#1570EF',
                color: 'white',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                border: 'none',
              }}
            >
              View All Products
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
