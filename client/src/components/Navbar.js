import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
  NavBtn,
  NavBtnLink,
} from "./styleSheet";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Re-Bank</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>

            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
