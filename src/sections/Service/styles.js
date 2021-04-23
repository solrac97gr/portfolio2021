import styled from "styled-components";
import { device } from "../../styles/devices";

export const ServiceContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 10% 6%;
  margin: 0;
  background-color: #393640;
  justify-content: space-between;
  @media ${device.mobileL} {
    flex-direction: column-reverse;
  }
`;
export const ServiceCardsColumn = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.mobileL} {
    width: 100%;
  }
`;
export const ServiceIntroduceColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 0% 11%;
  margin: auto;
  @media ${device.mobileL} {
    width: 100%;
    padding: 0% 3%;
  }
`;
export const Title = styled.h2`
  color: #95989f;
  font-weight: 400;
  font-size: 16px;
`;
export const PrincipalQuote = styled.span`
  color: white;
  font-size: 45px;
  margin: 34px 0px;
  @media ${device.mobileL} {
    font-size: 34px;
  }
`;
export const SecondaryQuote = styled.span`
  color: white;
  font-size: 21px;
  letter-spacing: 3px;
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
export const Introduction = styled.p`
  color: #95989f;
`;
