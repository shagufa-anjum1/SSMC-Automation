import React from "react";
import { HeroMinimal } from "@components/sections/Hero/HeroMinimal";
import { AboutStory } from "./sections/AboutStory";
import { AboutValues } from "./sections/AboutValues";
import { AboutMilestones } from "./sections/AboutMilestones";
import { AboutLeadership } from "./sections/AboutLeadership";
import { CTABanner } from "@components/sections/CTA/CTABanner";

const About: React.FC = () => {
  return (
    <div>
      <HeroMinimal
        title="About SSMC Automation"
        description="Building the future of precision manufacturing with innovation, quality, and sustainability at our core."
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
