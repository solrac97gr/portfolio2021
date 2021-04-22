import React from "react";
import {
  ServiceContainer,
  ServiceCardsColumn,
  ServiceIntroduceColumn,
  Title,
  PrincipalQuote,
  SecondaryQuote,
  Introduction,
} from "./styles";
import { projectResumes } from "./data";
import { ProjectResumes } from "../../components/ProjectResumes";

export const ServiceSection = () => {
  return (
    <ServiceContainer id="service">
      <ServiceCardsColumn>
        {projectResumes.map((project) => {
          return (
            <ProjectResumes
              title={project.title}
              subtitle={project.subtitle}
              number={project.number}
              icon={project.icon}
            />
          );
        })}
      </ServiceCardsColumn>
      <ServiceIntroduceColumn>
        <Title>Introduce</Title>
        <PrincipalQuote>Hello! I'm Carlos García</PrincipalQuote>
        <SecondaryQuote>
          Every great design begin with an even better story
        </SecondaryQuote>
        <Introduction>
          Since beginning my journey as a freelance designer nearly 8 years a
          go, I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chopsone design problem at a
          time.
        </Introduction>
      </ServiceIntroduceColumn>
    </ServiceContainer>
  );
};
