import React from "react";
import LinkNavBar from "../LinkNavBar";
import { Nav } from "./style";

const NavBar = ({ isShowMenu }) => {
  return (
    <Nav isShowMenu={isShowMenu}>
      <ul>
        <li>
          <LinkNavBar href="">Página Inicial</LinkNavBar>
        </li>
        <li>
          <LinkNavBar href="">Painel</LinkNavBar>
        </li>
        <li>
          <LinkNavBar href="">Carteira</LinkNavBar>
        </li>
        <li>
          <LinkNavBar href="">Contabilidade</LinkNavBar>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
