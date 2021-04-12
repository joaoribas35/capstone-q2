import styled from "styled-components";

export const TopBar = styled.div`
  background-color: #2c405a;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserContainer = styled.div`
  width: 250px;
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
