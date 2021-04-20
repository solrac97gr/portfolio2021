import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { GlobalStyle } from "../styles/globalStyles";

const DefaultStyled = styled.div`
  font-family: "Fira Code";
  background-color: #2d2e32;
`;

export const Default = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <DefaultStyled>
        <Navbar />
        {children}
      </DefaultStyled>
    </>
  );
};
