import React from "react";
import {
  ProjectCardContainer,
  ProjectCardImage,
  ProjectCardTitle,
  ProjectCardSubTitle,
  ProjectCardTagContainer,
  ProjectCardTag,
} from "./styles";

const defaultImg =
  "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

export const ProjectCard = ({
  imgURL = defaultImg,
  title,
  subtitle,
  tags = [],
  url,
}) => {
  return (
    <ProjectCardContainer to={url} target="_blank">
      <ProjectCardImage src={imgURL} />
      <ProjectCardTitle>{title}</ProjectCardTitle>
      <ProjectCardSubTitle>{subtitle}</ProjectCardSubTitle>
      <ProjectCardTagContainer>
        {tags.map((tag) => {
          return <ProjectCardTag>{tag}</ProjectCardTag>;
        })}
      </ProjectCardTagContainer>
    </ProjectCardContainer>
  );
};
