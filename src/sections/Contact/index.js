import React from "react";
import {
  Container,
  CallToAction,
  ContactInfo,
  Title,
  SubTitle,
  ToWhatsapp,
  Header,
  Address,
  Email,
  Menu,
  MenuItem,
} from "./styles";

export const ContactSection = () => {
  return (
    <Container>
      <CallToAction>
        <Title>Let's make something amazing together</Title>
        <SubTitle>
          Start by
          <ToWhatsapp href="https://api.whatsapp.com/send?phone=51939169253&text=Hola,%20me%20gustar%C3%ADa%20trabajar%20contigo">
            saying hi!
          </ToWhatsapp>
        </SubTitle>
      </CallToAction>
      <ContactInfo>
        <Header>Information</Header>
        <Address>116 Fairground Rd, FL 3290, USA</Address>
        <Email>cgarciarosales97@gmail.com</Email>
        <Menu>
          <MenuItem to="#service">
            <span>{"<"}</span>Services<span>{">"}</span>
          </MenuItem>
          <MenuItem to="#works">
            <span>{"<"}</span>Works<span>{">"}</span>
          </MenuItem>
          <MenuItem to="#notes">
            <span>{"<"}</span>Notes<span>{">"}</span>
          </MenuItem>
          <MenuItem to="#contacts">
            <span>{"<"}</span>Contact<span>{">"}</span>
          </MenuItem>
        </Menu>
      </ContactInfo>
    </Container>
  );
};
