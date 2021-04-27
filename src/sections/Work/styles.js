import styled from "styled-components";
import { device } from "../../styles/devices";

export const WorkSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6% 6%;
  margin: 0;
  text-align: center;
  justify-content: center;
  background-color: #393640;
`;
export const WorkSectionTitle = styled.h2`
  font-size: 45px;
  color: white;
  font-weight: 400;
  margin: 0px;
  @media ${device.mobileL} {
    font-size: 34px;
  }
`;
export const WorkSectionSubTitle = styled.span`
  font-size: 21px;
  margin: 0px;
  color: #95989f;
  font-weight: 400;
  @media ${device.mobileL} {
    font-size: 13px;
  }
`;
export const WorkSectionProjects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 34px;
  @media ${device.mobileL} {
    flex-direction: column;
    margin-top: 34px;
  }
`;
