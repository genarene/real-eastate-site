import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { GoThreeBars } from "react-icons/go";

const Nav = styled.nav`
  height: 60px;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  display: flex;
`;

const NavLink = css`
  color: black;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: cursive;
`;

const Logo = styled(Link)`
  ${NavLink}
  background-color:black;
  color: whitesmoke;
  font-weight: 500;
  font-family: cursive;
  font-style: italic;
`;
const MenuBars = styled(GoThreeBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 35%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: --48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  margin-right: 1em;
  background-color: rgb(27, 28, 27, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: whitesmoke !important;
  border-radius: 10px;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index} style={{ color: "black" }}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          {" "}
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
