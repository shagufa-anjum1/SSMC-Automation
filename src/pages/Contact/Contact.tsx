import React from "react";
import { HeroMinimal } from "@components/sections/Hero/HeroMinimal";
import { Container } from "@components/layout/Container";
import { ContactForm } from "@components/sections/Contact/ContactForm";
import { ContactInfo } from "@components/sections/Contact/ContactInfo";
import styles from "./Contact.module.css";
import contactImg2 from "@assets/images/contact/contactImg2.jpg";

const Contact: React.FC = () => {
  return (
    <div>
      <HeroMinimal
        title="Get In Touch"
        description="Have a project in mind? Our team is ready to discuss your manufacturing needs and provide customized solutions."
        backgroundImage={contactImg2}
      />

      <section className={`${styles.contact} section`}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.formSection}>
              <h2 className={styles.title}>Send Us a Message</h2>
              <p className={styles.description}>
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
              <ContactForm />
            </div>

            <div className={styles.infoSection}>
              <ContactInfo showMap={false} />
            </div>
          </div>
        </Container>
      </section>

      <section className={`${styles.map} section bg-secondary`}>
        <Container>
          <ContactInfo showMap={true} />
        </Container>
      </section>
    </div>
  );
};

export default Contact;
