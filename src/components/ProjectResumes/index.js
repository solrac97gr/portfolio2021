import React from "react";
import {ProjectResumeCard,InfoContainer,Title,Subtitle,Number,IconContainer} from "./styles";

export const ProjectResumes = ({ title, subtitle, number, icon }) => {
  return (
    <ProjectResumeCard>
      <InfoContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Number>{number} PROJECTS</Number>
      </InfoContainer>
      <IconContainer>
      {icon}
      </IconContainer>
    </ProjectResumeCard>
  );
};
