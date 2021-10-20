import * as React from "react";
import { Default } from "../layout/Default";
import { HeroSection } from "../sections/Hero";
import { ServiceSection } from "../sections/Service";
import { WorkSection } from "../sections/Work";
import { TestimonialSection } from "../sections/Testimonial";
import { ContactSection } from "../sections/Contact";

const IndexPage = () => {
  return (
    <Default>
      <HeroSection />
      <main>
        <ServiceSection />
        <WorkSection />
        <TestimonialSection />
      </main>
      <footer>
        <ContactSection />
      </footer>
    </Default>
  );
};

export default IndexPage;
