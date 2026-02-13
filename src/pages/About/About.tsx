import React from "react";
import { HeroMinimal } from "@components/sections/Hero/HeroMinimal";
import { AboutStory } from "./sections/AboutStory";
import { AboutValues } from "./sections/AboutValues";
import { AboutMilestones } from "./sections/AboutMilestones";
import { AboutLeadership } from "./sections/AboutLeadership";
import { CTABanner } from "@components/sections/CTA/CTABanner";
import image12 from "@/assets/images/backgrounds/image12.jpg";

const About: React.FC = () => {
  return (
    <div>
      <HeroMinimal
        title="About SSMC Automation"
        description="Building the future of precision manufacturing with innovation, quality, and sustainability at our core."
        backgroundImage={image12}
      />
      <AboutStory />
      <AboutValues />
      <AboutMilestones />
      <AboutLeadership />
      <CTABanner
        title="Join Our Journey"
        description="Be part of a team that's shaping the future of manufacturing excellence."
        primaryButtonText="View Careers"
        primaryButtonLink="/careers"
      />
    </div>
  );
};

export default About;
