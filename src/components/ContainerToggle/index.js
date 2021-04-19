import React from "react";
import ToggleMenu from "../ToggleMenu";
import { ContainerBtn } from "./style";

const ContainerToggle = ({ setIsShowMenu, isShowMenu }) => {
  return (
    <ContainerBtn>
      <div onClick={() => setIsShowMenu(!isShowMenu)}>
        <ToggleMenu />
      </div>
    </ContainerBtn>
  );
};

export default ContainerToggle;
