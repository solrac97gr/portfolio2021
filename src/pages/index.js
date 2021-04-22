import * as React from "react";
import { Default } from "../layout/Default";
import { HeroSection } from "../sections/Hero";
import { ServiceSection } from "../sections/Service";

const IndexPage = () => {
  return (
    <Default>
      <HeroSection />
      <main>
        <ServiceSection />
      </main>
    </Default>
  );
};

export default IndexPage;
