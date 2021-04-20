import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #2d2e32;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 21px 20px;
  align-items: center;
`;
export const NavItemContainer = styled.ul`
  list-style: none;
  display: flex;
  font-size: 16px;
`;
export const NavItem = styled.li`
  margin: 5px;
`;
export const NavLogo = styled.div`
  font-size: 21px;
`;
export const NavLogoName = styled.span`
  font-weight: 600;
`;
export const NavLogoLastName = styled.span`
  margin-left: 3px;
  font-weight: 500;
  color: #95989f;
`;
export const NavLinks = styled.div``;
export const NavSocialLink = styled.a`
  margin: 5px;
`;
export const NavContactLink = styled.a`
    border-radius:50%;
    border:1px solid green;
    margin:5px;
    padding:5px;
`;
