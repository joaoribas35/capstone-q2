import styled from "styled-components";

export const Nav = styled.nav`
  width: 12rem;
  transition: 0.6s;

  height: 100vh;
  position: fixed;
  left: 56px;
  top: 0px;
  background: #161b2e;
  padding-top: 2rem;

  transform: ${({ isShowMenu }) =>
    !isShowMenu ? "translateX(-120%)" : "initial"};

  ul {
    li {
      height: 2.5rem;
      list-style: none;
      transition: 0.2s;

      &:hover {
        background-color: #1d2235;
      }
    }
  }
`;
