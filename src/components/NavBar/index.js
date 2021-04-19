import React from "react";
import LinkNavBar from "../LinkNavBar";
import { Link } from "react-router-dom";
import { Nav } from "./style";

const NavBar = ({ isShowMenu }) => {
  return (
    <Nav isShowMenu={isShowMenu}>
      <ul>
        <li>
          <LinkNavBar href="/dashboard">Página Inicial</LinkNavBar>
        </li>
        <li>
          <LinkNavBar href="/rebalance">Carteira Ideal</LinkNavBar>
        </li>
        <li>
          <LinkNavBar href="/accounting">Contabilidade</LinkNavBar>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
