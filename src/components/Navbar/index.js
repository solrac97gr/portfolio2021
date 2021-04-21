import React, { useEffect } from "react";
import { FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
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
        <NavSocialLink href="https://twitter.com/carlosgrowth" target="_blank">
          <FaTwitter /> Twitter
        </NavSocialLink>
        <NavSocialLink href="https://github.com/solrac97gr" target="_blank">
          <FaGithub /> Github
        </NavSocialLink>
        <NavContactLink href="https://api.whatsapp.com/send?phone=51939169253&text=Hola,%20me%20gustar%C3%ADa%20trabajar%20contigo" target="_blank">
          <FaWhatsapp size={20} color={"green"} />
        </NavContactLink>
      </NavLinks>
    </Nav>
  );
};
