import React from "react";
import { ProjectCard } from "../../components/ProjectCard";
import {
  WorkSectionContainer,
  WorkSectionTitle,
  WorkSectionSubTitle,
  WorkSectionProjects,
} from "./styles";
import { projects } from "./data";

export const WorkSection = () => {
  return (
    <WorkSectionContainer id="works">
      <WorkSectionTitle>Latest Works</WorkSectionTitle>
      <WorkSectionSubTitle>
        Perfect Solutions for digital experience
      </WorkSectionSubTitle>
      <WorkSectionProjects>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              url={project.url}
              imgURL={project.imgURL}
              title={project.title}
              subtitle={project.subtitle}
              tags={project.tags}
            />
          );
        })}
      </WorkSectionProjects>
    </WorkSectionContainer>
  );
};
