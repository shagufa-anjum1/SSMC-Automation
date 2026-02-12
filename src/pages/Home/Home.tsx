import React from 'react';
import { HomeHero } from './sections/HomeHero';
import { HomeCapabilities } from './sections/HomeCapabilities';
import { HomeIndustries } from './sections/HomeIndustries';
import { HomeTrustedBy } from './sections/HomeTrustedBy';
import { CTABanner } from '@components/sections/CTA/CTABanner';

const Home: React.FC = () => {
  return (
    <div>
      <HomeHero />
      <HomeTrustedBy />
      <HomeCapabilities />
      <HomeIndustries />
      <CTABanner
        title="Ready to Transform Your Manufacturing?"
        description="Partner with SSMC Automation for precision-engineered solutions. Let's discuss your project requirements."
        primaryButtonText="Get Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="View Products"
        secondaryButtonLink="/services"
      />
    </div>
  );
};

export default Home;
