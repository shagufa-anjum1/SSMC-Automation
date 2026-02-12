import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Container';
import { useScrollPosition } from '@hooks/useScrollPosition';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { y } = useScrollPosition();

  useEffect(() => {
    setIsScrolled(y > 50);
  }, [y]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/sustainability', label: 'Sustainability' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container>
        <div className={styles.headerContent}>
          {/* Logo with Image */}
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            <img
              src="/src/assets/images/logo/logo.jpeg"
              alt="SSMC Automation"
              className={styles.logoImage}
            />
         
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <Link to="/contact" className={styles.ctaButton}>
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.mobileNavLink} onClick={closeMobileMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact" className={styles.mobileCtaButton} onClick={closeMobileMenu}>
              Get Quote
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
};
