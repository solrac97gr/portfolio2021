import React, { useEffect } from "react";
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
  useEffect(() => {
    const btnContainer = document.getElementById("menu");

    const btns = btnContainer.getElementsByTagName("a");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  });
  return (
    <Nav id="navbar">
      <NavLogo>
        <NavLogoName>Carlos</NavLogoName>
        <NavLogoLastName>García</NavLogoLastName>
      </NavLogo>
      <NavItemContainer id="menu">
        <NavItem to="#service" id="serviceLink" className="active">
          <span>{"<"}</span>Service<span>{">"}</span>
        </NavItem>
        <NavItem to="#works" id="worksLink">
          <span>{"<"}</span>Works<span>{">"}</span>
        </NavItem>
        <NavItem to="#notes" id="notesLink">
          <span>{"<"}</span>Notes<span>{">"}</span>
        </NavItem>
        <NavItem to="#contacts" id="contactsLink">
          <span>{"<"}</span>Contacts<span>{">"}</span>
        </NavItem>
      </NavItemContainer>
      <NavLinks>
        <NavSocialLink>
          <FaTwitter /> Twitter
        </NavSocialLink>
        <NavSocialLink>
          <FaGithub /> Github
        </NavSocialLink>
        <NavContactLink>
          <GoMail size={25} color={"green"} />
        </NavContactLink>
      </NavLinks>
    </Nav>
  );
};
