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
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Re-Bank</NavLogo>

          <MobileIcon>
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
              <NavBtnLink to="/sigin">Sign In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
