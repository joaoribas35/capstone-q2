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
`;

export const LogoContainer = styled.div`
  margin-right: 100px;
  margin-left: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const UserContainer = styled.div`
  width: 300px;
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
