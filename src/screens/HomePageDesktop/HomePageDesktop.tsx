import React from "react";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { FeaturedPropertiesSection } from "./sections/FeaturedPropertiesSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { RealEstateJourneySection } from "./sections/RealEstateJourneySection";

export const HomePageDesktop = (): JSX.Element => {
  return (
    <div className="bg-grey-08 flex flex-col items-center w-full">
      <div className="w-full max-w-[1920px]">
        <HeaderSection />
        <HeroSection />
        <div className="px-4 lg:px-[8%]">
          <FeaturedPropertiesSection />
          <ClientTestimonialsSection />
          <RealEstateJourneySection />
        </div>
        <FAQSection />
      </div>
    </div>
  );
};