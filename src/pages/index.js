import * as React from "react";
import { Default } from "../layout/Default";
import { HeroSection } from "../sections/Hero";
import { ServiceSection } from "../sections/Service";
import { WorkSection } from "../sections/Work";

const IndexPage = () => {
  return (
    <Default>
      <HeroSection />
      <main>
        <ServiceSection />
        <WorkSection />
      </main>
    </Default>
  );
};

export default IndexPage;
