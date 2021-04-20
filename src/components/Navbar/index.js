import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import {
  Nav,
  NavItemContainer,
  NavItem,
  NavLogoName,
  NavLogoLastName,
  NavLogo,
  NavSocialLink,
  NavContactLink,
  NavLinks,
} from "./styles";

export const Navbar = () => {
  return (
    <Nav>
      <NavLogo>
        <NavLogoName>Carlos</NavLogoName>
        <NavLogoLastName>García</NavLogoLastName>
      </NavLogo>
      <NavItemContainer>
        <NavItem>Service</NavItem>
        <NavItem>Works</NavItem>
        <NavItem>Notes</NavItem>
        <NavItem>Contacts</NavItem>
      </NavItemContainer>
      <NavLinks>
        <NavSocialLink>
          <FaTwitter /> Twitter
        </NavSocialLink>
        <NavSocialLink>
          <FaGithub /> Github
        </NavSocialLink>
        <NavContactLink>
          <GoMail size={25} color={'green'}/>
        </NavContactLink>
      </NavLinks>
    </Nav>
  );
};
