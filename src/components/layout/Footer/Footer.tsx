import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Container';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/careers', label: 'Careers' },
  ];

  const services = [
    { path: '/services', label: 'Plastic Molding' },
    { path: '/services', label: 'Injection Molding' },
    { path: '/services', label: 'Assembly Services' },
    { path: '/services', label: 'Quality Control' },
  ];

  const industries = [
    { path: '/industries', label: 'Electronics' },
    { path: '/industries', label: 'Automotive' },
    { path: '/industries', label: 'Consumer Goods' },
    { path: '/industries', label: 'Medical Devices' },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        {/* Top Section */}
        <div className={styles.footerTop}>
          {/* Company Info */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <img
                src="/src/assets/images/logo/SSMC-logo.png" // Add your logo in public/images/logo.png
                alt="SSMC Automation"
                className={styles.logoImage}
              />
            </div>
            <p className={styles.description}>
              Leading manufacturer of precision plastic components and electronic device casings.
              Delivering quality automation solutions since 2005.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.linkList}>
              {services.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Industries</h4>
            <ul className={styles.linkList}>
              {industries.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <strong>Address:</strong>
                <br />
                Plot No. 45, Industrial Area
                <br />
                Agra, Uttar Pradesh 282006
              </li>
              <li>
                <strong>Phone:</strong>
                <br />
                +91 562 123 4567
              </li>
              <li>
                <strong>Email:</strong>
                <br />
                info@ssmcautomation.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} bhumi labs private limited. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link to="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <span className={styles.separator}>|</span>
            <Link to="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
            <span className={styles.separator}>|</span>
            <Link to="/sitemap" className={styles.legalLink}>
              Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
