import styled from "styled-components";

export const TopBar = styled.div`
  background-color: #2c405a;
  width: 100%;
  height: 50px;
  display: flex;
  margin-bottom: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Conteiner = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const LinkConteiner = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  & a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.35s ease;
    padding: 0.5rem 1rem;
    position: relative;
    min-width: fit-content;

    &::before,
    &::after {
      content: "";
      height: 14px;
      width: 14px;
      position: absolute;
      transition: all 0.35s ease;
      opacity: 0;
    }

    &::before {
      content: "";
      right: 0;
      top: 0;
      border-top: 3px solid #fff;
      border-right: 3px solid #fff;
      transform: translate(-100%, 50%);
    }

    &::after {
      content: "";
      left: 0;
      bottom: 0;
      border-bottom: 3px solid #fff;
      border-left: 3px solid #fff;
      transform: translate(100%, -50%);
    }

    &:hover:before,
    &:hover:after {
      transform: translate(0, 0);
      opacity: 1;
    }

    &:hover {
      color: #68d098;
    }
  }
  @media (max-width: 535px) {
    display: none;
  }
`;
export const MenuContainer = styled.div`
  &a {
    color: #fff;
  }
  @media (min-width: 536px) {
    display: none;
  }

  li {
    display: inline-block;
    list-style: outside none none;
    margin: 0.5em 1em;
    padding: 0;
  }
`;

export const LogoContainer = styled.div`
  margin-right: 100px;
  margin-left: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const UserContainer = styled.div`
  border-left: 1px solid gray;

  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  margin: 20px;
  border-radius: 10%;
`;

export const Menu = styled.ul``;

export const MenuIten = styled.li``;

export const P = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;
