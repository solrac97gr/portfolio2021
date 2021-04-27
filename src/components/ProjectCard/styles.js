import styled from "styled-components";
import { Link } from "gatsby";
import { device } from "../../styles/devices";

export const ProjectCardContainer = styled(Link)`
  background-color: #2d2e32;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 0px 10px;
  justify-content: space-between;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease-in-out;
  }
  text-decoration:none;
  @media ${device.mobileL} {
    margin:10px 10px;
  }
`;
export const ProjectCardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;
export const ProjectCardTitle = styled.span`
  margin-top: 13px;
  color: white;
  font-size: 21px;
`;
export const ProjectCardSubTitle = styled.span`
  font-size: 16px;
  margin: 0px;
  color: #95989f;
  font-weight: 400;
`;

export const ProjectCardTagContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;
export const ProjectCardTag = styled.span`
  padding: 3px;
  background-color: #63f3aa;
  border-radius: 3px;
  margin: 0px 5px;
  color:black;
  @media ${device.mobileL} {
    font-size:11px;
  }
`;
