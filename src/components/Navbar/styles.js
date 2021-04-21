import styled from "styled-components";
import { device } from "../../styles/devices";
import { Link } from "gatsby";

export const Nav = styled.nav`
  background-color: #2d2e32;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 21px 20px;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: inherit;
  }
`;
export const NavItemContainer = styled.ul`
  list-style: none;
  display: flex;
  font-size: 16px;
  @media ${device.mobileL} {
    justify-content: center;
    padding: 0;
  }
`;
export const NavItem = styled(Link)`
  margin: 5px;
  text-decoration: none;
  color: inherit;
  &.active {
    color: #63f3aa;
  }
  &.active span {
    display: inline;
    color: #63f3aa;
  }
  & span {
    color: #2d2e32;
  }
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
export const NavLinks = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;
export const NavSocialLink = styled.a`
  margin: 5px;
  text-decoration: none;
  color: inherit;
`;
export const NavContactLink = styled(Link)`
  border-radius: 50%;
  margin: 5px;
  padding: 10px;
  background-color:#3D3C42;
  display:flex;
  text-decoration: none;
  color: inherit;
`;
