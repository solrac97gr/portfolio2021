import React from "react";
import { SiFirebase,SiReact,SiNodeDotJs } from "react-icons/si";
import {
  HeroContainer,
  ContentColumn,
  Tag,
  TitleContainer,
  Title,
  SubTitle,
  HeroCTAContainer,
  HeroCTA,
  MetricSection,
  MetricContainer,
  Metric,
  MetricInfoContainer,
  MetricInfo,
  PhotoColumn,
  PhotoContainer,
  Photo,
  FirebaseContainer,
  ReactContainer,
  NodeContainer,
} from "./styles";

import imgSrc from "../../images/profile.png";

export const HeroSection = () => {
  return (
    <HeroContainer>
      <ContentColumn>
        <Tag>FullStack Developer</Tag>
        <TitleContainer>
          <Title>Talk is cheap.</Title>
          <Title>Show me the code</Title>
        </TitleContainer>
        <SubTitle>
          I design and code beautifully simple things, and I love what I do
        </SubTitle>
        <HeroCTAContainer>
          <HeroCTA href="https://api.whatsapp.com/send?phone=51939169253&text=Hola,%20me%20gustar%C3%ADa%20trabajar%20contigo">
            LET'S CHAT!
          </HeroCTA>
        </HeroCTAContainer>
        <MetricSection>
          <MetricContainer>
            <Metric>4</Metric>
            <MetricInfoContainer>
              <MetricInfo>YEARS</MetricInfo>
              <MetricInfo>EXPERIENCE</MetricInfo>
            </MetricInfoContainer>
          </MetricContainer>
          <MetricContainer>
            <Metric>13</Metric>
            <MetricInfoContainer>
              <MetricInfo>PROJECTS COMPLETED</MetricInfo>
              <MetricInfo>ON 4 COUNTRIES</MetricInfo>
            </MetricInfoContainer>
          </MetricContainer>
        </MetricSection>
      </ContentColumn>
      <PhotoColumn>
        <PhotoContainer>
          <Photo src={imgSrc} />
        </PhotoContainer>
      </PhotoColumn>
      <FirebaseContainer>
        <SiFirebase size={50} color={"yellow"} />
      </FirebaseContainer>
      <ReactContainer>
        <SiReact size={100} color={"#61DBFB"} />
      </ReactContainer>
      <NodeContainer>
        <SiNodeDotJs size={70} color={"#68A063"} />
      </NodeContainer>
    </HeroContainer>
  );
};
