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
} from "./styleSheet";
const Navbar = () => {
  return (
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
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
