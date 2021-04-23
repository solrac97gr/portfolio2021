import styled from "styled-components";

export const ProjectResumeCard = styled.div`
  background-color: #2d2e32;
  padding: 8%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  justify-content: space-between;
  &:hover {
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease-in-out;

    & a{
        text-decoration:underline;
        transition: text-decoration 0.2s ease-in-out;
    }
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-size: 28px;
  color: #63f3aa;
`;
export const Subtitle = styled.span`
  color: #95989f;
`;
export const Number = styled.a`
  margin-top: 20px;
  color: white;
`;
export const IconContainer = styled.div``;
