import React from "react";
import styles from "./ContactInfo.module.css";

interface ContactInfoProps {
  showMap?: boolean;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ showMap = true }) => {
  const contactDetails = [
    {
      icon: "📍",
      title: "Visit Us",
      lines: [
        "Plot No. 45, Industrial Area",
        "Agra, Uttar Pradesh 282006",
        "India",
      ],
    },
    {
      icon: "📞",
      title: "Call Us",
      lines: ["+91 562 123 4567", "+91 562 123 4568"],
    },
    {
      icon: "✉️",
      title: "Email Us",
      lines: ["info@ssmcautomation.com", "sales@ssmcautomation.com"],
    },
    {
      icon: "🕐",
      title: "Business Hours",
      lines: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
      ],
    },
  ];

  return (
    <div className={styles.contactInfo}>
      <div className={styles.details}>
        {contactDetails.map((detail, index) => (
          <div key={index} className={styles.detailCard}>
            <div className={styles.icon}>{detail.icon}</div>
            <h3 className={styles.title}>{detail.title}</h3>
            <div className={styles.content}>
              {detail.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showMap && (
        <div className={styles.mapSection}>
          <h3 className={styles.mapTitle}>Find Us on Map</h3>
          <div className={styles.mapPlaceholder}>
            <p>Google Maps Embed</p>
            <small>27.1767° N, 78.0081° E</small>
          </div>
        </div>
      )}
    </div>
  );
};
