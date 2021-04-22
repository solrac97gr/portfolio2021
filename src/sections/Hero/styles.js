import styled from "styled-components";
import { device } from "../../styles/devices";

export const HeroContainer = styled.header`
  padding: 11% 6%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px;
  @media ${device.mobileL} {
    padding-top: 200px;
    flex-direction: column-reverse;
  }
`;
export const ContentColumn = styled.div`
  width: 50%;
  @media ${device.mobileL} {
    width: 100%;
  }
`;
export const Tag = styled.span`
  padding: 8px;
  background-color: #63f3aa;
  border-radius: 3px;
  @media ${device.mobileL} {
    font-size: 13px;
  }
`;
export const TitleContainer = styled.div`
  margin: 50px 0px;
  @media ${device.mobileL} {
    margin: 20px 0px;
  }
`;
export const Title = styled.h2`
  font-size: 45px;
  color: white;
  font-weight: 400;
  margin: 0px;
  @media ${device.mobileL} {
    font-size: 34px;
  }
`;
export const SubTitle = styled.h1`
  font-size: 21px;
  margin: 0px;
  color: #95989f;
  font-weight: 400;
  @media ${device.mobileL} {
    font-size: 13px;
  }
`;
export const HeroCTAContainer = styled.div`
  margin: 80px 0px;
  @media ${device.mobileL} {
    margin: 20px 0px;
  }
`;
export const HeroCTA = styled.a`
  font-size: 21px;
  color: #63f3aa;
`;
export const MetricSection = styled.div`
  display: flex;
  width: 100%;
  margin-top: 150px;
  @media ${device.mobileL} {
    margin-top: 20px
  }
`;
export const MetricContainer = styled.div`
  display: flex;
  margin-right: 55px;
  @media ${device.mobileL} {
    margin-right: 40px;
  }
`;
export const Metric = styled.span`
  font-size: 45px;
  color: white;
  @media ${device.mobileL} {
    font-size: 34px;
  }
`;
export const MetricInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
`;
export const MetricInfo = styled.span`
  font-size: 13px;
  color: #95989f;
  @media ${device.mobileL} {
    font-size: 10px;
  }
  
`;
export const PhotoColumn = styled.div`
  width: 50%;
  @media ${device.mobileL} {
    width: 100%;
  }
`;
export const PhotoContainer = styled.figure`
  background-color: #393640;
  border-radius: 50%;
  width: 650px;
  @media ${device.mobileL} {
    width: 330px;
    justify-content: center;
    margin: auto;
    margin-bottom: 30px;
  }
`;
export const Photo = styled.img`
  width: 100%;
`;

export const FirebaseContainer = styled.div`
  display: flex;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #393640;
  padding: 20px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  bottom: 55%;
  right: 1%;
  position: absolute;
  @media ${device.mobileL} {
    height: 40px;
    width: 40px;
    bottom: 60%;
    right: 1%;
  }
`;

export const ReactContainer = styled.div`
  display: flex;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: #393640;
  padding: 20px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  bottom: 5%;
  right: 4%;
  position: absolute;
  @media ${device.mobileL} {
    height: 70px;
    width: 70px;
    bottom: 33%;
    right: 5%;
  }
`;

export const NodeContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #393640;
  padding: 20px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  bottom: 10%;
  right: 35%;
  position: absolute;
  @media ${device.mobileL} {
    height: 50px;
    width: 50px;
    bottom: 37%;
    right: 70%;
  }
`;
