import React from "react";
import {
  TestimonialCardContainer,
  TestimonialCardReview,
  TestimonialStarContainer,
  TestimonialQualification,
  TestimonialCardContent,
} from "./styles";
import { BsStarFill } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";

const color = "#63f3aa";

export const TestimonialCard = ({ qualification, review, author }) => {
  return (
    <TestimonialCardContainer>
      <TestimonialCardContent>
        <TestimonialStarContainer>
          <BsStarFill color={color} />
          <BsStarFill color={color} />
          <BsStarFill color={color} />
          <BsStarFill color={color} />
          <BsStarFill color={color} />
          <TestimonialQualification>
            {qualification} Rating
          </TestimonialQualification>
        </TestimonialStarContainer>
        <TestimonialCardReview>{review}</TestimonialCardReview>
      </TestimonialCardContent>
      <FaQuoteRight size={60} color={color}/>
    </TestimonialCardContainer>
  );
};
