import React from "react";
import {
  TestimonialContainer,
  TitlesContainer,
  Title,
  SubTitle,
  TestimonialSlider,
} from "./styles";
import { TestimonialCard } from "../../components/TestimonialCard";
import { data } from "./data";

export const TestimonialSection = () => {
  return (
    <TestimonialContainer>
      <TitlesContainer>
        <Title>Testimonials</Title>
        <SubTitle>What's clients say about me</SubTitle>
      </TitlesContainer>
      <TestimonialSlider>
        {data.map(({ qualification, review, author }) => {
          return (
            <TestimonialCard
              author={author}
              review={review}
              qualification={qualification}
            />
          );
        })}
      </TestimonialSlider>
    </TestimonialContainer>
  );
};
